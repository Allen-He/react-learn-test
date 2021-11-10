import React, { Component } from 'react'
import './index.css'

export default class SwitchArrow extends Component {

  clickHandle(dir) {
    this.props.onClick && this.props.onClick(dir);
  }

  render() {
    return (
      <>
        <div className="switch-arrow prev" onClick={() => { this.clickHandle('left') }}>&lt;</div>
        <div className="switch-arrow next" onClick={() => { this.clickHandle('right') }}>&gt;</div>
      </>
    )
  }
}
