(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3XHS":function(e,t,n){"use strict";n.r(t);var a=n("9Hrx"),o=n("q1tI"),r=n.n(o),i=n("2z+b"),s=n("B4h3"),c=n("Qs7Y"),u=n("CcRw"),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.classes;return r.a.createElement(s.a,{className:e.root},r.a.createElement("article",null,r.a.createElement(u.a,{stagger:!0},r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(c.a,null,"About Extreme_coding_assosiation "))),r.a.createElement("p",null,r.a.createElement(c.a,null,"We are 42tokyo sutudent.")))))},t}(r.a.Component);t.default=Object(i.a)((function(e){return{root:{}}}))(l)},B4h3:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("2z+b"),o=n("8o2o"),r=n("9Hrx"),i=n("q1tI"),s=n.n(i),c=n("TSYQ"),u=n.n(c),l=n("m/Yd"),d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).onRouteChangeStart=function(e){e.detail.isInternal&&t.element.exit()},t}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},n.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},n.render=function(){var e=this,t=this.props,n=(t.theme,t.classes),a=t.className,r=t.children,i=Object(o.a)(t,["theme","classes","className","children"]);return s.a.createElement(l.a,Object.assign({className:u()(n.root,a),node:"main",ref:function(t){return e.element=t}},i),s.a.createElement("div",{className:n.frame}),s.a.createElement("div",{className:n.content},r))},t}(s.a.Component);d.displayName="Main";var m=n("+IKJ"),p=Object(a.a)((function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(m.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}}))(d)},"m/Yd":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("2z+b"),o=n("746C"),r=n("7nfP"),i=n("8o2o"),s=n("9Hrx"),c=n("q1tI"),u=n.n(c),l=n("TSYQ"),d=n.n(l),m=n("EgnG"),p=function(e){function t(){return e.apply(this,arguments)||this}Object(s.a)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},n.enter=function(){var e=this.props,t=e.energy,n=e.sounds,a=t.duration.enter;n.fade&&n.fade.play(),this.animate({keyframes:[{opacity:1,duration:a/3},{opacity:0,duration:a/5},{opacity:1,duration:a/2}]})},n.exit=function(){var e=this.props,t=e.energy,n=e.sounds,a=t.duration.exit;n.fade&&n.fade.play(),this.animate({keyframes:[{opacity:0,duration:a/3},{opacity:1,duration:a/5},{opacity:0,duration:a/2}]})},n.animate=function(e){this.unanimate(),Object(m.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},n.unanimate=function(){m.a.remove(this.element)},n.render=function(){var e=this,t=this.props,n=(t.theme,t.classes),a=(t.energy,t.audio,t.sounds,t.className),o=t.children,r=t.node,s=Object(i.a)(t,["theme","classes","energy","audio","sounds","className","children","node"]);return u.a.createElement(r,Object.assign({ref:function(t){return e.element=t},className:d()(n.root,a)},s),o)},t}(u.a.PureComponent);p.displayName="Fader",p.defaultProps={node:"span"};var f=Object(o.a)()(Object(a.a)((function(e){return{root:{display:"inline-block",opacity:0}}}))(Object(r.a)()(p)))}}]);
//# sourceMappingURL=component---src-pages-about-js-bf9085ad535622f79d5b.js.map