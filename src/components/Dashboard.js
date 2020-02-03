import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router";
import { compose } from "redux";
import * as mutations from "../store/mutations";

const Dashboard = ({ logoutUser }) => (
  <div className="row">
    manager
    <button onClick={logoutUser} style={{ width: "50px", height: "10px" }}>
      LOGOUT
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  logoutUser() {
    dispatch({ type: mutations.REQUEST_LOGOUT });
  }
});

const mapStateToProps = state => ({
  isLoading: state.session.authenticated
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null, { pure: false }),
  withRouter
)(Dashboard);
