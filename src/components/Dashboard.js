import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router";
import { compose } from "redux";
import * as mutations from "../store/mutations";
import { store } from "../store";
import { Link } from "react-router-dom";
console.log(store.getState());
const Dashboard = ({ logoutUser, phrases }) => (
  <div>
    manager
    <Link to="/train">Blog</Link>
    <button onClick={logoutUser} style={{ width: "50px", height: "10px" }}>
      LOGOUT
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  logoutUser() {
    dispatch({ type: mutations.REQUEST_LOGOUT });
  }
});

const mapStateToProps = (state) => ({
  isLoading: state.session.authenticated,
  phrases: state.phrasesToTrain
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Dashboard);
