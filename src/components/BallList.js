import React, { Component } from 'react'
import { getRandom } from '../util'
import Ball from './Ball'

export default class BallList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballInfoList: [],
    }

    const intervalTime = 1000;

    this.timer = setInterval(() => {
      const ballInfo = {
        left: getRandom(0, document.documentElement.clientWidth - 100),
        top: getRandom(0, document.documentElement.clientHeight - 100),
        xSpeed: getRandom(100, 300),
        ySpeed: getRandom(100, 300),
        bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`
      }
      this.setState({ ballInfoList: [...this.state.ballInfoList, ballInfo] });
      if(this.state.ballInfoList.length === 10) {
        clearInterval(this.timer);
      }
    }, intervalTime);
  }
  render() {
    const ballList = this.state.ballInfoList.map((item, i) => <Ball key={i} {...item} />);

    return (
      <div>
        {ballList}
      </div>
    )
  }
}
