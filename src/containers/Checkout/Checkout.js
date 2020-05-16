import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
import { connect } from 'react-redux';
class Checkout extends Component {

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }
  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }
  render() {
    return (
      <>
        <CheckoutSummary checkoutCancelled={this.checkoutCancelledHandler} checkoutContinue={this.checkoutContinueHandler} ingredients={this.props.ings} />
        <Route path={this.props.match.url + '/contact-data'} component={ContactData} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
  }
}


export default connect(mapStateToProps)(Checkout);