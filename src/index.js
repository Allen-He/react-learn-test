import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from './components/StudentList'

/** 请求学生数据 */
async function fetchAllStu() {
  const appkey = 'Allen_He_1602512631187'
  const resp = await fetch('http://open.duyiedu.com/api/student/findAll?appkey=' + appkey);
  const data = await resp.json();
  return data.data;
}

/** 渲染页面数据 */
async function render() {
  ReactDOM.render((
    <>
      <h2>学生信息列表</h2>
      <span>正在加载中......</span>
    </>
  ), document.getElementById('root'));
  const stu = await fetchAllStu();
  ReactDOM.render((
    <>
      <h2>学生信息列表</h2>
      <StudentList stuArr={stu} />
    </>
  ), document.getElementById('root'));
}

render();
