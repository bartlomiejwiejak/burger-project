import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import gsap from 'gsap';
import { useDispatch, useSelector } from 'react-redux';

import Burger from '../../shared/Burger';
import BuildControls from './BuildControls';
import Modal from '../../shared/Modal';
import OrderSummary from './Summary';
import axios from '../../../axios/orders';
import withErrorHandler from '../../hoc/withErrorHandler';
import * as actions from '../../../store/actions';

const BurgerBuilder = () => {
  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch()

  const onIngredientAdded = (ingName) => dispatch(actions.addIngredient(ingName));
  const onIngredientRemoved = (ingName) => dispatch(actions.removeIngredient(ingName));
  const onInitPurchase = () => dispatch(actions.purchaseBurgerInit());
  const onSetAuthRedirectPath = useCallback((path) => dispatch(actions.setAuthRedirectPath(path)), [dispatch]);
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
    onRedirectStart('/checkout');
  }

  useEffect(() => {
    onSetAuthRedirectPath('/burger-builder')
  }, [onSetAuthRedirectPath])

  const disabledInfo = { ...ings };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] === 0;
  }
  let orderSummary = null;
  let burger = null;
  if (ings) {
    burger = (
      <>
        <Burger />
        <BuildControls isAuth={isAuth} price={price} disabled={disabledInfo} addIngredient={onIngredientAdded} removeIngredient={onIngredientRemoved} purchasable={canPurchase(ings)} purchase={purchaseHandler} />
      </>
    )
    orderSummary = <OrderSummary price={price} continuePurchase={continuePurchaseHandler} cancelPurchase={cancelPurchaseHandler} ingredients={ings} />
  }
  useEffect(() => {
    gsap.set('.build-controls-container', { y: '100%' })
    gsap.set('.build-controls > *', { autoAlpha: 0, y: 50 })
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.to('.burger-builder-burger > *', .3, { autoAlpha: 1, x: 0, stagger: .1, delay: .5 })
      .to('.build-controls-container', 1, { y: 0, delay: .2 })
      .to('.build-controls > *', .2, { autoAlpha: 1, y: 0, stagger: .05 })
  }, [])
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