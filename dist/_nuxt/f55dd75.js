(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{275:function(t,e,n){var content=n(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("70f8de81",content,!0,{sourceMap:!1})},285:function(t,e,n){"use strict";n(275)},286:function(t,e,n){var o=n(49)(!1);o.push([t.i,"a[data-v-d9902994]{padding-left:10px;padding-right:10px}a[data-v-d9902994],a[data-v-d9902994]:hover{color:var(--text);text-decoration:none}a[data-v-d9902994]:hover{cursor:pointer}",""]),t.exports=o},287:function(t,e,n){"use strict";n.r(e);var o={props:{link:{type:String,required:!0},icon:{type:String,required:!0}},computed:{logoSize:function(){return this.windowWidth>725?50:30}},data:function(){return{windowWidth:window.innerWidth}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){this.windowWidth=window.innerWidth}}},r=(n(285),n(38)),d=n(88),c=n.n(d),l=n(272),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.link,target:"_blank"}},[n("v-icon",{attrs:{size:t.logoSize,color:"var(--highlight)"}},[t._v(t._s(t.icon))])],1)}),[],!1,null,"d9902994",null);e.default=component.exports;c()(component,{VIcon:l.a})}}]);