import React from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { AgGridReact } from "ag-grid-react";
import { ContextLayout } from "../../../utility/context/Layout";
import { ChevronDown, Eye, Trash2 } from "react-feather";
import axios from "axios";

import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";

import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

class FasTag extends React.Component {
  state = {
    rowData: null,
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "Name",
        field: "firstname",
        width: 175,
        filter: true,
        checkboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        headerCheckboxSelection: true,
      },
      {
        headerName: "FasTag Bank",
        field: "FasTag",
        width: 175,
        filter: true,
      },
      //   {
      //     headerName: "Operator",
      //     field: "Operator",
      //     filter: "agNumberColumnFilter",
      //     width: 140,
      //   },
      //   {
      //     headerName: "Email",
      //     field: "email",
      //     filter: true,
      //     width: 250,
      //     pinned: window.innerWidth > 992 ? "left" : false,
      //   },
      {
        headerName: "Date",
        field: "Date",
        filter: true,
        width: 250,
      },
      {
        headerName: "City",
        field: "City",
        filter: true,
        width: 150,
      },

      {
        headerName: "Amount",
        field: "Amount",
        filter: true,
        width: 150,
      },
      //   {
      //     headerName: "Nationality",
      //     field: "country",
      //     filter: true,
      //     width: 150,
      //   },
      //   {
      //     headerName: "State",
      //     field: "state",
      //     filter: true,
      //     width: 125,
      //   },
      //   {
      //     headerName: "Aadhar/Virtual Number",
      //     field: "zip",
      //     filter: "agNumberColumnFilter",
      //     width: 140,
      //   },
      //   {
      //     headerName: "Image ",
      //     field: "image",
      //     filter: true,
      //     width: 120,
      //     cellRendererFramework: params => {
      //       return (
      //         <div className="d-flex align-items-center cursor-pointer">
      //           <img
      //             className="rounded-circle"
      //             src={params.data.image}
      //             alt="user"
      //             height="45"
      //             width="90"
      //           />
      //         </div>
      //       );
      //     },
      //   },
      {
        headerName: "Status",
        field: "status",
        filter: true,
        width: 150,
        cellRendererFramework: params => {
          return params.value === "Active" ? (
            <div className="badge badge-pill badge-success">
              {params.data.status}
            </div>
          ) : params.value === "Inactive" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.status}
            </div>
          ) : null;
        },
      },
      {
        headerName: "Actions",
        field: "transactions",
        width: 150,
        cellRendererFramework: params => {
          return (
            <div className="actions cursor-pointer">
              <Eye
                className="mr-50"
                size={20}
                // onClick={() =>
                //   history.push(`/app/store/stores/viewStore/${params.data._id}`)
                // }
              />
              {/*            
      //         <Edit
      //           className="mr-50"
      //           size={20}
      //           onClick={() => 
      //           history.push(`/app/store/stores/editStore/${params.data._id}`)}
      //         /> */}
              <Trash2
                size={20}
                // onClick={() => {
                //   let selectedData = this.gridApi.getSelectedRows();
                //   this.runthisfunction(params.data._id);
                //   this.gridApi.updateRowData({ remove: selectedData });
                // }}
              />
            </div>
          );
        },
      },
    ],
  };

  componentDidMount() {
    axios.get("/api/aggrid/data").then(response => {
      let rowData = response.data.data;
      JSON.stringify(rowData);
      this.setState({ rowData });
    });
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = val => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = val => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="FasTag Recharge"
          //   breadCrumbParent="Forms & Tables"
          breadCrumbActive="FasTag Recharge"
        />
        <Card className="overflow-hidden agGrid-card">
          <CardBody className="py-0">
            {this.state.rowData === null ? null : (
              <div className="ag-theme-material w-100 my-2 ag-grid-table">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="mb-1">
                    <UncontrolledDropdown className="p-1 ag-dropdown">
                      <DropdownToggle tag="div">
                        {this.gridApi
                          ? this.state.currenPageSize
                          : "" * this.state.getPageSize -
                            (this.state.getPageSize - 1)}{" "}
                        -{" "}
                        {this.state.rowData.length -
                          this.state.currenPageSize * this.state.getPageSize >
                        0
                          ? this.state.currenPageSize * this.state.getPageSize
                          : this.state.rowData.length}{" "}
                        of {this.state.rowData.length}
                        <ChevronDown className="ml-50" size={15} />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(20)}
                        >
                          20
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(50)}
                        >
                          50
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(100)}
                        >
                          100
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(134)}
                        >
                          134
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between mb-1">
                    <div className="table-input mr-1">
                      <Input
                        placeholder="search..."
                        onChange={e => this.updateSearchQuery(e.target.value)}
                        value={this.state.value}
                      />
                    </div>
                    <div className="export-btn">
                      <Button.Ripple
                        color="primary"
                        onClick={() => this.gridApi.exportDataAsCsv()}
                      >
                        Export as CSV
                      </Button.Ripple>
                    </div>
                  </div>
                </div>
                <ContextLayout.Consumer>
                  {context => (
                    <AgGridReact
                      gridOptions={{}}
                      rowSelection="multiple"
                      defaultColDef={defaultColDef}
                      columnDefs={columnDefs}
                      rowData={rowData}
                      onGridReady={this.onGridReady}
                      colResizeDefault={"shift"}
                      animateRows={true}
                      floatingFilter={true}
                      pagination={true}
                      paginationPageSize={this.state.paginationPageSize}
                      pivotPanelShow="always"
                      enableRtl={context.state.direction === "rtl"}
                    />
                  )}
                </ContextLayout.Consumer>
              </div>
            )}
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default FasTag;
