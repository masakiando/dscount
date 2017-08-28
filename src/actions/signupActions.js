import * as types from './actionTypes';

export function userSignupRequest(userData) {
  return { type: types.CREATE_SIGNUP, userData };
}
