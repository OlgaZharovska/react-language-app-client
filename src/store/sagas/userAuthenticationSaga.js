import { take, put } from "redux-saga/effects";
import axios from "axios";
import * as mutations from "../mutations";

const url =
  process.env.NODE_ENV === "production" ? `` : `http://localhost:8080`;
// const history = createBrowserHistory();

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
      localStorage.setItem(("token", data.token));
      console.log(data);
      yield put(
        mutations.processAuthenticateUser(mutations.AUTHENTICATED, {
          id: data.session.id,
          token: data.token,
          name: data.name
        })
      );

      history.push(`/dashboard`);
    } catch (e) {
      yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
    }
  }
}
