// var scriptjs = require('scriptjs');
// scriptjs('http://s.boqii.com/static/js/common.js', function (){
// })
import md5 from 'md5'

var source = BQ.GetQueryString("source"),
<<<<<<< HEAD
  isDevelopment = BQ.isDevelopment(),
=======
>>>>>>> e1864dfa9eb19668a89eeb86760f69c389b2e915
  device = '';

if (source && source == 'h5') {
  device = 'h5';
} else {
  device = 'app';
}

var ApiUrl = 'http://api.boqii.com';
<<<<<<< HEAD
if (isDevelopment) {
=======
if (BQ.isDevelopment()) {
>>>>>>> e1864dfa9eb19668a89eeb86760f69c389b2e915
  ApiUrl = 'http://api-dev.boqii.com/api';
}

var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
  isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
  isAndroid = ua.match(/(Android)\s+([\d.]+)/),
  isMobile = isIphone || isAndroid;

//判断是否在微信或者浏览器
var isWeixin = false;
if (/micromessenger/i.test(ua)) {
  isWeixin = true;
  source = device = 'h5';
}

var token = "comboqiiwwwvetapp";
function sortByAscendingKeys(obj) {
  var i, key, keys, len, newObj;
  newObj = {};
  keys = Object.keys(obj);
  keys = keys.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
    return -1;
  });
  for (i = 0, len = keys.length; i < len; i++) {
    key = keys[i];
    newObj[key] = obj[key];
  }
  return newObj;
}

function joinValues(obj) {
  var i, key, keys, len, values;
  keys = Object.keys(obj);
  values = [];
  for (i = 0, len = keys.length; i < len; i++) {
    key = keys[i];
    values.push(obj[key]);
  }
  return values.join('');
}

<<<<<<< HEAD
var signParams = function(params) {
=======
function signParams(params) {
>>>>>>> e1864dfa9eb19668a89eeb86760f69c389b2e915
  var newParamsWithOrder, stringToSign;
  if (params == null) {
    params = {};
  }
  if (params.hasOwnProperty('Sign')) {
    delete params.Sign;
  }
  newParamsWithOrder = sortByAscendingKeys(params);
  stringToSign = "" + (joinValues(newParamsWithOrder)) + token;
  return md5(unescape(encodeURIComponent(stringToSign)));
}

<<<<<<< HEAD
var count = function(trackId) {
  var params = {
    trackId: trackId,
    trackType: 'EVENT',
    referrer: document.referrer,
    current: location.href,
    source: device.toUpperCase()
  };
  const sign = signParams(params);
  $.ajax({
    url: ApiUrl + '/v1.1/insights/trackers',
    data: params,
    async: true,
    type: 'POST',
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Sign", sign)
    },
    success: function (data) {
      //todo
    }
  });
}

var shareInAPP = function(title, content, image) {
  if(device == 'app') {
    if (isIphone || ipad) {
      var t = document.createElement('input');
      t.style.display = 'none';
      t.value = title;
      t.id = 'shareTitle';
      var c = document.createElement('input');
      c.style.display = 'none';
      c.value = content;
      c.id = 'shareContent';
      var i = document.createElement('input');
      i.style.display = 'none';
      i.value = image;
      i.id = 'shareImage';
      document.body.appendChild(t);
      document.body.appendChild(c);
      document.body.appendChild(i);
    }else if (isAndroid) {
      if(typeof(Boqii) != 'undefined') {
        try{
          Boqii.setParams(title, content, image)
        }catch (e){
          //todo
        }
      }
    }
  }
}

module.exports = {
  source: source,
  device: device,
  isDevelopment: isDevelopment,
=======
module.exports = {
  source: source,
  device: device,
>>>>>>> e1864dfa9eb19668a89eeb86760f69c389b2e915
  ApiUrl: ApiUrl,
  ipad: ipad,
  isIphone: isIphone,
  isAndroid: isAndroid,
  isMobile: isMobile,
  isWeixin: isWeixin,
<<<<<<< HEAD
  shareInAPP: shareInAPP,
  signParams: signParams,
  count: count
=======
  signParams: signParams,
  shareInAPP: shareInAPP
>>>>>>> e1864dfa9eb19668a89eeb86760f69c389b2e915
}
