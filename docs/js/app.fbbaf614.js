(function(t){function e(e){for(var r,s,u=e[0],l=e[1],a=e[2],c=0,f=[];c<u.length;c++)s=u[c],i[s]&&f.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);h&&h(e);while(f.length)f.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var l=n[u];0!==i[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var h=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Game")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Game of life")]),n("button",{attrs:{name:"cycle"},on:{click:t.cycle}},[t._v("Start cycle")]),n("table",t._l(t.itemsToDisplay,function(e){return n("tr",t._l(e,function(e){return n("td",{class:{alive:e.alive},on:{click:function(n){return t.toggleLife(e.id)}}},[null!=e&&e.alive?n("span"):t._e()])}),0)}),0)])},u=[],l=n("f499"),a=n.n(l),h=(n("20d6"),n("ac6a"),{data:function(){return{items:[],itemsToDisplay:[],rowLength:10}},mounted:function(){for(var t=1;t<=this.rowLength*this.rowLength;t++){var e=[];e[0]=(t-1)%this.rowLength===0||t<this.rowLength+1?null:t-this.rowLength-1,e[1]=t-this.rowLength>0?t-this.rowLength:null,e[2]=t%this.rowLength===0||t<=this.rowLength-1?null:t-this.rowLength+1,e[3]=t%this.rowLength===0?null:t+1,e[4]=t+this.rowLength>this.rowLength*this.rowLength||t%this.rowLength===0?null:t+this.rowLength+1,e[5]=t+this.rowLength<=this.rowLength*this.rowLength?t+this.rowLength:null,e[6]=t+this.rowLength>this.rowLength*this.rowLength||(t-1)%this.rowLength===0?null:t+this.rowLength-1,e[7]=(t-1)%this.rowLength===0?null:t-1,this.items.push({id:t,neighbours:e,alive:!1})}this.populateBoard()},methods:{cycle:function(){var t=this;setInterval(function(){var e=[];t.items.forEach(function(n){var r=!1,i=n.neighbours.filter(function(e){return null!==e&&t.items[e-1].alive}).length;!1===n.alive&&(r=3===i),!0===n.alive&&(r=3===i||2===i),e.push({id:n.id,neighbours:n.neighbours,alive:r})}),t.items=e,t.populateBoard()},500)},toggleLife:function(t){var e=this.items.findIndex(function(e){return e.id===t});this.items[e].alive=!this.items[e].alive,this.populateBoard()},populateBoard:function(){this.itemsToDisplay=[];var t=JSON.parse(a()(this.items));while(t.length>0)this.itemsToDisplay.push(t.splice(0,this.rowLength))}}}),c=h,f=(n("e0a9"),n("2877")),p=Object(f["a"])(c,s,u,!1,null,"e0791f9e",null),g=p.exports,d={name:"app",components:{Game:g}},v=d,w=(n("034f"),Object(f["a"])(v,i,o,!1,null,null,null)),m=w.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(m)}}).$mount("#app")},"64a9":function(t,e,n){},b330:function(t,e,n){},e0a9:function(t,e,n){"use strict";var r=n("b330"),i=n.n(r);i.a}});
//# sourceMappingURL=app.fbbaf614.js.map