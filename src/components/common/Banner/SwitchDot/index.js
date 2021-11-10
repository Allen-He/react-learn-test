import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class SwitchDot extends Component {
  static propTypes = {
    curIndex: PropTypes.number.isRequired,
    dotNums: PropTypes.number.isRequired,
  }

  clickHandle = (i) => {
    this.props.onClick && this.props.onClick(i);
  }

  render() {
    let dots = new Array(this.props.dotNums);
    for (let i = 0; i < dots.length; i++) {
      dots[i] = (
        <div key={i}
          className={this.props.curIndex === i ? "dot active" : "dot"}
          onClick={() => { this.clickHandle(i) }}
        ></div>
      )
    }

    return (
      <div className="switch-dot">
        {dots}
      </div>
    )
  }
}
