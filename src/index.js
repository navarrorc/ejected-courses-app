
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { loadCourses } from './actions/courseActions'
import 'bootstrap/dist/css/bootstrap.css'

const store = configureStore()
store.dispatch( loadCourses() )

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
