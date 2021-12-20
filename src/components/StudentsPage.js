import React, { useEffect } from 'react'
import { connect } from '../react-redux'
import StudentSearchBar from './StudentSearchBar'
import StudentTable from './StudentTable'
import Pager from './common/Pager'
import { change as changeCondition } from '../store/action/student/searchCondition'
import { fetchStus } from '../store/action/student/searchResult'
import store from '../store'

// 链接 StudentSearchBar 组件
let mapStateToProps = state => {
  const { key, sex } = state.students.condition;
  return {
    keyword: key,
    sex
  }
}
let mapDispatchToProps = dispatch => {
  return {
    onSearch: (newCondition) => {
      newCondition.page = 1; //将当前conditon中的page置为1
      dispatch(changeCondition(newCondition));
      dispatch(fetchStus());
    }
  }
}
const StudentSearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar);

// 链接 StudentTable 组件
mapStateToProps = state => {
  return {
    stus: state.students.result.datas
  }
}
const StudentTableContainer = connect(mapStateToProps)(StudentTable);

// 链接 Pager 组件
mapStateToProps = state => {
  const { page: current, limit } = state.students.condition;
  const { total } = state.students.result;
  return {
    current,
    total,
    limit,
    panelNum: 5
  }
}
mapDispatchToProps = dispatch => {
  return {
    onPageChange: (tarPage) => {
      dispatch(changeCondition({ page: tarPage }));
      dispatch(fetchStus());
    }
  }
}
const PagerContainer = connect(mapStateToProps, mapDispatchToProps)(Pager);


export default function StudentsPage() {
  useEffect(() => {
    store.dispatch(fetchStus());
  }, []); 

  return (
    <>
      <StudentSearchBarContainer/> 
      <StudentTableContainer/>
      <PagerContainer/>
    </>
  )
}
