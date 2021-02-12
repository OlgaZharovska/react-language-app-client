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
      translation: "",
      category: "",
      options: [
        "фраза",
        "іменник",
        "прикметник",
        "дієслово",
        "прислівник",
        "прийменник",
        "сполучник"
      ],
      selected: false
    };
    this.addPhrase = this.addPhrase.bind(this);
    this.onPhraseChange = this.onPhraseChange.bind(this);
    this.onTranslationChange = this.onTranslationChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  addPhrase() {
    this.props.addPhrase({
      phrase: this.state.phrase,
      translation: this.state.translation,
      category: this.state.category
    });
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

  handleCategoryChange(category) {
    this.setState({ category });
    console.log(category);
  }

  render() {
    return (
      <div className="add-phrase">
        <div className="form-phrase">
          <input
            type="text"
            name="phrase"
            className="form-phrase-input"
            placeholder="phrase"
            onChange={this.onPhraseChange}
          />

          <input
            type="text"
            name="translation"
            className="form-phrase-input"
            placeholder="translation"
            onChange={this.onTranslationChange}
          />
          <select
            required
            name="select"
            onChange={(event) => this.handleCategoryChange(event.target.value)}
          >
            <option value="" disabled selected hidden>
              Select your option
            </option>
            {this.state.options.map((n) => (
              <option value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div className="form__group u-margin-bottom-medium"></div>
        <div className="form__group center">
          <button className="delete-btn" onClick={this.addPhrase}>
            ADD
          </button>
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
