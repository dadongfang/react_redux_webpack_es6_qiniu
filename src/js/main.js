import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import routerConfig from './router'

console.log(routerConfig);

render(
  <Router routes={routerConfig} />,//history={browserHistory} 
  document.getElementById('dongFang')
);
