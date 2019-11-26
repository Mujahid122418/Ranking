import React,{useState
} from "react";
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
import "./login.css"
import Header from "../about/aboutHeader/header"
import { LoginActionCreater } from "../../Redux/Epics/login"
import { connect } from "react-redux"


const FormPage = ({signin}) => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitsign = (e) => {
    e.preventDefault()
    if ( email === "" || password === "") { return alert("please fill all the form") }
  
    signin({
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
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>
              <form onSubmit={submitsign}>
                <div className="grey-text">
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
                  <MDBInput
                    label="Type your password"
                   
                    group
                    type="password"
                    validate
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3 login-btn"
                  type="submit"
                >
                  Login
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Not a member?<span className="signup-btn"> Sign Up</span></p>
                  <p>Forgot Password?</p>
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
  signin: (data) => dispatch(LoginActionCreater(data))
})

export default connect(
  null,
  mapDispatchToProps)
  (FormPage);