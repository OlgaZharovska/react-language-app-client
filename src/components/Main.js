import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
// import { Signup } from './Signup';
// import { ConnectedNavigation } from './Navigation';
import { ConnectedLogin } from "./Login";
import { Home } from "./Home";
import TrainComponent from "./Train";
import Dashboard from "./Dashboard";
import { ConnectedPreSignup } from "./PreSignup";
import ConnectedConfirm from "./Confirm";
import { store } from "../store";
import { Redirect } from "react-router";

const RouteGuard = Component => ({ match }) =>
  !store.getState().authenticated === "AUTHENTICATED" ? (
    <Redirect to="/" />
  ) : (
    <Component match={match} />
  );

export const Main = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <React.Fragment>
          <Route exact path="/" render={RouteGuard(Home)} />
          <Route exact path="/signup" component={ConnectedPreSignup} />
          <Route exact path="/login" component={ConnectedLogin} />
          <Route exact path="/train" component={TrainComponent} />
          <Route exact path="/dashboard" render={RouteGuard(Dashboard)} />
          <Route exact path="/confirm/:id" component={ConnectedConfirm} />
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  </Provider>
);

// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   setAuthToken(localStorage.jwtToken);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(localStorage.jwtToken);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
// }
