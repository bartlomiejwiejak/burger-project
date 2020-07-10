import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';
const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
}
const INGREDIENT_PRICES = {
  lettuce: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
  tomato: 0.6,
  gerkins: 0.6
}
const addIngredient = (state, action) => {
  const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
  const updatedIngredients = updatedObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  }
  return updatedObject(state, updatedState)
}
const removeIngredient = (state, action) => {
  const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
  const updatedIngs = updatedObject(state.ingredients, updatedIng);
  const updatedSt = {
    ingredients: updatedIngs,
    building: true,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
  }
  return updatedObject(state, updatedSt)
}
const setIngredients = (state, action) => {
  return updatedObject(state, {
    ingredients: {
      lettuce: action.ingredients.lettuce,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.bacon,
      meat: action.ingredients.meat,
      tomato: action.ingredients.tomato,
      gerkins: action.ingredients.gerkins
    },
    totalPrice: 4,
    building: false
  })
}
const fetchIngredients = (state, action) => {
  return updatedObject(state, {
    error: true
  })

}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.ADD_INGREDIENT): return addIngredient(state, action);
    case (actionTypes.REMOVE_INGREDIENT): return removeIngredient(state, action);
    case (actionTypes.SET_INGREDIENTS): return setIngredients(state, action)
    case (actionTypes.FETCH_INGREDIENTS_FAILED): return fetchIngredients(state, action)
    default:
      return state;
  }
}
export default reducer;