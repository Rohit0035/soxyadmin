import React, { Component } from "react";
import { Col, Row, Card, CardBody, Form, CustomInput, Label, Input, Button } from "reactstrap";
import "../../../assets/css/profile.css";
import axiosConfig from "../../../axiosConfig";
export class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      email:"",
      country: "",
      state: "",
      city: "",
      password: "",
      cnfmPassword: "",
      selectedName: "",
      selectedFile: null,
      // image: "",
      // status: "",
    };
  }
  componentDidMount() {
    console.log(this.props.match.params);
    let { id } = this.props.match.params;
    var user = JSON.parse(localStorage.getItem('userData'));
    axiosConfig
      .get(`/getoneadmin/${user._id}`)
      .then((response) => {
        console.log(response);
        this.setState({
        name: response.data.data.name,
        mobile: response.data.data.mobile,
        country: response.data.data.country,
        state: response.data.data.state,
        city: response.data.data.city,
        email: response.data.data.email,
        password: response.data.data.password,
        cnfmPassword: response.data.data.cnfmPassword,
        image: response.data.data.image,
        
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  //Image Submit Handler
    onChangeHandler = (event) => {
      this.setState({ selectedFile: event.target.files[0] });
      this.setState({ selectedName: event.target.files[0].name });
      console.log(event.target.files[0]);
  };
    changeHandler1 = (e) => {
      this.setState({ status: e.target.value });
    };
    changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    submitHandler = (e) => {
      e.preventDefault();
      console.log(this.state);
      const data = new FormData();
      data.append("name", this.state.name);
      data.append("mobile", this.state.mobile);
      data.append("email", this.state.email);
      data.append("country", this.state.country);
      data.append("state", this.state.state);
      data.append("city", this.state.city);
      data.append("password", this.state.password);
      data.append("cnfmPassword", this.state.cnfmPassword);
      if (this.state.selectedFile !== null) {
        data.append(
          "image",
          this.state.selectedFile,
          this.state.selectedName
        );
      }
      // data.append("status", this.state.status);
     
      for (var value of data.values()) {
        console.log(value);
      }
      for (var key of data.keys()) {
        console.log(key);
      }
      let { id } = this.props.match.params;
      // var user = JSON.parse(localStorage.getItem('userData'));
      axiosConfig
        .post(`/editadmin/${id}`, data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      };
render() {
  return (
    <div>
      <Row>
        <Col lg="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  Edit Profile
                </h1>
              </Col>
         
            </Row>
            <CardBody>
              <Form className="m-1" onSubmit={this.submitHandler}>
                <Row>
                  <Col lg="6" md="6" sm="6" className="mb-2">
                    <Label>Name:</Label>
                      <Input
                        required
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.changeHandler}
                      />
                  </Col>
                  <Col lg="6" md="6" sm="6" className="mb-2">
                    <Label> Email:</Label>
                      <Input
                        required
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.changeHandler}
                        placeholder="Enter Email"
                      />
                  </Col>
                  </Row>
                    <Row>
                    {/* <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>Phone Number:</Label>
                        <Input
                          type="text"
                          placeholder="Contact Number"
                          name="phone_no"
                          value={this.state.phone_no}
                          onChange={this.changeHandler}
                        />
                    </Col> */}
                      <Col lg="6" md="6" sm="6" className="mb-2">
                        <Label>Mobile:</Label>
                          <Input
                            required
                            type="text"
                            placeholder="Mobile Number"
                            name="mobile"
                            value={this.state.mobile}
                            onChange={this.changeHandler}
                          />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4" md="2" sm="2" className="mb-2">
                        <Label>Country:</Label>
                          <Input
                            required
                            type="text"
                            placeholder="Country"
                            name="country"
                            value={this.state.country}
                            onChange={this.changeHandler}
                          >
                            {/* <option value="country">Country</option>
                            <option value="algeria">Algeria</option>
                            <option value="austria">Austria</option>
                            <option value="canada">Canada</option>
                            <option value="UK">UK</option> */}
                          </Input>
                      </Col>
                      <Col lg="4" md="2" sm="2" className="mb-2">
                        <Label>State:</Label>
                          <Input
                            required
                            type="text"
                            placeholder="State"
                            name="state"
                            value={this.state.state}
                            onChange={this.changeHandler}
                          >
                            {/* <option value="state">State</option>
                            <option value="mp">MP</option>
                            <option value="goa">Goa</option>
                            <option value="maharashtra">Maharashtra</option>
                            <option value="gujarat">Gujarat</option> */}
                          </Input>
                      </Col>
                      <Col lg="4" md="2" sm="2" className="mb-2">
                        <Label>City :</Label>
                          <Input
                            required
                            type="text"
                            placeholder="City"
                            name="city"
                            value={this.state.city}
                            onChange={this.changeHandler}
                          >
                            {/* <option value="city">City</option>
                            <option value="indore">Indore</option>
                            <option value="sagar">Sagar</option>
                            <option value="jabalpur">Jabalpur</option>
                            <option value="delhi">Delhi</option> */}
                          </Input>
                      </Col>
                    </Row>
                    <Col lg="6" md="6" sm="6" className="mb-2">
                      <Label>User Image</Label>
                        <Input 
                          required
                          type="file" 
                          name="image"
                          onChange={this.onChangeHandler} 
                        />
                        <img src={this.state.image} style={{width:'50px',height:'50px'}}/>
                    </Col>
                    
                    <Row>
                      <Col lg="6" md="6" sm="6" className="mb-2">
                        <Label>Password:</Label>
                          <Input
                            required
                            type="text"
                            name="password"
                            id="show_hide_password"
                            value={this.state.password}
                            onChange={this.changeHandler}
                            placeholder="Set Password For User"
                          />
                      </Col>
                      <Col lg="6" md="6" sm="6" className="mb-2">
                        <Label>Confirm Password:</Label>
                          <Input
                            required
                            type="text"
                            name="cnfmPassword"
                            value={this.state.cnfmPassword}
                            onChange={this.changeHandler}
                            placeholder="Set Password For User"
                          />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6" md="6" sm="6" className="mb-2">
                        {/* <Button.Ripple   
                          color="danger"
                          className="mr-1 mb-1 btn-danger-rgba" 
                          type="reset"
                          value="Reset"
                        >
                          Reset
                        </Button.Ripple> */}
                        <Button.Ripple
                          color="primary"
                          type="submit"
                          className="mr-1 mb-1"
                        >
                          Update
                        </Button.Ripple>
                      </Col>
                    </Row>
                    {/* <Row>
                    </Row> */}
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default UserProfile;