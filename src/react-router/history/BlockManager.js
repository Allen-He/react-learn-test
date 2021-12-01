export default class BlockManager {
  prompt = null; // 该属性是否有值，决定了当前是否有阻塞

  constructor(getUserConfirmation) {
    this.getUserConfirmation = getUserConfirmation;
  }

  /** 添加阻塞，并且返回一个用以取消阻塞的函数 */
  block(prompt) {
    if(typeof prompt !== 'string' && typeof prompt !== 'function') {
      throw new TypeError('block must be string or function');
    }
    this.prompt = prompt;
    return () => {
      this.prompt = null;
    }
  }

  /** 触发阻塞 */
  triggerBlock(location, action, callback) {
    if(this.prompt === null) { //若当前没有阻塞，则直接返回，不做任何后续处理
      callback();
      return;
    }
    let message; //阻塞信息
    if(typeof this.prompt === 'string') {
      message = this.prompt;
    }else if(typeof this.prompt === 'function') {
      message = this.prompt(location, action);
    }
    this.getUserConfirmation(message, (res) => {
      if(res === true) {
        callback();
      }
    });
  }
}
