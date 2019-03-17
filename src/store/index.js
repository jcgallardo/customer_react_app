import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise'
import reducers from './../reducers'

// code for google chrome developping
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(promiseMiddleware)))