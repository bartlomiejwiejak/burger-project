import React, { useState, useEffect } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UL/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UL/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  const purchaseHandler = () => {
    if (props.isAuth) {
      setPurchasing(true);
    } else {
      props.onSetAuthRedirectPath('/checkout');
      props.history.push('/auth');
    }
  }
  const canPurchase = (ingredients) => {
    for (let ingredient in ingredients) {
      if (ingredients[ingredient] !== 0) {
        return true;
      }
    }
    return false;
  }

  const cancelPurchaseHandler = () => {
    setPurchasing(false);
  }
  const continuePurchaseHandler = () => {
    props.onInitPurchase();
    props.history.push('/checkout');
  }
  const { onInitIngredients } = props;
  useEffect(() => {
    onInitIngredients()
  }, [onInitIngredients])

  const disabledInfo = { ...props.ings };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] === 0;
  }
  let orderSummary = null;
  let burger = props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />

  if (props.ings) {
    burger = (
      <Aux>
        <Burger ingredients={props.ings} />
        <BuildControls isAuth={props.isAuth} price={props.price} disabled={disabledInfo} addIngredient={props.onIngredientAdded} removeIngredient={props.onIngredientRemoved} purchasable={canPurchase(props.ings)} purchase={purchaseHandler} />
      </Aux>
    )
    orderSummary = <OrderSummary price={props.price} continuePurchase={continuePurchaseHandler} cancelPurchase={cancelPurchaseHandler} ingredients={props.ings} />
  }
  return (
    <Aux>
      <Modal cancel={cancelPurchaseHandler} show={purchasing}>
        {orderSummary}
      </Modal>
      {burger}
    </Aux>
  );
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseBurgerInit()),
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));