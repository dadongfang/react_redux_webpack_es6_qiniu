import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import request from './middlewares/request'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'

import './css/index.less'

const middlewares = [ thunk, request ]

if( process.env.NODE_ENV !== 'production' ) {
    middlewares.push(createLogger())
}

const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
)

render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
)
