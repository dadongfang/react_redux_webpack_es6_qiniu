<?php
  require_once("/webwww/htmlfive/apps/activity/weixin_share_sdk/jssdk.php");
  $jssdk = new JSSDK("wxb5d575673dbec527","1adfba8b47f15a15dcb413270df4fdd5");
  $signPackage = $jssdk->GetSignPackage();
?>
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-touch-fullscreen" content="yes"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="apple-itunes-app" content="app-id=883476363">
    <title>宠物服务免单，3种行为任你选！</title>
  </head>
  <body>
    <div id="cont"></div>
    <script src="http://m.boqii.com/activity/js/zepto.min.js"></script>
    <script src="__build/js/common.js"></script>
    <script src="__build/js/main.js"></script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script type="text/javascript">
      wx.config({
       appId: '<?php echo $signPackage["appId"];?>',
       timestamp: <?php echo $signPackage["timestamp"];?>,
       nonceStr: '<?php echo $signPackage["nonceStr"];?>',
       signature: '<?php echo $signPackage["signature"];?>',
       jsApiList: [
         // 所有要调用的 API 都要加到这个列表中
         "onMenuShareTimeline",
         "onMenuShareAppMessage",
         "onMenuShareQQ",
         "onMenuShareWeibo",
         "onMenuShareQZone"
       ]
      });

      var share_title = '宠物服务免单，3种行为任你选！';
      var share_description = '那种行为更刺激？保守行为，大胆行为，还是尝鲜行为。只要你敢玩，就敢免单。关注微信“波奇服务南京站”还可赢取超值大奖！';
      var share_link = window.location.href;
      var share_img = window.location.origin + '/activity/vet/boqiivet20160305/release/img/share.jpg';

      var callback = function() {
       $('.center').hide()
       $('#shadow').hide()
      }

      //APP内部分享调用
      shareInAPP(share_title, share_description, share_img)
      //APP内部分享回调
      shareResults = function (id, ifs, channel) {
       if(ifs) {
         callback()
       } else{
         alert("分享失败") 
       }  
      };

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
    </script>
    <script src="http://s.boqii.com/static/js/ga.js"></script>
  </body>
</html>
