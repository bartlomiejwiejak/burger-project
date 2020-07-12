import React, { useState, useEffect, useCallback } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UL/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import { withRouter } from 'react-router-dom';

const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch()

  const onIngredientAdded = (ingName) => dispatch(actions.addIngredient(ingName));
  const onIngredientRemoved = (ingName) => dispatch(actions.removeIngredient(ingName));
  const onInitIngredients = useCallback(() => dispatch(actions.initIngredients()), [dispatch]);
  const onInitPurchase = () => dispatch(actions.purchaseBurgerInit());
  const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path));
  const onRedirectStart = (path) => dispatch(actions.redirectStart(path))

  const ings = useSelector(state => state.burgerBuilder.ingredients)
  const price = useSelector(state => state.burgerBuilder.totalPrice)
  const isAuth = useSelector(state => state.auth.token !== null)

  const purchaseHandler = () => {
    if (isAuth) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath('/checkout');
      onRedirectStart('/auth');
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
    onInitPurchase();
    props.history.push('/checkout');
  }
  useEffect(() => {
    onInitIngredients()
  }, [onInitIngredients])

  const disabledInfo = { ...ings };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] === 0;
  }
  let orderSummary = null;
  let burger = null;
  if (ings) {
    burger = (
      <>
        <Burger ingredients={ings} />
        <BuildControls isAuth={isAuth} price={price} disabled={disabledInfo} addIngredient={onIngredientAdded} removeIngredient={onIngredientRemoved} purchasable={canPurchase(ings)} purchase={purchaseHandler} />
      </>
    )
    orderSummary = <OrderSummary price={price} continuePurchase={continuePurchaseHandler} cancelPurchase={cancelPurchaseHandler} ingredients={ings} />
  }
  return (
    <>
      <Modal cancel={cancelPurchaseHandler} show={purchasing}>
        {orderSummary}
      </Modal>
      {burger}
    </>
  );
}

export default withRouter(withErrorHandler(BurgerBuilder, axios));