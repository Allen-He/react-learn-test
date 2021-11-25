import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Menu from '../components/Menu'
import StudentsList from './students/StudentsList'
import StudentDetail from './students/StudentDetail'
import StudentsAdd from './students/StudentsAdd'
import CoursesList from './courses/CoursesList'
import CoursesAdd from './courses/CoursesAdd'
import Welcome from './Welcome'

export default class Admin extends Component {
  render() {
    return (
      <Layout
        header={<Header/>}
        aside={<Menu/>}
      >
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/students" exact component={StudentsList} />
          <Route path="/students/add" exact component={StudentsAdd} />
          <Route path="/students/:sno" exact component={StudentDetail} />
          <Route path="/courses" exact component={CoursesList} />
          <Route path="/courses/add" exact component={CoursesAdd} />
        </Switch>
      </Layout>
    )
  }
}
