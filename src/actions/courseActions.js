import * as t from './actionTypes'
import courseApi from '../api/mockCourseApi'

export const loadCoursesSuccess = courses => ({ type: t.LOAD_COURSES_SUCCESS, courses })

export function loadCourses() {

    return function(dispatch) {
        return courseApi.getAllCourses()
            .then(courses => { dispatch(loadCoursesSuccess(courses)) })
            .catch(error => { throw(error) })
    }

}
