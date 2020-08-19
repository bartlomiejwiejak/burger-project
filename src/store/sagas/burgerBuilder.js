import { put, call } from 'redux-saga/effects';

import * as actions from '../actions';
import axios from '../../axios/orders';

export function* initIngredientsSaga(action) {
  try {
    const ingredients = yield call([axios, 'get'], '/ingredients.json');
    const prices = yield call([axios, 'get'], '/ingredient-prices.json')
    yield put(actions.setIngredients(ingredients.data, prices.data))
  }
  catch (error) {
    yield put(actions.fetchIngredientsFailed())
  }
}
