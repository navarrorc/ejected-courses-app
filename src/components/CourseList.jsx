import React, { PropTypes } from 'react'
import CourseListRow from './CourseListRow'
import { Table } from 'react-bootstrap'

const CourseList = ({ courses }) => {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                    { courses.map(course => <CourseListRow key={course.id} course={course} /> ) }
            </tbody>
        </Table>
    )
}

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
}

export default CourseList