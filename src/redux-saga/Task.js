export default class Task {
  constructor(next, cbObj) {
    this.next = next;
    this.cbObj = cbObj;
    this.cbObj.callback = () => {
      this.resolve && this.resolve(); //若this.resolve存在，则使对应的promise进入resolved状态
    }
  }

  /** 停止当前任务 */
  cancel() {
    this.next(null, null, true);
    this.isOver = true;
  }

  /** 将当前任务转化为promise */
  toPromise() {
    return new Promise(resolve => {
      this.resolve = resolve;
    });
  }
}
