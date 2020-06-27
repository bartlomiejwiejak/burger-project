import React, { useEffect } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import { connect } from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions';
import Spinner from '../../components/UL/Spinner/Spinner';
const Orders = (props) => {
  const { token, userId, loading, onFetchOrders } = props;

  useEffect(() => {
    onFetchOrders(token, userId);
  }, [token, userId, onFetchOrders])
  let orders = <Spinner />
  if (!loading) {
    orders = (
      <>
        {props.orders.map(order => <Order ingredients={order.ingredients} price={order.price} customer={order.customer} key={order.id} />)}
      </>
    )
  }
  return orders;
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));