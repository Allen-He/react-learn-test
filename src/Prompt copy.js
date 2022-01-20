import { Component } from 'react'
import { withRouter } from 'react-router-dom'

/** 阻止跳转（公共组件-视情况添加“阻塞”） */
class Prompt extends Component {
  static defultProps = {
    when: false, //是否添加阻塞
    message: '', //阻塞的信息
  }
  
  componentDidMount() {
    this.handleBlock();
  }
  componentDidUpdate() {
    this.handleBlock();
  }
  componentWillUnmount() {
    this.unBlock && this.unBlock();
  }

  handleBlock() {
    if(this.props.when) {
      this.unBlock = this.props.history.block(this.props.message);
    }else {
      this.unBlock && this.unBlock();
    }
  }

  render() {
    return null;
  }
}

export default withRouter(Prompt);
