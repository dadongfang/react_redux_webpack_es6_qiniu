import React from 'react'
import { render } from 'react-dom'
const shareImg = require('../img/share.jpg')
const shareImg_app = shareImg
// const shareImg = window.location.origin + '/activity/20160305/release/static/share.jpg'
// const shareImg_app = window.location.origin + '/activity/20160305/release/static/app_share.png?01'

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

var param = {
  url: location.href
};
var ApiUrl = '';
$.ajax({
  url: ApiUrl + '/weixin/js_config',
  type: 'GET',
  data: param,
  async: true,
  success: function (data) {
    if(data.ResponseData) {
      weixin_config(data.ResponseData);
    }
  },
  error: function (err) {
    console.log('ajax error');
  }
});

function weixin_config(wx_config) {
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

var share_title = '服务免单，3种行为任你选！';
var share_description = '那种行为更刺激？保守行为，大胆行为，还是尝鲜行为。只要你敢玩，就敢免单。';
var share_link = window.location.href;
var share_img = shareImg;
var share_img_app = shareImg_app;

var callback = function () {
  //todo
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
    cancel: function () { }
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
    cancel: function () { }
  });
  //======分享到QQ===========
  wx.onMenuShareQQ({
    title: share_title,
    link: share_link,
    imgUrl: share_img,
    desc: share_description,
    success: function () {
      callback()
    },
    cancel: function () { }
  });
  //======分享到QQ空间===========
  wx.onMenuShareQZone({
    title: share_title,
    link: share_link,
    imgUrl: share_img,
    desc: share_description,
    success: function () {
      callback()
    },
    cancel: function () { }
  });
  //======分享到新浪微博===========
  wx.onMenuShareWeibo({
    title: share_title,
    link: share_link,
    imgUrl: share_img,
    desc: share_description,
    success: function () {
      callback()
    },
    cancel: function () { }
  });
});

module.exports = ''
