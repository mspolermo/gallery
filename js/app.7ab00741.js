(function(){"use strict";var t={7842:function(t,e,n){var r=n(5471),o=n(5668),i=function(){var t=this,e=t._self._c;return e(o.A,[e("Navbar"),e("router-view")],1)},u=[],a=n(1201),l=n(7314),c=n(3449),s=n(1034),f=function(){var t=this,e=t._self._c;return e(c.A,{attrs:{fluid:""}},[e(a.A,{attrs:{color:"orange",dark:""}},[e(s.A),e(l.A,{staticClass:"ml-3",attrs:{outlined:""}},[e("router-link",{attrs:{to:"/"}},[t._v("Главная")])],1),e(l.A,{staticClass:"ml-3",attrs:{outlined:""}},[e("router-link",{attrs:{to:"/photo"}},[t._v("Фотографии")])],1)],1)],1)},d=[],h={},p=h,v=n(1656),m=(0,v.A)(p,f,d,!1,null,"30b6d4fc",null),g=m.exports,y={name:"App",components:{Navbar:g}},b=y,A=(0,v.A)(b,i,u,!1,null,null,null),w=A.exports,P=n(5868);r.Ay.use(P.A);var k=new P.A({}),C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-page"},[e(c.A,[e("h1",[t._v("Добро пожаловать в галерею ")]),e("p",[t._v("Исследуйте коллекцию изображений с JSON-Placeholder с возможностью добавить частичку себя...")]),e(l.A,{attrs:{color:"primary",href:"/photos"}},[t._v("Смотреть")])],1)],1)},_=[],O={name:"MainPage"},j=O,E=(0,v.A)(j,C,_,!1,null,"808fc9a2",null),N=E.exports,S=n(173);r.Ay.use(S.Ay);const x=[{path:"/",component:N},{path:"/photo",component:()=>n.e(940).then(n.bind(n,8940))},{path:"*",redirect:"/"}];var T=new S.Ay({mode:"history",routes:x}),L=n(1250),D=n(5353),M=(n(4114),{state:{photos:[],dialogVisible:!1,currentPhoto:{}},mutations:{setPhotos(t,e){t.photos=e},showDialog(t){t.dialogVisible=!0},hideDialog(t){t.dialogVisible=!1},setCurrentPhoto(t,e){t.currentPhoto=e},addPhoto(t,e){t.photos.push(e)}},getters:{getAllPhotos(t){return t.photos},getDialogVisible:t=>t.dialogVisible,getCurrentPhoto:t=>t.currentPhoto},actions:{fetchPhotos(t){L.A.get("https://jsonplaceholder.typicode.com/photos?_limit=10").then((e=>t.commit("setPhotos",e.data)))},addPhoto({commit:t},e){t("addPhoto",e)}}});r.Ay.use(D.Ay);var V=new D.Ay.Store({modules:{photoModule:M}});r.Ay.config.productionTip=!1,r.Ay.prototype.axios=L.A,new r.Ay({vuetify:k,store:V,router:T,render:t=>t(w)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var u=1/0;for(s=0;s<t.length;s++){r=t[s][0],o=t[s][1],i=t[s][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(a=!1,i<u&&(u=i));if(a){t.splice(s--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".b6bdcc5c.js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".9c7c67e4.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="gallery:";n.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){a=f;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=r),t[r]=[o];var d=function(e,n){a.onerror=a.onload=null,clearTimeout(h);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/gallery/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,r,o,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",n.nc&&(u.nonce=n.nc);var a=function(n){if(u.onerror=u.onload=null,"load"===n.type)o();else{var r=n&&n.type,a=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+r+": "+a+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=a,u.parentNode&&u.parentNode.removeChild(u),i(l)}};return u.onerror=u.onload=a,u.href=e,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(e(u,a))return o();t(r,a,null,o,i)}))},o={524:0};n.f.miniCss=function(t,e){var n={940:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={524:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(e),a=new Error,l=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,u=r[0],a=r[1],l=r[2],c=0;if(u.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var s=l(n)}for(e&&e(r);c<u.length;c++)i=u[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(s)},r=self["webpackChunkgallery"]=self["webpackChunkgallery"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(7842)}));r=n.O(r)})();
//# sourceMappingURL=app.7ab00741.js.map