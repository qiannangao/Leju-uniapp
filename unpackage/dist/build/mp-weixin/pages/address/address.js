(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"13da":function(e,t,n){"use strict";n.r(t);var r=n("76ed"),s=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=s.a},"32ef":function(e,t,n){"use strict";n.r(t);var r=n("5b26"),s=n("13da");for(var a in s)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(a);n("4f13");var i=n("f0c5"),d=Object(i["a"])(s["default"],r["b"],r["c"],!1,null,"2636bc7a",null,!1,r["a"],void 0);t["default"]=d.exports},"41c2":function(e,t,n){"use strict";(function(e,t){var r=n("4ea4");n("b9ca");r(n("66fd"));var s=r(n("32ef"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(s.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"4f13":function(e,t,n){"use strict";var r=n("e77b"),s=n.n(r);s.a},"5b26":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"96ea"))}},s=function(){var e=this.$createElement,t=(this._self._c,this.addressList.length);this.$mp.data=Object.assign({},{$root:{g0:t}})},a=[]},"76ed":function(e,t,n){"use strict";(function(e){var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(n("2eee")),a=r(n("c973")),i=r(n("9523")),d=n("306b"),c=n("26cb");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={data:function(){return{addressList:[]}},onLoad:function(){this.findAllAddressList()},methods:u(u({},(0,c.mapMutations)(["updateAddress"])),{},{findAllAddressList:function(){var e=this;return(0,a.default)(s.default.mark((function t(){var n;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,d.findAllAddress)();case 2:n=t.sent,console.log("findAllAddress",n),e.addressList=n.data.items,console.log(e.addressList);case 6:case"end":return t.stop()}}),t)})))()},goAddress:function(){e.navigateTo({url:"/pages/address/addressDetail/addressDetail"})},chooseAddress:function(t){this.updateAddress(t),e.navigateBack({delta:1})},editAddress:function(t){e.navigateTo({url:"/pages/address/addressDetail/addressDetail"})}})};t.default=f}).call(this,n("543d")["default"])},e77b:function(e,t,n){}},[["41c2","common/runtime","common/vendor"]]]);