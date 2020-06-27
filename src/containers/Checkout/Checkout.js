import React from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
import { connect } from 'react-redux';
const Checkout = (props) => {

  const checkoutCancelledHandler = () => {
    props.history.goBack();
  }
  const checkoutContinueHandler = () => {
    props.history.replace('/checkout/contact-data')
  }
  let summary = <Redirect to='/' />
  if (props.ings) {
    const purchasedRedirect = props.purchased ? <Redirect to='/' /> : null
    summary = (
      <>
        {purchasedRedirect}
        <CheckoutSummary checkoutCancelled={checkoutCancelledHandler} checkoutContinue={checkoutContinueHandler} ingredients={props.ings} />
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