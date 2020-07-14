import React from 'react';
import './order.scss';
const Order = (props) => {
  let ingredients = [];

  for (let ingredient in props.ingredients) {
    ingredients.push({
      name: ingredient,
      amount: +props.ingredients[ingredient]
    })
  }
  const outputIngredients = ingredients.map(ingredient => {
    return <span key={ingredient.name} style={{ textTransform: 'capitalize', display: 'inline-block', margin: '0 8px', border: '1px solid grey', padding: '5px' }}>{ingredient.name} ({ingredient.amount})</span>
  })
  return (
    <div className='order'>
      <p>Ingredients: {outputIngredients}</p>
      <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  );
}

export default Order;