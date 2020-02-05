import { combineReducers } from "redux";
import * as mutations from "./mutations";

export let defaultState = {
  session: { id: "huk", token: "", authenticated: false },
  trainingSession: {},
  userPhrases: [
    { phrase: "bla", translation: "fra" },
    { phrase: "Bio", translation: "Fio" },
    { phrase: "Ham", translation: "Bam" }
  ],
  phrasesSet: []
};

// export const reducer = combineReducers({ auth });

export function auth(state = defaultState, action) {
  let { type, authenticated, session } = action;
  switch (type) {
    case mutations.REQUEST_AUTHENTICATE_USER:
      return { ...state, authenticated: mutations.AUTHENTICATING };
    case mutations.PROCESSING_AUTHENTICATE_USER:
      return { ...state, ...session, authenticated };
    case mutations.LOGOUT_USER:
      return { ...state, ...session, authenticated };
    case mutations.REQUEST_USER_ACCOUNT_CREATION:
      return { ...state, ...session, authenticated: true };
    case mutations.SET_PHRASES:
      return {
        ...state,
        userPhrases: action.transformedPhrases
      };
    default:
      return state;
  }
}
