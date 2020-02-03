import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router";
import { compose } from "redux";

export const Home = () => {
  return <div>homE</div>;
};

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  isLoading: state.session.authenticated
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null, { pure: false }),
  withRouter
)(Home);
