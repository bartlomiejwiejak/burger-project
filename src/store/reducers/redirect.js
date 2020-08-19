import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../functions/utility';

const initialState = {
  leaving: false,
  path: '',
  isLoaded: false
}
const redirectStart = (state, action) => {
  return updatedObject(state, {
    leaving: true,
    path: action.path
  })
}
const redirectEnd = (state, action) => {
  return updatedObject(state, {
    leaving: false
  })
}
const loaded = (state, action) => {
  return updatedObject(state, {
    isLoaded: true
  })
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REDIRECT_START: return redirectStart(state, action);
    case actionTypes.REDIRECT_END: return redirectEnd(state, action);
    case actionTypes.LOAD_END: return loaded(state, action)
    default: return state;
  }
}

export default reducer;