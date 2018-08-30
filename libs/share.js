/**
 * Created by yylc on 2016/7/6.
 * 封装活动当中需要的分享功能
 * var ActShare = require(''); ActShare(shareData);
 * shareData数据格式如下：
 *
 {
   "shareObj": {
     "content": [
       {
         "channel": "WEIXIN_FRIEND",
         "content": "微信好友文案"
       },
       {
         "channel": "WEIXIN_FRIEND_CIRCLE",
         "content": "朋友圈文案"
       },
       {
         "channel": "QQ_FRIEND",
         "content": "去"
       },
       {
         "channel": "SMS",
         "content": "短信文案"
       }
     ],
     "icon": "http://192.168.2.112/fup/image/shareConfig/icon/201607/20160726112214.jpg",
     "iconBase64": "",
     "id": 31,
     "operator": 9999999,
     "shareDesc": "描述测试",
     "title": "点点养车"
   }
 }
 http://www.digiocean.cc/shequpao/stageone/1.0.1/index.html?from=timeline&isappinstalled=0#!/index
 */

module.exports = function (shareData) {

  if (!shareData) return;

  var dataShare = shareData,
    i = 0,
    len = dataShare.content.length,
    appShareData = {
      channel: [],
      id: GOKU.actid,
      url: window.location.href,
      title: dataShare.title,
      sms: "",
      wxhy: "",
      wxpyq: "",
      sinawb: "",
      qqhy: "",
      tcwb: "",
      imgUrl: dataShare.icon,
      imgBase64: dataShare.iconBase64
    },
    weixinShareData = {
      title: dataShare.title,
      desc: "",
      pyqdesc: "",
      linkUrl: window.location.href,
      imgUrl: dataShare.icon
    };

  for (; i < len; i++) {
    var $this = dataShare.content[i],
      $type = $this["channel"],
      $text = $this["content"];

    switch ($type) {
      case "WEIXIN_FRIEND":
        appShareData.wxhy = $text;
        appShareData.channel.push("wxhy");
        weixinShareData.desc = $text;
        break;
      case "WEIXIN_FRIEND_CIRCLE":
        appShareData.wxpyq = $text;
        appShareData.channel.push("wxpyq");
        weixinShareData.pyqdesc = $text;
        break;
      case "QQ_FRIEND":
        appShareData.qqhy = $text;
        appShareData.channel.push("qqhy");
        break;
      case "QQ_WEIBO":
        appShareData.tcwb = $text;
        appShareData.channel.push("tcwb");
        break;
      case "SINA_WEIBO":
        appShareData.sinawb = $text;
        appShareData.channel.push("sinawb");
        break;
      case  "SMS":
        appShareData.sms = $text;
        appShareData.channel.push("sms");
        break;
    }
  }

  if (!APP.BROWSER.isclient) {
    $.ajax({
      url: "https://gift.fuckyourmother.com/activity/weixin/signature.do",
      type: "GET",
      data: {url: encodeURI(window.location.href)},
      success: function (data) {
        callback(data.signature);
      }
    });

    function callback(obj) {
      wx.config({
        debug: false,
        appId: obj.appid,
        timestamp: obj.timestamp,
        nonceStr: obj.noncestr,
        signature: obj.signature,
        jsApiList: [
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo',
          'startRecord',
          'stopRecord',
          'onVoiceRecordEnd',
          'playVoice',
          'pauseVoice',
          'stopVoice',
          'onVoicePlayEnd',
          'uploadVoice',
          'downloadVoice',
          'chooseImage',
          'previewImage',
          'uploadImage',
          'downloadImage',
          'translateVoice',
          'getNetworkType',
          'openLocation',
          'getLocation',
          'hideOptionMenu',
          'showOptionMenu',
          'hideMenuItems',
          'showMenuItems',
          'hideAllNonBaseMenuItem',
          'showAllNonBaseMenuItem',
          'closeWindow',
          'scanQRCode',
          'chooseWXPay',
          'openProductSpecificView',
          'addCard',
          'chooseCard',
          'openCard'
        ]
      });
    }

    wx.ready(function () {

      var wxShareObj = {
        title: weixinShareData.title,
        desc: weixinShareData.desc,
        linkUrl: weixinShareData.linkUrl,
        pyqdesc: weixinShareData.pyqdesc,
        imgUrl: weixinShareData.imgUrl
      };

      wx.onMenuShareAppMessage({
        title: wxShareObj.title,
        desc: wxShareObj.desc,
        link: wxShareObj.linkUrl,
        imgUrl: wxShareObj.imgUrl
      });


      wx.onMenuShareTimeline({
        title: wxShareObj.pyqdesc,
        link: wxShareObj.linkUrl,
        imgUrl: wxShareObj.imgUrl
      });


      wx.onMenuShareQQ({
        title: wxShareObj.title,
        desc: wxShareObj.desc,
        link: wxShareObj.linkUrl,
        imgUrl: wxShareObj.imgUrl
      });


      wx.onMenuShareWeibo({
        title: wxShareObj.title,
        desc: wxShareObj.desc,
        link: wxShareObj.linkUrl,
        imgUrl: wxShareObj.imgUrl
      });
    });
  }
  else {
    APP.RIGHT_SHARE("分享", appShareData);
  }
};


