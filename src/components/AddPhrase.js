import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";

import * as mutations from "../store/mutations";

class AddPhrase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: "",
      translation: ""
    };
    this.addPhrase = this.addPhrase.bind(this);
    this.onPhraseChange = this.onPhraseChange.bind(this);
    this.onTranslationChange = this.onTranslationChange.bind(this);
  }

  addPhrase() {
    this.props.addPhrase(this.state);
  }

  onPhraseChange(e) {
    this.setState({
      phrase: e.target.value
    });
    console.log(this.props.isLoading);
  }
  onTranslationChange(e) {
    this.setState({
      translation: e.target.value
    });
  }

  render() {
    return (
      <div className="input-container">
        <div className="form__group">
          <div className="form__group">
            <input
              type="text"
              name="phrase"
              className="form__input"
              placeholder=""
              onChange={this.onPhraseChange}
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              name="translation"
              className="form__input"
              placeholder=""
              onChange={this.onTranslationChange}
            />
          </div>
        </div>
        <div className="form__group u-margin-bottom-medium"></div>
        <div className="form__group center">
          <button onClick={this.addPhrase}>add</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.session.authenticated
});

const mapDispatchToProps = (dispatch) => ({
  addPhrase(phraseSet) {
    dispatch(mutations.requestAddPhrase(phraseSet));
  }
});
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(AddPhrase);

// export const ConnectedLogin = connect(null, mapDispatchToProps)(AddPhrase);
