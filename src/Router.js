import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import App from "./App.js";
import Content from "./components/Content";
import Checkout from './components/checkout/Checkout'
// import NoMatch from "./components/noMatch";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import AddressForm from "./components/checkout/AddressForm";
import PaymentForm from "./components/checkout/PaymentForm";
import Review from "./components/checkout/Review";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/content" component={Content} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/checkout/addressform" component={AddressForm} />
          <Route path="/checkout/paymentform" component={PaymentForm} />
          <Route path="/checkout/review" component={Review} />
          {/*<Route component={NoMatch} />*/}
        </Switch>
      </div>
    </Router>
  )};

export default AppRouter;