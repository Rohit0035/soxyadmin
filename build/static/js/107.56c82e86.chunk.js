(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[107],{2089:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(867),r=a(44),s=a(9),l=a(10),o=a(12),c=a(11),i=a(0),u=a.n(i),f=a(809),d=a(807),p=a(808),m=a(189),h=a(812),g=a(826),b=a(822),v=a(819),y=a(799),E=a(19),O=a(816),j=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(r.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("specialoffer_title",l.state.specialoffer_title),t.append("product",l.state.product),t.append("rate",l.state.rate),t.append("product_qty",l.state.product_qty),t.append("sortorder",l.state.sortorder),t.append("status",l.state.status),t.append("offer_img",l.state.selectedFile,l.state.selectedName);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var s=a.value;console.log(s)}}catch(u){r.e(u)}finally{r.f()}var o,c=Object(n.a)(t.keys());try{for(c.s();!(o=c.n()).done;){var i=o.value;console.log(i)}}catch(u){c.e(u)}finally{c.f()}O.a.post("http://35.154.134.118/api/admin/add_specialoffer",t).then((function(e){console.log(e.data),l.props.history.push("/app/offerAndCoupon/specialOffer/specialOfferList")})).catch((function(e){console.log(e)}))},l.state={specialoffer_title:"",product:"",rate:"",product_qty:"",sortorder:"",selectedFile:null,selectedName:"",status:""},l.state={allProduct1:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/getproduct").then((function(t){console.log(t),e.setState({allProduct1:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(f.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add special Offer")),u.a.createElement(p.a,null,u.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/offerAndCoupon/specialOffer/specialOfferList")}},"Back"))),u.a.createElement(h.a,null,u.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(d.a,{className:"mb-2"},u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,"Offer Title"),u.a.createElement(v.a,{type:"text",name:"specialoffer_title",value:this.state.specialoffer_title,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(b.a,null,"Product"),u.a.createElement(y.a,{type:"select",name:"product",value:this.state.product,onChange:this.changeHandler},this.state.allProduct1.map((function(e){return u.a.createElement("option",{value:e._id,key:e._id},e.product_name)})))),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(b.a,null,"Rate"),u.a.createElement(v.a,{type:"text",name:"rate",value:this.state.rate,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(b.a,null,"Product Qty"),u.a.createElement(v.a,{type:"number",name:"product_qty",value:this.state.product_qty,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,"Image"),u.a.createElement(y.a,{type:"file",onChange:this.onChangeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(b.a,null,"Short Order"),u.a.createElement(v.a,{type:"text",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(b.a,{className:"mb-1"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),u.a.createElement(d.a,null,u.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Special Offer"))))))}}]),a}(i.Component)},816:function(e,t,a){"use strict";var n=a(43),r=a.n(n).a.create({baseURL:"http://35.154.134.118/api/admin"});t.a=r},819:function(e,t,a){"use strict";var n=a(5),r=a(6),s=a(15),l=a(17),o=a(0),c=a.n(o),i=a(1),u=a.n(i),f=a(4),d=a.n(f),p=a(3),m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,f=e.addon,m=e.plaintext,h=e.innerRef,g=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),y=u||("select"===s||"textarea"===s?s:"input"),E="form-control";m?(E+="-plaintext",y=u||"input"):"file"===s?E+="-file":"range"===s?E+="-range":b&&(E=f?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var O=Object(p.mapToCssModules)(d()(t,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,E),a);return("input"===y||u&&"function"===typeof u)&&(g.type=s),g.children&&!m&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(y,Object(n.a)({},g,{ref:h,className:O,"aria-invalid":i}))},t}(c.a.Component);h.propTypes=m,h.defaultProps={type:"text"},t.a=h},822:function(e,t,a){"use strict";var n=a(5),r=a(6),s=a(0),l=a.n(s),o=a(1),c=a.n(o),i=a(4),u=a.n(i),f=a(3),d=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:d,order:d,offset:d})]),m={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:f.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,s=e.hidden,o=e.widths,c=e.tag,i=e.check,d=e.size,p=e.for,m=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];o.forEach((function(t,n){var r=e[t];if(delete m[t],r||""===r){var s,l=!n;if(Object(f.isObject)(r)){var o,c=l?"-":"-"+t+"-";s=g(l,t,r.size),h.push(Object(f.mapToCssModules)(u()(((o={})[s]=r.size||""===r.size,o["order"+c+r.order]=r.order||0===r.order,o["offset"+c+r.offset]=r.offset||0===r.offset,o))),a)}else s=g(l,t,r),h.push(s)}}));var b=Object(f.mapToCssModules)(u()(t,!!s&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,h,!!h.length&&"col-form-label"),a);return l.a.createElement(c,Object(n.a)({htmlFor:p},m,{className:b}))};b.propTypes=m,b.defaultProps=h,t.a=b},826:function(e,t,a){"use strict";var n=a(5),r=a(6),s=a(15),l=a(17),o=a(0),c=a.n(o),i=a(1),u=a.n(i),f=a(4),d=a.n(f),p=a(3),m={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,l=e.tag,o=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.mapToCssModules)(d()(t,!!s&&"form-inline"),a);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:u}))},t}(o.Component);h.propTypes=m,h.defaultProps={tag:"form"},t.a=h},867:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(105);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,l=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){o=!0,s=e},f:function(){try{l||null==r.return||r.return()}finally{if(o)throw s}}}}}}]);
//# sourceMappingURL=107.56c82e86.chunk.js.map