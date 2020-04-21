export const REQUEST_AUTHENTICATE_USER = `REQUEST_AUTHENTICATE_USER`;
export const PROCESSING_AUTHENTICATE_USER = `PROCESSING_AUTHENTICATE_USER`;
export const AUTHENTICATING = `AUTHENTICATING`;
export const AUTHENTICATED = `AUTHENTICATED`;
export const NOT_AUTHENTICATED = `NOT_AUTHENTICATED`;
export const SET_STATE = `SET_STATE`;
export const USERNAME_RESERVED = `USERNAME_RESERVED`;
export const REQUEST_PRE_SIGNUP = `REQUEST_PRE_SIGNUP`;
export const REQUEST_USER_ACCOUNT_CREATION = `REQUEST_USER_ACCOUNT_CREATION`;
export const GET_PHRASES = `GET_PHRASES`;
export const SET_PHRASES_SET = `SET_PHRASES_SET`;
export const REQUEST_LOGOUT = `REQUEST_LOGOUT`;
export const LOGOUT_USER = `LOGOUT_USER`;
export const REQUEST_SET_PHRASES = `REQUEST_SET_PHRASES`;
export const SET_PHRASES = `SET_PHRASES`;
export const FETCH_PHRASES = `FETCH_PHRASES`;
export const REQUEST_ADD_PHRASE = `REQUEST_ADD_PHRASE`;
export const SAVE_REQUEST = `SAVE_REQUEST`;
export const SERVER_ERROR = `SERVER_ERROR`;

export const requestAuthenticateUser = (email, password, history) => ({
  type: REQUEST_AUTHENTICATE_USER,
  email,
  password,
  history
});

export const processAuthenticateUser = (
  status = AUTHENTICATING,
  session = null
) => ({
  type: PROCESSING_AUTHENTICATE_USER,
  session,
  authenticated: status
});

export const logoutUser = (status = NOT_AUTHENTICATED) => ({
  type: LOGOUT_USER,
  authenticated: status
});

export const setState = (state = {}) => ({
  type: SET_STATE,
  state
});

export const requestPreSignup = (name, email, password) => ({
  type: REQUEST_PRE_SIGNUP,
  name,
  email,
  password
});

export const requestCreateUserAccount = (name, email, password) => ({
  type: REQUEST_USER_ACCOUNT_CREATION,
  name,
  email,
  password
});

export const setPhrases = (phrases) => ({
  type: SET_PHRASES,
  phrases
});

export const requestAddPhrase = (phraseSet) => ({
  type: REQUEST_ADD_PHRASE,
  phraseSet
});

export const saveRequest = (res) => ({
  type: SAVE_REQUEST,
  res
});
export const serverError = (res) => ({
  type: SERVER_ERROR,
  res
});

export const getPhrasesFromStore = (state) => state.userPhrases;
export const callForRandomPhrases = (state) =>
  state.trainingSession.userPhrases;
