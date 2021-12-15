export default class Task {
  constructor(next) {
    this.next = next;
  }

  /** 停止当前任务 */
  cancel() {
    this.next(null, null, true);
  }
}
