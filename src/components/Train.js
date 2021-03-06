import React from "react";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { requestSetPhrases } from "../actions/phrases";
import { store } from "../store";

console.log(store.getState());

class TrainComponent extends React.Component {
  constructor(props) {
    super(props);
    let { id } = props;
    this.state = {
      // checkingPhrase: trainingSession.checkingPhrase || false,
      isCorrect: false,
      isChecking: false,
      color: "none",
      phrasesSet: [],
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
      color: "none",
      answer: e.target.value,
      isChecking: false
    });
  }

  onCheck(e) {
    if (this.state.answer === this.state.phrasesSet[1]) {
      this.setState({ color: "green", isChecking: true });
      console.log("suces");
      console.log(this.props);
    } else {
      this.setState({ color: "red" });
      this.refs.someName.value = "";
    }
  }

  onNextPhrase() {
    // this.props.getPhrases();
    this.setState({ color: "none", showPhrase: false });
  }

  onShow() {
    // this.setState({ showPhrase: true });
    console.log(this.props.id);
  }

  componentDidMount() {
    console.log(this.props.phrases);
    const makeRandomNum = function (min, max) {
      return 0 + Math.floor(Math.random() * (max + 1 - min));
    };
    const numberPointer = makeRandomNum(0, this.props.phrases.length - 1);
    const phrasesSet = this.props.phrases[numberPointer];
    console.log(phrasesSet);
    this.setState({ phrasesSet });
    console.log("did mount");
  }

  // this.state.isCorrect
  //               ? "CorrectPhrase"
  //               : "Please enter translation"

  render() {
    return (
      <div className="phrases_train">
        {this.state.checkingPhrase === true &&
          (this.state.color === "blue" ? "colorized" : null)}

        <div className="screen" style={{ background: `${this.state.color}` }}>
          {this.state.phrasesSet.length !== 0
            ? this.state.phrasesSet[0]
            : "waiting"}
        </div>
        {this.state.showPhrase ? this.props.phrasesSet[1] : null}
        <div className="train_input">
          <input
            type="text"
            id="phrase_input"
            placeholder={
              this.state.color === "red"
                ? `${this.state.phrasesSet[1]}`
                : "Please enter translation"
            }
            onInput={this.onChangeInput}
            ref="someName"
          />
        </div>
        <div className="btns">
          <button id="show" className="btn" info="Show" onClick={this.onShow}>
            Show
          </button>
          <button id="checker" className="btn" onClick={this.onCheck}>
            Check
          </button>
          <button id="next" className="btn" onClick={this.onNextPhrase}>
            Next Phrase
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ phrasesToTrain, session }) => ({
  phrases: phrasesToTrain,
  id: session.id
});

const mapDispatchToProps = (dispatch) => ({});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(TrainComponent);
