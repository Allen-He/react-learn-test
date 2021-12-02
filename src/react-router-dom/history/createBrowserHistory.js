import BlockManager from "./BlockManager";
import ListenerManager from "./ListenerManager";

export default function createBrowserHistory(options = {}) {
  const {
    basename = '',
    forceRefresh = false,
    keyLength = 6,
    getUserConfirmation = (message, callback) => callback(window.confirm(message)), 
  } = options;
  
  function go(n) {
    window.history.go(n);
  }
  function goBack() {
    window.history.back();
  }
  function goFoward() {
    window.history.forward();
  }

  function push(path, state) {
    changePage(path, state, true);
  }
  function replace(path, state) {
    changePage(path, state, false);
  }

  /** 抽离push和replace两个方法的重复代码 */
  function changePage(path, state, isPush = true) {
    const pathInfo = handlePathAndState(path, state, basename);
    // ★暂存本次的stateKey值，后续需要给由pathInfo生成的新的location对象设置key属性，且与使用history api进行跳转时为state数据设置的key属性值保持同步
    const stateKey = getRandomStr(keyLength);

    // const newLocation = createLocation(basename); // 还未跳转，则此时拿不到新的location，故采用下面的方法生成新的location对象
    const newLocation = createLocationFromPathInfo(pathInfo, basename, stateKey);
    const newAction = isPush ? 'PUSH' : 'REPLACE';
    // 触发阻塞
    blockManager.triggerBlock(newLocation, newAction, () => {
      // 正常跳转
      if(isPush) {
        window.history.pushState({
          key: stateKey,
          state: pathInfo.state
        }, null, pathInfo.path);
      }else {
        window.history.replaceState({
          key: stateKey,
          state: pathInfo.state
        }, null, pathInfo.path);
      }
      // 触发监听器（必须在“更新history对象”之前触发，如此才能在监听器中获取旧的location和action）
      listenerManager.triggerListener(newLocation, newAction);
      // 更新history对象
      history.action = newAction;
      history.length = window.history.length;
      history.location = newLocation;
      // 判断是否强制刷新
      if(forceRefresh) {
        window.location.href = pathInfo.path;
      }
    });
  }

  // 新建一个listenerManager对象（用于后续添加或触发监听器）
  const listenerManager = new ListenerManager();

  /** 函数，添加一个监听器，并且返回一个可用于取消监听的函数 */
  function listen(listener) {
    return listenerManager.addListener(listener);
  }

  function bindRelativeEvent() {
    // 监听popstate事件（POP类型的action发生时，用以触发监听器）
    window.addEventListener('popstate', () => {
      const newLocation = createLocation(basename);
      const newAction = 'POP';

      // 触发阻塞
      blockManager.triggerBlock(newLocation, newAction, () => {
        // 触发监听器（必须在“更新history对象”之前触发，如此才能在监听器中获取旧的location和action）
        listenerManager.triggerListener(newLocation, newAction);
        // 更新history对象
        history.action = newAction;
        history.length = window.history.length;
        history.location = newLocation;
      });
    });
  }
  bindRelativeEvent();

  // 新建一个blockManager对象（用于后续添加或触发阻塞）
  const blockManager = new BlockManager(getUserConfirmation);

  /** 函数，添加阻塞，并且返回一个可用于取消阻塞的函数 */
  function block(prompt) {
    return blockManager.block(prompt);
  }

  function createHref(location) {
    return basename + location.pathname + location.search + location.hash;
  }

  const history = {
    action: 'POP',
    length: window.history.length,
    go,
    goBack,
    goFoward,
    push,
    replace,
    listen,
    block,
    createHref,
    location: createLocation(basename)
  }

  return history;
}

/** 生成一个指定长度的随机字符串（支持：1~11位） */
function getRandomStr(len) {
  return Math.random().toString(36).substr(2, len);
}

/** 处理path和state，返回一个固定格式的对象pathInfo，即：{path: 'xxx', state: ...} */
function handlePathAndState(path, state, basename) {
  let resPath;
  if(typeof path === 'string') {
    resPath = basename + path;
    return {
      path: resPath,
      state,
    }
  }else if(typeof path === 'object') {
    let { pathname = '', search = '', hash = '' } = path;
    resPath = basename + pathname;
    if(search.charAt(0) !== '?') {
      search = '?' + search;
    }
    if(hash.charAt(0) !== '#') {
      hash = '#' + hash;
    }
    resPath += search;
    resPath += hash;
    return {
      path: resPath,
      state: path.state,
    }
  }else {
    throw new TypeError("path must be string or object");
  }
}


/** 创建一个location对象（根据：basename & window.history & window.location） */
function createLocation(basename) {
  let { hash, pathname, search } = window.location;
  // 处理pathname（过滤掉basename）
  const reg = new RegExp(`^${basename}`);
  pathname = pathname.replace(reg, '');
  // 定义location
  const location = {
    hash,
    pathname,
    search,
  }
  // 处理state
  let state;
  const historyState = window.history.state;
  if(historyState === null) {
    state = undefined;
  }else if(typeof historyState !== 'object') {
    state = historyState;
  }else {
    if(historyState.key !== undefined) {
      location.key = historyState.key;
      state = historyState.state;
    }else {
      state = historyState;
    }
  }
  location.state = state;
  return location;
}

/** 创建一个location对象-用于push&replace方法中（根据：basename & pathInfo - {path:'xxx', state: ...} & stateKey） */
function createLocationFromPathInfo(pathInfo, basename, stateKey) {
  const { path, state } = pathInfo;
  // 获取pathname（过滤掉basename）
  let pathname = path.replace(/[#?].*$/, "");
  let reg = new RegExp(`^${basename}`);
  pathname = pathname.replace(reg, "");
  // 获取search
  var questionIndex = path.indexOf("?");
  var sharpIndex = path.indexOf("#");
  let search;
  if(questionIndex === -1 || questionIndex > sharpIndex) {
    search = "";
  }else {
    search = path.substring(questionIndex, sharpIndex);
  }
  // 获取hash
  let hash;
  if(sharpIndex === -1) {
    hash = "";
  }else {
    hash = pathInfo.path.substring(sharpIndex);
  }
  return {
    pathname,
    search,
    hash,
    state,
    key: stateKey,
  }
}



// 测试代码
// window.myHistory = createBrowserHistory({
//   basename: '/news'
// });
// window.unListen = window.myHistory.listen((location, action) => {
//   console.log('old: ', window.myHistory.location, window.myHistory.action);
//   console.log('new: ', location, action);
// })
// console.log(window.myHistory);
