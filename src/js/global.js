// var scriptjs = require('scriptjs');
// scriptjs('http://s.boqii.com/static/js/common.js', function (){
// })
import { hex_md5 } from 'md5'

var source = BQ.GetQueryString("source"),
  device = '';

if (source && source == 'h5') {
  device = 'h5';
} else {
  device = 'app';
}

if (device == 'h5') {
  $('.bottom').show();
}

var ApiUrl = 'http://api.boqii.com';
if (BQ.isDevelopment()) {
  ApiUrl = 'http://api-dev.boqii.com/api';
}

var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
  isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
  isAndroid = ua.match(/(Android)\s+([\d.]+)/),
  isMobile = isIphone || isAndroid;

window.shareInAPP = function (title, content, image) {
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
    Boqii.setParams(title, content, image);
  }
};

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

function signParams(params) {
  var newParamsWithOrder, stringToSign;
  if (params == null) {
    params = {};
  }
  if (params.hasOwnProperty('Sign')) {
    delete params.Sign;
  }
  newParamsWithOrder = sortByAscendingKeys(params);
  stringToSign = "" + (joinValues(newParamsWithOrder)) + token;
  return hex_md5(unescape(encodeURIComponent(stringToSign)));
}

export default {
  source: source,
  device: device,
  ApiUrl: ApiUrl,
  ipad: ipad,
  isIphone: isIphone,
  isAndroid: isAndroid,
  isMobile: isMobile,
  signParams: signParams
}
