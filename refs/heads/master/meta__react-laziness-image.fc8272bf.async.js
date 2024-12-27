"use strict";(self.webpackChunkreact_laziness_image=self.webpackChunkreact_laziness_image||[]).push([[479],{35638:function(I,n,e){var c;e.r(n),e.d(n,{demos:function(){return F}});var h=e(15009),l=e.n(h),U=e(99289),f=e.n(U),s=e(67294),M=e(62696),E=e(55451),F={"react-laziness-image-demo-basic":{component:s.memo(s.lazy(function(){return e.e(896).then(e.bind(e,31872))})),asset:{type:"BLOCK",id:"react-laziness-image-demo-basic",refAtomIds:["react-laziness-image"],dependencies:{"index.tsx":{type:"FILE",value:e(64799).Z},react:{type:"NPM",value:"18.3.1"},"react-laziness-image":{type:"NPM",value:"1.0.2"}},entry:"index.tsx",title:null},context:{react:c||(c=e.t(s,2)),"react-laziness-image":E},renderOpts:{compile:function(){var g=f()(l()().mark(function R(){var d,m=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,m));case 3:case"end":return a.stop()}},R)}));function A(){return g.apply(this,arguments)}return A}()}},"react-laziness-image-demo-unlazy":{component:s.memo(s.lazy(function(){return e.e(896).then(e.bind(e,34514))})),asset:{type:"BLOCK",id:"react-laziness-image-demo-unlazy",refAtomIds:["react-laziness-image"],dependencies:{"index.tsx":{type:"FILE",value:e(65035).Z},react:{type:"NPM",value:"18.3.1"},"react-laziness-image":{type:"NPM",value:"1.0.2"}},entry:"index.tsx",title:null},context:{react:c||(c=e.t(s,2)),"react-laziness-image":E},renderOpts:{compile:function(){var g=f()(l()().mark(function R(){var d,m=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,m));case 3:case"end":return a.stop()}},R)}));function A(){return g.apply(this,arguments)}return A}()}},"react-laziness-image-demo-indefault":{component:s.memo(s.lazy(function(){return e.e(896).then(e.bind(e,12949))})),asset:{type:"BLOCK",id:"react-laziness-image-demo-indefault",refAtomIds:["react-laziness-image"],dependencies:{"index.tsx":{type:"FILE",value:e(96572).Z},react:{type:"NPM",value:"18.3.1"},"react-laziness-image":{type:"NPM",value:"1.0.2"}},entry:"index.tsx",title:null},context:{react:c||(c=e.t(s,2)),"react-laziness-image":E},renderOpts:{compile:function(){var g=f()(l()().mark(function R(){var d,m=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,m));case 3:case"end":return a.stop()}},R)}));function A(){return g.apply(this,arguments)}return A}()}}}},55451:function(I,n,e){e.r(n),e.d(n,{ReactLazinessImage:function(){return a}});var c=e(9783),h=e.n(c),l=e(97857),U=e.n(l),f=e(13769),s=e.n(f),M=e(67294),E=e(64599),F=e.n(E),g=e(66337),A=!1;function R(){if(!A){A=!0,console.log("lazyload");var L=document.querySelectorAll("img[data-src]"),i=function(t){var r=t.getAttribute("data-src");r&&(t.src=r,t.removeAttribute("data-src"))},z=new IntersectionObserver(function(o,t){o.forEach(function(r){r.isIntersecting&&(i(r.target),t.unobserve(r.target))})});L.forEach(function(o){z.observe(o)});var y=new MutationObserver(function(o){var t=F()(o),r;try{for(t.s();!(r=t.n()).done;){var p=r.value;p.type==="childList"&&p.addedNodes.forEach(function(u){u instanceof HTMLImageElement&&u.hasAttribute("data-src")&&z.observe(u)})}}catch(u){t.e(u)}finally{t.f()}}),x={childList:!0,subtree:!0};y.observe(document.body,x)}}var d=e(85893),m=["useLazy","className","style","src","defaultSrc"],v=function(i){var z=i.useLazy,y=z===void 0?!0:z,x=i.className,o=i.style,t=i.src,r=i.defaultSrc,p=s()(i,m);(0,M.useEffect)(function(){R()},[]);var u=U()({style:o,className:x,onError:function(O){r&&(O.currentTarget.src=r)}},p);return Object.assign(u,h()({},y?"data-src":"src",t)),(0,d.jsx)("img",U()({},u))},a=v},18244:function(I,n,e){e.r(n),e.d(n,{texts:function(){return h}});var c=e(62696);const h=[{value:`yarn add react-laziness-image
`,paraId:0,tocIndex:1},{value:"\u56FE\u7247\u52A0\u8F7D\u51FA\u9519\u65F6\u515C\u5E95\u663E\u793A ",paraId:1,tocIndex:4},{value:"defaultSrc",paraId:1,tocIndex:4},{value:" \u56FE\u7247",paraId:1,tocIndex:4},{value:"\u5C5E\u6027",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"src",paraId:2,tocIndex:5},{value:"\u56FE\u7247\u5730\u5740",paraId:2,tocIndex:5},{value:"string",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"defaultSrc",paraId:2,tocIndex:5},{value:"\u515C\u5E95\u56FE(\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6\u515C\u5E95\u663E\u793A)",paraId:2,tocIndex:5},{value:"string",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"useLazy",paraId:2,tocIndex:5},{value:"\u662F\u5426\u4F7F\u7528\u56FE\u7247\u61D2\u52A0\u8F7D",paraId:2,tocIndex:5},{value:"boolean",paraId:2,tocIndex:5},{value:"true",paraId:2,tocIndex:5},{value:"className",paraId:2,tocIndex:5},{value:"\u6839\u8282\u70B9 class \u6837\u5F0F",paraId:2,tocIndex:5},{value:"string | undefined",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"style",paraId:2,tocIndex:5},{value:"\u6839\u8282\u70B9 style \u6837\u5F0F",paraId:2,tocIndex:5},{value:"CSSProperties | undefined",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"\u4F9D\u8D56\u9879\uFF08\u8BF7\u786E\u4FDD\u4F7F\u7528\u7EC4\u4EF6\u7684\u9879\u76EE\u5B89\u88C5\u4E86\u4EE5\u4E0B\u4F9D\u8D56\uFF09\uFF1A",paraId:3,tocIndex:6},{value:'"react": ">=16.8.0"',paraId:4,tocIndex:6},{value:'"react-dom": ">=16.8.0"',paraId:4,tocIndex:6}]},64799:function(I,n){n.Z=`import React from 'react';
import { ReactLazinessImage } from 'react-laziness-image';

export default () => {
  return (
    <div
      style={{
        padding: '700px 10px 10px',
        background: '#b0dfde',
      }}
    >
      <ReactLazinessImage
        src="https://imagev2.xmcdn.com/storages/9e43-audiofreehighqps/31/11/GMCoOR8JA_fMABAAAAJuY6gI.jpg"
        defaultSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwBAMAAADMe/ShAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURe7u7v////T09Pj4+PHx8fz8/Hd79SsAAARsSURBVHja7ZtNd6owEIYpxn0R2SPavdbLPlq7L1X+/1+5WKwvOjkGz0zSzTyL9lha3sxXMg0hURRFURRFURRFURRFURRFURRFURRFCYiptnXbttvKRpXd19mVooon22Q3FKs4um8Z4RjB4Wnza2d7rNvrhzK47sXEyv4mWQ13B9fNV45M+xdcl0p8NIG9bc4CuXVc2EA5lO7MfanGkORZQNdt83cY3QnRJcq9sysr7ujCPr6+7gc4k3Z0UXo8UvYDyKUd/ZU85OPYD1DW4g3u5x+grMGFHTdAWU93mXMaObcVVtjgZAw7DFAqwuuRnilEU3ps4AwyK5LBGKFkhA0i7OFF1tOfDgce9tXKNb3NRT1NSuRQdaxcv/kqmlr3dnTWdriERXNrd00t6MLiu2pai3o6p7r7w8EGFk4vkxF0O+VDAohwJSM8Pa+zwJydbJMHwtPsS9DT0L3LKiq8k1mQzW1O75FUbmHMIvxiWt862nqEERtmMRVDg4kuFTaZyDSyGUbMUEdT4e7rTKSrPY0wGMJwEruK18Rgj/CUvTje3yQlBlNhqXZgN6xiuhRS4f7bq0BuzYeetqOEFwLZ1WRfQ08nXmGhRsQgt+Bpr3CXGALzliWe9gqn/LlrCqc9IZzw0/plkNTpjafNsm3frVOYn9Z9fiLE5f1GW1ESYXSbYtU09LRpsh8K6xDGksytJoQYnrgwI8KIEIdzNUF4kOwdxzrrKIkwcpIlXLpya9HvaqX9PgEVnnAL2biFTR/cPsWsQzhlrE+4AU3q6bVOPxELCLNnkN5lELbwdIHsnjuEDV+4cAl3ahhDHlgYZYyVA+sBhFENHKZUGJF3RDMLKAw/QIJ+aNjC+UCY/hQSCG18YfgdUy1fGFBhUn3RhdFrNYLJBWhyYfUOKOwuJzQe3HKCbcAzgUzQaonMXMAzZe7gCZlFAmCRoPsFpsbTCMMVRjQBXRbRDX2Rv+M0AoA2AtlZAd2QhbBM6wPQ+pR9AzIjz/8kWh9aFrTZu3of4WY3e3Tqo+0thoIQc9tbug9MGvrcIt8QYkZD771D2lx0UcPZSWDD3O8zs6yP7zcVVlgSIfZk7cfUG9qJuJF+rGIS0hBIziDRngI9vy/J29rj5CcaAv4G23j4OxEoE8YeFQMkaMTcQnbxcytwomBvnc8LDTL/IbJ8kHEghA/Wdz9oBf3I36cRCfHzj5EmjBCzcmXHqGLWEQuBQ0YwoYzoaZA+ldcLeFr0cII/I0Q8jX+VGEc3wh5AQb9dWNFjc+vRzplHPGQEGlRA1FNGnxhhvINkOCIpbPKJYXDgw4JpBoMlTc4ZRyg5Jnud/Yn9gahHYFMMLfKhX1yXd3ZuHx5zXoc72H20D3QDOBo3h830UtiXM/I+w+gFBFieyY8AfV0hw05bID4axwsaeHYe/lWY6+mA/XKTQTfSSzgd1w82CY55ywjff/OiVV7+yatlx1USE7Nfbtt2+17ZRFEURVEURVEURVEURVEURVEURVEURZHjPwrXuS8HJThPAAAAAElFTkSuQmCC"
        style={{ width: '23%', marginRight: '2%' }}
        useLazy={false}
      />
      <ReactLazinessImage
        src="https://imagev2.xmcdn.com/storages/b8fe-audiofreehighqps/B0/C8/GMCoOSIJA7_3AAn6jQJuN8xp.png"
        style={{ width: '23%', marginRight: '2%' }}
      />
      <ReactLazinessImage
        src="https://imagev2.xmcdn.com/storages/1a2b-audiofreehighqps/84/47/GKwRIasJA_hjABAAAAJuZE1B.jpg"
        style={{ width: '23%', marginRight: '2%' }}
        defaultSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwBAMAAADMe/ShAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURe7u7v////T09Pj4+PHx8fz8/Hd79SsAAARsSURBVHja7ZtNd6owEIYpxn0R2SPavdbLPlq7L1X+/1+5WKwvOjkGz0zSzTyL9lha3sxXMg0hURRFURRFURRFURRFURRFURRFURRFCYiptnXbttvKRpXd19mVooon22Q3FKs4um8Z4RjB4Wnza2d7rNvrhzK47sXEyv4mWQ13B9fNV45M+xdcl0p8NIG9bc4CuXVc2EA5lO7MfanGkORZQNdt83cY3QnRJcq9sysr7ujCPr6+7gc4k3Z0UXo8UvYDyKUd/ZU85OPYD1DW4g3u5x+grMGFHTdAWU93mXMaObcVVtjgZAw7DFAqwuuRnilEU3ps4AwyK5LBGKFkhA0i7OFF1tOfDgce9tXKNb3NRT1NSuRQdaxcv/kqmlr3dnTWdriERXNrd00t6MLiu2pai3o6p7r7w8EGFk4vkxF0O+VDAohwJSM8Pa+zwJydbJMHwtPsS9DT0L3LKiq8k1mQzW1O75FUbmHMIvxiWt862nqEERtmMRVDg4kuFTaZyDSyGUbMUEdT4e7rTKSrPY0wGMJwEruK18Rgj/CUvTje3yQlBlNhqXZgN6xiuhRS4f7bq0BuzYeetqOEFwLZ1WRfQ08nXmGhRsQgt+Bpr3CXGALzliWe9gqn/LlrCqc9IZzw0/plkNTpjafNsm3frVOYn9Z9fiLE5f1GW1ESYXSbYtU09LRpsh8K6xDGksytJoQYnrgwI8KIEIdzNUF4kOwdxzrrKIkwcpIlXLpya9HvaqX9PgEVnnAL2biFTR/cPsWsQzhlrE+4AU3q6bVOPxELCLNnkN5lELbwdIHsnjuEDV+4cAl3ahhDHlgYZYyVA+sBhFENHKZUGJF3RDMLKAw/QIJ+aNjC+UCY/hQSCG18YfgdUy1fGFBhUn3RhdFrNYLJBWhyYfUOKOwuJzQe3HKCbcAzgUzQaonMXMAzZe7gCZlFAmCRoPsFpsbTCMMVRjQBXRbRDX2Rv+M0AoA2AtlZAd2QhbBM6wPQ+pR9AzIjz/8kWh9aFrTZu3of4WY3e3Tqo+0thoIQc9tbug9MGvrcIt8QYkZD771D2lx0UcPZSWDD3O8zs6yP7zcVVlgSIfZk7cfUG9qJuJF+rGIS0hBIziDRngI9vy/J29rj5CcaAv4G23j4OxEoE8YeFQMkaMTcQnbxcytwomBvnc8LDTL/IbJ8kHEghA/Wdz9oBf3I36cRCfHzj5EmjBCzcmXHqGLWEQuBQ0YwoYzoaZA+ldcLeFr0cII/I0Q8jX+VGEc3wh5AQb9dWNFjc+vRzplHPGQEGlRA1FNGnxhhvINkOCIpbPKJYXDgw4JpBoMlTc4ZRyg5Jnud/Yn9gahHYFMMLfKhX1yXd3ZuHx5zXoc72H20D3QDOBo3h830UtiXM/I+w+gFBFieyY8AfV0hw05bID4axwsaeHYe/lWY6+mA/XKTQTfSSzgd1w82CY55ywjff/OiVV7+yatlx1USE7Nfbtt2+17ZRFEURVEURVEURVEURVEURVEURVEURZHjPwrXuS8HJThPAAAAAElFTkSuQmCC"
        useLazy={false}
      />
      <ReactLazinessImage
        src="https://imagev2.xmcdn.com/storages/e020-audiofreehighqps/6B/AE/GKwRIJIJA7_1AA47FwJuN8qY.png"
        style={{ width: '23%', marginRight: '2%' }}
      />
      <ReactLazinessImage
        src="https://imagev2.xmcdn.com/storages/231c-audiofreehighqps/5F/BE/GMCoOSUJA_i0ABAAAAJuZJn4.jpg"
        style={{ width: '23%', marginRight: '2%' }}
        defaultSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwBAMAAADMe/ShAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURe7u7v////T09Pj4+PHx8fz8/Hd79SsAAARsSURBVHja7ZtNd6owEIYpxn0R2SPavdbLPlq7L1X+/1+5WKwvOjkGz0zSzTyL9lha3sxXMg0hURRFURRFURRFURRFURRFURRFURRFCYiptnXbttvKRpXd19mVooon22Q3FKs4um8Z4RjB4Wnza2d7rNvrhzK47sXEyv4mWQ13B9fNV45M+xdcl0p8NIG9bc4CuXVc2EA5lO7MfanGkORZQNdt83cY3QnRJcq9sysr7ujCPr6+7gc4k3Z0UXo8UvYDyKUd/ZU85OPYD1DW4g3u5x+grMGFHTdAWU93mXMaObcVVtjgZAw7DFAqwuuRnilEU3ps4AwyK5LBGKFkhA0i7OFF1tOfDgce9tXKNb3NRT1NSuRQdaxcv/kqmlr3dnTWdriERXNrd00t6MLiu2pai3o6p7r7w8EGFk4vkxF0O+VDAohwJSM8Pa+zwJydbJMHwtPsS9DT0L3LKiq8k1mQzW1O75FUbmHMIvxiWt862nqEERtmMRVDg4kuFTaZyDSyGUbMUEdT4e7rTKSrPY0wGMJwEruK18Rgj/CUvTje3yQlBlNhqXZgN6xiuhRS4f7bq0BuzYeetqOEFwLZ1WRfQ08nXmGhRsQgt+Bpr3CXGALzliWe9gqn/LlrCqc9IZzw0/plkNTpjafNsm3frVOYn9Z9fiLE5f1GW1ESYXSbYtU09LRpsh8K6xDGksytJoQYnrgwI8KIEIdzNUF4kOwdxzrrKIkwcpIlXLpya9HvaqX9PgEVnnAL2biFTR/cPsWsQzhlrE+4AU3q6bVOPxELCLNnkN5lELbwdIHsnjuEDV+4cAl3ahhDHlgYZYyVA+sBhFENHKZUGJF3RDMLKAw/QIJ+aNjC+UCY/hQSCG18YfgdUy1fGFBhUn3RhdFrNYLJBWhyYfUOKOwuJzQe3HKCbcAzgUzQaonMXMAzZe7gCZlFAmCRoPsFpsbTCMMVRjQBXRbRDX2Rv+M0AoA2AtlZAd2QhbBM6wPQ+pR9AzIjz/8kWh9aFrTZu3of4WY3e3Tqo+0thoIQc9tbug9MGvrcIt8QYkZD771D2lx0UcPZSWDD3O8zs6yP7zcVVlgSIfZk7cfUG9qJuJF+rGIS0hBIziDRngI9vy/J29rj5CcaAv4G23j4OxEoE8YeFQMkaMTcQnbxcytwomBvnc8LDTL/IbJ8kHEghA/Wdz9oBf3I36cRCfHzj5EmjBCzcmXHqGLWEQuBQ0YwoYzoaZA+ldcLeFr0cII/I0Q8jX+VGEc3wh5AQb9dWNFjc+vRzplHPGQEGlRA1FNGnxhhvINkOCIpbPKJYXDgw4JpBoMlTc4ZRyg5Jnud/Yn9gahHYFMMLfKhX1yXd3ZuHx5zXoc72H20D3QDOBo3h830UtiXM/I+w+gFBFieyY8AfV0hw05bID4axwsaeHYe/lWY6+mA/XKTQTfSSzgd1w82CY55ywjff/OiVV7+yatlx1USE7Nfbtt2+17ZRFEURVEURVEURVEURVEURVEURVEURZHjPwrXuS8HJThPAAAAAElFTkSuQmCC"
      />
      <ReactLazinessImage
        src="https://imagev2.xmcdn.com/storages/ee3b-audiofreehighqps/0E/FB/GMCoOSIJA7_0AA7xcgJuN8nC.png"
        style={{ width: '23%', marginRight: '2%' }}
      />
      <ReactLazinessImage
        src="https://imagev2.xmcdn.com/storages/c9ba-audiofreehighqps/74/18/GKwRIaIJA_kfABAAAAJuZQ9p.jpg"
        style={{ width: '23%', marginRight: '2%' }}
      />
      <ReactLazinessImage
        src="https://imagev2.xmcdn.com/storages/dcd2-audiofreehighqps/18/26/GMCoOSQJA7_uAAkUSwJuN8aJ.png"
        style={{ width: '23%', marginRight: '2%' }}
      />
    </div>
  );
};
`},96572:function(I,n){n.Z=`import React from 'react';
import { ReactLazinessImage } from 'react-laziness-image';

export default () => {
  return (
    <ReactLazinessImage
      src="xxx"
      defaultSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwBAMAAADMe/ShAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURe7u7v////T09Pj4+PHx8fz8/Hd79SsAAARsSURBVHja7ZtNd6owEIYpxn0R2SPavdbLPlq7L1X+/1+5WKwvOjkGz0zSzTyL9lha3sxXMg0hURRFURRFURRFURRFURRFURRFURRFCYiptnXbttvKRpXd19mVooon22Q3FKs4um8Z4RjB4Wnza2d7rNvrhzK47sXEyv4mWQ13B9fNV45M+xdcl0p8NIG9bc4CuXVc2EA5lO7MfanGkORZQNdt83cY3QnRJcq9sysr7ujCPr6+7gc4k3Z0UXo8UvYDyKUd/ZU85OPYD1DW4g3u5x+grMGFHTdAWU93mXMaObcVVtjgZAw7DFAqwuuRnilEU3ps4AwyK5LBGKFkhA0i7OFF1tOfDgce9tXKNb3NRT1NSuRQdaxcv/kqmlr3dnTWdriERXNrd00t6MLiu2pai3o6p7r7w8EGFk4vkxF0O+VDAohwJSM8Pa+zwJydbJMHwtPsS9DT0L3LKiq8k1mQzW1O75FUbmHMIvxiWt862nqEERtmMRVDg4kuFTaZyDSyGUbMUEdT4e7rTKSrPY0wGMJwEruK18Rgj/CUvTje3yQlBlNhqXZgN6xiuhRS4f7bq0BuzYeetqOEFwLZ1WRfQ08nXmGhRsQgt+Bpr3CXGALzliWe9gqn/LlrCqc9IZzw0/plkNTpjafNsm3frVOYn9Z9fiLE5f1GW1ESYXSbYtU09LRpsh8K6xDGksytJoQYnrgwI8KIEIdzNUF4kOwdxzrrKIkwcpIlXLpya9HvaqX9PgEVnnAL2biFTR/cPsWsQzhlrE+4AU3q6bVOPxELCLNnkN5lELbwdIHsnjuEDV+4cAl3ahhDHlgYZYyVA+sBhFENHKZUGJF3RDMLKAw/QIJ+aNjC+UCY/hQSCG18YfgdUy1fGFBhUn3RhdFrNYLJBWhyYfUOKOwuJzQe3HKCbcAzgUzQaonMXMAzZe7gCZlFAmCRoPsFpsbTCMMVRjQBXRbRDX2Rv+M0AoA2AtlZAd2QhbBM6wPQ+pR9AzIjz/8kWh9aFrTZu3of4WY3e3Tqo+0thoIQc9tbug9MGvrcIt8QYkZD771D2lx0UcPZSWDD3O8zs6yP7zcVVlgSIfZk7cfUG9qJuJF+rGIS0hBIziDRngI9vy/J29rj5CcaAv4G23j4OxEoE8YeFQMkaMTcQnbxcytwomBvnc8LDTL/IbJ8kHEghA/Wdz9oBf3I36cRCfHzj5EmjBCzcmXHqGLWEQuBQ0YwoYzoaZA+ldcLeFr0cII/I0Q8jX+VGEc3wh5AQb9dWNFjc+vRzplHPGQEGlRA1FNGnxhhvINkOCIpbPKJYXDgw4JpBoMlTc4ZRyg5Jnud/Yn9gahHYFMMLfKhX1yXd3ZuHx5zXoc72H20D3QDOBo3h830UtiXM/I+w+gFBFieyY8AfV0hw05bID4axwsaeHYe/lWY6+mA/XKTQTfSSzgd1w82CY55ywjff/OiVV7+yatlx1USE7Nfbtt2+17ZRFEURVEURVEURVEURVEURVEURVEURZHjPwrXuS8HJThPAAAAAElFTkSuQmCC"
      style={{ width: '100px' }}
    />
  );
};
`},65035:function(I,n){n.Z=`import React from 'react';
import { ReactLazinessImage } from 'react-laziness-image';

export default () => {
  return (
    <ReactLazinessImage
      src="https://imagev2.xmcdn.com/storages/b74d-audiofreehighqps/9A/0D/GKwRIUEJBRCFABAAAAJu9DIR.jpg"
      style={{ width: '300px' }}
      useLazy={false}
    />
  );
};
`}}]);
