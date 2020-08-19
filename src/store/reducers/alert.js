import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../functions/utility';

const initialState = {
  show: false,
  message: ''
}

const alertShow = (state, action) => {
  return updatedObject(state, {
    show: true,
    message: action.message
  })
}
const alertHide = (state, action) => {
  return updatedObject(state, {
    show: false
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALERT_SHOW: return alertShow(state, action);
    case actionTypes.ALERT_HIDE: return alertHide(state, action);
    default: return state;
  }
}

export default reducer;