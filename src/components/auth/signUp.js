import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import "./login.css";
import { connect } from "react-redux"
import Header from "../about/aboutHeader/header"

import { SignupActionCreater } from "../../Redux/Epics/login"

const FormPage = ({ signup }) => {
  const [name, setname] = useState("");
  const [lName, setlName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitsign = (e) => {
    e.preventDefault()
    if (name === "" || lName === "" || email === "" || password === "") { return alert("please fill all the form") }
    console.log(name)
    signup({
      name,
      lName,
      email,
      password,
    })
  }

  return (
    <div>
      <Header />
      <MDBContainer >
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Create Account
                </h3>
                </MDBCardHeader>
                <form onSubmit={submitsign}>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your first name"
                      group
                      type="text"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      validate
                    />
                    <MDBInput
                      label="Type your last name"
                      group
                      type="text"
                      onChange={(e) => setlName(e.target.value)}
                      value={lName}

                      validate
                    />
                    <MDBInput
                      label="Type your password"
                      group
                      type="password"
                      validate
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                    <MDBInput
                      label="Type your email"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>

                  <div className="text-center mt-4">
                    <MDBBtn
                      color="light-blue"
                      className="mb-3 login-btn"
                      type="submit"
                    >
                      Sign up
                </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <p>Already have an Account ?</p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  signup: (data) => dispatch(SignupActionCreater(data))
})

export default connect(
  null,
  mapDispatchToProps)
  (FormPage);