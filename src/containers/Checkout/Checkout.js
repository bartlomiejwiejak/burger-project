import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
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
      <CheckoutSummary checkoutCancelled={this.checkoutCancelledHandler} checkoutContinue={this.checkoutContinueHandler} ingredients={this.state.ingredients} />
    );
  }
}

export default Checkout;