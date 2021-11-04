import React from 'react';
import ReactDOM from 'react-dom';
import img1 from './assets/01.jpeg';
import img2 from './assets/02.jpeg';
import img3 from './assets/03.jpeg';
import './assets/index.css';

const container = document.getElementById('root');
const imgArr = [img1, img2, img3];
let curIndex = 0;
let timer = null;

/** 简易轮播图 */
function render() {
  const banner = (
    <div className="bannerBox">
      <img src={imgArr[curIndex]} alt="" />
    </div>
  )
  ReactDOM.render(banner, container);
}

function start() {
  stop();
  timer = setInterval(() => {
    curIndex = (curIndex + 1) % imgArr.length;
    render();
  }, 1000);
}
function stop() {
  clearInterval(timer);
}

start();

container.onmouseenter = function () {
  stop();
}
container.onmouseleave = function () {
  start();
}
