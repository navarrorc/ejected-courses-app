import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as courseActions from './actions/courseActions'

import 'bootstrap/dist/css/bootstrap.css'

import './App.scss'

class App extends Component {

    state = { 
        course: { title: '' } 
    }

    onTitleChange = (evt) => {
        const course = this.state.course
        course.title = evt.target.value
        this.setState({course: course})
    }

    onClickSave = () => {
        this.props.dispatch( courseActions.createCourse(this.state.course) )
    }

    courseRow = (course, index) => {
        return <div key={index}>{ course.title }</div>
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input 
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        )
    }
    
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(App)
