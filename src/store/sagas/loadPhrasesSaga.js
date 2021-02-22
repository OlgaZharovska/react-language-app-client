import * as mutations from "../mutations";
import { take, put } from "redux-saga/effects";
import axios from "axios";

const url =
  process.env.NODE_ENV === "production" ? `` : `http://localhost:8080`;

export function* loadPhrasesSaga() {
  while (true) {
    yield take(mutations.FETCH_PHRASES);
    // const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");

    // const phrase = yield axios.post(url + "/getPhraseToTrain", null, {
    //   headers: { Authorization: "Bearer " + token }
    // });

    const phrases = yield axios.get(url + "/phrases", {
      params: {
        username: "olga"
      }
    });
    yield put(mutations.setPhrases(phrases));
  }
}
