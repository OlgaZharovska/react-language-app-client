import { take, put, select } from "redux-saga/effects";
// import uuid from "uuid";
import axios from "axios";

import * as mutations from "./mutations";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const url =
  process.env.NODE_ENV === "production" ? `` : `http://localhost:7777`;

export function* userAccountCreationSaga() {
  while (true) {
    const { name, email, password } = yield take(
      mutations.REQUEST_USER_ACCOUNT_CREATION
    );
    try {
      const data = yield axios.post(url + "/signup", { name, email, password });
      console.log(data);
      localStorage.setItem("username", `${name}`);
    } catch (e) {
      console.error("Error", e);
    }
  }
}

export function* userPreSignup() {
  while (true) {
    const { name, email, password } = yield take(mutations.REQUEST_PRE_SIGNUP);
    try {
      yield axios.post(url + "/request-verification", {
        name,
        email,
        password
      });
      console.log("send token to email suces");
      localStorage.setItem("username", `${name}`);
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response; // take everything but 'request'
      console.log(request, errorObject);
    }
  }
}

export function* userAuthenticationSaga() {
  while (true) {
    const { email, password, history } = yield take(
      mutations.REQUEST_AUTHENTICATE_USER
    );
    try {
      const { data } = yield axios.post(url + `/login`, {
        email,
        password
      });

      console.log(data);
      yield put(
        mutations.processAuthenticateUser(mutations.AUTHENTICATED, {
          id: data.session.id,
          token: data.token,
          name: data.name
        })
      );
      // const phrases = yield select(mutations.getPhrasesFromStore);
      // let transformedPhrases = [];
      // for (let i = 0; i < phrases.length; i++) {
      //   transformedPhrases.push([phrases[i].phrase, phrases[i].translation]);
      // }
      // console.log(transformedPhrases);

      // yield put({
      //   type: mutations.SET_PHRASES,
      //   transformedPhrases
      // });

      history.push(`/dashboard`);
      //set phrases to store if any
    } catch (e) {
      yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
    }
  }
}

export function* requestLogoutSaga() {
  while (true) {
    yield take(mutations.REQUEST_LOGOUT);

    yield put(mutations.logoutUser(mutations.NOT_AUTHENTICATED));
    history.push(`/`);
  }
}

// export function* phrasesSettingSaga() {
//   while (true) {
//     yield take(mutations.REQUEST_SET_PHRASES);
//     try {
//       const phrases = yield select(mutations.getPhrasesFromStore);
//       let transformedPhrases = [];
//       for (let i = 0; i < phrases.length; i++) {
//         transformedPhrases.push([phrases[i].phrase, phrases[i].translation]);
//       }
//       console.log(transformedPhrases);

//       yield put({
//         type: mutations.SET_PHRASES,
//         transformedPhrases
//       });
//     } catch (e) {
//       console.log(e);
//       // yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
//     }
//   }
// }
