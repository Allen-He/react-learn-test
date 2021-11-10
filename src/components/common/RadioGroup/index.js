import React, { Component } from 'react'
import './index.css'
import Types from "../../../utils/commonTypes";
import PropTypes from "prop-types";
import widthDataGroup from '../HOC/withDataGroup';

export class Radio extends Component {
  /** 属性类型检查 */
  static propTypes = {
    info: Types.FormCompInfo.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func
  }

  changeHandle = (e) => {
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
  }

  render() {
    return (
      <label>
        <input type="radio" name={this.props.name} value={this.props.info.value}
          checked={this.props.value === this.props.info.value}
          onChange={this.changeHandle}
        />
        {this.props.info.text}
      </label>
    )
  }
}

export default widthDataGroup(Radio);
