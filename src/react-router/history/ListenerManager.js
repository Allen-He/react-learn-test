export default class ListenerManager {
  listeners = []; // 存储所有监听器（数组）

  /** 添加一个监听器，并返回一个用于取消该监听器的方法 */
  addListener(listener) {
    this.listeners.push(listener);
    const unListen = () => {
      const index = this.listeners.indexOf(listener);
      this.listeners.splice(index, 1);
    }
    return unListen;
  }

  /** 触发当前所有监听器 */
  triggerListener(location, action) {
    for (const listener of this.listeners) {
      listener(location, action);
    }
  }
}
