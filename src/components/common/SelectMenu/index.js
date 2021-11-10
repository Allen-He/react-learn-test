import React, { Component } from 'react'
import './index.css'
import Types from "../../../utils/commonTypes";
import PropTypes from "prop-types";
import withDataGroup from '../HOC/withDataGroup';

export class SelectOption extends Component {
  /** 属性类型检查 */
  static propTypes = {
    info: Types.FormCompInfo.isRequired,
  }

  render() {
    return (
      <option value={this.props.info.value} key={this.props.info.value}>
        {this.props.info.text}
      </option>
    )
  }
}

const OptGroups = withDataGroup(SelectOption);

export default class SelectMenu extends Component {
  /** 属性类型检查 */
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
  }
  
  changeHandle = (e) => {
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
  }

  render() {
    return (
      <>
        <select name={this.props.name} value={this.props.value} onChange={this.changeHandle}>
          <OptGroups {...this.props} />
        </select>
      </>
    )
  }
}
