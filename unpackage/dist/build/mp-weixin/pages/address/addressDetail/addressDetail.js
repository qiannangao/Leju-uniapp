(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/addressDetail/addressDetail"],{"1e1f":function(e,n,t){},"463d":function(e,n,t){"use strict";t.r(n);var o=t("b9ea"),a=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=a.a},"51e2":function(e,n,t){"use strict";var o=t("1e1f"),a=t.n(o);a.a},8760:function(e,n,t){"use strict";(function(e,n){var o=t("4ea4");t("b9ca");o(t("66fd"));var a=o(t("b4a7"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(a.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},b4a7:function(e,n,t){"use strict";t.r(n);var o=t("c4d5"),a=t("463d");for(var i in a)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("51e2");var r=t("f0c5"),d=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"34f06539",null,!1,o["a"],void 0);n["default"]=d.exports},b9ea:function(e,n,t){"use strict";(function(e){var o=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("2eee")),i=o(t("c973")),r=t("306b"),d={components:{pickRegions:function(){Promise.all([t.e("common/vendor"),t.e("components/pick-regions/pick-regions")]).then(function(){return resolve(t("8645"))}.bind(null,t)).catch(t.oe)}},data:function(){return{region:[],defaultRegion:["河南省","郑州市","中原区"],defaultRegionCode:"450007",addressId:"",name:"",phone:"",detailAddress:""}},onLoad:function(e){this.addressId=e.id},computed:{regionName:function(){return this.region.map((function(e){return e.name})).join(" ")}},methods:{handleGetRegion:function(e){this.region=e,this.defaultRegion=this.region.map((function(e){return e.name})),console.log("region",e)},doSubmit:function(){var n=this;return(0,i.default)(a.default.mark((function t(){var o,i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.addressId){t.next=7;break}return t.next=3,(0,r.updateAddress)({city:n.region[1].name,cityCode:n.region[2].code,defaultStatus:0,detailAddress:n.detailAddress,id:n.addressId,name:n.name,phoneNumber:n.phone,postCode:"470000",province:n.region[0].name,region:n.region[2].name,tag:"公司"});case 3:o=t.sent,console.log("updateAddress",o),t.next=13;break;case 7:return t.next=9,(0,r.addAddress)({city:n.region[1].name,cityCode:n.region[2].code,defaultStatus:0,detailAddress:"罗庄小区",name:"nancy",phoneNumber:n.phone,postCode:"470000",province:n.region[0].name,region:n.region[2].name,tag:"公司"});case 9:i=t.sent,console.log(22),console.log("addAddress",i),e.navigateBack({delta:1});case 13:case"end":return t.stop()}}),t)})))()}}};n.default=d}).call(this,t("543d")["default"])},c4d5:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}));var o={pickRegions:function(){return Promise.all([t.e("common/vendor"),t.e("components/pick-regions/pick-regions")]).then(t.bind(null,"8645"))}},a=function(){var e=this.$createElement,n=(this._self._c,this.defaultRegion.join("-"));this.$mp.data=Object.assign({},{$root:{g0:n}})},i=[]}},[["8760","common/runtime","common/vendor"]]]);