import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Navigation } from "./Navigation";
import { ConnectedLogin } from "./Login";
import { Home } from "./Home";
import TrainComponent from "./Train";
import Dashboard from "./Dashboard";
import { ConnectedPreSignup } from "./PreSignup";
import ConnectedConfirm from "./Confirm";
import { store } from "../store";
import { Redirect } from "react-router";
import decode from "jwt-decode";

// const RouteGuard = Component => ({ match }) =>
//   !store.getState().authenticated === "AUTHENTICATED" ? (
//     <Redirect to="/" />
//   ) : (
//     <Component match={match} />
//   );

const checkAuth = () => {
  if (!store.getState().authenticated) {
    const token = localStorage.getItem("token");

    if (!token) {
      return false;
    }

    try {
      // { exp: 12903819203 }
      const { exp } = decode(token);

      if (exp < new Date().getTime() / 1000) {
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  return true;
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
);

export const Main = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Navigation auth={checkAuth()}></Navigation>
      <Switch>
        <React.Fragment>
          <Route exact path="/" render={Home} />
          <Route exact path="/signup" component={ConnectedPreSignup} />
          <Route exact path="/login" component={ConnectedLogin} />
          <ProtectedRoute exact path="/train" component={TrainComponent} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
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
