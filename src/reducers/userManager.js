const defaultState = {
  userList: [],
  managerTreeList: [],
  roleList:[],
  error:''
}

export default function (state = defaultState, action) {

  const { type, payload } = action

  switch (type) {
    case 'LOAD_USER_LIST_SUCCESS':
      return {
        ...state,
        userList: payload
      }
    case 'LOAD_MANAGERTREE_LIST_SUCCESS':
      return {
        ...state,
        managerTreeList: payload
      }
    case 'USER_ERROR':
      return {
        error: null
      }
    default:
      return state
  }

}
