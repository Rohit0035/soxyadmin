(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[247],{2147:function(e,a,t){"use strict";t.r(a);var i=t(9),r=t(10),n=t(12),l=t(11),s=t(0),c=t.n(s),o=t(807),m=t(808),u=t(809),d=t(189),g=t(812),f=t(805),h=t(583),p=t(579),S=t(145),E=t(819),b=t(821),v=t(102),w=t(319),z=t(316),N=t(450),P=t(273),y=t(43),C=t.n(y),D=(t(820),t(101),function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={rowData:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Name",field:"firstname",width:175,filter:!0,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0},{headerName:"Amount",field:"zip",filter:"agNumberColumnFilter",width:140},{headerName:"Date",field:"Date",filter:!0,width:250},{headerName:"Image ",field:"image",filter:!0,width:120,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("img",{className:"rounded-circle",src:e.data.image,alt:"user",height:"45",width:"90"}))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Inactive"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(e){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(w.a,{className:"mr-50",size:20}),c.a.createElement(z.a,{className:"mr-50",size:"25px",color:"blue"}),c.a.createElement(N.a,{size:20}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("/api/aggrid/data").then((function(a){var t=a.data.data;JSON.stringify(t),e.setState({rowData:t})}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,i=a.columnDefs,r=a.defaultColDef;return console.log(t),c.a.createElement(o.a,{className:"app-user-list"},c.a.createElement(m.a,{sm:"12"}),c.a.createElement(m.a,{sm:"12"},c.a.createElement(u.a,null,c.a.createElement(o.a,{className:"m-2"},c.a.createElement(m.a,null,c.a.createElement("h1",{sm:"6",className:"float-left"},"Wallet")),c.a.createElement(m.a,null,c.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return history.push("/app/sellerSubs/addSub")}},"Add"))),c.a.createElement(g.a,null,null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(f.a,{className:"p-1 ag-dropdown"},c.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(P.a,{className:"ml-50",size:15})),c.a.createElement(p.a,{right:!0},c.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(E.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(d.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(v.a.Consumer,null,(function(a){return c.a.createElement(b.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:i,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(c.a.Component));a.default=D}}]);
//# sourceMappingURL=247.a661c91b.chunk.js.map