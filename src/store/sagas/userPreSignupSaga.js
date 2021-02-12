import * as mutations from "../mutations";
import { take } from "redux-saga/effects";
import axios from "axios";

const url =
  process.env.NODE_ENV === "production" ? `` : `http://localhost:8080`;

export function* userPreSignupSaga() {
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
