import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UL/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UL/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
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
    // this.setState({
    //   loading: true
    // })
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: 'Bartlomiej Wiejak',
    //     adress: {
    //       street: 'Polna 99',
    //       zipCode: '3123',
    //       country: 'Poland'
    //     },
    //     email: 'test@test.com'
    //   },
    //   deliveryMethod: 'fastest'
    // }
    // axios.post('/orders.json', order)
    //   .then(res => {
    //     this.setState({
    //       loading: false,
    //       purchasing: false
    //     })
    //   })
    //   .catch(err => {
    //     this.setState({
    //       loading: false,
    //       purchasing: false
    //     })
    //   })
    let queryParams = [];
    for (let ingredient in this.state.ingredients) {
      queryParams.push(encodeURIComponent(ingredient) + '=' + encodeURIComponent(this.state.ingredients[ingredient]))
    }
    queryParams = queryParams.join('&')
    this.props.history.push({ pathname: '/checkout', search: '?' + queryParams });
  }
  componentDidMount() {
    axios.get('/ingredients.json')
      .then(res => {
        this.setState({
          ingredients: res.data
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          error: true
        })
      })
  }
  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;
    }
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls price={this.state.totalPrice} disabled={disabledInfo} addIngredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler} purchasable={this.state.purchasable} purchase={this.purchaseHandler} />
        </Aux>
      )
      orderSummary = <OrderSummary price={this.state.totalPrice} continuePurchase={this.continuePurchaseHandler} cancelPurchase={this.cancelPurchaseHandler} ingredients={this.state.ingredients} />
    }
    if (this.state.loading) {
      orderSummary = <Spinner />
    }
    return (
      <Aux>
        <Modal cancel={this.cancelPurchaseHandler} show={this.state.purchasing}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);