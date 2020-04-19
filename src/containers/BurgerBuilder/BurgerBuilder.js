import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UL/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UL/Spinner/Spinner';
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
    purchasing: false,
    loading: false
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
  cancelPurchaseHandler = () => {
    this.setState({
      purchasing: false
    })
  }
  continuePurchaseHandler = () => {
    this.setState({
      loading: true
    })
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Bartlomiej Wiejak',
        adress: {
          street: 'Polna 99',
          zipCode: '3123',
          country: 'Poland'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(res => {
        this.setState({
          loading: false,
          purchasing: false
        })
      })
      .catch(err => {
        this.setState({
          loading: false,
          purchasing: false
        })
      })
  }
  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;
    }
    let orderSummary = <OrderSummary price={this.state.totalPrice} continuePurchase={this.continuePurchaseHandler} cancelPurchase={this.cancelPurchaseHandler} ingredients={this.state.ingredients} />
    if (this.state.loading) {
      orderSummary = <Spinner />
    }
    return (
      <Aux>
        <Modal cancelPurchase={this.cancelPurchaseHandler} show={this.state.purchasing}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls price={this.state.totalPrice} disabled={disabledInfo} addIngredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler} purchasable={this.state.purchasable} purchase={this.purchaseHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;