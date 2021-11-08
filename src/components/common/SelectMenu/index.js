import React, { Component } from 'react'
import './index.css'

export default class SelectMenu extends Component {

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
