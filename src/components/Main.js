import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import GlobalStyle from "../styles/globalStyle";

import Navigation from "./Navigation";
import { ConnectedLogin } from "./Login";
import { Home } from "./Home";
import Experimental from "./experimental/Experimental";
import TrainComponent from "./Train";
import Dashboard from "./Dashboard";
import { ConnectedPreSignup } from "./PreSignup";
import ConnectedConfirm from "./Confirm";
import { store } from "../store";
import { Redirect } from "react-router";
import decode from "jwt-decode";
import AddPhrase from "./AddPhrase";
import PaginatedPhraseList from "./PaginatedPhraseList";

// const RouteGuard = Component => ({ match }) =>
//   !store.getState().authenticated === "AUTHENTICATED" ? (
//     <Redirect to="/" />
//   ) : (
//     <Component match={match} />
//   );

const checkAuth = () => {
  const token = localStorage.getItem("token");

  return true;
  // if (!token) {
  //   return false;
  // }

  // try {
  //   // { exp: 12903819203 }
  //   const { exp } = decode(token);

  //   if (exp < new Date().getTime() / 1000) {
  //     return false;
  //   }
  // } catch (e) {
  //   return false;
  // }
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
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
      <Switch>
        <div className="zalupa">
          <Navigation auth={checkAuth()}></Navigation>
          <div className="main">
            <Route exact path="/" render={Home} />
            <Route exact path="/signup" component={ConnectedPreSignup} />
            <Route exact path="/login" component={ConnectedLogin} />
            <Route exact path="/addphrase" component={AddPhrase} />
            <ProtectedRoute
              exact
              path="/phrases"
              component={PaginatedPhraseList}
            />
            <Route exact path="/exp" component={Experimental} />
            <ProtectedRoute exact path="/train" component={TrainComponent} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/confirm/:id" component={ConnectedConfirm} />
          </div>
        </div>
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
