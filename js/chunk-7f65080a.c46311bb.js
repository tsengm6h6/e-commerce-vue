(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f65080a"],{"04b6":function(t,e,r){"use strict";r("ac8e")},"48d5":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",{attrs:{direction:"vertical"}},[r("div",{staticClass:"title"},[r("h3",[t._v("收藏清單")]),t.favoriteList.length?r("p",[t._v("不要再猶豫，趕快手刀報名！")]):t._e()]),r("Breadcrumb",{staticClass:"breadcrumb"}),r("el-row",{attrs:{gutter:20}},[t.favoriteList.length?t._e():r("div",{staticClass:"wrapper"},[r("Octopus"),r("p",[t._v("目前沒有收藏唷")])],1),t._l(t.favoriteList,(function(e){return r("ProductCard",{key:e.id,attrs:{"init-product":e},on:{"toggle-favorite":t.toggleFavorite}})}))],2)],1)},o=[],i=r("5530"),c=(r("c740"),r("a434"),r("e915")),n=r("961d"),s=r("2f62"),u=r("2fbc"),l={name:"Favorites",components:{ProductCard:c["a"],Octopus:n["a"],Breadcrumb:u["a"]},metaInfo:{title:"收藏清單"},computed:Object(i["a"])({},Object(s["c"])(["favoriteList"])),methods:{toggleFavorite:function(t){this.$store.commit("UpdateFavorite",t);var e=JSON.parse(window.localStorage.getItem("favorite_products"))||[],r=e.findIndex((function(e){return e===t}));-1===r?e.push(t):e.splice(r,1),localStorage.setItem("favorite_products",JSON.stringify(e))}}},d=l,f=(r("04b6"),r("2877")),p=Object(f["a"])(d,a,o,!1,null,"3190e73e",null);e["default"]=p.exports},ac8e:function(t,e,r){}}]);
//# sourceMappingURL=chunk-7f65080a.c46311bb.js.map