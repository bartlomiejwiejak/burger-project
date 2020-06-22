import * as actionTypes from './actionTypes';

export const addIngredient = (ingName) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingName
  }
}

export const removeIngredient = ingName => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingName
  }
}

export const setIngredients = (ings) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ings
  }
}

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  }
}

export const initIngredients = () => {
  return {
    type: actionTypes.INIT_INGREDIENTS
  }
}