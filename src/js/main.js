import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import routerConfig from './router'
import reducers from './reducers'
require('./wx.config')
require('../css/main')

let store = createStore(reducers)

render(
  <Provider store={store}>
    <Router routes={routerConfig} history={browserHistory} />
  </Provider>,
  document.getElementById('cont')
)
