import React, { Component } from 'react'
import './index.css'

export default class CheckboxGroup extends Component {

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
