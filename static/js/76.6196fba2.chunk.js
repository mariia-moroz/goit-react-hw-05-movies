(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{8076:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return i}});var r=n(6871),a=n(1627),c={list:"Cast_list__GlWio",item:"Cast_item__a0CDL",imageContainer:"Cast_imageContainer__QtUZs",title:"Cast_title__0cH9s",infoText:"Cast_infoText__opBek"},s=n(184);function i(){var t=(0,r.bx)(),e=(0,a.Z)("cast",t);if(e)return(0,s.jsx)("ul",{className:c.list,children:e.map((function(t){var e=t.id,n=t.name,r=t.character,a=t.profile_path;return(0,s.jsxs)("li",{className:c.item,children:[(0,s.jsx)("div",{className:c.imageContainer,children:(0,s.jsx)("img",{src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(a),alt:n})}),(0,s.jsxs)("div",{className:c.info,children:[(0,s.jsx)("p",{className:"".concat(c.infoText," ").concat(c.title),children:n}),(0,s.jsxs)("p",{className:c.infoText,children:[(0,s.jsx)("span",{className:c.title,children:"Character:"})," ",r]})]})]},e)}))})}},1627:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r=n(5861),a=n(885),c=n(7757),s=n.n(c),i=n(2791),u=n(2007),o=n.n(u),p=n(4390);function f(t,e){var n=(0,i.useState)(null),c=(0,a.Z)(n,2),u=c[0],o=c[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(s().mark((function n(){var r,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,n.t0=t,n.next="cast"===n.t0?4:"reviews"===n.t0?9:14;break;case 4:return n.next=6,(0,p.M1)(e);case 6:return r=n.sent,o(r),n.abrupt("break",15);case 9:return n.next=11,(0,p.tx)(e);case 11:return a=n.sent,o(a),n.abrupt("break",15);case 14:throw new Error("Type ".concat(t," does not exist"));case 15:n.next=21;break;case 17:return n.prev=17,n.t1=n.catch(0),console.log(n.t1),n.abrupt("return",n.t1);case 21:case"end":return n.stop()}}),n,null,[[0,17]])})));return function(){return n.apply(this,arguments)}}();n()}),[e,t]),u}f.propTypes={type:o().string.isRequired,id:o().number.isRequired}},4390:function(t,e,n){"use strict";n.d(e,{Hg:function(){return o},M1:function(){return h},TP:function(){return f},tx:function(){return m},z1:function(){return _}});var r=n(5861),a=n(7757),c=n.n(a),s=n(4569),i=n.n(s),u="306e564986f0782b8ec4bf227b0f3c28";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/movie/day?api_key=".concat(u));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(e,"?api_key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URLSearchParams({api_key:u,query:e}),t.next=3,i().get("/search/movie?".concat(n));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3"},888:function(t,e,n){"use strict";var r=n(9047);function a(){}function c(){}c.resetWarningCache=a,t.exports=function(){function t(t,e,n,a,c,s){if(s!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(t,e,n){t.exports=n(888)()},9047:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=76.6196fba2.chunk.js.map