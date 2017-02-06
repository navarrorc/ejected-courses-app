import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import About from './components/about/About'
import CoursesPage from './components/CoursesPage'
import ManageCoursePage from './components/ManageCoursePage'

export default (
    <Route path="/" component={App} >
        <IndexRoute component={CoursesPage} />
        <Route path="course" component={ManageCoursePage} />
        <Route path="course/:id" component={ManageCoursePage} />
        <Route path="about" component={About} />
    </Route>
)