(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{B4h3:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("2z+b"),o=a("8o2o"),i=a("9Hrx"),r=a("q1tI"),s=a.n(r),c=a("TSYQ"),l=a.n(c),d=a("m/Yd"),u=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).onRouteChangeStart=function(e){e.detail.isInternal&&t.element.exit()},t}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},a.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},a.render=function(){var e=this,t=this.props,a=(t.theme,t.classes),n=t.className,i=t.children,r=Object(o.a)(t,["theme","classes","className","children"]);return s.a.createElement(d.a,Object.assign({className:l()(a.root,n),node:"main",ref:function(t){return e.element=t}},r),s.a.createElement("div",{className:a.frame}),s.a.createElement("div",{className:a.content},i))},t}(s.a.Component);u.displayName="Main";var m=a("+IKJ"),p=Object(n.a)((function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(m.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}}))(u)},Yhqy:function(e,t,a){e.exports=a.p+"static/favicon-95ea5cff012f971ed864a05d4505500e.png"},"m/Yd":function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a("2z+b"),o=a("746C"),i=a("7nfP"),r=a("8o2o"),s=a("9Hrx"),c=a("q1tI"),l=a.n(c),d=a("TSYQ"),u=a.n(d),m=a("EgnG"),p=function(e){function t(){return e.apply(this,arguments)||this}Object(s.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},a.enter=function(){var e=this.props,t=e.energy,a=e.sounds,n=t.duration.enter;a.fade&&a.fade.play(),this.animate({keyframes:[{opacity:1,duration:n/3},{opacity:0,duration:n/5},{opacity:1,duration:n/2}]})},a.exit=function(){var e=this.props,t=e.energy,a=e.sounds,n=t.duration.exit;a.fade&&a.fade.play(),this.animate({keyframes:[{opacity:0,duration:n/3},{opacity:1,duration:n/5},{opacity:0,duration:n/2}]})},a.animate=function(e){this.unanimate(),Object(m.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},a.unanimate=function(){m.a.remove(this.element)},a.render=function(){var e=this,t=this.props,a=(t.theme,t.classes),n=(t.energy,t.audio,t.sounds,t.className),o=t.children,i=t.node,s=Object(r.a)(t,["theme","classes","energy","audio","sounds","className","children","node"]);return l.a.createElement(i,Object.assign({ref:function(t){return e.element=t},className:u()(a.root,n)},s),o)},t}(l.a.PureComponent);p.displayName="Fader",p.defaultProps={node:"span"};var g=Object(o.a)()(Object(n.a)((function(e){return{root:{display:"inline-block",opacity:0}}}))(Object(i.a)()(p)))},r4CG:function(e,t,a){"use strict";a.r(t);var n=a("9Hrx"),o=a("q1tI"),i=a.n(o),r=a("xQ6K"),s=a.n(r),c=a("2z+b"),l=a("B4h3"),d=a("746C"),u=a("7nfP"),m=a("8o2o"),p=a("TSYQ"),g=a.n(p),h=a("EgnG"),f=a("dntC"),b=a("Qs7Y"),y=a("m/Yd"),k=a("CcRw"),w=function(e){function t(){return e.apply(this,arguments)||this}Object(n.a)(t,e);var a=t.prototype;return a.enter=function(){var e=this.props,t=e.energy,a=e.sounds,n=t.duration.enter;a.deploy&&a.deploy.play(),Object(h.a)({targets:this.lineTopEl,duration:n,easing:"easeOutCubic",width:["0%","100%"],complete:function(){return a.deploy&&a.deploy.stop()}})},a.exit=function(){var e=this.props,t=e.energy,a=e.sounds,n=t.duration.exit;a.deploy&&a.deploy.play(),Object(h.a)({targets:this.lineTopEl,duration:n,easing:"easeOutCubic",width:["100%","0%"],complete:function(){return a.deploy&&a.deploy.stop()}})},a.render=function(){var e=this,t=this.props,a=(t.theme,t.classes),n=t.energy,o=t.audio,r=t.sounds,s=t.className,c=(t.children,t.data),l=Object(m.a)(t,["theme","classes","energy","audio","sounds","className","children","data"]);return i.a.createElement("article",Object.assign({className:g()(a.root,s)},l),i.a.createElement("div",{className:a.lineTop,ref:function(t){return e.lineTopEl=t}}),i.a.createElement(k.a,{stagger:!0},i.a.createElement(f.a,{className:a.link,href:c.link,target:"_blank",onMouseEnter:function(){return r.hover&&n.entered&&r.hover.play()}},i.a.createElement(y.a,{node:"div",className:a.media,audio:o},i.a.createElement("div",{className:a.image,style:{backgroundImage:c.image&&"url("+c.image+")"}})),i.a.createElement("div",{className:a.info},i.a.createElement("h1",{className:a.text},i.a.createElement(b.a,{audio:o},c.intra_name)),i.a.createElement("p",{className:a.message},c.message)))))},t}(i.a.Component);w.displayName="Post";var v=a("+IKJ"),j=a("Yhqy"),x=a.n(j),O=Object(d.a)()(Object(c.a)((function(e){return{root:{position:"relative",display:"block",margin:0},lineTop:{position:"absolute",left:"50%",transform:"translateX(-50%)",borderTop:"1px solid "+Object(v.b)(e.color.primary.dark,.25),width:function(e){return e.energy.animate?"0%":"100%"}},link:{display:"flex",flexDirection:"column",padding:[40,20],transition:["background 200ms ease-out","color 200ms ease-out"].join(","),"&:hover, &:focus":{backgroundColor:function(t){return t.energy.entered&&Object(v.b)(e.color.secondary.main,.05)}}},media:{display:"flex",margin:[0,"auto"],padding:[0,0,20,0],width:"100%",height:200},image:{flex:1,border:"1px solid "+Object(v.b)(e.color.secondary.dark,.125),backgroundColor:"#000",backgroundImage:"url("+x.a+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},info:{flex:1,color:e.color.text.main,wordBreak:"break-word"},title:{fontSize:20},message:{margin:0},"@media screen and (min-width: 480px)":{link:{flexDirection:"row",padding:20},media:{padding:[0,20,0,0],width:180,height:180}},"@media screen and (min-width: 768px)":{link:{padding:40}}}}))(Object(u.a)()(w))),E=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.classes;return i.a.createElement(l.a,{className:e.root},i.a.createElement(k.a,{stagger:!0},i.a.createElement("header",null,i.a.createElement("h1",null,i.a.createElement(b.a,null,"Member"))),s.a.map((function(e,t){return i.a.createElement(O,{key:t,audio:{silent:t>4},data:Object.assign({},e,{id:"post"+t})})}))))},t}(i.a.Component);t.default=Object(c.a)((function(e){return{root:{},seeMore:{marginTop:20}}}))(E)},xQ6K:function(e,t){e.exports=[{name:"kagawa yuya",intra_name:"ykagawa",message:"Leader",image:"https://pbs.twimg.com/profile_images/1283055935087349766/NakVKBWW.jpg",link:"https://twitter.com/yuuya08110"},{name:"kurosu sho",intra_name:"skurosu tech",message:"I got a job",image:"https://pbs.twimg.com/profile_images/1320210198036762624/bJuKGt3H.jpg",link:"https://twitter.com/skurosu42"},{intra_name:"hiwata",message:"Annual income 300 million",image:"https://pbs.twimg.com/media/EwcZ77QVcAEJJeN?format=jpg&name=large",link:"https://twitter.com/airgira23"},{intra_name:"kyuki",message:"In hyougo",image:"https://pbs.twimg.com/profile_images/1348940660468969476/jBMjPewe_400x400.jpg",link:"https://twitter.com/yuuuki81?s=20"}]}}]);
//# sourceMappingURL=component---src-pages-member-js-d91fff7abc6626503e96.js.map