import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSucces = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  }
}
export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  }
}
export const purchaseBurgerStart = (orderData) => {
  return dispatch => {
    axios.post('orders.json', orderData)
      .then(res => {
        dispatch(purchaseBurgerSucces(res.data, orderData))
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error))
      })
  }
}