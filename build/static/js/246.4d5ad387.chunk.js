(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[246],{2148:function(e,a,t){"use strict";t.r(a);var r=t(9),n=t(10),i=t(12),l=t(11),c=t(0),d=t.n(c),o=t(809),s=t(812),u=t(805),m=t(583),g=t(579),f=t(145),p=t(819),h=t(189),v=t(821),w=t(102),E=t(402),b=t(273),S=t(19),N=t(43),z=t.n(N),P=(t(820),t(101)),k=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"UserName",field:"customer.firstname",width:175,filter:!0,cellRendererFramework:function(e){var a,t;return d.a.createElement("div",null,d.a.createElement("span",null,null===(a=e.data.customer)||void 0===a?void 0:a.firstname," ",null===(t=e.data.customer)||void 0===t?void 0:t.lastname," "))}},{headerName:"UserId",field:"customer.customerId",filter:"true",width:140,cellRendererFramework:function(e){var a;return d.a.createElement("div",null,d.a.createElement("span",null,null===(a=e.data.customer)||void 0===a?void 0:a.customerId))}},{headerName:"Email",field:"customer.email",filter:!0,width:150,cellRendererFramework:function(e){var a;return d.a.createElement("div",null,d.a.createElement("span",null,null===(a=e.data.customer)||void 0===a?void 0:a.email))}},{headerName:"Phone Number",field:"customer.mobile",filter:!0,width:150,cellRendererFramework:function(e){var a;return d.a.createElement("div",null,d.a.createElement("span",null,null===(a=e.data.customer)||void 0===a?void 0:a.mobile))}},{headerName:"Amount",field:"amount",filter:!0,width:125,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.amount))}},{headerName:"Request Crypto  Amount",field:"reqamount",filter:!0,width:125,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.reqamount))}},{headerName:"Payment Method",field:"pay_method",filter:"true",width:140,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.pay_method))}},{headerName:"Image",field:"depsite_file",filter:!1,width:200,setColumnVisible:!1,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("img",{className:" rounded-circle  mr-3",src:e.data.depsite_file,alt:"user avatar",height:"40",width:"40"}))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Success"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Pending"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},{headerName:"Actions",field:"_id",width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(E.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return S.a.push("/app/walletPage/adddeposit/"+e.data._id)}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;z.a.get("http://35.154.134.118:8000/admin/getwallet").then((function(a){var t=a.data.data;console.log(t),e.setState({rowData:t})}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return d.a.createElement(d.a.Fragment,null,d.a.createElement(P.a,{breadCrumbTitle:"Deposit List",breadCrumbActive:"Wallet "}),d.a.createElement(o.a,{className:"overflow-hidden agGrid-card"},d.a.createElement(s.a,{className:"py-0"},null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(u.a,{className:"p-1 ag-dropdown"},d.a.createElement(m.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(b.a,{className:"ml-50",size:15})),d.a.createElement(g.a,{right:!0},d.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(p.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(h.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(w.a.Consumer,null,(function(a){return d.a.createElement(v.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(d.a.Component);a.default=k}}]);
//# sourceMappingURL=246.4d5ad387.chunk.js.map