import React from 'react'
import { render } from 'react-dom'
import Auth from './lib/auth'
// const shareImg = require('../img/share.jpg')
const shareImg = window.location.origin + '/activity/vet/boqiivet20160305/release/static/share.jpg'
const shareImg_app = window.location.origin + '/activity/vet/boqiivet20160305/release/static/app_share.png?01'

class ShareImg extends React.Component {
  render() {
    return (
      <div className='defaultShareImg'>
        <img src={shareImg} />
      </div>
    )
  }
}
render(
  <ShareImg />,
  document.getElementsByTagName('form')[0]
)

// var auth = new BoqiiAuth();
var sdata = {
  url: location.href
};
var sign = Auth.signParams(sdata);
var ApiUrl = 'http://api.boqii.com';
if (global.isDevelopment) {
  ApiUrl = 'http://api-dev.boqii.com';
}
$.ajax({
  url: ApiUrl + '/weixin/js_config',
  type: 'GET',
  data: sdata,
  async: true,
  headers: {
    'Sign': sign,
    'Authorization': '',
    'Vary-Client': 'web'
  },
  success: function(data) {
    weixin_config(data.ResponseData);
  },
  error: function(err) {
    alert('ajax error');
  }
});

function weixin_config(wx_config){
  wx.config({
    debug: false,
    appId: wx_config.appId,
    timestamp: wx_config.timestamp,
    nonceStr: wx_config.nonceStr,
    signature: wx_config.signature,
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
      "onMenuShareTimeline",
      "onMenuShareAppMessage",
      "onMenuShareQQ",
      "onMenuShareWeibo",
      "onMenuShareQZone"
    ]
  });
}

var share_title = '宠物服务免单，3种行为任你选！';
var share_description = '那种行为更刺激？保守行为，大胆行为，还是尝鲜行为。只要你敢玩，就敢免单。关注微信“波奇服务南京站”还可赢取超值大奖！';
var share_link = window.location.href;
var share_img = shareImg;
var share_img_app = shareImg_app;

var callback = function() {
  $('.shareHint').css('display', 'none')
}

//APP内部分享调用
global.shareInAPP(share_title, share_description, share_img_app)
const shareResults = function (id, ifs, channel){
  if(ifs){
    callback()
  }
}

wx.ready(function () {
  // 在这里调用 API
  //======分享朋友圈===========
  wx.onMenuShareTimeline({
    title: share_title, // 分享标题
    link: share_link, // 分享链接
    imgUrl: share_img, // 分享图标
    success: function () {
      callback()
    },
    cancel: function () {}
  });
  //======分享给朋友===========
  wx.onMenuShareAppMessage({
    title: share_title, // 分享标题
    desc: share_description, // 分享描述
    link: share_link, // 分享链接
    imgUrl: share_img, // 分享图标
    success: function () {
      callback()
    },
    cancel: function () {}
  });
  //======分享到QQ===========
  wx.onMenuShareQQ({
    title: share_title,
    link: share_link,
    imgUrl: share_img,
    desc: share_description,
    success: function() {
      callback()
    },
    cancel: function () {}
  });
  //======分享到QQ空间===========
  wx.onMenuShareQZone({
    title: share_title,
    link: share_link,
    imgUrl: share_img,
    desc: share_description,
    success: function() {
      callback()
    },
    cancel: function () {}
  });
  //======分享到新浪微博===========
  wx.onMenuShareWeibo({
    title: share_title,
    link: share_link,
    imgUrl: share_img,
    desc: share_description,
    success: function() {
      callback()
    },
    cancel: function () {}
  });
});

module.exports = ''
