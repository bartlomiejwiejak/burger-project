import * as actionTypes from './actionTypes';

export const redirectStart = (path = '/') => {
  return {
    type: actionTypes.REDIRECT_START,
    path
  }
}
export const redirectEnd = () => {
  return {
    type: actionTypes.REDIRECT_END
  }
}
export const loadEnd = () => {
  return {
    type: actionTypes.LOAD_END
  }
}
