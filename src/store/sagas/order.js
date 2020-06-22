import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from '../../axios-orders';

export function* purchaseBurgerSaga(action) {
  yield put(actions.purchaseBurgerStart())
  try {
    const response = yield axios.post('orders.json?auth=' + action.token, action.orderData);
    yield put(actions.purchaseBurgerSucces(response.data.name, action.orderData))
  }
  catch (error) {
    yield put(actions.purchaseBurgerFail(error))
  }
}

export function* fetchOrdersSaga(action) {
  yield put(actions.fetchOrdersStart())
  const queryParams = '&orderBy="userId"&equalTo="' + action.userId + '"';
  try {
    const response = yield axios.get('orders.json?auth=' + action.token + queryParams)
    let fetchedOrders = [];
    for (let order in response.data) {
      fetchedOrders.push({
        ...response.data[order],
        id: order
      }
      );
    }
    yield put(actions.fetchOrdersSuccess(fetchedOrders))
  }
  catch (error) {
    put(actions.fetchOrdersFail(error))
  }
}