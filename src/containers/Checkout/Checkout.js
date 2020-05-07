import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
class Checkout extends Component {
  state = {
    ingredients: null
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    let ingredients = {};
    for (let param of query.entries()) {
      console.log(param)
      ingredients[param[0]] = +param[1]
    }
    this.setState({
      ingredients
    })
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }
  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }
  render() {
    return (
      <>
        <CheckoutSummary checkoutCancelled={this.checkoutCancelledHandler} checkoutContinue={this.checkoutContinueHandler} ingredients={this.state.ingredients} />
        <Route path={this.props.match.url + '/contact-data'} component={ContactData} />
      </>
    );
  }
}

export default Checkout;