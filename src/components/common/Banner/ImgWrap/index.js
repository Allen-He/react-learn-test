import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class ImgWrap extends Component {
  static propTypes = {
    imgList: PropTypes.arrayOf(PropTypes.shape({
      imgSrc: PropTypes.string.isRequired, //图片地址
      url: PropTypes.string.isRequired, //超链接
    })), // 轮播图需要的数据
    imgWidth: PropTypes.number.isRequired, //单张图片的宽度
    imgHeight: PropTypes.number.isRequired, //单张图片的高度
    duration: PropTypes.number.isRequired, //图片切换时动画的过渡时间
  }

  getLis() {
    return this.props.imgList.map((imgItem, i) => (
      <li key={i} style={{ width: this.props.imgWidth, height: this.props.imgHeight }}>
        <a href={imgItem.url} target="__blank">
          <img src={imgItem.imgSrc} alt="" />
        </a>
      </li>
    ))
  }

  getImgwrapDom = (refDom) => {
    this.imgWrapDom = refDom;
  }

  // 定时器的间隔时间
  intervalTime = 1000 / 60;
  // 暂存定时器
  timer = null;

  /** 切换到目标索引对应的图片位置 */
  switchTo(tarIndex) {
    if(tarIndex < 0) {
      tarIndex = this.props.imgList.length - 1;
    }
    if(tarIndex > this.props.imgList.length - 1) {
      tarIndex = 0;
    }
    let curLeft = this.imgWrapDom.offsetLeft;
    const tarLeft = -tarIndex * this.props.imgWidth;
    // 每次切换需要移动多少次
    const times = Math.ceil(this.props.duration / this.intervalTime);
    // 每次移动多长距离
    const dis = (tarLeft - curLeft) / times;

    let count = 0;
    clearInterval(this.timer); // 清除现有的定时器
    this.timer = setInterval(() => {
      count++;
      curLeft += dis;
      this.imgWrapDom.style.left = curLeft + 'px';
      if(count > times) {
        this.imgWrapDom.style.left = tarLeft + 'px';
        clearInterval(this.timer);
      }
    }, this.intervalTime);
  }

  render() {
    const lis = this.getLis();
    return (
      <ul
        ref={this.getImgwrapDom}
        className="imgWrap"
        style={{
          width: this.props.imgWidth * this.props.imgList.length,
          height: this.props.imgHeight,
        }}
      >
        {lis}
      </ul>
    )
  }
}
