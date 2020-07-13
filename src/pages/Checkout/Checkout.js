import React from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
import './checkout.scss';
import { connect } from 'react-redux';

const Checkout = (props) => {

  const checkoutCancelledHandler = () => {
    props.history.replace('/burger-builder');
  }
  const checkoutContinueHandler = () => {
    props.history.replace('/checkout/contact-data')
    setTimeout(() => {
      document.querySelector('.contact-data').scrollIntoView({
        behavior: 'smooth'
      })
    }, 100)
  }
  let summary = <Redirect to='/' />
  if (props.ings) {
    const purchasedRedirect = props.purchased ? <Redirect to='/' /> : null
    summary = (
      <>
        {purchasedRedirect}
        <CheckoutSummary checkoutCancelled={checkoutCancelledHandler} checkoutContinue={checkoutContinueHandler} />
        <Route path={props.match.url + '/contact-data'} component={ContactData} />
      </>
    )
  }
  return summary;
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  }
}


export default connect(mapStateToProps)(Checkout);