import { postJSON } from 'src/js/tools'
import global from 'src/js/global'
export const LOAD_USER_LIST_SUCCESS = 'LOAD_USER_LIST_SUCCESS'
export const LOAD_MANAGERTREE_LIST_SUCCESS = 'LOAD_MANAGERTREE_LIST_SUCCESS'
export const USER_ERROR = 'USER_ERROR'

// 用户列表
export const getUserList = (params) => dispatch => {
  return postJSON('/user/queryUser', params)
    .then(json => {
      if (json.code === global.successCode) {
        dispatch({ type: LOAD_USER_LIST_SUCCESS, payload: json.userList.list })
      }
      return json
    })
}

// 新增用户列表
export const addUserList = (params) => dispatch => {
  //todo 设置loading
  return postJSON('/user/addUser', params)
    .then(json => json)
}

// 修改用户
export const modifyUser = (params) => dispatch => {
  //todo 设置loading
  return postJSON('/user/modifyUser', params)
    .then(json => json)
}

// 删除用户列表
export const deleteUserList = (params) => dispatch => {
  //todo 设置loading
  return postJSON('/user/deleteUser', params)
    .then(json => json)
}

//选择部门
export const getManagerTreeList = (params) => dispatch => {
  //todo 设置loading
  return postJSON('/user/getOrganizationList', params)
    .then(json => {
      if (json.code === global.successCode) {
        dispatch({ type: LOAD_MANAGERTREE_LIST_SUCCESS, payload: json.organizationTreeList })
      }
      return json
    })
}

//获取角色
export const getRoleList = (params) => dispatch => {
  //todo 设置loading
  return postJSON('/user/getRoleList', params)
    .then(json => json)
}

// 修改密码
export const resetPassword = (params) => dispatch => {
  return postJSON('/user/resetPassword', { ...params })
    .then(json => {
      if (json.code !== global.successCode) {
        dispatch({ type: ERROR_OCCURED, error: json.message })
      }
      return json
    })
}

// 锁定用户
export const lockUser = (params) => dispatch => {
  return postJSON('/user/lockUser', params)
    .then(json => json)
}

// 激活用户
export const activeUser = (params) => dispatch => {
  return postJSON('/user/activeUser', params)
    .then(json => json)
}

// 导出用户
export const exportUsers = (params) => dispatch => {
  return postJSON('/user/exportUserExcel', params, {}, 'GET')
    .then(json => json)
}
