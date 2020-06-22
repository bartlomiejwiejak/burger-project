import * as actionTypes from './actionTypes';

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
export const purchaseBurger = (orderData, token) => {
  return {
    type: actionTypes.PURCHASE_BURGER,
    orderData,
    token
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
export const fetchOrders = (token, userId) => {
  return {
    type: actionTypes.FETCH_ORDERS,
    token,
    userId
  }
}