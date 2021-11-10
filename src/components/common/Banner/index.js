import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import ImgWrap from './ImgWrap'
import SwitchArrow from './SwitchArrow'
import SwitchDot from "./SwitchDot";

export default class Banner extends Component {
  static defaultProps = {
    width: 500,
    height: 280,
    imgList: [],
    duration: 500,
    intervalTime: 1500,
  }

  static propTypes = {
    width: PropTypes.number, //轮播图容器的宽度
    height: PropTypes.number, //轮播图容器的高度
    imgList: PropTypes.arrayOf(PropTypes.shape({
      imgSrc: PropTypes.string.isRequired, //图片地址
      url: PropTypes.string.isRequired, //超链接
    })), // 轮播图需要的数据
    duration: PropTypes.number.isRequired, //图片切换时动画的过渡时间
    intervalTime: PropTypes.number.isRequired, //轮播图自动轮播的事件间隔
  }
  
  getImgWrapRef = (refDom) => {
    this.imgWrapRef = refDom;
  }
  getContainerRef = (refDom) => {
    this.containerRef = refDom;
  }

  state = {
    curIndex: 0, //当前展示图片的索引
    autoTimer: null,
  }

  componentDidMount() {
    this.autoMove();
  }
  componentWillUnmount() {
    this.stopAutoMove();
  }

  autoMove() {
    clearInterval(this.autoTimer);
    this.autoTimer = setInterval(() => {
      this.arrowClickHandle('right');
    }, this.props.intervalTime);
  }

  stopAutoMove() {
    clearInterval(this.autoTimer);
  }

  switchHandle = (tarIndex) => {
    this.setState({
      curIndex: tarIndex,
    });
    this.imgWrapRef.switchTo(tarIndex);
  }

  arrowClickHandle = (dir) => {
    let cur = this.state.curIndex;
    if(dir === 'left') {
      cur--;
      if(cur < 0) {
        cur = this.props.imgList.length - 1;
      }
    }else {
      cur++;
      if(cur > this.props.imgList.length - 1) {
        cur = 0;
      }
    }
    this.switchHandle(cur);
  }

  dotClickHandle = (index) => {
    this.switchHandle(index);
  }

  render() {
    return (
      <div
        className="banner-container"
        style={{
          width: this.props.width,
          height: this.props.height
        }}
        onMouseEnter={() => { this.stopAutoMove() }}
        onMouseLeave={() => { this.autoMove() }}
      >
        <ImgWrap
          ref={this.getImgWrapRef}
          imgList={this.props.imgList}
          imgWidth={this.props.width}
          imgHeight={this.props.height}
          duration={this.props.duration}
        />
        <SwitchArrow onClick={this.arrowClickHandle} />
        <SwitchDot
          curIndex={this.state.curIndex}
          dotNums={this.props.imgList.length}
          onClick={this.dotClickHandle}
        />
      </div>
    )
  }
}
