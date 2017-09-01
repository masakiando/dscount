import * as types from './actionTypes';

// export function userSignupRequestNext(userData) {
//   debugger;
//   return { type: types.CREATE_SIGNUP, userData };
// }

export function userSignupRequest(userData) {
  debugger;
  return (dispatch, getState) => {
    return fetch(
      '/api/users', //req url
      { // XMLHttpRequest
      method: 'post',
      body: JSON.stringify(userData),
      headers: {'Content-Type': 'application/json'}
      }
    );
  };
}
