"use strict";(self.webpackChunk_xmly_react_lazy_image=self.webpackChunk_xmly_react_lazy_image||[]).push([[871],{31782:function(h,n,e){var l;e.r(n),e.d(n,{demos:function(){return M}});var y=e(15009),s=e.n(y),F=e(99289),f=e.n(F),r=e(67294),O=e(39710),v=e(92457),M={"proimage-demo-basic":{component:r.memo(r.lazy(function(){return e.e(823).then(e.bind(e,20554))})),asset:{type:"BLOCK",id:"proimage-demo-basic",refAtomIds:["ProImage"],dependencies:{"index.tsx":{type:"FILE",value:e(46684).Z},"@xmly/react-lazy-image":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:null},context:{"@xmly/react-lazy-image":v,react:l||(l=e.t(r,2))},renderOpts:{compile:function(){var u=f()(s()().mark(function A(){var o,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,c));case 3:case"end":return a.stop()}},A)}));function i(){return u.apply(this,arguments)}return i}()}},"proimage-demo-unlazy":{component:r.memo(r.lazy(function(){return e.e(823).then(e.bind(e,78608))})),asset:{type:"BLOCK",id:"proimage-demo-unlazy",refAtomIds:["ProImage"],dependencies:{"index.tsx":{type:"FILE",value:e(36372).Z},"@xmly/react-lazy-image":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:null},context:{"@xmly/react-lazy-image":v,react:l||(l=e.t(r,2))},renderOpts:{compile:function(){var u=f()(s()().mark(function A(){var o,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,c));case 3:case"end":return a.stop()}},A)}));function i(){return u.apply(this,arguments)}return i}()}},"proimage-demo-unwebp":{component:r.memo(r.lazy(function(){return e.e(823).then(e.bind(e,24852))})),asset:{type:"BLOCK",id:"proimage-demo-unwebp",refAtomIds:["ProImage"],dependencies:{"index.tsx":{type:"FILE",value:e(44714).Z},"@xmly/react-lazy-image":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:null},context:{"@xmly/react-lazy-image":v,react:l||(l=e.t(r,2))},renderOpts:{compile:function(){var u=f()(s()().mark(function A(){var o,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,c));case 3:case"end":return a.stop()}},A)}));function i(){return u.apply(this,arguments)}return i}()}},"proimage-demo-unall":{component:r.memo(r.lazy(function(){return e.e(823).then(e.bind(e,88698))})),asset:{type:"BLOCK",id:"proimage-demo-unall",refAtomIds:["ProImage"],dependencies:{"index.tsx":{type:"FILE",value:e(11100).Z},"@xmly/react-lazy-image":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:null},context:{"@xmly/react-lazy-image":v,react:l||(l=e.t(r,2))},renderOpts:{compile:function(){var u=f()(s()().mark(function A(){var o,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,c));case 3:case"end":return a.stop()}},A)}));function i(){return u.apply(this,arguments)}return i}()}},"proimage-demo-indefault":{component:r.memo(r.lazy(function(){return e.e(823).then(e.bind(e,77122))})),asset:{type:"BLOCK",id:"proimage-demo-indefault",refAtomIds:["ProImage"],dependencies:{"index.tsx":{type:"FILE",value:e(84340).Z},"@xmly/react-lazy-image":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:null},context:{"@xmly/react-lazy-image":v,react:l||(l=e.t(r,2))},renderOpts:{compile:function(){var u=f()(s()().mark(function A(){var o,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,c));case 3:case"end":return a.stop()}},A)}));function i(){return u.apply(this,arguments)}return i}()}}}},92457:function(h,n,e){e.r(n),e.d(n,{ProImage:function(){return B}});var l=e(97857),y=e.n(l),s=e(13769),F=e.n(s),f=e(67294),r=document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")===0;function O(t,d){if(!t||typeof t!="string"||t.indexOf(d)>-1)return t;var I=t,E="".concat(t.split("!")[0].split("?")[0]);if(t.indexOf("!")===-1){var U=t.slice(E.length);I="".concat(E,"!").concat(d).concat(U)}else{var g=t.indexOf("!")+1;I="".concat(t.slice(0,g)).concat(d,"&").concat(t.slice(g))}return I}var v=["https://imagev2.test.ximalaya.com/","https://imagev2.uat.xmcdn.com/","https://imagev2.xmcdn.com/","https://amimage.test.ximalaya.com/","https://amimage.uat.xmcdn.com/","https://amimage.xmcdn.com/"];function M(t){return t?!!v.find(function(d){return t.indexOf(d)>-1}):!1}function u(t){return t?M(t)&&r:!1}var i=e(64599),A=e.n(i),o=e(66337),c=!1;function x(){if(!c){c=!0,console.log("lazyload");var t=document.querySelectorAll("img[data-src]"),d=function(m){var p=m.getAttribute("data-src");p&&(m.src=p,m.removeAttribute("data-src"))},I=new IntersectionObserver(function(g,m){g.forEach(function(p){p.isIntersecting&&(d(p.target),m.unobserve(p.target))})});t.forEach(function(g){I.observe(g)});var E=new MutationObserver(function(g){var m=A()(g),p;try{for(m.s();!(p=m.n()).done;){var z=p.value;z.type==="childList"&&z.addedNodes.forEach(function(R){R instanceof HTMLImageElement&&R.hasAttribute("data-src")&&I.observe(R)})}}catch(R){m.e(R)}finally{m.f()}}),U={childList:!0,subtree:!0};E.observe(document.body,U)}}var a=e(85893),b=["useLazy","useWebp","className","style","src","defaultSrc"],w=function(d){var I=d.useLazy,E=I===void 0?!0:I,U=d.useWebp,g=U===void 0?!0:U,m=d.className,p=d.style,z=d.src,R=d.defaultSrc,Q=F()(d,b);(0,f.useEffect)(function(){x()},[]);var D=u(z)&&g,L=D?O(z,"xmagick=webp"):z,P=y()({style:p,className:m,onError:function(G){R&&(G.currentTarget.src=R)}},Q);return E?Object.assign(P,{"data-src":L}):Object.assign(P,{src:L}),(0,a.jsx)("img",y()({},P))},B=w},1093:function(h,n,e){e.r(n),e.d(n,{texts:function(){return y}});var l=e(39710);const y=[{value:`yarn add @xmly/react-lazy-image
`,paraId:0,tocIndex:1},{value:"\u548C ",paraId:1,tocIndex:2},{value:"img",paraId:1,tocIndex:2},{value:" \u6807\u7B7E\u7528\u6CD5\u4E00\u81F4\uFF0C\u5728 ",paraId:1,tocIndex:2},{value:"img",paraId:1,tocIndex:2},{value:" \u6807\u7B7E\u7684\u57FA\u7840\u4E0A\u989D\u5916\u6269\u5C55\u4E86\u4E00\u4E9B\u63A7\u5236\u6548\u679C\u7684\u5C5E\u6027",paraId:1,tocIndex:2},{value:"\u4FDD\u7559 ",paraId:2,tocIndex:4},{value:"webp\u683C\u5F0F",paraId:2,tocIndex:4},{value:"\u4FDD\u7559 ",paraId:3,tocIndex:5},{value:"\u61D2\u52A0\u8F7D",paraId:3,tocIndex:5},{value:"\u5C5E\u6027",paraId:4,tocIndex:8},{value:"\u8BF4\u660E",paraId:4,tocIndex:8},{value:"\u7C7B\u578B",paraId:4,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:8},{value:"src",paraId:4,tocIndex:8},{value:"\u56FE\u7247\u5730\u5740",paraId:4,tocIndex:8},{value:"string",paraId:4,tocIndex:8},{value:"-",paraId:4,tocIndex:8},{value:"defaultSrc",paraId:4,tocIndex:8},{value:"\u515C\u5E95\u56FE(\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6\u515C\u5E95\u663E\u793A)",paraId:4,tocIndex:8},{value:"string",paraId:4,tocIndex:8},{value:"-",paraId:4,tocIndex:8},{value:"useLazy",paraId:4,tocIndex:8},{value:"\u662F\u5426\u4F7F\u7528\u56FE\u7247\u61D2\u52A0\u8F7D",paraId:4,tocIndex:8},{value:"boolean",paraId:4,tocIndex:8},{value:"true",paraId:4,tocIndex:8},{value:"useWebp",paraId:4,tocIndex:8},{value:"\u662F\u5426\u4F7F\u7528 webp \u683C\u5F0F",paraId:4,tocIndex:8},{value:"boolean",paraId:4,tocIndex:8},{value:"true",paraId:4,tocIndex:8},{value:"className",paraId:4,tocIndex:8},{value:"\u6839\u8282\u70B9 class \u6837\u5F0F",paraId:4,tocIndex:8},{value:"string | undefined",paraId:4,tocIndex:8},{value:"-",paraId:4,tocIndex:8},{value:"style",paraId:4,tocIndex:8},{value:"\u6839\u8282\u70B9 style \u6837\u5F0F",paraId:4,tocIndex:8},{value:"CSSProperties | undefined",paraId:4,tocIndex:8},{value:"-",paraId:4,tocIndex:8},{value:"\u53EA\u6709",paraId:5,tocIndex:9},{value:" \u4EE5\u4E0B\u56FE\u7247\u57DF\u540D\u652F\u6301 ",paraId:5,tocIndex:9},{value:"webp\u683C\u5F0F",paraId:5,tocIndex:9},{value:"\uFF1A",paraId:5,tocIndex:9},{value:"https://imagev2.test.ximalaya.com",paraId:6,tocIndex:9},{value:"https://imagev2.uat.xmcdn.com",paraId:6,tocIndex:9},{value:"https://imagev2.xmcdn.com",paraId:6,tocIndex:9},{value:"https://amimage.test.ximalaya.com",paraId:6,tocIndex:9},{value:"https://amimage.uat.xmcdn.com",paraId:6,tocIndex:9},{value:"https://amimage.xmcdn.com",paraId:6,tocIndex:9},{value:"\u4F9D\u8D56\u9879\uFF08\u8BF7\u786E\u4FDD\u4F7F\u7528\u7EC4\u4EF6\u7684\u9879\u76EE\u5B89\u88C5\u4E86\u4EE5\u4E0B\u4F9D\u8D56\uFF09\uFF1A",paraId:7,tocIndex:9},{value:'"react": ">=16.8.0"',paraId:8,tocIndex:9},{value:'"react-dom": ">=16.8.0"',paraId:8,tocIndex:9}]},46684:function(h,n){n.Z=`import { ProImage } from '@xmly/react-lazy-image';
import React from 'react';

export default () => {
  return (
    <div
      style={{
        padding: '700px 10px 10px',
        background: '#b0dfde',
      }}
    >
      <ProImage
        src="https://imagev2.xmcdn.com/storages/9e43-audiofreehighqps/31/11/GMCoOR8JA_fMABAAAAJuY6gI.jpg"
        defaultSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwBAMAAADMe/ShAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURe7u7v////T09Pj4+PHx8fz8/Hd79SsAAARsSURBVHja7ZtNd6owEIYpxn0R2SPavdbLPlq7L1X+/1+5WKwvOjkGz0zSzTyL9lha3sxXMg0hURRFURRFURRFURRFURRFURRFURRFCYiptnXbttvKRpXd19mVooon22Q3FKs4um8Z4RjB4Wnza2d7rNvrhzK47sXEyv4mWQ13B9fNV45M+xdcl0p8NIG9bc4CuXVc2EA5lO7MfanGkORZQNdt83cY3QnRJcq9sysr7ujCPr6+7gc4k3Z0UXo8UvYDyKUd/ZU85OPYD1DW4g3u5x+grMGFHTdAWU93mXMaObcVVtjgZAw7DFAqwuuRnilEU3ps4AwyK5LBGKFkhA0i7OFF1tOfDgce9tXKNb3NRT1NSuRQdaxcv/kqmlr3dnTWdriERXNrd00t6MLiu2pai3o6p7r7w8EGFk4vkxF0O+VDAohwJSM8Pa+zwJydbJMHwtPsS9DT0L3LKiq8k1mQzW1O75FUbmHMIvxiWt862nqEERtmMRVDg4kuFTaZyDSyGUbMUEdT4e7rTKSrPY0wGMJwEruK18Rgj/CUvTje3yQlBlNhqXZgN6xiuhRS4f7bq0BuzYeetqOEFwLZ1WRfQ08nXmGhRsQgt+Bpr3CXGALzliWe9gqn/LlrCqc9IZzw0/plkNTpjafNsm3frVOYn9Z9fiLE5f1GW1ESYXSbYtU09LRpsh8K6xDGksytJoQYnrgwI8KIEIdzNUF4kOwdxzrrKIkwcpIlXLpya9HvaqX9PgEVnnAL2biFTR/cPsWsQzhlrE+4AU3q6bVOPxELCLNnkN5lELbwdIHsnjuEDV+4cAl3ahhDHlgYZYyVA+sBhFENHKZUGJF3RDMLKAw/QIJ+aNjC+UCY/hQSCG18YfgdUy1fGFBhUn3RhdFrNYLJBWhyYfUOKOwuJzQe3HKCbcAzgUzQaonMXMAzZe7gCZlFAmCRoPsFpsbTCMMVRjQBXRbRDX2Rv+M0AoA2AtlZAd2QhbBM6wPQ+pR9AzIjz/8kWh9aFrTZu3of4WY3e3Tqo+0thoIQc9tbug9MGvrcIt8QYkZD771D2lx0UcPZSWDD3O8zs6yP7zcVVlgSIfZk7cfUG9qJuJF+rGIS0hBIziDRngI9vy/J29rj5CcaAv4G23j4OxEoE8YeFQMkaMTcQnbxcytwomBvnc8LDTL/IbJ8kHEghA/Wdz9oBf3I36cRCfHzj5EmjBCzcmXHqGLWEQuBQ0YwoYzoaZA+ldcLeFr0cII/I0Q8jX+VGEc3wh5AQb9dWNFjc+vRzplHPGQEGlRA1FNGnxhhvINkOCIpbPKJYXDgw4JpBoMlTc4ZRyg5Jnud/Yn9gahHYFMMLfKhX1yXd3ZuHx5zXoc72H20D3QDOBo3h830UtiXM/I+w+gFBFieyY8AfV0hw05bID4axwsaeHYe/lWY6+mA/XKTQTfSSzgd1w82CY55ywjff/OiVV7+yatlx1USE7Nfbtt2+17ZRFEURVEURVEURVEURVEURVEURVEURZHjPwrXuS8HJThPAAAAAElFTkSuQmCC"
        style={{ width: '23%', marginRight: '2%' }}
        useLazy={false}
      />
      <ProImage
        src="https://imagev2.xmcdn.com/storages/b8fe-audiofreehighqps/B0/C8/GMCoOSIJA7_3AAn6jQJuN8xp.png"
        style={{ width: '23%', marginRight: '2%' }}
      />
      <ProImage
        src="https://imagev2.xmcdn.com/storages/1a2b-audiofreehighqps/84/47/GKwRIasJA_hjABAAAAJuZE1B.jpg"
        style={{ width: '23%', marginRight: '2%' }}
        defaultSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwBAMAAADMe/ShAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURe7u7v////T09Pj4+PHx8fz8/Hd79SsAAARsSURBVHja7ZtNd6owEIYpxn0R2SPavdbLPlq7L1X+/1+5WKwvOjkGz0zSzTyL9lha3sxXMg0hURRFURRFURRFURRFURRFURRFURRFCYiptnXbttvKRpXd19mVooon22Q3FKs4um8Z4RjB4Wnza2d7rNvrhzK47sXEyv4mWQ13B9fNV45M+xdcl0p8NIG9bc4CuXVc2EA5lO7MfanGkORZQNdt83cY3QnRJcq9sysr7ujCPr6+7gc4k3Z0UXo8UvYDyKUd/ZU85OPYD1DW4g3u5x+grMGFHTdAWU93mXMaObcVVtjgZAw7DFAqwuuRnilEU3ps4AwyK5LBGKFkhA0i7OFF1tOfDgce9tXKNb3NRT1NSuRQdaxcv/kqmlr3dnTWdriERXNrd00t6MLiu2pai3o6p7r7w8EGFk4vkxF0O+VDAohwJSM8Pa+zwJydbJMHwtPsS9DT0L3LKiq8k1mQzW1O75FUbmHMIvxiWt862nqEERtmMRVDg4kuFTaZyDSyGUbMUEdT4e7rTKSrPY0wGMJwEruK18Rgj/CUvTje3yQlBlNhqXZgN6xiuhRS4f7bq0BuzYeetqOEFwLZ1WRfQ08nXmGhRsQgt+Bpr3CXGALzliWe9gqn/LlrCqc9IZzw0/plkNTpjafNsm3frVOYn9Z9fiLE5f1GW1ESYXSbYtU09LRpsh8K6xDGksytJoQYnrgwI8KIEIdzNUF4kOwdxzrrKIkwcpIlXLpya9HvaqX9PgEVnnAL2biFTR/cPsWsQzhlrE+4AU3q6bVOPxELCLNnkN5lELbwdIHsnjuEDV+4cAl3ahhDHlgYZYyVA+sBhFENHKZUGJF3RDMLKAw/QIJ+aNjC+UCY/hQSCG18YfgdUy1fGFBhUn3RhdFrNYLJBWhyYfUOKOwuJzQe3HKCbcAzgUzQaonMXMAzZe7gCZlFAmCRoPsFpsbTCMMVRjQBXRbRDX2Rv+M0AoA2AtlZAd2QhbBM6wPQ+pR9AzIjz/8kWh9aFrTZu3of4WY3e3Tqo+0thoIQc9tbug9MGvrcIt8QYkZD771D2lx0UcPZSWDD3O8zs6yP7zcVVlgSIfZk7cfUG9qJuJF+rGIS0hBIziDRngI9vy/J29rj5CcaAv4G23j4OxEoE8YeFQMkaMTcQnbxcytwomBvnc8LDTL/IbJ8kHEghA/Wdz9oBf3I36cRCfHzj5EmjBCzcmXHqGLWEQuBQ0YwoYzoaZA+ldcLeFr0cII/I0Q8jX+VGEc3wh5AQb9dWNFjc+vRzplHPGQEGlRA1FNGnxhhvINkOCIpbPKJYXDgw4JpBoMlTc4ZRyg5Jnud/Yn9gahHYFMMLfKhX1yXd3ZuHx5zXoc72H20D3QDOBo3h830UtiXM/I+w+gFBFieyY8AfV0hw05bID4axwsaeHYe/lWY6+mA/XKTQTfSSzgd1w82CY55ywjff/OiVV7+yatlx1USE7Nfbtt2+17ZRFEURVEURVEURVEURVEURVEURVEURZHjPwrXuS8HJThPAAAAAElFTkSuQmCC"
        useLazy={false}
      />
      <ProImage
        src="https://imagev2.xmcdn.com/storages/e020-audiofreehighqps/6B/AE/GKwRIJIJA7_1AA47FwJuN8qY.png"
        style={{ width: '23%', marginRight: '2%' }}
      />
      <ProImage
        src="https://imagev2.xmcdn.com/storages/231c-audiofreehighqps/5F/BE/GMCoOSUJA_i0ABAAAAJuZJn4.jpg"
        style={{ width: '23%', marginRight: '2%' }}
        defaultSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwBAMAAADMe/ShAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURe7u7v////T09Pj4+PHx8fz8/Hd79SsAAARsSURBVHja7ZtNd6owEIYpxn0R2SPavdbLPlq7L1X+/1+5WKwvOjkGz0zSzTyL9lha3sxXMg0hURRFURRFURRFURRFURRFURRFURRFCYiptnXbttvKRpXd19mVooon22Q3FKs4um8Z4RjB4Wnza2d7rNvrhzK47sXEyv4mWQ13B9fNV45M+xdcl0p8NIG9bc4CuXVc2EA5lO7MfanGkORZQNdt83cY3QnRJcq9sysr7ujCPr6+7gc4k3Z0UXo8UvYDyKUd/ZU85OPYD1DW4g3u5x+grMGFHTdAWU93mXMaObcVVtjgZAw7DFAqwuuRnilEU3ps4AwyK5LBGKFkhA0i7OFF1tOfDgce9tXKNb3NRT1NSuRQdaxcv/kqmlr3dnTWdriERXNrd00t6MLiu2pai3o6p7r7w8EGFk4vkxF0O+VDAohwJSM8Pa+zwJydbJMHwtPsS9DT0L3LKiq8k1mQzW1O75FUbmHMIvxiWt862nqEERtmMRVDg4kuFTaZyDSyGUbMUEdT4e7rTKSrPY0wGMJwEruK18Rgj/CUvTje3yQlBlNhqXZgN6xiuhRS4f7bq0BuzYeetqOEFwLZ1WRfQ08nXmGhRsQgt+Bpr3CXGALzliWe9gqn/LlrCqc9IZzw0/plkNTpjafNsm3frVOYn9Z9fiLE5f1GW1ESYXSbYtU09LRpsh8K6xDGksytJoQYnrgwI8KIEIdzNUF4kOwdxzrrKIkwcpIlXLpya9HvaqX9PgEVnnAL2biFTR/cPsWsQzhlrE+4AU3q6bVOPxELCLNnkN5lELbwdIHsnjuEDV+4cAl3ahhDHlgYZYyVA+sBhFENHKZUGJF3RDMLKAw/QIJ+aNjC+UCY/hQSCG18YfgdUy1fGFBhUn3RhdFrNYLJBWhyYfUOKOwuJzQe3HKCbcAzgUzQaonMXMAzZe7gCZlFAmCRoPsFpsbTCMMVRjQBXRbRDX2Rv+M0AoA2AtlZAd2QhbBM6wPQ+pR9AzIjz/8kWh9aFrTZu3of4WY3e3Tqo+0thoIQc9tbug9MGvrcIt8QYkZD771D2lx0UcPZSWDD3O8zs6yP7zcVVlgSIfZk7cfUG9qJuJF+rGIS0hBIziDRngI9vy/J29rj5CcaAv4G23j4OxEoE8YeFQMkaMTcQnbxcytwomBvnc8LDTL/IbJ8kHEghA/Wdz9oBf3I36cRCfHzj5EmjBCzcmXHqGLWEQuBQ0YwoYzoaZA+ldcLeFr0cII/I0Q8jX+VGEc3wh5AQb9dWNFjc+vRzplHPGQEGlRA1FNGnxhhvINkOCIpbPKJYXDgw4JpBoMlTc4ZRyg5Jnud/Yn9gahHYFMMLfKhX1yXd3ZuHx5zXoc72H20D3QDOBo3h830UtiXM/I+w+gFBFieyY8AfV0hw05bID4axwsaeHYe/lWY6+mA/XKTQTfSSzgd1w82CY55ywjff/OiVV7+yatlx1USE7Nfbtt2+17ZRFEURVEURVEURVEURVEURVEURVEURZHjPwrXuS8HJThPAAAAAElFTkSuQmCC"
      />
      <ProImage
        src="https://imagev2.xmcdn.com/storages/ee3b-audiofreehighqps/0E/FB/GMCoOSIJA7_0AA7xcgJuN8nC.png"
        style={{ width: '23%', marginRight: '2%' }}
      />
      <ProImage
        src="https://imagev2.xmcdn.com/storages/c9ba-audiofreehighqps/74/18/GKwRIaIJA_kfABAAAAJuZQ9p.jpg"
        style={{ width: '23%', marginRight: '2%' }}
      />
      <ProImage
        src="https://imagev2.xmcdn.com/storages/dcd2-audiofreehighqps/18/26/GMCoOSQJA7_uAAkUSwJuN8aJ.png"
        style={{ width: '23%', marginRight: '2%' }}
      />
    </div>
  );
};
`},84340:function(h,n){n.Z=`import { ProImage } from '@xmly/react-lazy-image';
import React from 'react';

export default () => {
  return (
    <ProImage
      src="xxx"
      defaultSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwBAMAAADMe/ShAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURe7u7v////T09Pj4+PHx8fz8/Hd79SsAAARsSURBVHja7ZtNd6owEIYpxn0R2SPavdbLPlq7L1X+/1+5WKwvOjkGz0zSzTyL9lha3sxXMg0hURRFURRFURRFURRFURRFURRFURRFCYiptnXbttvKRpXd19mVooon22Q3FKs4um8Z4RjB4Wnza2d7rNvrhzK47sXEyv4mWQ13B9fNV45M+xdcl0p8NIG9bc4CuXVc2EA5lO7MfanGkORZQNdt83cY3QnRJcq9sysr7ujCPr6+7gc4k3Z0UXo8UvYDyKUd/ZU85OPYD1DW4g3u5x+grMGFHTdAWU93mXMaObcVVtjgZAw7DFAqwuuRnilEU3ps4AwyK5LBGKFkhA0i7OFF1tOfDgce9tXKNb3NRT1NSuRQdaxcv/kqmlr3dnTWdriERXNrd00t6MLiu2pai3o6p7r7w8EGFk4vkxF0O+VDAohwJSM8Pa+zwJydbJMHwtPsS9DT0L3LKiq8k1mQzW1O75FUbmHMIvxiWt862nqEERtmMRVDg4kuFTaZyDSyGUbMUEdT4e7rTKSrPY0wGMJwEruK18Rgj/CUvTje3yQlBlNhqXZgN6xiuhRS4f7bq0BuzYeetqOEFwLZ1WRfQ08nXmGhRsQgt+Bpr3CXGALzliWe9gqn/LlrCqc9IZzw0/plkNTpjafNsm3frVOYn9Z9fiLE5f1GW1ESYXSbYtU09LRpsh8K6xDGksytJoQYnrgwI8KIEIdzNUF4kOwdxzrrKIkwcpIlXLpya9HvaqX9PgEVnnAL2biFTR/cPsWsQzhlrE+4AU3q6bVOPxELCLNnkN5lELbwdIHsnjuEDV+4cAl3ahhDHlgYZYyVA+sBhFENHKZUGJF3RDMLKAw/QIJ+aNjC+UCY/hQSCG18YfgdUy1fGFBhUn3RhdFrNYLJBWhyYfUOKOwuJzQe3HKCbcAzgUzQaonMXMAzZe7gCZlFAmCRoPsFpsbTCMMVRjQBXRbRDX2Rv+M0AoA2AtlZAd2QhbBM6wPQ+pR9AzIjz/8kWh9aFrTZu3of4WY3e3Tqo+0thoIQc9tbug9MGvrcIt8QYkZD771D2lx0UcPZSWDD3O8zs6yP7zcVVlgSIfZk7cfUG9qJuJF+rGIS0hBIziDRngI9vy/J29rj5CcaAv4G23j4OxEoE8YeFQMkaMTcQnbxcytwomBvnc8LDTL/IbJ8kHEghA/Wdz9oBf3I36cRCfHzj5EmjBCzcmXHqGLWEQuBQ0YwoYzoaZA+ldcLeFr0cII/I0Q8jX+VGEc3wh5AQb9dWNFjc+vRzplHPGQEGlRA1FNGnxhhvINkOCIpbPKJYXDgw4JpBoMlTc4ZRyg5Jnud/Yn9gahHYFMMLfKhX1yXd3ZuHx5zXoc72H20D3QDOBo3h830UtiXM/I+w+gFBFieyY8AfV0hw05bID4axwsaeHYe/lWY6+mA/XKTQTfSSzgd1w82CY55ywjff/OiVV7+yatlx1USE7Nfbtt2+17ZRFEURVEURVEURVEURVEURVEURVEURZHjPwrXuS8HJThPAAAAAElFTkSuQmCC"
      style={{ width: '300px' }}
    />
  );
};
`},11100:function(h,n){n.Z=`import { ProImage } from '@xmly/react-lazy-image';
import React from 'react';

export default () => {
  return (
    <ProImage
      src="https://imagev2.xmcdn.com/storages/0b3c-audiofreehighqps/4D/72/GMCoOSUJBRCqABAAAAJu9E4q.jpg"
      style={{ width: '300px' }}
      useLazy={false}
      useWebp={false}
    />
  );
};
`},36372:function(h,n){n.Z=`import { ProImage } from '@xmly/react-lazy-image';
import React from 'react';

export default () => {
  return (
    <ProImage
      src="https://imagev2.xmcdn.com/storages/b74d-audiofreehighqps/9A/0D/GKwRIUEJBRCFABAAAAJu9DIR.jpg"
      style={{ width: '300px' }}
      useLazy={false}
    />
  );
};
`},44714:function(h,n){n.Z=`import { ProImage } from '@xmly/react-lazy-image';
import React from 'react';

export default () => {
  return (
    <ProImage
      src="https://imagev2.xmcdn.com/storages/dbb3-audiofreehighqps/67/71/GKwRIW4JBVWrAAgmzwJvH39-.jpg"
      style={{ width: '300px' }}
      useWebp={false}
    />
  );
};
`}}]);
