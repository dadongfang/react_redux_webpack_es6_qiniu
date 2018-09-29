/**
 * 处理网络请求的中间件
 */
import { postJSON } from 'src/js/tools'
import global from 'src/js/global'

export default store => next => action => {
  /**
   * 拦截类型为 @@REQUEST_TYPE 的action
   */
  if (typeof action !== 'object' || action.type !== '@@REQUEST_TYPE') {
    next(action)
  } else {
    const { url, params, types } = action;
    const [requestType, successType, failType] = types;

    /**
     * 发起请求之前
     */
    dispatchTypes(next, requestType, { params })

    /**发起请求 */
    return postJSON(url, params)
      .then(payload => {
        /**请求成功 */
        if (payload.code === global.successCode) {
          dispatchTypes(next, successType, { payload })
        } else {
          dispatchTypes({ type: failType, payload })
        }
      })
      .catch(error => {
        /**请求失败 */
        dispatchTypes(next, failType, { error })
      })
  }
}


/**如果action是数组，分别dispatch */
function dispatchTypes(dispatch, types, params) {
  if (Array.isArray(types)) {
    types.forEach(type => dispatch({ type, ...params }))
  } else {
    dispatch({ type: types, ...params })
  }
}
