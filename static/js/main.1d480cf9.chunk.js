(this["webpackJsonpline-os"]=this["webpackJsonpline-os"]||[]).push([[0],{18:function(e,n,t){e.exports={batteryIndicator:"EnvironmentsIndicators_batteryIndicator__2g6Ot",level:"EnvironmentsIndicators_level__ibG1S",communication:"EnvironmentsIndicators_communication__19vmv",communicationIndicator:"EnvironmentsIndicators_communicationIndicator__3kLqt",communicationLevel:"EnvironmentsIndicators_communicationLevel__AY-8R",communicationLevelName:"EnvironmentsIndicators_communicationLevelName__3EG58",timeIndicator:"EnvironmentsIndicators_timeIndicator__1fZIX"}},27:function(e,n,t){e.exports={app_container:"App_app_container__35UVB",app_block:"App_app_block__FKQUm",left_header:"App_left_header__pjlK5",right_header:"App_right_header__1lgWT"}},28:function(e,n,t){e.exports={active_line:"ActiveLine_active_line__c2vxt",active_line_container:"ActiveLine_active_line_container__38iDR",active_line_item:"ActiveLine_active_line_item__9g9Qg"}},44:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t.n(i),o=t(24),a=t.n(o),r=(t(44),t(27)),s=t.n(r),l=t(38),d=(t(46),t(2)),v=t(18),u=t.n(v),m=t(5),_=function(e){var n=e.battery_level,t=e.color;Object(i.useEffect)((function(){r({style:{"--color-battery":t}})}),[t]);var c=Object(i.useState)({style:{"--color-battery":"white"}}),o=Object(d.a)(c,2),a=o[0],r=o[1];return Object(m.jsx)("div",{className:u.a.batteryIndicator,style:a.style,children:Object(m.jsx)("div",{className:u.a.level,style:{width:n.toString()+"%"}})})},h=function(e){e.communication_level;var n=e.color,t=Object(i.useState)({levels:[25,50,75,100],height:[3,5,7,9]}),c=Object(d.a)(t,2),o=c[0];c[1];return Object(m.jsxs)("div",{className:u.a.communication,children:[Object(m.jsx)("div",{className:u.a.communicationIndicator,children:o.height.map((function(e,t){return Object(m.jsx)("div",{className:u.a.communicationLevel,style:{height:e.toString()+"px",backgroundColor:n}},t)}))}),Object(m.jsx)("div",{className:u.a.communicationLevelName,children:Object(m.jsx)("span",{children:"5G"})})]})},j=function(e){var n=e.color,t=e.time;return Object(m.jsx)("div",{className:u.a.timeIndicator,children:Object(m.jsx)("span",{style:{color:n},children:t})})},b=t(30),f=t(28),p=t.n(f),g=t(39),O=t(31),w=function(){var e=Object(O.useSpring)((function(){return{y:0}})),n=Object(d.a)(e,2),t=n[0].y,i=n[1],c=Object(g.useDrag)((function(e){var n=e.down,t=Object(d.a)(e.movement,1)[0];return i.start({y:n?t:0})}),{bounds:{left:-100,right:0,top:0,bottom:0}});return Object(m.jsx)("div",{className:p.a.active_line,children:Object(m.jsx)(O.animated.div,Object(b.a)(Object(b.a)({},c()),{},{style:{y:t},className:p.a.active_line_container,children:Object(m.jsx)("div",{className:p.a.active_line_item})}))})},x=function(){return Object(m.jsx)(l.DeviceFrameset,{device:"iPhone X",style:{margin:"0 auto"},children:Object(m.jsxs)("div",{className:s.a.app_container,children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("div",{className:s.a.left_header,children:Object(m.jsx)(j,{time:"10:06",color:"white"})}),Object(m.jsxs)("div",{className:s.a.right_header,children:[Object(m.jsx)(h,{communication_level:25,color:"white"}),Object(m.jsx)(_,{battery_level:95,color:"white"})]})]}),Object(m.jsx)("footer",{children:Object(m.jsx)(w,{})})]})})},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N,k,L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),i(e),c(e),o(e),a(e)}))};a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),N=391,k=805,window.addEventListener("resize",(function(){window.resizeTo(N,k)})),function(e){if("serviceWorker"in navigator){if(new URL("/LineOs",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/LineOs","/service-worker.js");y?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):I(n,e)}))}}(),L()}},[[49,1,2]]]);
//# sourceMappingURL=main.1d480cf9.chunk.js.map