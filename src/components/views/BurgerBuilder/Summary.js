import React from 'react';

import Button from '../../shared/Button';

const OrderSumamry = (props) => {
  let ingredientSummary = props.ingredients;
  ingredientSummary = Object.keys(ingredientSummary).map(ingredient => <li key={ingredient}><span style={{ textTransform: 'Capitalize' }}>{ingredient}: </span>{ingredientSummary[ingredient]}</li>)
  return (
    <div className="order-summary">
      <h3 className='order-summary__heading'>Your order</h3>
      <p className='order-summary__description'>A delicious burger with the following ingredients:</p>
      <ul className='order-summary__ingredients'>
        {ingredientSummary}
      </ul>
      <p className='order-summary__price'><strong>Total price: {props.price.toFixed(2)}$</strong></p>
      <p className='order-summary__continue'>Continue to Checkout?</p>
      <Button btnType='btn btn--danger' click={props.cancelPurchase}>CANCEL</Button>
      <Button btnType='btn btn--success' click={props.continuePurchase}>CONTINUE</Button>
    </div>
  );
}

export default OrderSumamry;