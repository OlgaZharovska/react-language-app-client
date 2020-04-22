import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Link } from "react-router-dom";

import Phrase from "./Phrase";
import Pagination from "./Pagination";
import PhraseList from "./PhraseList";

class PaginatedPhraseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 2
    };
    this.paginate = this.paginate.bind(this);
    // this.currentPage = 1;
    // this.postsPerPage = 1;
    // this.indexOfLastPost = this.currentPage * this.postsPerPage;
    // this.indexOfFirstPost = this.indexOfLastPost - this.postsPerPage;
    // this.currentPhrases = props.phrases.slice(
    //   this.indexOfFirstPost,
    //   this.indexOfLastPost
    // );
  }

  componentDidMount() {
    console.log(this.props);
  }

  paginate(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }

  render() {
    let indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    let indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    return (
      <>
        <PhraseList
          phrases={this.props.phrases.slice(indexOfFirstPost, indexOfLastPost)}
        />
        <Pagination
          postsPerPage={this.state.postsPerPage}
          totalPosts={this.props.phrases.length}
          paginate={this.paginate}
        />
      </>
    );
  }
}

const mapStateToProps = ({ userPhrases }) => ({
  phrases: userPhrases
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  authenticateUser(e) {
    e.preventDefault();
    let email = e.target[`email`].value;
    let password = e.target[`password`].value;
    dispatch(
      mutations.requestAuthenticateUser(email, password, ownProps.history)
    );
  }
});

export default compose(
  connect(mapStateToProps, null),
  withRouter
)(PaginatedPhraseList);
/* <PhraseList
  phrases={this.props.phrases.slice(
    this.indexOfFirstPost,
    this.indexOfLastPost
  )}
/>; */
