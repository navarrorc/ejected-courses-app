import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../actions/courseActions'
import CourseList from './CourseList'

import { Grid, Row, Col } from 'react-bootstrap'

class CoursesPage extends Component {

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>
    }

    render() {
        const { courses } = this.props

        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <h1>Courses</h1>
                        <CourseList courses={courses} />
                    </Col>
                </Row>
            </Grid>
        )
    }

}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => ({ courses: state.courses })
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(courseActions, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
