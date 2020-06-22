import { logoutSaga, checkAuthTimeoutSaga, authSaga, authCheckStateSaga } from './auth';
import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionTypes.AUTH_INIT, authSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE_INIT, authCheckStateSaga);
}