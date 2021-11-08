import React, { Component } from 'react'
import './index.css'

export default class RadioGroup extends Component {

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
