(function(e){function t(t){for(var r,i,u=t[0],c=t[1],a=t[2],f=0,p=[];f<u.length;f++)i=u[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(p.length)p.shift()();return l.push.apply(l,a||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},l=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var s=c;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("f14d")},"2d4f":function(e,t,n){},a652:function(e,t,n){},bb94:function(e,t,n){"use strict";var r=n("2d4f"),o=n.n(r);o.a},bcd5:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],attrs:{type:"text",placeholder:"请输入大于等于4的正整数"},domProps:{value:e.val},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleClick(t)},input:function(t){t.target.composing||(e.val=t.target.value)}}}),n("button",{on:{click:e.handleClick}},[e._v("走你")]),n("p",[e._v("共有 "+e._s(e.all.length)+" 种排列")]),n("div",e._l(e.all,function(t,r){return n("Block",{key:r,staticClass:"item",attrs:{n:e.n,arr:t}})}),1)])},o=[],l=n("7e38"),i=(n("bdf6"),n("5443"),n("473e"),n("28fa"),n("e2cc"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.n,function(t){return n("p",{key:"p-"+t},e._l(e.n,function(r){return n("span",{key:"block-"+r,class:["block",e.arr[t-1]===r-1?"block-light":""]})}),0)}),0)}),u=[],c={name:"Block",props:{n:Number,arr:Array}},a=c,s=(n("bb94"),n("d3d7")),f=Object(s["a"])(a,i,u,!1,null,"57251358",null),p=f.exports,h={components:{Block:p},data:function(){return{val:4,n:4,all:[],c:[]}},methods:{handleClick:function(){this.all=[],this.n=Number(this.val),this.queen(),console.log(this.all)},queen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(e===this.n)this.all.push(Object(l["a"])(this.c));else for(var t=0;t<this.n;t++)this.c[e]=t,this.check(e)&&this.queen(e+1)},check:function(e){for(var t=0;t<e;t++){if(this.c[e]===this.c[t])return!1;if(this.c[e]-e===this.c[t]-t)return!1;if(this.c[e]+e===this.c[t]+t)return!1}return!0}}},d=h,v=(n("e5cd"),Object(s["a"])(d,r,o,!1,null,null,null));t["a"]=v.exports},e5cd:function(e,t,n){"use strict";var r=n("a652"),o=n.n(r);o.a}});
//# sourceMappingURL=app.e3e43742.js.map