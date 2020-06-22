import { put, delay } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios';

export function* logoutSaga(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('userId')
  yield localStorage.removeItem('expirationDate');
  yield put(actions.logoutSuccess())
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authSaga(action) {
  yield put(actions.authStart())
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  }
  let link = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXM6PTyBjnTzL_c3qGhM7MMiOoQqHE2Js';
  if (!action.isSignUp) {
    link = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXM6PTyBjnTzL_c3qGhM7MMiOoQqHE2Js'
  }
  try {
    const response = yield axios.post(link, authData);
    const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
    yield localStorage.setItem('userId', response.data.localId)
    yield localStorage.setItem('token', response.data.idToken)
    yield localStorage.setItem('expirationDate', expirationDate)
    yield put(actions.authSuccess(response.data.localId, response.data.idToken))
    yield put(actions.checkAuthTimeout(response.data.expiresIn))
  }
  catch (error) {
    yield put(actions.authFail(error.response.data.error));
  }

}