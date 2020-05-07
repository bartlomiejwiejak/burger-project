import React, { Component } from 'react'
import Button from '../../../components/UL/Button/Button';
import './ContactData.css';
class ContactData extends Component {
  state = {
    name: '',
    email: '',
    adress: {
      street: '',
      postalCode: ''
    }
  }
  render() {
    return (
      <div className='ContactData'>
        <h4>Enter your Contact Data</h4>
        <form>
          <input className='Input' type="text" placeholder='Your Name' name='name' />
          <input className='Input' type="text" placeholder='Your Email' name='email' />
          <input className='Input' type="text" placeholder='Street' name='street' />
          <input className='Input' type="text" placeholder='Postal Code' name='postal' />
          <Button btnType='Success'>ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;