import { logoutSaga, checkAuthTimeoutSaga, authSaga, authCheckStateSaga } from './auth';
import { initIngredientsSaga } from './burgerBuilder';
import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { purchaseBurgerSaga, fetchOrdersSaga } from './order';
export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionTypes.AUTH_INIT, authSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE_INIT, authCheckStateSaga);
}
export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}
export function* watchOrder() {
  yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}