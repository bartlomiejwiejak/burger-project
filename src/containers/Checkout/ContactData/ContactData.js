import React, { Component } from 'react'
import Button from '../../../components/UL/Button/Button';
import './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UL/Spinner/Spinner';
import Input from '../../../components/UL/Input/Input';
class ContactData extends Component {
  state = {
    name: '',
    email: '',
    adress: {
      street: '',
      postalCode: ''
    },
    loading: false
  }
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Bartlomiej Wiejak',
        adress: {
          street: 'Polna 99',
          zipCode: '3123',
          country: 'Poland'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(res => {
        this.setState({
          loading: false,
        })
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          loading: false,
        })
      })
  }
  render() {
    let form = (<form>
      <Input inputtype='input' type='text' label='Your name' placeholder='Your name' name='name' />
      <Input inputtype='input' type='email' placeholder='Your Email' name='email' label='Your email' />
      <Input inputtype='input' type='text' placeholder='Street' name='street' label='Street' />
      <Input inputtype='input' type='text' placeholder='Postal Code' name='postal' label='Postal Code' />
      <Button click={this.orderHandler} btnType='Success'>ORDER</Button>
    </form>)

    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className='ContactData'>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;