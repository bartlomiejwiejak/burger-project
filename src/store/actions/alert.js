import * as actionTypes from './actionTypes';

export const alertShow = (message) => {
  return {
    type: actionTypes.ALERT_SHOW,
    message: message
  }
}

export const alertHide = () => {
  return {
    type: actionTypes.ALERT_HIDE
  }
}