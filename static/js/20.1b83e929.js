(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"0232":function(i,t,s){"use strict";s.r(t);var e=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"page",attrs:{id:"firmtopDetail"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"f18 p15 pt10 pb10 bgc-white"},[i._v(i._s(i.deliveryDetail.firm_name))]),e("div",{staticClass:"mt10 p15 pt5 bgc-white"},[e("div",{staticClass:"title"},[i._v("企业简介")]),e("p",{domProps:{innerHTML:i._s(i.deliveryDetail.firm_key)}})]),e("div",{staticClass:"mt10 pl15 pr15 pt5 bgc-white"},[e("h3",{staticClass:"title"},[i._v("业务资源")]),e("div",{staticClass:"scrollWrap"},[e("div",{staticClass:"box",style:i.getScrollWidth()},i._l(i.resource,function(t,s){return e("div",{key:s,staticClass:"tc p10"},[e("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.r_img.op_spic,expression:"res.r_img.op_spic",arg:"background-image"}],staticClass:"res_img"}),e("div",{staticClass:"f12 gray mt5"},[i._v(i._s(t.r_title))])])}))])]),e("div",{staticClass:"mt15 p15 bgc-white"},[e("div",{staticClass:"box"},[e("div",{staticClass:"w120"},[i._v("联系方式：")]),e("div",{staticClass:"bf1 gray"},[i._v(i._s(i.deliveryDetail.phone))]),e("a",{attrs:{href:"tel:"+i.deliveryDetail.phone}},[e("img",{attrs:{width:"18",src:s("b993"),alt:""}})])]),e("div",{staticClass:"box mt10"},[e("div",{staticClass:"w120"},[i._v("公司地址：")]),e("div",{staticClass:"bf1 gray"},[i._v(i._s(i.deliveryDetail.f_address))])])])])])},a=[],r=s("90b9"),l={name:"firmtopDetail",data:function(){return{deliveryDetail:{},resource:[]}},created:function(){this.pullList()},methods:{getScrollWidth:function(){return"width:"+(this.resource&&2*this.resource.length)+"rem;"},pullList:function(){var i=this,t=this.$route.query;r["e"](t)||this.axios.get(this.apiConfig.getFirmDetail,{params:{id:t.id}}).then(function(t){1===t.s&&(i.$store.dispatch("UPDATE_LOADINGSTATE",!1),i.deliveryDetail=t.d,i.resource=t.d.resource)})}}},c=l,A=(s("1723"),s("2877")),n=Object(A["a"])(c,e,a,!1,null,"4818825e",null);n.options.__file="firmtop-detail.vue";t["default"]=n.exports},1723:function(i,t,s){"use strict";var e=s("95c0"),a=s.n(e);a.a},"95c0":function(i,t,s){},b993:function(i,t){i.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=20.1b83e929.js.map