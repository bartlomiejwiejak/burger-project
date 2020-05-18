import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UL/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UL/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

class BurgerBuilder extends Component {
  state = {
    totalPrice: 4,
    purchasing: false,
    loading: false,
    error: false
  }
  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }
  canPurchase(ingredients) {
    for (let ingredient in ingredients) {
      if (ingredients[ingredient] !== 0) {
        return true;
      }
    }
    return false;
  }

  cancelPurchaseHandler = () => {
    this.setState({
      purchasing: false
    })
  }
  continuePurchaseHandler = () => {

    this.props.history.push('/checkout');
  }
  componentDidMount() {
    // axios.get('/ingredients.json')
    //   .then(res => {
    //     this.setState({
    //       ingredients: res.data
    //     })
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     this.setState({
    //       error: true
    //     })
    //   })
  }
  render() {
    const disabledInfo = { ...this.props.ings };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;
    }
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls price={this.props.price} disabled={disabledInfo} addIngredient={this.props.onIngredientAdded} removeIngredient={this.props.onIngredientRemoved} purchasable={this.canPurchase(this.props.ings)} purchase={this.purchaseHandler} />
        </Aux>
      )
      orderSummary = <OrderSummary price={this.state.totalPrice} continuePurchase={this.continuePurchaseHandler} cancelPurchase={this.cancelPurchaseHandler} ingredients={this.props.ings} />
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

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));