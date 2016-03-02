import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import routerConfig from './router'
require('../css/main')

render(
  <Router routes={routerConfig} />,//history={browserHistory}
  document.getElementById('cont')
);
