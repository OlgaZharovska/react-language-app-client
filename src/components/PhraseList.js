import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Phrase from "./Phrase";

class PhraseList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <ul className="list-group mb-4">
        {this.props.phrases.map((phrase, i) => (
          <Phrase key={i} phrase={phrase} translation={translation} />
        ))}
      </ul>
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

export const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhraseList);
