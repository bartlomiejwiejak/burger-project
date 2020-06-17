import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      error: null,
      token: null,
      userId: null,
      redirectPath: '/'
    })
  })
  it('should store the token upon login', () => {
    expect(reducer({
      loading: false,
      error: null,
      token: null,
      userId: null,
      redirectPath: '/'
    }, {
      type: actionTypes.AUTH_SUCCESS,
      idToken: 'token',
      userId: 'id'
    })).toEqual({
      loading: false,
      error: null,
      token: 'token',
      userId: 'id',
      redirectPath: '/'
    })
  })
})