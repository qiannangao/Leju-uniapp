(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/productDetail/productDetail"],{"745f":function(t,e,n){"use strict";(function(t,e){var r=n("4ea4");n("b9ca");r(n("66fd"));var i=r(n("ff11"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"7dc0":function(t,e,n){"use strict";var r=n("da6d"),i=n.n(r);i.a},"890c":function(t,e,n){"use strict";n.r(e);var r=n("fd6d"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},a808:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"96ea"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.productDetail&&t.isMaskShow?t.__map(t.skuList,(function(e,n){var r=t.__get_orig(e),i=t._f("formatSpData")(e.spData);return{$orig:r,f0:i}})):null);t.$mp.data=Object.assign({},{$root:{l0:n}})},o=[]},da6d:function(t,e,n){},fd6d:function(t,e,n){"use strict";(function(t){var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("2eee")),o=r(n("c973")),c=r(n("c092")),a=n("0bfe"),u={mixins:[c.default],data:function(){return{productId:"",productDetail:null,isCollect:!1,isMaskShow:!1,skuList:null,current:0,num:1,flag:""}},onLoad:function(e){var n=this;console.log("options",e),this.productId=e.id,this.getproductDetail();var r=t.getStorageSync("collectList");if(r){var i=r.find((function(t){return t.id==n.productId}));this.isCollect=!!i}else this.isCollect=!1},filters:{formatSpData:function(t){var e="";try{var n=JSON.parse(t);n.forEach((function(t){e+=","+t.key+":"+t.value})),e=e.substring(1),console.log("str",e)}catch(r){return console.log(r),t}return e}},computed:{swiperList:function(){return this.productDetail.albumPics.split(",")}},methods:{getproductDetail:function(){var e=this;return(0,o.default)(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,a.productDetail)(e.productId);case 2:r=n.sent,console.log("productDetail",r),e.productDetail=r.data.product,t.setNavigationBarTitle({title:e.productDetail.brandName});case 6:case"end":return n.stop()}}),n)})))()},collected:function(){var e=this;if(this.checkLogin()){var n=t.getStorageSync("collectList");if(n){var r=n.find((function(t){return t.id==e.productDetail.id}));if(r){var i=n.findIndex((function(t){return t.id==e.productDetail.id}));n.splice(i,1),this.isCollect=!1,t.showToast({title:"已取消收藏"})}else n.push(this.productDetail),this.isCollect=!0,t.showToast({title:"收藏成功"});console.log(n),t.setStorageSync("collectList",n)}else t.setStorageSync("collectList",[this.productDetail]),this.isCollect=!0,t.showToast({title:"收藏成功"});console.log(111)}},doProductChange:function(t){this.isMaskShow=!0,this.skuList=this.productDetail.skuList,this.flag=t},close:function(){this.isMaskShow=!1},changePic:function(t){this.current=t},subNum:function(){this.num--,this.num<1&&(t.showToast({title:"最少选择一件商品"}),this.num=1)},addNum:function(){this.num++},doSubmit:function(){var e=this;return(0,o.default)(i.default.mark((function n(){var r,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.checkLogin()){n.next=2;break}return n.abrupt("return");case 2:if("cart"!=e.flag){n.next=10;break}return n.next=5,(0,a.addCart)({productId:e.productId,productSkuId:e.productDetail.skuList[e.current].id,quantity:e.num});case 5:r=n.sent,console.log("addCart",r),r.success&&(t.showToast({title:"添加成功"}),e.isMaskShow=!1),n.next=16;break;case 10:if("buy"!=e.flag){n.next=16;break}return n.next=13,(0,a.addPreorder)({orderItemList:[{productId:e.productId,productQuantity:e.num,productSkuId:e.productDetail.skuList[e.current].id}]});case 13:o=n.sent,o.success&&(t.showToast({title:"1s后跳转至订单确认页"}),setTimeout((function(){return t.navigateTo({url:"/pages/confirmOrder/confirmOrder?id=".concat(o.data.orderId)})}),1e3)),console.log("addPreorder",o);case 16:case"end":return n.stop()}}),n)})))()}}};e.default=u}).call(this,n("543d")["default"])},ff11:function(t,e,n){"use strict";n.r(e);var r=n("a808"),i=n("890c");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("7dc0");var c=n("f0c5"),a=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"5b6771d3",null,!1,r["a"],void 0);e["default"]=a.exports}},[["745f","common/runtime","common/vendor"]]]);