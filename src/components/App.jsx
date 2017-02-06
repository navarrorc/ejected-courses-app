// This component handles the App template used on every page
import React, { Component, PropTypes } from 'react'
import Header from './common/Header'
import { Grid } from 'react-bootstrap'

class App extends Component {

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>
    }

    render() {
        return (
            <Grid>
                <Header />
                {this.props.children}
            </Grid>
        )
    }

}

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App
