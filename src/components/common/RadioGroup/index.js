import React, { Component } from 'react'
import './index.css'
import Types from "../../../utils/commonTypes";
import PropTypes from "prop-types";

export default class RadioGroup extends Component {
  
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

  getRadioes() {
    return this.props.datas.map(it => (
      <label key={it.value}>
        <input type="radio" name={this.props.name} value={it.value}
          checked={this.props.value === it.value}
          onChange={this.changeHandle}
        />
        {it.text}
      </label>
    ))
  }

  render() {
    const radioes = this.getRadioes();
    return (
      <div>
        {radioes}
      </div>
    )
  }
}
