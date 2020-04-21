import * as mutations from "../mutations";
import { take } from "redux-saga/effects";
import axios from "axios";

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
