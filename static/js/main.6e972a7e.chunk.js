(this["webpackJsonpline-os"]=this["webpackJsonpline-os"]||[]).push([[0],{12:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var i=t(1),o=t.n(i),c=t(6),r=t.n(c),a=(t(12),t(3)),s=t.n(a),l=t(7),d=(t(14),t(5)),u=t(2),m=t.n(u),v=t(0),h=function(e){var n=e.battery_level,t=e.color;Object(i.useEffect)((function(){a({style:{"--color-battery":t}})}),[t]);var o=Object(i.useState)({style:{"--color-battery":"white"}}),c=Object(d.a)(o,2),r=c[0],a=c[1];return Object(v.jsx)("div",{className:m.a.batteryIndicator,style:r.style,children:Object(v.jsx)("div",{className:m.a.level,style:{width:n.toString()+"%"}})})},_=function(e){e.communication_level;var n=e.color,t=Object(i.useState)({levels:[25,50,75,100],height:[3,5,7,9]}),o=Object(d.a)(t,2),c=o[0];o[1];return Object(v.jsxs)("div",{className:m.a.communication,children:[Object(v.jsx)("div",{className:m.a.communicationIndicator,children:c.height.map((function(e,t){return Object(v.jsx)("div",{className:m.a.communicationLevel,style:{height:e.toString()+"px",backgroundColor:n}},t)}))}),Object(v.jsx)("div",{className:m.a.communicationLevelName,children:Object(v.jsx)("span",{children:"5G"})})]})},f=function(e){var n=e.color,t=e.time;return Object(v.jsx)("div",{className:m.a.timeIndicator,children:Object(v.jsx)("span",{style:{color:n},children:t})})},j=function(){return Object(v.jsx)(l.DeviceFrameset,{device:"iPhone X",style:{margin:"0 auto"},children:Object(v.jsx)("div",{className:s.a.app_container,children:Object(v.jsxs)("header",{children:[Object(v.jsx)("div",{className:s.a.left_header,children:Object(v.jsx)(f,{time:"10:06",color:"white"})}),Object(v.jsxs)("div",{className:s.a.right_header,children:[Object(v.jsx)(_,{communication_level:25,color:"white"}),Object(v.jsx)(h,{battery_level:100,color:"white"})]})]})})})},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var g,w,O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,i=n.getFID,o=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),i(e),o(e),c(e),r(e)}))};r.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(j,{})}),document.getElementById("root")),g=410,w=786,window.addEventListener("resize",(function(){window.resizeTo(g,w)})),function(e){if("serviceWorker"in navigator){if(new URL("/LineOs",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/LineOs","/service-worker.js");b?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):p(n,e)}))}}(),O()},2:function(e,n,t){e.exports={batteryIndicator:"EnvironmentsIndicators_batteryIndicator__2g6Ot",level:"EnvironmentsIndicators_level__ibG1S",communication:"EnvironmentsIndicators_communication__19vmv",communicationIndicator:"EnvironmentsIndicators_communicationIndicator__3kLqt",communicationLevel:"EnvironmentsIndicators_communicationLevel__AY-8R",communicationLevelName:"EnvironmentsIndicators_communicationLevelName__3EG58",timeIndicator:"EnvironmentsIndicators_timeIndicator__1fZIX"}},3:function(e,n,t){e.exports={app_container:"App_app_container__35UVB",app_block:"App_app_block__FKQUm",left_header:"App_left_header__pjlK5",right_header:"App_right_header__1lgWT"}}},[[16,1,2]]]);
//# sourceMappingURL=main.6e972a7e.chunk.js.map