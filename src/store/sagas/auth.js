import { put, delay, call } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios';

export function* logoutSaga(action) {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'userId');
  yield call([localStorage, 'removeItem'], 'expirationDate');
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
    const response = yield call([axios, 'post'], link, authData);
    const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
    yield call([localStorage, 'setItem'], 'userId', response.data.localId);
    yield call([localStorage, 'setItem'], 'token', response.data.idToken);
    yield call([localStorage, 'setItem'], 'expirationDate', expirationDate);
    yield put(actions.authSuccess(response.data.localId, response.data.idToken))
    yield put(actions.checkAuthTimeout(response.data.expiresIn))
  }
  catch (error) {
    yield put(actions.authFail(error.response.data.error));
  }

}

export function* authCheckStateSaga(action) {
  const token = yield call([localStorage, 'getItem'], 'token');
  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = new Date(localStorage.getItem('expirationDate'))
    if (expirationDate > new Date()) {
      const userId = yield localStorage.getItem('userId')
      const token = yield localStorage.getItem('token')
      yield put(actions.authSuccess(userId, token))
      yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    } else {
      yield put(actions.logout())
    }
  }
}