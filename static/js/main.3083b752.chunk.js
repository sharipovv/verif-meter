(this["webpackJsonpverif-vater"]=this["webpackJsonpverif-vater"]||[]).push([[0],{210:function(e,t,a){e.exports=a(361)},342:function(e,t,a){},361:function(e,t,a){"use strict";a.r(t);a(211),a(242),a(244),a(245),a(247),a(248),a(249),a(251),a(252),a(253),a(254),a(255),a(257),a(258),a(259),a(260),a(261),a(262),a(264),a(265),a(266),a(267),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(281),a(282),a(283),a(284),a(285),a(286);var n,r=a(0),l=a.n(r),c=a(61),o=a.n(c),u=a(18),i=(a(295),a(5)),s=a(45),m=a(367),h=a(368),d=a(366),p=a(369),f=a(88),E=a.n(f),b=a(44),g=a.n(b),v=a(63),j=a(139),O=a.n(j),w=(a(323),function(e){var t=e.activePhoto,a=e.setActivePhotoCrop,n=Object(r.useState)(null),c=Object(u.a)(n,2),o=c[0],i=c[1],s=Object(r.useState)({aspect:4}),m=Object(u.a)(s,2),h=m[0],d=m[1],p=null;Object(r.useEffect)((function(){i(t),d({unit:"%",width:40,height:10,x:25,y:25})}),[t]);var f=function(){var e=Object(v.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(p&&t.width&&t.height)){e.next=5;break}return e.next=3,E(p,t,"newFile.jpeg");case 3:n=e.sent,a(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e,t,a){var n=document.createElement("canvas"),r=window.devicePixelRatio,l=e.naturalWidth/e.width,c=e.naturalHeight/e.height,o=n.getContext("2d");return n.width=t.width*r*l,n.height=t.height*r*c,o.setTransform(r,0,0,r,0,0),o.imageSmoothingQuality="high",o.drawImage(e,t.x*l,t.y*c,t.width*l,t.height*c,0,0,t.width*l,t.height*c),new Promise((function(e,t){n.toBlob((function(t){if(t){t.name=a;var n=window.URL.createObjectURL(t);e(n)}else console.error("Canvas is empty")}),"image/jpeg",1)}))};return l.a.createElement("div",{className:"cropItem"},o&&l.a.createElement(O.a,{src:o,crop:h,onChange:d,onImageLoaded:function(e){p=e},onComplete:function(e){f(e)}}))}),y=[{id:1,city:"\u0412\u043e\u0440\u043e\u043d\u0435\u0436",street:"\u0427\u0435\u0440\u043d\u044b\u0448\u0435\u0432\u0441\u043a\u043e\u0433\u043e",house:"22",apartment:"1"},{id:2,city:"\u0412\u043e\u0440\u043e\u043d\u0435\u0436",street:"\u0427\u0435\u0440\u043d\u044b\u0448\u0435\u0432\u0441\u043a\u043e\u0433\u043e",house:"22",apartment:"2"},{id:3,city:"\u0412\u043e\u0440\u043e\u043d\u0435\u0436",street:"\u0427\u0435\u0440\u043d\u044b\u0448\u0435\u0432\u0441\u043a\u043e\u0433\u043e",house:"22",apartment:"3"},{id:4,city:"\u0412\u043e\u0440\u043e\u043d\u0435\u0436",street:"\u041f\u043e\u0431\u0435\u0434\u044b",house:"2",apartment:"2"},{id:5,city:"\u0412\u043e\u0440\u043e\u043d\u0435\u0436",street:"\u041f\u043e\u0431\u0435\u0434\u044b",house:"2",apartment:"3"},{id:5,city:"\u0412\u043e\u0440\u043e\u043d\u0435\u0436",street:"\u041f\u043e\u0431\u0435\u0434\u044b",house:"3",apartment:"3"}],S=function(e){var t=e.id,a=Object(r.useState)(!1),n=Object(u.a)(a,2),c=n[0],o=n[1],f=Object(r.useState)(!0),b=Object(u.a)(f,2),g=b[0],v=b[1],j=Object(r.useState)(!0),O=Object(u.a)(j,2),S=O[0],k=O[1],x=Object(r.useState)([]),C=Object(u.a)(x,2),P=C[0],_=C[1],R=Object(r.useState)([]),L=Object(u.a)(R,2),I=L[0],T=L[1],A=Object(r.useState)([]),N=Object(u.a)(A,2),z=N[0],M=N[1],D=Object(r.useState)([]),F=Object(u.a)(D,2),U=F[0],B=F[1],V=Object(r.useState)(""),W=Object(u.a)(V,2),q=W[0],H=W[1],J=Object(r.useState)(""),Q=Object(u.a)(J,2),G=Q[0],K=Q[1],X=Object(r.useState)(""),Y=Object(u.a)(X,2),Z=Y[0],$=Y[1],ee=Object(r.useState)(""),te=Object(u.a)(ee,2),ae=te[0],ne=te[1],re=Object(r.useState)(null),le=Object(u.a)(re,2),ce=le[0],oe=le[1],ue=Object(r.useState)(null),ie=Object(u.a)(ue,2),se=(ie[0],ie[1]);Object(r.useEffect)((function(){var e=Object(s.a)(new Set(y.map((function(e){return e.city}))));_(e.map((function(e){return{label:e,value:e}})))}),[]);return l.a.createElement(i.q,{id:t},l.a.createElement(i.r,{left:l.a.createElement(i.s,null,l.a.createElement(m.a,null))},"\u0421\u044a\u0451\u043c"),l.a.createElement(i.l,null,l.a.createElement(i.e,{after:g?l.a.createElement(h.a,null):l.a.createElement(d.a,null),onClick:function(){return v(!g)}},"\u041b\u043e\u043a\u0430\u0442\u043e\u0440"),l.a.createElement(E.a,{height:g?"auto":0},l.a.createElement(i.j,{top:"\u0413\u043e\u0440\u043e\u0434"},l.a.createElement(i.t,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",searchable:"true",options:P,value:q,onChange:function(e){var t=e.target.value,a=y.filter((function(e){return e.city===t})),n=Object(s.a)(new Set(a.map((function(e){return e.street}))));T(n.map((function(e){return{label:e,value:e}}))),H(t),K(""),$(""),ne("")}})),l.a.createElement(i.j,{top:"\u0423\u043b\u0438\u0446\u0430"},l.a.createElement(i.t,{disabled:""===q,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043b\u0438\u0446\u0443",searchable:"true",options:I,value:G,onChange:function(e){var t=e.target.value,a=y.filter((function(e){return e.city===q&&e.street===t})),n=Object(s.a)(new Set(a.map((function(e){return e.house}))));M(n),K(t),$(""),ne("")}})),""!==G&&l.a.createElement(i.j,{top:"\u0414\u043e\u043c"},l.a.createElement(i.m,{showArrows:!0,getScrollToLeft:function(e){return e-120},getScrollToRight:function(e){return e+120}},l.a.createElement(i.x,{mode:"buttons",style:{display:"flex"}},z.map((function(e){return l.a.createElement("div",{className:"mv4",key:e},l.a.createElement(i.y,{selected:e===Z,onClick:function(){return function(e){var t=y.filter((function(t){return t.city===q&&t.street===G&&t.house===e})),a=Object(s.a)(new Set(t.map((function(e){return e.apartment}))));B(a),$(e),ne("")}(e)}},e))})))))),""!==Z&&l.a.createElement(i.j,{top:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430"},l.a.createElement(i.m,{showArrows:!0,getScrollToLeft:function(e){return e-120},getScrollToRight:function(e){return e+120}},l.a.createElement(i.x,{mode:"buttons",style:{display:"flex"}},U.map((function(e){return l.a.createElement("div",{className:"mv4",key:e},l.a.createElement(i.y,{selected:e===ae,onClick:function(){return t=e,console.log(t),void ne(t);var t}},e))}))))),l.a.createElement(i.h,{style:{display:"flex"}},l.a.createElement(i.i,{id:"btnPhoto",before:l.a.createElement(p.a,null),controlSize:"l",stretched:!0,accept:"image/*;capture=camera",style:{marginRight:8},onChange:function(e){if(console.log(e.target.files),e.target.files&&e.target.files.length>0){var t=new FileReader;t.addEventListener("load",(function(){return oe(t.result)})),t.readAsDataURL(e.target.files[0])}}},"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0444\u043e\u0442\u043e"),l.a.createElement(i.c,{className:"btnText",before:l.a.createElement(p.a,null),size:"l",mode:"secondary",stretched:!0,disabled:!0},"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0444\u043e\u0442\u043e")),l.a.createElement(w,{activePhoto:ce,setActivePhotoCrop:se}),l.a.createElement(i.j,{top:"\u041f\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u0435"},l.a.createElement(i.n,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u0435"})),l.a.createElement(i.j,null,l.a.createElement(i.c,{size:"l",stretched:!0},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")),l.a.createElement(i.j,null,l.a.createElement(i.f,null,"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0435"),l.a.createElement(i.f,{checked:S,onChange:function(e){return k(e.target.checked)}},"\u041f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0444\u043e\u0442\u043e")),l.a.createElement(i.e,{after:c?l.a.createElement(h.a,null):l.a.createElement(d.a,null),onClick:function(){return o(!c)}},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f"),l.a.createElement(E.a,{height:c?"auto":0},l.a.createElement(i.j,{top:"\u0422\u0438\u043f \u041f\u0423"},l.a.createElement(i.n,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0438\u043f \u041f\u0423"})),l.a.createElement(i.j,{top:"\u041d\u043e\u043c\u0435\u0440 \u041f\u0423"},l.a.createElement(i.n,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u041f\u0423"})),l.a.createElement(i.j,{top:"\u0413\u043e\u0434 \u043f\u043e\u0432\u0435\u0440\u043a\u0438"},l.a.createElement(i.t,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0434 \u043f\u043e\u0432\u0435\u0440\u043a\u0438",searchable:"true",options:Object(s.a)(Array(23).keys()).map((function(e){return{label:(2e3+e).toString(),value:(2e3+e).toString()}}))})),l.a.createElement(i.j,{top:"\u041a\u043b\u0430\u0441\u0441 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438"},l.a.createElement(i.t,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043b\u0430\u0441\u0441 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438",searchable:"true",options:[{label:"1.0",value:"1.0"},{label:"2.0",value:"2.0"},{label:"2.5",value:"2.5"},{label:"5.0",value:"5.0"}]})),l.a.createElement(i.j,{top:"\u0417\u043d\u0430\u0447\u043d\u043e\u0441\u0442\u044c"},l.a.createElement(i.t,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u043d\u043e\u0441\u0442\u044c",searchable:"true",options:[{label:"1",value:"1"},{label:"4",value:"4"},{label:"5",value:"5"},{label:"6",value:"6"},{label:"7",value:"7"}]})),l.a.createElement(i.d,{disabled:!0,after:l.a.createElement(i.w,{"aria-label":"\u041f\u043b\u043e\u043c\u0431\u0430 \u043f\u043e\u0432\u0435\u0440\u043a\u0438"})},"\u041f\u043b\u043e\u043c\u0431\u0430 \u043f\u043e\u0432\u0435\u0440\u043a\u0438"),l.a.createElement(i.d,{disabled:!0,after:l.a.createElement(i.w,{"aria-label":"\u041f\u043b\u043e\u043c\u0431\u0430 \u042d\u0421\u041e"})},"\u041f\u043b\u043e\u043c\u0431\u0430 \u042d\u0421\u041e"),l.a.createElement(i.d,{disabled:!0,after:l.a.createElement(i.w,{"aria-label":"\u0410\u043d\u0442\u0438\u043c\u0430\u0433\u043d\u0438\u0442\u043d\u0430\u044f"})},"\u0410\u043d\u0442\u0438\u043c\u0430\u0433\u043d\u0438\u0442\u043d\u0430\u044f"),l.a.createElement(i.j,{top:"\u0414\u0430\u0442\u0430"},l.a.createElement(i.n,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",value:(new Date).toLocaleDateString("ru-RU"),onChange:function(){}})),l.a.createElement(i.j,{top:"\u041c\u0435\u0441\u0442\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"},l.a.createElement(i.n,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"})),l.a.createElement(i.j,{top:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"},l.a.createElement(i.n,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"})),l.a.createElement(i.j,null,l.a.createElement(i.c,{size:"l",stretched:!0},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))))},k=a(49),x=a(19),C=(n={},Object(k.a)(n,"/",new x.Page("panel_main","view_main")),Object(k.a)(n,"/auth",new x.Page("panel_auth","view_main")),n),P=new x.Router(C);P.onEnterPage("/",(function(){console.log("\u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")})),P.on("update",(function(e,t){e.getPageId(),e.getParams(),e.getPanelId(),e.getViewId(),e.getLocation(),e.isModal(),e.isPopup(),e.hasOverlay(),t?console.log("move from page ".concat(t.getLocation()," -> ").concat(e.getLocation())):console.log("enter to page ".concat(e.getLocation()))})),P.start();a(342);var _=a(89),R=a(90),L=a.n(R),I="https://ibronevik.ru/taxi/api/v1/",T=function(e,t){for(var a=0,n=Object.entries(t);a<n.length;a++){var r=Object(u.a)(n[a],2),l=r[0],c=r[1];c&&e.append(l,c)}return e},A=function(e){var t=new FormData;return T(t,Object(_.a)(Object(_.a)({},e),{},{type:"e-mail"})),L.a.post(I+"auth",t).then((function(e){return e.data})).then((function(e){if(e.auth_hash){var t=new FormData;return T(t,{auth_hash:e.auth_hash}),L.a.post(I+"token",t).then((function(e){return e.data})).then((function(e){return e.data?e.data:e}))}return e})).catch((function(e){return{message:"Network error"}}))},N=function(e){var t=e.id,a=e.setModalErrorText,n=Object(r.useState)(""),c=Object(u.a)(n,2),o=c[0],s=c[1],m=Object(r.useState)(""),h=Object(u.a)(m,2),d=h[0],p=h[1],f=Object(x.useRouter)(),E=function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A({login:o,password:d});case 2:(t=e.sent).message?(a(t.message),f.pushModal("modal_error")):(localStorage.setItem("token",t.token),localStorage.setItem("u_hash",t.u_hash),f.replacePage("/"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(i.q,{id:t},l.a.createElement(i.r,null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),l.a.createElement(i.l,null,l.a.createElement(i.k,null,l.a.createElement(i.j,{top:"\u041b\u043e\u0433\u0438\u043d"},l.a.createElement(i.n,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",value:o,onChange:function(e){return s(e.target.value)}})),l.a.createElement(i.j,{top:"\u041f\u0430\u0440\u043e\u043b\u044c"},l.a.createElement(i.n,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",value:d,onChange:function(e){return p(e.target.value)}})),l.a.createElement(i.h,null,l.a.createElement(i.c,{type:"submit",stretched:!0,size:"l",onClick:E,disabled:0===o.length||0===d.length},"\u0412\u043e\u0439\u0442\u0438")))))};function z(e){var t=e.id,a=e.modalErrorText,n=Object(x.useRouter)();return l.a.createElement(i.o,{id:t,onClose:function(){return n.popPage()},header:"Error",subheader:a})}var M=function(){var e=Object(x.useLocation)(),t=Object(x.useRouter)(),a=Object(r.useState)(""),n=Object(u.a)(a,2),c=n[0],o=n[1],s=l.a.createElement(i.p,{activeModal:e.getModalId(),onClose:function(){return t.popPage()}},l.a.createElement(z,{id:"modal_error",onClose:function(){return t.popPage()},modalErrorText:c}));return Object(r.useEffect)((function(){localStorage.getItem("token")||localStorage.getItem("u_hash")||t.replacePage("/auth")}),[t]),l.a.createElement(i.g,{webviewType:i.A.INTERNAL},l.a.createElement(i.a,null,l.a.createElement(i.b,null,l.a.createElement(i.v,{modal:s,style:{justifyContent:"center"}},l.a.createElement(i.u,{maxWidth:800,spaced:window.innerWidth>800},l.a.createElement(i.z,{id:"view_main",onSwipeBack:function(){return t.popPage()},history:e.hasOverlay()?[]:e.getViewHistory("view_main"),activePanel:e.getViewActivePanel("view_main")},l.a.createElement(S,{id:"panel_main"}),l.a.createElement(N,{id:"panel_auth",setModalErrorText:o})))))))};o.a.render(l.a.createElement(x.RouterContext.Provider,{value:P},l.a.createElement(M,null)),document.getElementById("root"))}},[[210,1,2]]]);
//# sourceMappingURL=main.3083b752.chunk.js.map