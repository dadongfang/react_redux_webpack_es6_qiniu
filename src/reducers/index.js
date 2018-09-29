import { combineReducers } from 'redux'

import loading from './loading'
import account from './account'
import userManager from './userManager'

export default combineReducers({ loading, account, userManager })
