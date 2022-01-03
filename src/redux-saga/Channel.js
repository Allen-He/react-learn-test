/** 订阅频道 */
export default class Channel {
  
  listeners = {}; //用于缓存正在被监听到的action及其处理函数，格式为：{xxx: [..., ...], xxx: [..., ...]}

  /**
   * 用于订阅一个监听器
   * @param {*} actionType 需要监听的action类型
   * @param {*} func 监听的处理函数
   */
  take(actionType, func) {
    if(this.listeners[actionType]) {
      this.listeners[actionType].push(func);
    }else {
      this.listeners[actionType] = [func];
    }
  }

  /**
   * 用于发布对应监听器的处理行为
   * @param {*} actionType action类型
   * @param  {...any} args 额外的参数（可传入原本的action对象）
   */
  put(actionType, ...args) {
    const listeners = this.listeners[actionType];
    if(listeners) { //有则处理，没有则直接返回
      delete this.listeners[actionType]; //移除对应的监听器及其处理函数
      listeners.forEach(func => { //运行对应的处理函数
        func(...args);
      });
    }
  }
}
