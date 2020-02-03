import { connect } from "react-redux";
import React from "react";
import { withRouter, Redirect } from "react-router";
import { compose } from "redux";
import jwt from "jsonwebtoken";
import * as mutations from "../store/mutations";

// const Confirm = () => <div className="row">Hi from confirm</div>;

export const ConnectedConfirm = ({
  match,
  createUserAccount,
  loginUser,
  isLoading
}) => {
  const token = match.params.id;
  const { name, email, password } = jwt.decode(token);
  createUserAccount(name, email, password);
  loginUser(email, password);

  //set to localstorage
  // return redirect
  return isLoading ? (
    <div className="row">
      Hi from confirm!
      {name}
    </div>
  ) : (
    <Redirect to="/dashboard"></Redirect>
  );
};

const mapDispatchToProps = dispatch => ({
  createUserAccount(name, email, password) {
    dispatch(mutations.requestCreateUserAccount(name, email, password));
  },
  loginUser(email, password) {
    dispatch(mutations.requestCreateUserAccount(email, password));
  }
});

const mapStateToProps = state => ({
  isLoading: state.session.authenticated
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null, { pure: false }),
  withRouter
)(ConnectedConfirm);

// export const ConnectedConfirm = withRouter(Confirm);
