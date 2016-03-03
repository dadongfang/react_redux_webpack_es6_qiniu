import React from 'react'
import { render } from 'react-dom'
import Auth from './lib/auth'

const shareImg = require('../img/share.jpg')

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

$.ajax({
  url: 'http://api-dev.boqii.com/weixin/js_config',
  type: 'GET',
  data: sdata,
  async: false,
  headers: {
    'Sign': Auth.signParams(sdata),
    'Authorization': '',
    'Vary-Client': 'web'
  },
  success:function(data){
    weixin_config(data.ResponseData);
  }
});

function weixin_config(wx_config){
  wx.config({
    debug: true,
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

var callback = function() {
  $('.shareHint').css('display', 'none')
}

//APP内部分享调用
shareInAPP(share_title, share_description, share_img)

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
