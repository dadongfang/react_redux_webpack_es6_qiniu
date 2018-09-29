import 'whatwg-fetch'
import { message } from 'antd'
import global from './global'

/**检查相应状态 */
function checkStatus(response) {
  console.info(response)
  if (response.status >= 200 && response.status < 300) {
    return response
  } else if (response.status == 401) {
    message.error('登录超时，请重新登录')
    location.href = '/'
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

/**获取相应中的json数据 */
function parseJSON(response) {
  if(response) {
    return response.json()
  }
  return response
}
/**
 * 发送json数据到后端
 */
export function postJSON(url, data, headers, type) {
  console.info('request params', data)
  return fetch(global.api + url, {
    // credentials: 'same-origin',
    // mode: 'cors',
    method: type || 'POST',
    headers: {
      "content-type": "application/json",
      "token": window.LS.get('token'),
      ...headers
    },
    body: JSON.stringify(data || {})
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(json => {
      console.info('response', json)
      if (json.code !== global.successCode) {
        message.error(json.message)
      }
      return json
    })
    .catch(error=> {
      console.info('=====', error.response)
      if(error.response) {
        const { status, statusText, url } = error.response
        message.error(`${status}: ${statusText} ${url}`)
      }
      return error.response
    })
}

// 页面元素显示权限判断
export function hasPermission(code) {
  const userInfo = JSON.parse(window.LS.get('userInfo') || '{}')
  const roleList = JSON.parse(window.LS.get('roleList') || '{}')
  const authorizedRoute = JSON.parse(window.LS.get('authorizedRoute') || '{}')
  const currentPath = location.pathname
  let hasPermission = false
  // 当前用户含有此元素权限
  const role = _.find(roleList, {id: code, roleid: parseInt(userInfo.role), type: '2'})
  if(role) {
    const { parentId, id } = role
    for(let route of authorizedRoute) {
      // 元素所在路由配置有此元素权限
      if(route.data && route.data.id == parentId) {
        const {permissions} = route.data
        if(permissions && _.find(permissions, {id})) {
          hasPermission = true
          break
        }
      } else if(route.routes) {
        for(let subRoute of route.routes) {
          // 元素所在子机路由配置有此元素权限
          if(subRoute.data && subRoute.data.id == parentId) {
            const {permissions} = subRoute.data
            if(permissions && _.find(permissions, {id})) {
              hasPermission = true
              break
            }
          }
        }
      }
    }
  }
  return hasPermission
}

/**
 *
 * 计算渐变色的渐变区间
 * @param {Array} start  渐变开始的颜色[r,g,b]
 * @param {Array} end  渐变结束的颜色[r,g,b]
 * @param {Number} divideBY 被此均分
 */
export function linearGradientDivider(start, end, divideBY) {
  const [sr, sg, sb] = start,
    [er, eg, eb] = end;
  const rStep = (er - sr) / divideBY,
    gStep = (eg - sg) / divideBY,
    bStep = (eb - sb) / divideBY;
  const dividedColor = new Array(divideBY + 1).join('_').split('').map((_, i) => [sr + rStep * i, sg + gStep * i, sb + bStep * i].map(ele => Math.round(ele)))
  return dividedColor.concat([end])
}

/**
 * @function splitWith
 * 将数组按func拆分成子数组
 * @param {Array} arr
 * @param {Function} func
 */
export function splitWith(arr, func) {
  if (!Array.isArray(arr) || typeof func !== 'function') {
    throw new TypeError('arr只能为数组且func只能是函数')
  }
  const result = []
  let index = 0
  arr.forEach((e, i) => {
    if (func(e, i)) {
      index++
    } else {
      if (!result[index]) {
        result[index] = []
      }
      result[index].push(e)
    }

  })
  return result.filter(r => r && r.length > 0)
}

/**
 * 获取searchString中指定名称的参数
 * @param {String} name
 */
export function getURLParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i'); // 匹配目标参数
  var result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
  if (result != null) {
    return decodeURIComponent(result[2]);
  } else {
    return null;
  }
}
