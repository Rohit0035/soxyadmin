(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[174],{2071:function(e,a,t){"use strict";t.r(a);var r=t(78),n=t.n(r),i=t(132),l=t(9),c=t(10),o=t(12),s=t(11),u=t(0),m=t.n(u),d=t(807),g=t(808),f=t(809),p=t(189),h=t(812),w=t(805),E=t(583),v=t(579),S=t(145),N=t(819),b=t(816),z=t(102),k=t(821),x=t(319),P=t(316),y=t(450),C=t(273),R=t(19),A=(t(820),t(818),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Image ",field:"image",filter:!0,width:120,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("img",{className:"rounded-circle",src:e.data.image,alt:"user",height:"45",width:"45"}))}},{headerName:"Seller Name",field:"seller_name",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.name))}},{headerName:"Seller Email",field:"email\t",filter:!0,width:190,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.email))}},{headerName:"Role Name",field:"rolename\t",filter:!0,width:190,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.rolename))}},{headerName:"Mobile",field:" mobile\t",filter:!0,width:190,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.mobile))}},{headerName:"Actions",field:"sortorder",width:150,cellRendererFramework:function(a){return m.a.createElement("div",{className:"actions cursor-pointer"},m.a.createElement(x.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return R.a.push("/app/seller/viewSeller/".concat(a.data._id))}}),m.a.createElement(P.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return R.a.push("/app/seller/editSeller/".concat(a.data._id))}}),m.a.createElement(y.a,{className:"mr-50",size:"25px",color:"Red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/getseller").then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,b.a.get("/delSeller/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return console.log(t),m.a.createElement(d.a,{className:"app-user-list"},m.a.createElement(g.a,{sm:"12"}),m.a.createElement(g.a,{sm:"12"},m.a.createElement(f.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(g.a,null,m.a.createElement("h1",{sm:"6",className:"float-left"},"Seller List")),m.a.createElement(g.a,null,m.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return R.a.push("/app/seller/addSeller")}},"Add Seller"))),m.a.createElement(h.a,null,null===this.state.rowData?null:m.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(w.a,{className:"p-1 ag-dropdown"},m.a.createElement(E.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,m.a.createElement(C.a,{className:"ml-50",size:15})),m.a.createElement(v.a,{right:!0},m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},m.a.createElement("div",{className:"table-input mr-1"},m.a.createElement(N.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),m.a.createElement("div",{className:"export-btn"},m.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),m.a.createElement(z.a.Consumer,null,(function(a){return m.a.createElement(k.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(m.a.Component));a.default=A},816:function(e,a,t){"use strict";var r=t(43),n=t.n(r).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=n},818:function(e,a,t){}}]);
//# sourceMappingURL=174.2647ca9d.chunk.js.map