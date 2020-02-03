import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";

const SignupComponent = ({ requestPreSignup }) => {
  return (
    <div className="card p-3 col-6">
      <h2>Complete the following form to create a new account.</h2>

      <form onSubmit={requestPreSignup}>
        <label>
          <span>User Name</span>
          <input
            type="text"
            placeholder="name"
            name="name"
            defaultValue="Morty"
            className="form-control"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="form-control"
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="text"
            placeholder="password"
            name="password"
            defaultValue="COURAGE"
            className="form-control mt-2"
          />
        </label>

        <button type="submit" className="form-control mt-2 btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  requestPreSignup(e) {
    e.preventDefault();
    let name = e.target[`name`].value;
    let email = e.target[`email`].value;
    let password = e.target[`password`].value;
    console.log("Creating!", name, password, email);
    dispatch(mutations.requestPreSignup(name, email, password));
  }
});

export const ConnectedPreSignup = connect(null, mapDispatchToProps, null, {
  pure: false
})(SignupComponent);
