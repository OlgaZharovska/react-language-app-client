export { userAccountCreationSaga } from "./userAccountCreationSaga";
export { userPreSignupSaga } from "./userPreSignupSaga";
export { userAuthenticationSaga } from "./userAuthenticationSaga";
export { requestLogoutSaga } from "./requestLogoutSaga";
export { loadPhrasesSaga } from "./loadPhrasesSaga";
export { addPhraseSaga } from "./addPhraseSaga";

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
