import React, { Component } from 'react'
import './index.css'
import Types from "../../../utils/commonTypes";
import PropTypes from "prop-types";

export default class SelectMenu extends Component {

  /** 属性默认值 */
  static defaultProps = {
    datas: [],
    value: '',
  }

  /** 属性类型检查 */
  static propTypes = {
    datas: Types.FormCompDatas.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func
  }
  
  changeHandle = (e) => {
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
  }

  getSelectOptions() {
    return this.props.datas.map(it => (
      <option value={it.value} key={it.value}>
        {it.text}
      </option>
    ))
  }

  render() {
    const selectOptions = this.getSelectOptions();
    return (
      <div>
        <select name={this.props.name} onChange={this.changeHandle}>
          {selectOptions}
        </select>
      </div>
    )
  }
}
