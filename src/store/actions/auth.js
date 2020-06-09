import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_START,
    error: error
  }
}
export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_START,
    authData
  }
}

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
  }
}