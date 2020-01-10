import React from "react";
import Home from "./components/home/home";
import About from "./components/about/about";
// import Footer from "./components/footer/footer.js"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Rankings from "./components/ranking/rankings";
import CertifiedProducts from "./components/certifiedProducts/certifiedProducts";
import Login from "./components/auth/login";

import SignUp from "./components/auth/signUp";
import { connect } from "react-redux";
import ViewProduct from "./components/ranking/viewProduct/viewProduct";
// Login
function App({ user }) {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/about" component={About} />{" "}
          <Route path="/ranking" component={Rankings} />
          <Route path="/certified" component={CertifiedProducts} />
          <Route path="/productranking/:id" component={ViewProduct} />
          <Route
            path="/login"
            render={() => {
              return user ? <Redirect to="/" /> : <Login />;
            }}
          />
          <Route
            path="/signup"
            render={() => {
              return user ? <Redirect to="/" /> : <SignUp />;
            }}
          />
          <Route exact path="/" component={Home} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = ({ Login: { user } }) => ({
  user
});

export default connect(mapStateToProps, null)(App);
