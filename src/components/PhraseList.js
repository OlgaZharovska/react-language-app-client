import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
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
        {this.props.phrases.map((item, i) => (
          <Phrase key={i} phrase={item.phrase} translation={item.translation} />
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

// export const ConnectedLogin = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PhraseList);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(PhraseList);
