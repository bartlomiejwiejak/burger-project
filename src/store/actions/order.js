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
export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  }
}
export const purchaseBurger = (orderData) => {
  return dispatch => {
    dispatch(purchaseBurgerStart())
    axios.post('orders.json', orderData)
      .then(res => {
        dispatch(purchaseBurgerSucces(res.data.name, orderData))
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error))
      })
  }
}
export const purchaseBurgerInit = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_INIT
  }
}
export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  }
}
export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  }
}
export const fetchOrdersSuccess = (fetchedOrders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: fetchedOrders
  }
}
export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart())
    axios.get('orders.json')
      .then(res => {
        let fetchedOrders = [];
        for (let order in res.data) {
          fetchedOrders.push({
            ...res.data[order],
            id: order
          }
          );
        }
        dispatch(fetchOrdersSuccess(fetchedOrders))
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err))
      })
  }
}