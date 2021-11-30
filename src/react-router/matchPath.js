import { pathToRegexp } from 'path-to-regexp'

/**
 * 该方法用于返回一个match对象（和react-router-dom中的一致）
 * @param {string} path 路径规则
 * @param {string} url 当前的URL地址
 * @param {object} options 配置对象，包含属性 sensitive | strict | exact （Route组件可配置的属性，需要在函数内部转化为path-to-regexp所支持的配置属性）
 * @returns 一个match对象
 */
export default function matchPath(path, pathname, options) {
  const keys = []; 
  const regexp = pathToRegexp(path, keys, getOptions(options));
  const res = regexp.exec(pathname);
  if(!res) { // 匹配失败 res的值为null
    return null;
  }
  // 匹配成功 res的值为类数组
  const vals = Array.from(res).slice(1);
  const params = getParams(keys, vals);
  return {
    isExact: pathname === res[0],
    params,
    path,
    url: res[0]
  }
}

/**
 * 将传入的react-router配置，转换为path-to-regexp的配置
 * @param {*} options 只包含属性 sensitive | strict | exact
 * @returns 
 */
function getOptions(options = {}) {
  const defaultOptions = {
    sensitive: false, // 大小写不敏感
    strict: false, // 不严格匹配最后一个分隔符，若path规则中不包含的话
    exact: false, // 路径模糊匹配
  };
  const resOpts = {...defaultOptions, ...options};
  return {
    sensitive: resOpts.sensitive,
    strict: resOpts.strict,
    end: resOpts.exact,
  };
}

/**
 * 根据匹配的分组结果，得到一个params对象
 * @param {array} keys 数组（每一项是一个对象，包含name属性，即params对应的key值）
 * @param {array} vals 数组（每一项是一个字符串，即params对应的val值）
 * @returns 
 */
function getParams(keys, vals){
  const params = {};
  for (let i = 0; i < keys.length; i++) {
    params[keys[i].name] = vals[i];
  }
  return params;
}
