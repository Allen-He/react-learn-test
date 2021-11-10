import React, { Component } from 'react'
import './index.css'
import Types from "../../../utils/commonTypes";
import PropTypes from "prop-types";
import withDataGroup from '../HOC/withDataGroup';

export class Checkbox extends Component {
  /** 属性类型检查 */
  static propTypes = {
    chooseDatas: Types.FormCompChooseDatas.isRequired,
    info: Types.FormCompInfo.isRequired,
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
  
  render() {
    return (
      <label>
        <input type="checkbox" name={this.props.name} value={this.props.info.value}
          checked={this.props.chooseDatas.includes(this.props.info.value)}
          onChange={this.changeHandle}
        />
        {this.props.info.text}
      </label>
    )
  }
}

export default withDataGroup(Checkbox);
