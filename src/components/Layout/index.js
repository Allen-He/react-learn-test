import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class index extends Component {
  static propTypes = {
    header: PropTypes.element,
    aside: PropTypes.element,
    children: PropTypes.element
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          {this.props.header}
        </header>
        <main className="main">
          <div className="aside">
            {this.props.aside}
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
}
