import { postJSON } from 'src/js/tools'
import global from 'src/js/global'

// 开始登录
export const START_LOGIN = 'START_LOGIN'
// 登录成功
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// 发生错误
export const ERROR_OCCURED = 'ERROR_OCCURED'

// login
export const login = (params) => dispatch => {
  dispatch({ type: START_LOGIN })
  return postJSON('/user/login', { ...params })
    .then(json => {
      if (json.code === global.successCode) {
        dispatch({ type: LOGIN_SUCCESS, payload: json })
      } else {
        dispatch({ type: ERROR_OCCURED, error: json.message })
      }
      return json
    })
}

// logout
export const logout = () => dispatch => {
  return postJSON('/user/loginout')
    .then(json => {
      if (json.code !== global.successCode) {
        dispatch({ type: ERROR_OCCURED, error: json.message })
      }
      return json
    })
}

// 修改密码
export const changePwd = (params) => dispatch => {
  return postJSON('/user/changePassword', { ...params })
    .then(json => {
      if (json.code !== global.successCode) {
        dispatch({ type: ERROR_OCCURED, error: json.message })
      }
      return json
    })
}
