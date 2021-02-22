import * as mutations from "../mutations";
import { take, put } from "redux-saga/effects";
import axios from "axios";

const url =
  process.env.NODE_ENV === "production" ? `` : `http://localhost:8080`;

export function* addPhraseSaga() {
  while (true) {
    const { phraseSet } = yield take(mutations.REQUEST_ADD_PHRASE);
    // const userName = localStorage.getItem("userName");
    const phraseObj = {
      phrase: phraseSet.phrase,
      translation: phraseSet.translation,
      category: phraseSet.category,
      userName: "olga"
    };
    try {
      const res = yield axios.post(url + "/phrases", phraseObj);
      console.log(res);
      yield put(mutations.saveRequest(res));
    } catch (e) {
      console.error("Error", e);
    }
  }
}
// const token = localStorage.getItem("token");

// const phrase = yield axios.post(url + "/getPhraseToTrain", null, {
//   headers: { Authorization: "Bearer " + token }
// });
