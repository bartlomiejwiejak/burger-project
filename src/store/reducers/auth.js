import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
  loading: false,
  error: null,
  token: null,
  userId: null,
  redirectPath: '/'
}
const authStart = (state, action) => {
  return updatedObject(state, {
    loading: true
  })
}
const authSuccess = (state, action) => {
  return updatedObject(state, {
    loading: false,
    token: action.idToken,
    userId: action.userId,
    error: null
  })
}
const authFail = (state, action) => {
  return updatedObject(state, {
    loading: false,
    error: action.error
  })
}
const authLogout = (state, action) => {
  return updatedObject(state, {
    userId: null,
    token: null
  })
}
const setAuthRedirectPath = (state, action) => {
  return updatedObject(state, {
    redirectPath: action.path
  })
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAIL: return authFail(state, action);
    case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
    default: return state;
  }
}

export default reducer;