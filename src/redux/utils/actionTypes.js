/** 得到一个指定长度的随机字符串（长度默认为：5位） */
function getRandomStr(len = 5) {
  return Math.random().toString(36).substr(2, len).split('').join('.');
}

const actionTypes = {
  ININ() {
    return `@@redux/INIT${getRandomStr(5)}`;
  },
  UNKNOWN() {
    return `@@redux/PROBE_UNKNOWN_ACTION${getRandomStr(6)}`;
  },
  REPLACE() {
    return `@@redux/REPLACE${getRandomStr(5)}`
  }
}

export default actionTypes;
