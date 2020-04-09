import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UL/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }
  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }
  updatePurchasableState(ingredients) {
    for (let ingredient in ingredients) {
      this.setState({
        purchasable: false
      })
      if (ingredients[ingredient] !== 0) {
        this.setState({
          purchasable: true
        })
        return;
      }
    }
  }
  addIngredientHandler = (type) => {
    let ingredients = { ...this.state.ingredients };
    ingredients[type]++;
    this.setState({
      ingredients: ingredients,
      totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
    })
    this.updatePurchasableState(ingredients);
  }
  removeIngredientHandler = (type) => {
    let ingredients = { ...this.state.ingredients };
    if (ingredients[type] === 0) {
      return;
    }
    ingredients[type]--;
    this.setState({
      ingredients: ingredients,
      totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]
    })
    this.updatePurchasableState(ingredients);
  }
  cancelPurchase = () => {
    this.setState({
      purchasing: false
    })
  }
  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;
    }
    return (
      <Aux>
        <Modal cancelPurchase={this.cancelPurchase} show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls price={this.state.totalPrice} disabled={disabledInfo} addIngredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler} purchasable={this.state.purchasable} purchase={this.purchaseHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;