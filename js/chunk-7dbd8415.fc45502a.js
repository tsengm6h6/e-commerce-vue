(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dbd8415"],{1276:function(t,e,r){"use strict";var n=r("d784"),i=r("44e7"),a=r("825a"),c=r("1d80"),s=r("4840"),o=r("8aa5"),l=r("50c4"),u=r("14c3"),d=r("9263"),p=r("9f7f"),f=p.UNSUPPORTED_Y,g=[].push,v=Math.min,h=4294967295;n("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(c(this)),a=void 0===r?h:r>>>0;if(0===a)return[];if(void 0===t)return[n];if(!i(t))return e.call(n,t,a);var s,o,l,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=new RegExp(t.source,p+"g");while(s=d.call(v,n)){if(o=v.lastIndex,o>f&&(u.push(n.slice(f,s.index)),s.length>1&&s.index<n.length&&g.apply(u,s.slice(1)),l=s[0].length,f=o,u.length>=a))break;v.lastIndex===s.index&&v.lastIndex++}return f===n.length?!l&&v.test("")||u.push(""):u.push(n.slice(f)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var i=c(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,i,r):n.call(String(i),e,r)},function(t,i){var c=r(n,t,this,i,n!==e);if(c.done)return c.value;var d=a(t),p=String(this),g=s(d,RegExp),x=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(f?"g":"y"),b=new g(f?"^(?:"+d.source+")":d,m),_=void 0===i?h:i>>>0;if(0===_)return[];if(0===p.length)return null===u(b,p)?[p]:[];var y=0,E=0,w=[];while(E<p.length){b.lastIndex=f?0:E;var R,C=u(b,f?p.slice(E):p);if(null===C||(R=v(l(b.lastIndex+(f?E:0)),p.length))===y)E=o(p,E,x);else{if(w.push(p.slice(y,E)),w.length===_)return w;for(var I=1;I<=C.length-1;I++)if(w.push(C[I]),w.length===_)return w;E=y=R}}return w.push(p.slice(y)),w}]}),f)},"14c3":function(t,e,r){var n=r("c6b6"),i=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var a=r.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},2218:function(t,e,r){},"4c33":function(t,e,r){"use strict";r("cc62")},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),i=r("9f7f"),a=r("5692"),c=RegExp.prototype.exec,s=a("native-string-replace",String.prototype.replace),o=c,l=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],p=l||d||u;p&&(o=function(t){var e,r,i,a,o=this,p=u&&o.sticky,f=n.call(o),g=o.source,v=0,h=t;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),h=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(g="(?: "+g+")",h=" "+h,v++),r=new RegExp("^(?:"+g+")",f)),d&&(r=new RegExp("^"+g+"$(?!\\s)",f)),l&&(e=o.lastIndex),i=c.call(p?r:o,h),p?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=o.lastIndex,o.lastIndex+=i[0].length):o.lastIndex=0:l&&i&&(o.lastIndex=o.global?i.index+i[0].length:e),d&&i&&i.length>1&&s.call(i[0],r,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(i[a]=void 0)})),i}),t.exports=o},"9f7f":function(t,e,r){"use strict";var n=r("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a189:function(t,e,r){"use strict";r("2218")},ac1f:function(t,e,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},cc62:function(t,e,r){},d2f1:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-section"},[t.isLoading?r("Loading"):[r("div",{staticClass:"title-wrapper"},[r("h1",[t._v(t._s(t.product.title))]),r("p",[t._v(t._s(t.product.content))])]),r("el-image",{attrs:{src:t.product.image,fit:"cover"}},[r("img",{staticClass:"image-slot",attrs:{slot:"error",src:"https://i.imgur.com/m4YOpWy.png"},slot:"error"})]),r("div",{staticClass:"info-wrapper"},[r("el-row",[r("el-col",{attrs:{xs:24,sm:12,md:12,lg:14}},t._l(t.product.description,(function(e,n){return r("div",{key:n,staticClass:"info"},[r("h3",[t._v(t._s(e.title))]),r("ul",t._l(e.infos,(function(e,n){return r("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)])})),0),r("el-col",{attrs:{xs:{span:22,offset:1},sm:12,md:12,lg:10}},[r("div",{staticClass:"price-wrapper"},[r("div",{staticClass:"price-tag-wrapper"},[r("p",[r("span",{staticClass:"price-tag"},[t._v("$"+t._s(t.product.price))]),t._v(t._s(t.product.unit)+" ")]),t.product.origin_price?r("del",[t._v("$"+t._s(t.product.origin_price)+t._s(t.product.unit))]):t._e()]),r("hr"),r("p",[t._v("開放報名中")]),r("el-button",{attrs:{type:"danger"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.handleOpenDialog(e)}}},[t._v("立即報名")]),r("p",[t._v("三人團報、平日班，享有每人$500折扣優惠，最多可折$1000每人。")])],1)]),r("AddToCartDialog",{ref:"dialog",attrs:{product:t.product}})],1)],1)],r("RelativeProduct",{ref:"relative"})],2)},i=[],a=r("5530"),c=r("1da1"),s=(r("96cf"),r("a4d3"),r("e01a"),r("fb6a"),r("ac1f"),r("1276"),r("159b"),r("d81d"),r("965b")),o=r("37b4"),l=r("d4cc"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"relative-product"},[r("h3",[t._v("相關商品")]),r("el-divider"),r("el-row",{staticClass:"relative-card",attrs:{gutter:20}},t._l(t.relativeList,(function(e){return r("el-col",{key:e.id,staticClass:"card",attrs:{xs:{span:22,offset:1},sm:12,md:8,lg:8}},[r("div",{staticClass:"img-wrapper"},[r("router-link",{attrs:{to:{name:"product",params:{id:e.id}}}},[e.image?r("img",{staticClass:"image",attrs:{src:e.image}}):r("el-image",[r("img",{staticClass:"image-slot",attrs:{slot:"error",src:"https://i.imgur.com/F5dYi4q.png"},slot:"error"})])],1)],1),r("div",{staticClass:"card-content"},[r("h3",{staticClass:"product-title"},[t._v(" "+t._s(e.title)+" ")]),r("p",{staticClass:"price-tag"},[t._v("NT$ "+t._s(e.price)+" "+t._s(e.unit))])])])})),1)],1)},d=[],p=(r("4de4"),r("2f62")),f={name:"RelativeProduct",data:function(){return{category:"",currId:"",relativeList:[]}},watch:{currId:{handler:function(t){var e=this;this.relativeList=this.productsList.filter((function(r){return r.category===e.category&&r.id!==t})).slice(0,3)}}},computed:Object(a["a"])({},Object(p["d"])(["productsList"]))},g=f,v=(r("a189"),r("2877")),h=Object(v["a"])(g,u,d,!1,null,"1c5b3d36",null),x=h.exports,m=r("3a5e"),b={name:"product",components:{AddToCartDialog:l["a"],RelativeProduct:x,Loading:m["a"]},metaInfo:function(){return{title:this.product.title}},data:function(){return{product:{category:"",content:"",description:"",id:"",image:"",is_enabled:0,num:1,origin_price:null,price:null,title:"",unit:""},isLoading:!1}},mixins:[o["a"]],created:function(){var t=this.$route.params.id;this.fetchProduct(t)},beforeRouteUpdate:function(t,e,r){var n=t.params.id;this.fetchProduct(n),r()},methods:{fetchProduct:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var n,i,c,o,l,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isLoading=!0,r.next=4,s["a"].getProduct({id:t});case 4:if(n=r.sent,!0===n.data.success){r.next=7;break}throw new Error;case 7:i=n.data.product.description,c=i?i.split("#").slice(0):[],o=[],l=[],c.forEach((function(t,e){if(e%2===0)o.push(t);else{var r=t.split("|");l.push(r)}})),u=o.map((function(t,e){return{title:t,infos:l[e]}})),e.product=Object(a["a"])(Object(a["a"])(Object(a["a"])({},e.product),n.data.product),{},{description:u}),e.isLoading=!1,e.$refs.relative.category=e.product.category,e.$refs.relative.currId=e.product.id,r.next=23;break;case 19:r.prev=19,r.t0=r["catch"](0),e.$message.error("無法取得頁面，請稍後再試"),e.isLoading=!1;case 23:case"end":return r.stop()}}),r,null,[[0,19]])})))()},handleOpenDialog:function(){this.$refs.dialog.handleOpen(this.product)}}},_=b,y=(r("4c33"),Object(v["a"])(_,n,i,!1,null,"74142b7e",null));e["default"]=y.exports},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("9263"),a=r("d039"),c=r("b622"),s=r("9112"),o=c("species"),l=RegExp.prototype,u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),p=c("replace"),f=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),g=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,p){var v=c(t),h=!a((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),x=h&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return e=!0,null},r[v](""),!e}));if(!h||!x||"replace"===t&&(!u||!d||f)||"split"===t&&!g){var m=/./[v],b=r(v,""[t],(function(t,e,r,n,a){var c=e.exec;return c===i||c===l.exec?h&&!a?{done:!0,value:m.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),_=b[0],y=b[1];n(String.prototype,t,_),n(l,v,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}p&&s(l[v],"sham",!0)}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),a=r("da84"),c=r("5135"),s=r("861d"),o=r("9bf2").f,l=r("e893"),u=a.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(p,u);var f=p.prototype=u.prototype;f.constructor=p;var g=f.toString,v="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;o(f,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=g.call(t);if(c(d,t))return"";var r=v?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=chunk-7dbd8415.fc45502a.js.map