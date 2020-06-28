import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UL/Button/Button';
const OrderSumamry = (props) => {
  let ingredientSummary = props.ingredients;
  ingredientSummary = Object.keys(ingredientSummary).map(ingredient => <li key={ingredient}><span style={{ textTransform: 'Capitalize' }}>{ingredient}: </span>{ingredientSummary[ingredient]}</li>)
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price: {props.price.toFixed(2)}$</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger' click={props.cancelPurchase}>CANCEL</Button>
      <Button btnType='Success' click={props.continuePurchase}>CONTINUE</Button>
    </Aux>
  );
}

export default OrderSumamry;