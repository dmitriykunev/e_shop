// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
import App from "./App.js";
import Content from "./components/Content";
// import NoMatch from "./components/noMatch";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={App} />
          {/* <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} /> */}
          <Route path="/content" component={Content} />
          {/*<Route component={NoMatch} />*/}
        </Switch>
      </div>
    </Router>
  )};

export default AppRouter;