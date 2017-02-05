import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as courseActions from './actions/courseActions'


import { Grid, Row, Col, Button, FormGroup, FormControl } from 'react-bootstrap'
import './App.scss'

class App extends Component {

    state = {
        course: { title: '' }
    }

    onTitleChange = (evt) => {
        const course = this.state.course
        course.title = evt.target.value
        this.setState({ course: course })
    }

    onClickSave = () => {
        this.props.createCourse(this.state.course)
    }

    courseRow = (course, index) => {
        return <div key={index}>{course.title}</div>
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <h1>Courses</h1>
                        {this.props.courses.map(this.courseRow)}
                        <h2>Add Course</h2>
                        <FormGroup>
                            <FormControl
                                type="text"
                                value={this.state.course.title}
                                onChange={this.onTitleChange} />
                        </FormGroup>
                        <Button onClick={this.onClickSave}>Save</Button>
                    </Col>
                </Row>
            </Grid>
        )
    }

}

App.propTypes = {
    createCourse: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
