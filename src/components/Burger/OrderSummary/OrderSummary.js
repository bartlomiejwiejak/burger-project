import React from 'react';
import Aux from '../../../hoc/Auxiliary';
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
      <p>Continue to Checkout?</p>
    </Aux>
  );
}

export default OrderSumamry;