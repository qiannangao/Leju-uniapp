(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-confirmOrder-confirmOrder"],{"15d8":function(t,e,r){"use strict";r("7a82");var n=r("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.addPreOrder=function(t){return(0,o.default)({url:"/lejuClient/order/addPreOrder",method:"post",data:t})},e.getPay=function(t){return(0,o.default)({url:"/lejuClient/order/payConfirm",method:"post",data:t})},e.getPreOrder=function(t){return(0,o.default)({url:"/lejuClient/order/getPreOrderById/".concat(t),method:"get"})};var o=n(r("3874"))},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),d=c.value}catch(u){return void r(u)}c.done?e(d):Promise.resolve(d).then(n,o)}r("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,d,"next",t)}function d(t){n(i,o,a,c,d,"throw",t)}c(void 0)}))}},r("d3b7")},3874:function(t,e,r){"use strict";r("7a82");var n=r("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("d3b7");var o=n(r("7c53"));var a=function(t){return new Promise((function(e,r){uni.request({url:o.default+t.url,method:t.method,data:t.data,timeout:5e3,header:{token:uni.getStorageSync("token")?uni.getStorageSync("token"):""},success:function(t){t.data.success?e(t.data):20002==t.data.code&&uni.showModal({title:"登录提示",content:"登录异常，是否重新登录",success:function(t){t.confirm?uni.navigateTo({url:"/pages/mine/login/login"}):uni.showToast({title:"您点击了取消",icon:"none"})}})},fail:function(t){r(t)}})}))};e.default=a},4680:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[r("v-uni-view",{staticClass:"buy"},[t._v("等待买家付款")]),t.address.name?r("v-uni-navigator",{staticClass:"address",attrs:{url:"../address/address"}},[r("v-uni-view",{staticClass:"name"},[t._v("姓名："+t._s(t.address.name))]),r("v-uni-view",{staticClass:"phone"},[t._v("手机号："+t._s(t.address.phoneNumber))]),r("v-uni-view",{staticClass:"address-detail"},[t._v("详细地址："+t._s(t.address.province)+"-"+t._s(t.address.city)+"-"+t._s(t.address.region))])],1):r("v-uni-navigator",{staticClass:"choose-address",attrs:{"open-type":"navigate",url:"../address/address"}},[t._v("去选择收货地址")]),r("v-uni-view",{staticClass:"order"},[r("v-uni-view",{staticClass:"order-number"},[t._v("订单编号："+t._s(t.orderNum))]),r("v-uni-view",{staticClass:"line"}),r("v-uni-view",{staticClass:"order-content"},[r("v-uni-view",{staticClass:"img"},[r("v-uni-image",{staticClass:"order-img",attrs:{src:t.orderContent.productPic,mode:""}})],1),r("v-uni-view",{staticClass:"info"},[r("v-uni-view",{staticClass:"name"},[t._v(t._s(t.orderContent.productName))]),r("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.orderContent.productPrice)+"元")]),r("v-uni-view",{staticClass:"specification"},[t._v(t._s(t._f("formatData")(t.orderContent.productAttr)))])],1)],1),r("v-uni-view",{staticClass:"line"}),r("v-uni-view",{staticClass:"bottom"},[r("v-uni-view",{staticClass:"total"},[t._v("合计￥"+t._s(t.orderContent.totalPrice)+"元")]),r("v-uni-view",{staticClass:"buy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getaddPreOrder.apply(void 0,arguments)}}},[t._v("继续付款")])],1)],1)],1)},o=[]},6646:function(t,e,r){"use strict";r.r(e);var n=r("c170"),o=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},7441:function(t,e,r){var n=r("a19f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("d9e76826",n,!0,{sourceMap:!1,shadowMode:!1})},"7c53":function(t,e,r){"use strict";r("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="";n="http://leju.bufan.cloud";var o=n;e.default=o},a19f:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.address[data-v-082bcf44]{width:%?670?%;height:%?200?%;background-color:#fff;margin:%?30?% auto;display:flex;justify-content:flex-start;flex-wrap:wrap;border-radius:%?10?%}.address .name[data-v-082bcf44]{width:%?670?%;height:%?50?%;font-size:%?36?%}.address .phone[data-v-082bcf44]{width:%?670?%;height:%?30?%;color:grey}.address .address-detail[data-v-082bcf44]{width:%?670?%;height:%?30?%}.order[data-v-082bcf44]{width:%?670?%;height:%?1000?%;padding:%?30?%;box-sizing:border-box;background-color:#fff;margin:%?20?% auto;border-radius:%?10?%;color:#747575}.order .line[data-v-082bcf44]{width:%?610?%;height:%?2?%;background-color:grey;margin:%?30?% auto}.order .order-number[data-v-082bcf44]{width:%?610?%;height:%?80?%}.order .order-content[data-v-082bcf44]{width:%?610?%;height:%?200?%;display:flex;justify-content:space-between}.order .order-content .order-img[data-v-082bcf44]{width:%?200?%;height:%?200?%}.order .order-content .info[data-v-082bcf44]{width:%?400?%;height:%?200?%;padding:%?30?%;box-sizing:border-box;display:flex;flex-wrap:wrap}.order .order-content .info .name[data-v-082bcf44]{width:%?400?%;height:%?50?%;font-size:%?36?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.order .order-content .info .price[data-v-082bcf44]{width:%?400?%;height:%?50?%}.order .order-content .info .specification[data-v-082bcf44]{width:%?400?%;height:%?50?%;color:#999da2}.order .bottom[data-v-082bcf44]{width:%?610?%;height:%?200?%}.order .bottom .total[data-v-082bcf44]{width:%?610?%;height:%?50?%;text-align:right}.order .bottom .buy[data-v-082bcf44]{float:right;width:80px;height:%?50?%;border:1px solid #000;border-radius:%?10?%;color:#555b58;display:flex;justify-content:center;align-items:center}',""]),t.exports=e},c170:function(t,e,r){"use strict";r("7a82");var n=r("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("d3b7"),r("159b");var o=n(r("c7eb")),a=n(r("1da1")),i=n(r("5530")),c=r("15d8"),d=r("26cb"),u={data:function(){return{orderId:"",orderNum:"",orderContent:""}},onLoad:function(t){console.log(t),this.orderId=t.id,this.getPreOrderList()},computed:(0,i.default)({},(0,d.mapState)(["address"])),filters:{formatData:function(t){var e="";try{var r=JSON.parse(t);r.forEach((function(t){e+=";"+t.key+":"+t.value})),e=e.substring(1)}catch(n){return t}return e}},methods:{getPreOrderList:function(){var t=this;return(0,a.default)((0,o.default)().mark((function e(){var r;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.getPreOrder)(t.orderId);case 2:r=e.sent,t.orderNum=r.data.orderBase.orderSn,t.orderContent=r.data.orderItems[0],console.log("getPreOrder",r);case 6:case"end":return e.stop()}}),e)})))()},getaddPreOrder:function(){var t=this;return(0,a.default)((0,o.default)().mark((function e(){var r;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.addPreOrder)({addressId:t.address.id,orderId:t.orderId,orderItemList:[{productId:t.orderContent.productId,productQuantity:t.orderContent.productQuantity,productSkuId:t.orderContent.productSkuId}]});case 2:r=e.sent,r.success&&uni.navigateTo({url:"/pages/confirmOrder/pay/pay?id=".concat(r.data.orderId)}),console.log("addPreOrder",r);case 5:case"end":return e.stop()}}),e)})))()}}};e.default=u},c7eb:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",d=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(I){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new j(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=f;var h={};function v(){}function p(){}function g(){}var y={};s(y,c,(function(){return this}));var w=Object.getPrototypeOf,m=w&&w(w(E([])));m&&m!==r&&o.call(m,c)&&(y=m);var b=g.prototype=v.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var r;a(this,"_invoke",{value:function(a,i){function c(){return new e((function(r,c){(function r(a,i,c,d){var u=l(t[a],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==(0,n.default)(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,d)}),(function(t){r("throw",t,c,d)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,d)}))}d(u.arg)})(a,i,r,c)}))}return r=r?r.then(c,c):c()}})}function O(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=C(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var d=l(t,e,r);if("normal"===d.type){if(n=r.done?"completed":"suspendedYield",d.arg===h)continue;return{value:d.arg,done:r.done}}"throw"===d.type&&(n="completed",r.method="throw",r.arg=d.arg)}}}function C(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator["return"]&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=g,a(b,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:p,configurable:!0}),p.displayName=s(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(x.prototype),s(x.prototype,d,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(b),s(b,u,"Generator"),s(b,c,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=E,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),d=o.call(a,"finallyLoc");if(c&&d){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t},r("7a82"),r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("d9e2"),r("d401"),r("14d9"),r("159b"),r("131a"),r("26e9"),r("fb6a");var n=function(t){return t&&t.__esModule?t:{default:t}}(r("53ca"))},e47d:function(t,e,r){"use strict";r.r(e);var n=r("4680"),o=r("6646");for(var a in o)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(a);r("fa7a");var i=r("f0c5"),c=Object(i["a"])(o["default"],n["b"],n["c"],!1,null,"082bcf44",null,!1,n["a"],void 0);e["default"]=c.exports},fa7a:function(t,e,r){"use strict";var n=r("7441"),o=r.n(n);o.a}}]);