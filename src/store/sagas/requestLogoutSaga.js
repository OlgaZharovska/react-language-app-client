import { createBrowserHistory } from "history";
import * as mutations from "../mutations";
import { take, put } from "redux-saga/effects";

const history = createBrowserHistory();

export function* requestLogoutSaga() {
  while (true) {
    yield take(mutations.REQUEST_LOGOUT);

    yield put(mutations.logoutUser(mutations.NOT_AUTHENTICATED));
    history.push(`/`);
  }
}
