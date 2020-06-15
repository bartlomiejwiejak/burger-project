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
export const authSuccess = (userId, idToken) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    userId,
    idToken,
  }
}
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId')
  localStorage.removeItem('expirationTime');
  return {
    type: actionTypes.AUTH_LOGOUT,
  }
}
export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => dispatch(logout())
      , expirationTime * 1000)
  }
}
export const auth = (email, password, isSignUp) => {
  return dispatch => {
    const authData = {
      email,
      password,
      returnSecureToken: true
    }
    let link = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXM6PTyBjnTzL_c3qGhM7MMiOoQqHE2Js';
    if (!isSignUp) {
      link = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXM6PTyBjnTzL_c3qGhM7MMiOoQqHE2Js'
    }
    dispatch(authStart());
    axios.post(link, authData)
      .then(res => {
        const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
        localStorage.setItem('userId', res.data.localId)
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('expirationDate', expirationDate)
        dispatch(authSuccess(res.data.localId, res.data.idToken))
        dispatch(checkAuthTimeout(res.data.expiresIn))
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error))
      })
  }
}

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'))
      if (expirationDate > new Date()) {
        const userId = localStorage.getItem('userId')
        const token = localStorage.getItem('token')
        dispatch(authSuccess(userId, token))
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      } else {
        dispatch(logout())
      }
    }
  }
}