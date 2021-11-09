import React, { Component } from 'react'
import './index.css'
import Types from "../../../utils/commonTypes";
import PropTypes from "prop-types";

export default class CheckboxGroup extends Component {

  /** 属性默认值 */
  static defaultProps = {
    datas: [],
    chooseDatas: []
  }

  /** 属性类型检查 */
  static propTypes = {
    datas: Types.FormCompDatas.isRequired,
    chooseDatas: Types.FormCompChooseDatas.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func
  }

  changeHandle = (e) => {
    let newChooseDatas;
    if(e.target.checked) {
      newChooseDatas = [...this.props.chooseDatas, e.target.value];
    }else {
      newChooseDatas = this.props.chooseDatas.filter(val => val !== e.target.value);
    }
    this.props.onChange && this.props.onChange(newChooseDatas, this.props.name, e);
  }

  getCheckboxes() {
    return this.props.datas.map(it => (
      <label key={it.value}>
        <input type="checkbox" name={this.props.name} value={it.value}
          checked={this.props.chooseDatas.includes(it.value)}
          onChange={this.changeHandle}
        />
        {it.text}
      </label>
    ))
  }

  render() {
    const checkboxes = this.getCheckboxes();
    return (
      <div>
        {checkboxes}
      </div>
    )
  }
}
