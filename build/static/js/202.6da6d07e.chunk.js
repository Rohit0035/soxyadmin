(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[202],{2075:function(e,t,a){"use strict";a.r(t);var n=a(78),r=a.n(n),i=a(132),l=a(44),c=a(9),o=a(10),s=a(12),u=a(11),m=a(0),d=a.n(m),f=a(807),p=a(808),g=a(809),h=a(812),w=a(805),v=a(583),E=a(579),S=a(145),b=a(819),z=a(189),N=a(43),P=a.n(N),k=a(102),C=a(821),y=a(319),x=a(450),D=a(273),A=a(19),R=(a(820),a(818),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e,n;Object(c.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Customer Id",field:"customerId",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.customerId))}},{headerName:"First Name",field:"firstname",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.firstname))}},{headerName:"Last Name",field:"lastname",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.lastname))}},{headerName:"Email",field:"email\t",filter:!0,width:190,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.email))}},{headerName:"Mobile No.",field:"mobile",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.mobile))}},(e={headerName:"Actions",field:"sortorder"},Object(l.a)(e,"field","transactions"),Object(l.a)(e,"width",150),Object(l.a)(e,"cellRendererFramework",(function(e){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(y.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return A.a.push("/app/customer/viewCustomer/".concat(e.data._id))}}),d.a.createElement(x.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=n.gridApi.getSelectedRows();n.runthisfunction(e.data._id),n.gridApi.updateRowData({remove:t})}}))})),e)]},n.onGridReady=function(e){n.gridApi=e.api,n.gridColumnApi=e.columnApi,n.setState({currenPageSize:n.gridApi.paginationGetCurrentPage()+1,getPageSize:n.gridApi.paginationGetPageSize(),totalPages:n.gridApi.paginationGetTotalPages()})},n.updateSearchQuery=function(e){n.gridApi.setQuickFilter(e)},n.filterSize=function(e){n.gridApi&&(n.gridApi.paginationSetPageSize(Number(e)),n.setState({currenPageSize:e,getPageSize:e}))},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("http://35.154.86.59/api/user/allcustomer").then((function(e){var a=e.data.data;console.log(a),t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,P.a.get("http://35.154.86.59/api/user/delcustomer/".concat(t)).then((function(e){console.log(e)}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return console.log(a),d.a.createElement(f.a,{className:"app-user-list"},d.a.createElement(p.a,{sm:"12"}),d.a.createElement(p.a,{sm:"12"},d.a.createElement(g.a,null,d.a.createElement(f.a,{className:"m-2"},d.a.createElement(p.a,null,d.a.createElement("h1",{sm:"6",className:"float-left"},"Customer List"))),d.a.createElement(h.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(w.a,{className:"p-1 ag-dropdown"},d.a.createElement(v.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(D.a,{className:"ml-50",size:15})),d.a.createElement(E.a,{right:!0},d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(b.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(z.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(k.a.Consumer,null,(function(t){return d.a.createElement(C.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(d.a.Component));t.default=R},818:function(e,t,a){}}]);
//# sourceMappingURL=202.6da6d07e.chunk.js.map