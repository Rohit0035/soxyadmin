(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[192],{2140:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a(10),s=a(12),r=a(11),o=a(0),l=a.n(o),c=a(923),u=a(807),p=a(826),f=a(819),d=a(189),m=a(138),b=a(24),g=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={},e.handleLogin=function(t){t.preventDefault(),e.props.loginWithJWT(e.state)},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(c.a,null,l.a.createElement(u.a,{className:"m-0 justify-content-center"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-6 col-md-offset-3"},l.a.createElement("hgroup",null,"Subscribe for",l.a.createElement("select",{id:""},l.a.createElement("option",{value:"option"},"Option"),l.a.createElement("option",{value:"0"},"daily"),l.a.createElement("option",{value:"1",selected:!0},"weekly"),l.a.createElement("option",{value:"2"},"monthly")),"gominSeller"),l.a.createElement("div",{class:"well"},l.a.createElement(p.a,{action:"/",onSubmit:this.handleLogin},l.a.createElement("div",{class:"input-group"},l.a.createElement(f.a,{class:"btn btn-lg",name:"email",id:"email",type:"email",placeholder:"Your Email",required:!0}),l.a.createElement(d.a,{class:"btn btn-info btn-lg",type:"submit"},"Submit")))),l.a.createElement("small",{class:"promise"},l.a.createElement("em",null,"We won't send spam.")))))))}}]),a}(l.a.Component);t.default=Object(b.b)((function(e){return{values:e.auth.login}}),{loginWithJWT:m.e})(g)},819:function(e,t,a){"use strict";var n=a(5),i=a(6),s=a(15),r=a(17),o=a(0),l=a.n(o),c=a(1),u=a.n(c),p=a(4),f=a.n(p),d=a(3),m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,r=e.bsSize,o=e.valid,c=e.invalid,u=e.tag,p=e.addon,m=e.plaintext,b=e.innerRef,g=Object(i.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),y=u||("select"===s||"textarea"===s?s:"input"),O="form-control";m?(O+="-plaintext",y=u||"input"):"file"===s?O+="-file":"range"===s?O+="-range":h&&(O=p?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var j=Object(d.mapToCssModules)(f()(t,c&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,O),a);return("input"===y||u&&"function"===typeof u)&&(g.type=s),g.children&&!m&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(d.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),l.a.createElement(y,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":c}))},t}(l.a.Component);b.propTypes=m,b.defaultProps={type:"text"},t.a=b},826:function(e,t,a){"use strict";var n=a(5),i=a(6),s=a(15),r=a(17),o=a(0),l=a.n(o),c=a(1),u=a.n(c),p=a(4),f=a.n(p),d=a(3),m={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,r=e.tag,o=e.innerRef,c=Object(i.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(d.mapToCssModules)(f()(t,!!s&&"form-inline"),a);return l.a.createElement(r,Object(n.a)({},c,{ref:o,className:u}))},t}(o.Component);b.propTypes=m,b.defaultProps={tag:"form"},t.a=b},923:function(e,t,a){"use strict";var n=a(5),i=a(6),s=a(0),r=a.n(s),o=a(1),l=a.n(o),c=a(4),u=a.n(c),p=a(3),f={tag:p.tagPropType,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},d=function(e){var t=e.className,a=e.cssModule,s=e.fluid,o=e.tag,l=Object(i.a)(e,["className","cssModule","fluid","tag"]),c="container";!0===s?c="container-fluid":s&&(c="container-"+s);var f=Object(p.mapToCssModules)(u()(t,c),a);return r.a.createElement(o,Object(n.a)({},l,{className:f}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d}}]);
//# sourceMappingURL=192.d0741823.chunk.js.map