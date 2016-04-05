'use strict'

var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
  isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
  isAndroid = ua.match(/(Android)\s+([\d.]+)/),
  isMobile = isIphone || isAndroid;

//判断是否在微信或者浏览器
var isWeixin = false;
if (/micromessenger/i.test(ua)) {
  isWeixin = true;
}

module.exports = {
  ipad: ipad,
  isIphone: isIphone,
  isAndroid: isAndroid,
  isMobile: isMobile,
  isWeixin: isWeixin
}
