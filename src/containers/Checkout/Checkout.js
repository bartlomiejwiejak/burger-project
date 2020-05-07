import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    let ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[0]
      } else {
        ingredients[param[0]] = +param[1]
      }
    }
    this.setState({
      ingredients,
      price
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
        <Route path={this.props.match.url + '/contact-data'} render={(props) => <ContactData {...props} price={this.state.price} ingredients={this.state.ingredients} />} />
      </>
    );
  }
}

export default Checkout;