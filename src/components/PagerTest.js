import React, { Component } from 'react'
import StudentList from './Student/StudentList'
import Pager from './Pager/Pager'

export default class PagerTest extends Component {
  state = {
    current: 1,
    total: 0,
    limit: 3,
    panelNum: 5,
    stuList: [],
  }

  constructor(props) {
    super(props);
    this.fetchAllStudent();
  }

  /** 页码改变时的事件处理函数 */
  pageChangeHandle = (tarPage) => {
    this.setState({
      current: tarPage,
    }, () => {
      this.fetchAllStudent(); //state修改成功之后，再请求并更新数据
    });
  }

  /** 根据this.state.current请求学生数据，并更新相关状态（total | stuList） */
  async fetchAllStudent() {
    // 请求数据
    const stuData = await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=Allen_He_1602512631187&page=${this.state.current}&size=${this.state.limit}`)
      .then(resp => resp.json())
      .then(res => res.data);
    // 更新状态
    this.setState({
      total: stuData.cont,
      stuList: stuData.findByPage
    });
  }

  render() {
    return (
      <div className="wrap">
        <div className="stuInfo">
          <StudentList stuList={this.state.stuList} />
        </div>
        <div className="pager">
          <Pager {...this.state} onPageChange={this.pageChangeHandle} />
        </div>
      </div>
    )
  }
}
