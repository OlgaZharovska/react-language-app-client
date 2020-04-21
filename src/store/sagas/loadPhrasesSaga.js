import * as mutations from "../mutations";
import { take, put } from "redux-saga/effects";
import axios from "axios";

const url =
  process.env.NODE_ENV === "production" ? `` : `http://localhost:7777`;

export function* loadPhrasesSaga() {
  while (true) {
    yield take(mutations.FETCH_PHRASES);
    // const token = localStorage.getItem("token");

    // const phrase = yield axios.post(url + "/getPhraseToTrain", null, {
    //   headers: { Authorization: "Bearer " + token }
    // });

    const phraseSet = yield axios.get(url + "/randomPhrase");
    yield put(mutations.setPhrasesToTrain(phraseSet));
  }
}
