import { START_LOGIN, LOGIN_SUCCESS, ERROR_OCCURED } from '../actions/account'

const defaultState = {
  logining: false,
  userInfo: {},
  error: null
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case START_LOGIN:
      return {
        logining: true,
        error: null
      }
    case LOGIN_SUCCESS:
      return {
        logining: false,
        userInfo: action.payload.userInfo,
        error: null
      }
    case ERROR_OCCURED:
      return {
        logining: false,
        error: action.error
      }
    default:
      return state;
  }
}
