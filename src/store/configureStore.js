import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

/**
 * Store
 */
export default function configureStore(initialState) {

    //see: bit.ly/2ldWjqc
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk, reduxImmutableStateInvariant()),
        )
    )

}
