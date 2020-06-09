import * as actionTypes from './actionTypes';
import axios from 'axios';
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}
export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData
  }
}

export const auth = (email, password) => {
  return dispatch => {
    const authData = {
      email,
      password,
      returnSecureToken: true
    }
    dispatch(authStart());
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXM6PTyBjnTzL_c3qGhM7MMiOoQqHE2Js', authData)
      .then(res => {
        console.log(res);
        dispatch(authSuccess(res.data))
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err))
      })
  }
}