import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from "react-router-dom";
import Logo from "./images/logo.png"
import "./header.css"
import { verifyToken } from "../../../shared"
import { connect } from "react-redux";
import { login_success, logout_success } from "../../../Redux/Actions/authentication";


class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  componentDidMount() {
    const user = verifyToken();
    if (user) {
      this.props.dispatch(dispatch => dispatch(login_success(user)));
    }
  }
  logout = () => {
    localStorage.removeItem("token")
    this.props.dispatch(dispatch => dispatch(logout_success()));
  }
  render() {
    return (
      <div className="about-h-container">
        <Navbar className="abt-header-c" light expand="xl">
          <Link to="/"><img className="cbd-logo" src={Logo} alt="Labdoor" /></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto about-link-area" navbar>
              <NavItem>
                <NavLink to="/"><Link className="about-h-link" to="/">Home</Link></NavLink>
              </NavItem>                            <NavItem>
                <NavLink to="/"><Link className="about-h-link" to="/ranking">Rankings</Link></NavLink>

              </NavItem>                            <NavItem>
                <NavLink to="/"><Link className="about-h-link" to="/certified">Certified Products</Link></NavLink>
              </NavItem>
              {!this.props.user && <NavItem><NavLink to="/"><Link className="about-h-link" to="/login">Login</Link></NavLink>
              </NavItem>} {!this.props.user &&
                <NavItem>
                  <NavLink to="/"><Link className="about-h-link" to="/signup">Sign Up</Link></NavLink>
                </NavItem>}
              {this.props.user && <NavItem>
                <NavLink to="/"><Link onClick={() => this.logout()} className="about-h-link">Log Out</Link></NavLink>
              </NavItem>}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({ Login: { user } }) => ({
  user
})

export default connect(mapStateToProps)(Example)