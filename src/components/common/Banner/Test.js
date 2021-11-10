import React, { Component } from 'react'
import Banner from './index'
import img1 from './assets/01.jpeg'
import img2 from './assets/02.jpeg'
import img3 from './assets/03.jpeg'
import img4 from './assets/04.jpeg'
import img5 from './assets/05.jpeg'

export default class Text extends Component {
  state = {
    imgList: [
      {imgSrc: img1, url: '/'},
      {imgSrc: img2, url: '/'},
      {imgSrc: img3, url: '/'},
      {imgSrc: img4, url: '/'},
      {imgSrc: img5, url: '/'}
    ],
  }

  render() {
    return (
      <div>
        <Banner imgList={this.state.imgList} />
      </div>
    )
  }
}
