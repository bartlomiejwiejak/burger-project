import * as actionTypes from './actionTypes';
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
  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT,
  }
}
export const logoutSuccess = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}
export const checkAuthTimeout = (expirationTime) => {
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expirationTime
  }
}
export const auth = (email, password, isSignUp) => {
  return {
    type: actionTypes.AUTH_INIT,
    email,
    password,
    isSignUp
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