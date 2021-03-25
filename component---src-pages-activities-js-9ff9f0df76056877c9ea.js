(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{B4h3:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("2z+b"),r=t("8o2o"),i=t("9Hrx"),o=t("q1tI"),s=t.n(o),c=t("TSYQ"),m=t.n(c),l=t("m/Yd"),d=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).onRouteChangeStart=function(e){e.detail.isInternal&&a.element.exit()},a}Object(i.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},t.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},t.render=function(){var e=this,a=this.props,t=(a.theme,a.classes),n=a.className,i=a.children,o=Object(r.a)(a,["theme","classes","className","children"]);return s.a.createElement(l.a,Object.assign({className:m()(t.root,n),node:"main",ref:function(a){return e.element=a}},o),s.a.createElement("div",{className:t.frame}),s.a.createElement("div",{className:t.content},i))},a}(s.a.Component);d.displayName="Main";var u=t("+IKJ"),p=Object(n.a)((function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(u.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}}))(d)},R4im:function(e,a,t){"use strict";t.r(a);var n=t("9Hrx"),r=t("q1tI"),i=t.n(r),o=t("2z+b"),s=t("B4h3"),c=t("Qs7Y"),m=t("CcRw"),l=t("m/Yd"),d=t("dntC"),u=function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){var e=this.props.classes;return i.a.createElement(s.a,{className:e.root},i.a.createElement(m.a,{stagger:!0},i.a.createElement("h1",null,i.a.createElement(c.a,null,"activities")),i.a.createElement("div",{className:e.albums},i.a.createElement("div",{className:e.album},i.a.createElement(l.a,{className:e.albumCover},i.a.createElement(d.a,{href:"",target:"circalgorithm"},i.a.createElement("image",{alt:"pampkin event image",src:"/extreme_42_hp/images/pampkin.png"}))),i.a.createElement("div",{className:e.info},i.a.createElement("h3",{className:e.text},"Halloween event"),i.a.createElement("p",{className:e.message})))),i.a.createElement("div",{className:e.albums},i.a.createElement("div",{className:e.album},i.a.createElement(l.a,{className:e.albumCover},i.a.createElement(d.a,{href:"https://github.com/Code4Yokohama/code4yokohama.github.io/pull/23",target:"circalgorithm"},i.a.createElement("image",{alt:"pull request image",src:"/extreme_42_hp/images/atSotakesan.jpeg"}))),i.a.createElement("div",{className:e.info},i.a.createElement("h3",{className:e.text},"pull request",i.a.createElement("br",null),"at Mt.sotakesan"),i.a.createElement("p",{className:e.message})))),i.a.createElement("div",{className:e.albums},i.a.createElement("div",{className:e.album},i.a.createElement(l.a,{className:e.albumCover},i.a.createElement(d.a,{href:"https://hackday.jp/",target:"circalgorithm"},i.a.createElement("image",{alt:"hackday-event 2021 image",src:"https://pbs.twimg.com/media/ExGMiW1UUAE7xax?format=jpg&name=large"}))),i.a.createElement("div",{className:e.info},i.a.createElement("h3",{className:e.text},"Hackday 2021 __ONLINE__"),i.a.createElement("p",{className:e.message},"Extreme member Participated!"))))))},a}(i.a.Component);a.default=Object(o.a)((function(e){return{root:{},albums:{display:"flex",flexDirection:"row",flexWrap:"wrap"},album:{padding:[0,0,20],width:"100%"},albumCover:{display:"block",margin:[0,0,20],width:"100%","& img":{margin:0,width:"100%",maxWidth:"100%"}},albumFrame:{display:"block",width:"100%"},"@media screen and (min-width: 768px)":{album:{padding:10,width:"50%"}}}}))(u)},"m/Yd":function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var n=t("2z+b"),r=t("746C"),i=t("7nfP"),o=t("8o2o"),s=t("9Hrx"),c=t("q1tI"),m=t.n(c),l=t("TSYQ"),d=t.n(l),u=t("EgnG"),p=function(e){function a(){return e.apply(this,arguments)||this}Object(s.a)(a,e);var t=a.prototype;return t.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},t.enter=function(){var e=this.props,a=e.energy,t=e.sounds,n=a.duration.enter;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:1,duration:n/3},{opacity:0,duration:n/5},{opacity:1,duration:n/2}]})},t.exit=function(){var e=this.props,a=e.energy,t=e.sounds,n=a.duration.exit;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:0,duration:n/3},{opacity:1,duration:n/5},{opacity:0,duration:n/2}]})},t.animate=function(e){this.unanimate(),Object(u.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},t.unanimate=function(){u.a.remove(this.element)},t.render=function(){var e=this,a=this.props,t=(a.theme,a.classes),n=(a.energy,a.audio,a.sounds,a.className),r=a.children,i=a.node,s=Object(o.a)(a,["theme","classes","energy","audio","sounds","className","children","node"]);return m.a.createElement(i,Object.assign({ref:function(a){return e.element=a},className:d()(t.root,n)},s),r)},a}(m.a.PureComponent);p.displayName="Fader",p.defaultProps={node:"span"};var h=Object(r.a)()(Object(n.a)((function(e){return{root:{display:"inline-block",opacity:0}}}))(Object(i.a)()(p)))}}]);
//# sourceMappingURL=component---src-pages-activities-js-9ff9f0df76056877c9ea.js.map