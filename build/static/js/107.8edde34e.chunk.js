(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[107],{2083:function(e,a,t){"use strict";t.r(a),t.d(a,"AddSimpleProduct",(function(){return O}));var n=t(44),s=t(9),r=t(10),l=t(12),c=t(11),o=t(0),i=t.n(o),d=t(809),u=t(807),m=t(808),p=t(189),f=t(812),h=t(826),g=t(831),b=t(822),v=t(819),E=t(19),y=t(816),O=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",r.state.name),a.append("sortorder",r.state.sortorder),a.append("desc",r.state.desc),a.append("status",r.state.status),null!==r.state.selectedFile&&a.append("brand_img",r.state.selectedFile,r.state.selectedName),y.a.post("/addbrand",a).then((function(e){console.log(e),r.props.history.push("/app/productManagement/simpleProduct/simpleProductList")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",status:""},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(m.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Simple Product")),i.a.createElement(m.a,null,i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/productManagement/simpleProduct/simpleProductList")}},"Back"))),i.a.createElement(f.a,null,i.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,{className:"mb-2"},i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Units Name"),i.a.createElement(v.a,{type:"text",placeholder:"Customer Name",name:"name",value:this.state.name,onChange:this.changeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Sort Order"),i.a.createElement(v.a,{type:"number",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Description"),i.a.createElement(v.a,{type:"textarea",placeholder:"Description",name:"desc",value:this.state.desc,onChange:this.changeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,{class:"switch"},"Customer Image / Logo"),i.a.createElement(v.a,{type:"file",onChange:this.onChangeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(g.a,null,i.a.createElement(b.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))))),i.a.createElement(u.a,null,i.a.createElement(p.a.Ripple,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Add Simple Product"))))))}}]),t}(o.Component);a.default=O},816:function(e,a,t){"use strict";var n=t(43),s=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=s},819:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(15),l=t(17),c=t(0),o=t.n(c),i=t(1),d=t.n(i),u=t(4),m=t.n(u),p=t(3),f={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,c=e.valid,i=e.invalid,d=e.tag,u=e.addon,f=e.plaintext,h=e.innerRef,g=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),E=d||("select"===r||"textarea"===r?r:"input"),y="form-control";f?(y+="-plaintext",E=d||"input"):"file"===r?y+="-file":"range"===r?y+="-range":b&&(y=u?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var O=Object(p.mapToCssModules)(m()(a,i&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,y),t);return("input"===E||d&&"function"===typeof d)&&(g.type=r),g.children&&!f&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(E,Object(n.a)({},g,{ref:h,className:O,"aria-invalid":i}))},a}(o.a.Component);h.propTypes=f,h.defaultProps={type:"text"},a.a=h},822:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(0),l=t.n(r),c=t(1),o=t.n(c),i=t(4),d=t.n(i),u=t(3),m=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:m,order:m,offset:m})]),f={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},b=function(e){var a=e.className,t=e.cssModule,r=e.hidden,c=e.widths,o=e.tag,i=e.check,m=e.size,p=e.for,f=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];c.forEach((function(a,n){var s=e[a];if(delete f[a],s||""===s){var r,l=!n;if(Object(u.isObject)(s)){var c,o=l?"-":"-"+a+"-";r=g(l,a,s.size),h.push(Object(u.mapToCssModules)(d()(((c={})[r]=s.size||""===s.size,c["order"+o+s.order]=s.order||0===s.order,c["offset"+o+s.offset]=s.offset||0===s.offset,c))),t)}else r=g(l,a,s),h.push(r)}}));var b=Object(u.mapToCssModules)(d()(a,!!r&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,h,!!h.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:p},f,{className:b}))};b.propTypes=f,b.defaultProps=h,a.a=b},826:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(15),l=t(17),c=t(0),o=t.n(c),i=t(1),d=t.n(i),u=t(4),m=t.n(u),p=t(3),f={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,c=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(p.mapToCssModules)(m()(a,!!r&&"form-inline"),t);return o.a.createElement(l,Object(n.a)({},i,{ref:c,className:d}))},a}(c.Component);h.propTypes=f,h.defaultProps={tag:"form"},a.a=h},831:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(0),l=t.n(r),c=t(1),o=t.n(c),i=t(4),d=t.n(i),u=t(3),m={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.row,c=e.disabled,o=e.check,i=e.inline,m=e.tag,p=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(u.mapToCssModules)(d()(a,!!r&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!c)&&"disabled"),t);return"fieldset"===m&&(p.disabled=c),l.a.createElement(m,Object(n.a)({},p,{className:f}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p}}]);
//# sourceMappingURL=107.8edde34e.chunk.js.map