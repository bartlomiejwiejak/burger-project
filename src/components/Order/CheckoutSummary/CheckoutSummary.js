import React from 'react'
import Burger from '../../Burger/Burger';
import Button from '../../UL/Button/Button';
import './CheckoutSummary.css';
const CheckoutSummary = (props) => {
  return (
    <div className='CheckoutSummary'>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button click={props.checkoutContinue} btnType='Success'>Continue</Button>
      <Button click={props.checkoutCancelled} btnType='Danger'>Cancel</Button>
    </div>
  );
}

export default CheckoutSummary;