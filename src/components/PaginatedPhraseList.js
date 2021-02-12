import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Link } from "react-router-dom";

import Pagination from "./Pagination";
import PhraseList from "./phrases/PhraseList";

class PaginatedPhraseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 2,
      rightArrowDisabled: false
    };
    this.paginate = this.paginate.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  paginate(isAscending) {
    isAscending
      ? this.setState({ currentPage: --this.state.currentPage })
      : this.setState({ currentPage: ++this.state.currentPage });

    if (
      this.props.phrases.length / this.state.currentPage + 1 <=
      this.state.postsPerPage
    ) {
      this.setState({ rightArrowDisabled: true });
    }
  }

  onDelete(phrase) {
    console.log(phrase);
  }
  render() {
    let indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    let indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    return (
      <>
        <PhraseList
          phrases={this.props.phrases.slice(indexOfFirstPost, indexOfLastPost)}
          onDelete={this.onDelete}
        />
        <div>
          <button
            className="paginate left"
            onClick={() => this.paginate(true)}
            disabled={this.state.currentPage === 1}
          >
            <i className="paginationArrowLeftUpper"></i>
            <i className="paginationArrowLeftLower"></i>
          </button>
          <button
            className="paginate right"
            onClick={() => this.paginate(false)}
            disabled={this.state.rightArrowDisabled}
          >
            <i className="paginationArrowRightUpper"></i>
            <i className="paginationArrowRightLower"></i>
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ userPhrases }) => ({
  phrases: userPhrases
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default compose(
  connect(mapStateToProps, null),
  withRouter
)(PaginatedPhraseList);
