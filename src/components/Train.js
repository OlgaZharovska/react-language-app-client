import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Button } from "./ButtonComponent";
import { Link } from "react-router-dom";
import { getPhrases } from "../actions/phrases";
import { store } from "../store";

class TrainComponent extends React.Component {
  constructor(props) {
    super(props);
    let { trainingSession, phrasesSet, id } = props;
    this.state = {
      checkingPhrase: trainingSession.checkingPhrase || false,
      color: "none",
      currentSet: phrasesSet,
      answer: "",
      id: id,
      showPhrase: false
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onNextPhrase = this.onNextPhrase.bind(this);
    this.onShow = this.onShow.bind(this);
  }

  onChangeInput(e) {
    this.setState({
      color: "blue",
      answer: e.target.value,
      currentSet: this.props.phrasesSet
    });
    console.log(this.state.answer);
    console.log(e.target.value);

    // console.log(this.state);
    console.log(store.getState());
  }

  onCheck(e) {
    if (this.state.answer === this.state.currentSet[1]) {
      this.setState({ color: "green" });
      console.log("suces");
    } else {
      this.setState({ color: "red" });
    }
    console.log(this.state.answer);
    console.log(this.state.currentSet);
  }

  onNextPhrase() {
    this.props.getPhrases();
    this.setState({ color: "none", showPhrase: false });
  }

  onShow() {
    this.setState({ showPhrase: true });
  }

  componentDidMount() {
    this.props.getPhrases();
    this.setState({ currentSet: this.props.phrasesSet });
    console.log(this.state.currentSet);
    console.log(this.state.answer);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.currentSet.length === 0) {
  //     return true;
  //   }
  // }

  render() {
    return (
      <div>
        {this.state.checkingPhrase === true &&
          (this.state.color === "blue" ? "colorized" : null)}

        <div
          id="screen"
          style={{ background: `${this.state.color}`, width: 120, height: 60 }}
        >
          {this.props.phrasesSet.length !== 0
            ? this.props.phrasesSet[0]
            : "waiting"}
        </div>
        {this.state.showPhrase ? this.props.phrasesSet[1] : null}
        <div className="train_input">
          <input
            type="text"
            id="phrase_input"
            placeholder={
              this.props.trainingSession.isCorrect
                ? "Please enter translation"
                : "CorrectPhrase"
            }
            onInput={this.onChangeInput}
          />
        </div>
        <div className="btns">
          <button id="show" className="btn" info="Show" onClick={this.onShow}>
            Show
          </button>
          <button id="checker" onClick={this.onCheck}>
            Check
          </button>
          <button id="next" onClick={this.onNextPhrase}>
            Next Phrase
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trainingSession: state.trainingSession,
  phrasesSet: state.phrasesSet,
  id: state.session.id
});

const mapDispatchToProps = dispatch => ({
  getPhrases: () => dispatch(getPhrases())
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(TrainComponent);
