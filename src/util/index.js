/** 根据指定的范围生成随机数 */
export function getRandom(min, max) {
  return Math.random() * (max - min) + min;
} 
