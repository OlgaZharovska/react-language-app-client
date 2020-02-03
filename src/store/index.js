// import "regenerator-runtime/runtime";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { auth } from "./reducer";
import * as sagas from "./sagas";
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  auth,
  applyMiddleware(createLogger(), sagaMiddleware)
);

store.subscribe(() => console.log("store.getState()", store.getState()));

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

// store.dispatch({
//   type: "GET_PHRASES"
// });
