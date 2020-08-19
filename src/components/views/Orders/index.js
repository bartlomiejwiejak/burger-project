import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import gsap from 'gsap';
import { useHistory } from 'react-router-dom';

import Order from './Order';
import axios from '../../../axios/orders';
import withErrorHandler from '../../hoc/withErrorHandler';
import * as actions from '../../../store/actions';
import NoOrders from './NoOrders';

const Orders = (props) => {
  const { token, userId, loading, onFetchOrders } = props;
  const history = useHistory();
  useEffect(() => {
    document.querySelector('html').style.setProperty('overflow-x', 'hidden');
    onFetchOrders(token, userId);
  }, [token, userId, onFetchOrders])
  let orders = null;
  if (!loading) {
    orders = (
      <div className='orders'>
        {props.orders.length !== 0 ? props.orders.map(order => <Order ingredients={order.ingredients} date={order.date} price={order.price} ingredientPrices={order.ingredientPrices} key={order.id} />).reverse() : <NoOrders />}
      </div>
    )
  }
  const { onRedirectEnd, path, leaving } = props;
  useEffect(() => {
    if (leaving) {
      gsap.to('.orders', {
        autoAlpha: 0, scale: 0.95, duration: 1, ease: 'power2.out', onComplete: () => {
          onRedirectEnd();
          history.push(path);
        }
      })
    }
  }, [leaving, history, onRedirectEnd, path])
  return orders;
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
    path: state.redirect.path,
    leaving: state.redirect.leaving
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId)),
    onRedirectEnd: () => dispatch(actions.redirectEnd())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));