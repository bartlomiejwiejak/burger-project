import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }
  componentDidMount() {
    axios.get('orders.json')
      .then(res => {

        let fetchedOrders = [];
        for (let order in res.data) {
          fetchedOrders.push({
            ...res.data[order],
            id: order
          }
          );
        }
        this.setState({
          loading: false,
          orders: fetchedOrders
        })
      })
  }
  render() {
    return (
      <div>
        {this.state.orders.map(order => <Order ingredients={order.ingredients} price={order.price} customer={order.customer} key={order.id} />)}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);