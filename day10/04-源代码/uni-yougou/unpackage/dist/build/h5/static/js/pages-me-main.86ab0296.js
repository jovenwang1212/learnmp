(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-main"],{"68a6":function(e,t,i){var n=i("b375");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("c880aff6",n,!0,{sourceMap:!1,shadowMode:!1})},"8b7b":function(e,t,i){"use strict";i.r(t);var n=i("bbb5"),a=i.n(n);for(var l in n)"default"!==l&&function(e){i.d(t,e,function(){return n[e]})}(l);t["default"]=a.a},"8dea":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"header"},[i("div",{staticClass:"portrait-wrapper"},[i("div",{staticClass:"portrait"},[i("img",{attrs:{src:e.userInfo.avatarUrl?e.userInfo.avatarUrl:e.defaultImgUrl,alt:""}})])]),e.userInfo.nickName?i("p",[e._v(e._s(e.userInfo.nickName))]):i("p",[e._v("登录")])]),i("div",{staticClass:"content"},[e._m(0),i("div",{staticClass:"order-detail"},[i("p",{staticClass:"title"},[e._v("我的订单")]),i("ul",e._l(e.menuList,function(t){return i("li",{key:t.name,on:{click:function(i){i=e.$handleEvent(i),e.toOrder(t.index)}}},[i("span",{staticClass:"iconfont",class:t.clsName}),i("span",[e._v(e._s(t.name))])])}),0)]),e._m(1),i("div",{staticClass:"others"},[i("ul",[i("li",[i("span",[e._v("联系客服")]),i("span",{staticClass:"right",on:{click:function(t){t=e.$handleEvent(t),e.makeCall("18771930973")}}},[e._v("400-618-4000")])]),e._m(2)])])])])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",{staticClass:"favo"},[i("li",[i("span",{staticClass:"num"},[e._v("0")]),i("span",[e._v("收藏的店铺")])]),i("li",[i("span",{staticClass:"num"},[e._v("0")]),i("span",[e._v("收藏的商品")])]),i("li",[i("span",{staticClass:"num"},[e._v("0")]),i("span",[e._v("关注的商品")])]),i("li",[i("span",{staticClass:"num"},[e._v("0")]),i("span",[e._v("我的足迹")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"address"},[i("p",[e._v("收货地址管理")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("span",[e._v("意见反馈")])])}];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},b375:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".container[data-v-25e26f8e]{background-color:#f4f4f4;padding-bottom:%?40?%;font-size:14px}.header[data-v-25e26f8e]{height:%?410?%;background-color:#eb4450;padding-top:%?110?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.header .portrait[data-v-25e26f8e]{width:%?140?%;height:%?140?%;border-radius:50%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:0 %?68?%}.header .portrait img[data-v-25e26f8e]{width:%?130?%;height:%?130?%;border-radius:50%}.header p[data-v-25e26f8e]{color:#fff;margin-top:%?20?%}.content[data-v-25e26f8e]{margin:%?-28?% %?18?% 0;color:#333}.content .favo[data-v-25e26f8e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:#666;background-color:#fff;height:%?120?%;padding:0 %?32?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly}.content .favo li[data-v-25e26f8e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.content .favo .num[data-v-25e26f8e]{color:#999;margin-bottom:%?4?%}.content .order-detail[data-v-25e26f8e]{margin-top:%?20?%;background-color:#fff}.content .order-detail .title[data-v-25e26f8e]{height:%?88?%;line-height:%?88?%;padding-left:%?30?%;border-bottom:%?1?% solid #ddd;font-size:20px}.content .order-detail ul[data-v-25e26f8e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:%?166?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.content .order-detail ul li[data-v-25e26f8e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.content .order-detail ul li .iconfont[data-v-25e26f8e]{color:#eb4450;margin-bottom:%?20?%;font-size:%?48?%}.content .address[data-v-25e26f8e]{margin-top:%?20?%;background-color:#fff;padding-left:%?30?%;height:%?88?%;line-height:%?88?%}.content .others[data-v-25e26f8e]{margin-top:%?20?%;background-color:#fff}.content .others ul li[data-v-25e26f8e]{height:%?86?%;line-height:%?86?%;border-bottom:%?1?% solid #ddd;margin:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.content .others ul li .right[data-v-25e26f8e]{color:#999}.content .others ul li[data-v-25e26f8e]:last-child{border:none}",""])},bbb5:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="http://www.sucaijishi.com/uploadfile/2018/0508/20180508023717621.png",a={data:function(){return{menuList:[{name:"待付款",index:1,clsName:"icon-pre-pay"},{name:"待收货",index:2,clsName:"icon-pre-receive"},{name:"退款/退货",index:3,clsName:"icon-tuihuo"},{name:"全部订单",index:0,clsName:"icon-all-order"}],userInfo:{},defaultImgUrl:n}},onShow:function(){this.userInfo=wx.getStorageSync("userInfo")},methods:{toOrder:function(e){wx.navigateTo({url:"/pages/order/main?activeIndex="+e})},makeCall:function(e){wx.makePhoneCall({phoneNumber:e})}}};t.default=a},d132:function(e,t,i){"use strict";i.r(t);var n=i("8dea"),a=i("8b7b");for(var l in a)"default"!==l&&function(e){i.d(t,e,function(){return a[e]})}(l);i("e0d6");var o=i("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"25e26f8e",null);t["default"]=s.exports},e0d6:function(e,t,i){"use strict";var n=i("68a6"),a=i.n(n);a.a}}]);