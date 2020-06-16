import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';
const initialState = {
  orders: [],
  loading: false,
  purchased: false
}
const purchaseBurgerSuccess = (state, action) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId
  }
  return updatedObject(state, {
    loading: false,
    orders: state.orders.concat(newOrder),
    purchased: true
  })
}
const purchaseBurgerFail = (state, action) => {
  return updatedObject(state, { loading: false })
}
const purchaseBurgerStart = (state, action) => {
  return updatedObject(state, { loading: true })
}
const purchaseBurgerInit = (state, action) => {
  return updatedObject(state, { purchased: false })
}
const fetchOrdersStart = (state, action) => {
  return updatedObject(state, { loading: true })
}
const fetchOrdersFail = (state, action) => {
  return updatedObject(state, { loading: false })
}
const fetchOrdersSuccess = (state, action) => {
  return updatedObject(state, { loading: false, orders: action.orders })
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
    case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
    case actionTypes.PURCHASE_BURGER_INIT: return purchaseBurgerInit(state, action);
    case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
    default:
      return state
  }
}

export default reducer;