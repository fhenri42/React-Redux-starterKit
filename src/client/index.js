import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducer from './reducers'
import simpleMiddleWare from './middleware/index.js'
import App from './containers/app'

require("babel-core/register");
require("babel-polyfill");

const configureStore = (reducer) => createStore(
  combineReducers({
    routing: routerReducer,
    example: reducer,
  }),
  composeEnhancers(
  applyMiddleware(
    simpleMiddleWare(),
    thunk
  )),
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = configureStore(reducer)
const history = syncHistoryWithStore(browserHistory, store)

ReactDom.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
), document.getElementById('React-starterKit'))
