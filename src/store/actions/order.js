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
export const purchaseBurgerStart = (order) => {
  return dispatch => {
    axios.post('orders.json', order)
      .then(res => {
        dispatch(purchaseBurgerSucces(res.data, order.data))
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error))
      })
  }
}