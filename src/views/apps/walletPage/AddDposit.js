import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
} from "reactstrap";
import { history } from "../../../history";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Select from "../../forms/form-elements/select/Select";
import swal from 'sweetalert';

export class AddDeposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname:"",
      customer: "626241c9d9f8fb7441b86dd1",
     
      amount:"",   
      status: ""
      
    };
  }
 
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://35.154.134.118/api/admin/addAmount", this.state)
    .then((response) => {
    console.log(response);
    swal("Successful!", "You clicked the button!", "success");
    this.props.history.push("/app/walletPage/deposit");
  })
    .catch((error) => {
      console.log(error);
    });
  };
 
    
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add  wallet 
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
          <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>User Id</Label>
                    <Input
                      type="number"
                      placeholder="User Id"
                     
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>User Name</Label>
                    <Input
                    name="firstname"
                      type="text"
                      placeholder="Enter Name" 
                    value={this.state.firstname}
                    onChange={this.changeHandler}/>
                  </FormGroup>
                </Col>
                
                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>User Email</Label>
                    <Input
                      type="email"
                      placeholder="User Email"
                     
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Phone Number</Label>
                    <Input
                      type="number"
                      placeholder="Phone Number"
                     
                    />
                  </FormGroup>
                </Col> */}
                
                <Col lg="6" md="6" sm="6" className="mb-2">
                <FormGroup>
                <Label>HashTag (Amount)</Label>

                  <Input   
                    required 
                    type="text" 
                    name="amount"
                    placeholder="Enter Amount" 
                    value={this.state.amount}
                    onChange={this.changeHandler}/>
                    </FormGroup>
                </Col>
                 
                
                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Payment Methode</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Choose Methode</option>
                        <option>USDT</option>
                        <option>TRX</option>
                   </Input>
                  </FormGroup>
                </Col> */}
              
                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <FormGroup>
                    <Label className="mb-1">Status</Label>
                    <div
                      className="form-label-group"
                      >
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Active"
                      />
                      <span style={{ marginRight: "20px" }}>Active</span>
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Inactive"
                      />
                      <span style={{ marginRight: "3px" }}>Inactive</span>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="success"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Save 
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddDeposit;