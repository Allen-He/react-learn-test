import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class StudentsSearchBar extends Component {
  static defaultProps = {
    defaultValue: {}
  }
  static propTypes = {
    defaultValue: PropTypes.shape({
      key: PropTypes.string, // 关键词：string
      sex: PropTypes.number, // 性别：-1 | 0 | 1
    }),
    onSearch: PropTypes.func,
  }

  constructor(props) {
    super(props);
    const df = {
      key: '', // 关键词
      sex: -1, // 性别
    }
    this.state = Object.assign({}, df, props.defaultValue);
  }

  changeHandle = (e) => {
    const { name: stateName, value: newVal } = e.target;
    this.setState({ [stateName]: stateName === 'sex' ? +newVal : newVal });
  }

  searchHandle = () => {
    this.props.onSearch && this.props.onSearch(this.state);
  }

  render() {
    return (
      <div className="student-search-bar">
        <div className="item">
          <label>关键词：<input type="text" name='key' value={this.state.key} 
            onChange={this.changeHandle}
          /></label>
        </div>
        <div className="item">
          <label>性别：
            <label><input type="radio" name='sex' value={-1} 
              checked={this.state.sex === -1} onChange={this.changeHandle}
            />不限</label>
            <label><input type="radio" name='sex' value={0}
              checked={this.state.sex === 0} onChange={this.changeHandle}
            />男</label>
            <label><input type="radio" name='sex' value={1}
              checked={this.state.sex === 1} onChange={this.changeHandle}
            />女</label>
          </label>
        </div>
        <div className="item">
          <button onClick={this.searchHandle}>搜索</button>
        </div>
      </div>
    )
  }
}
