import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../actions/courseActions'


class ManageCoursePage extends React.Component {
    render () {
        return (
            <h1>Manage Course</h1>
        )
    }
}

ManageCoursePage.propTypes = {
    //myProp: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => ({ state: state })
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(courseActions, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)