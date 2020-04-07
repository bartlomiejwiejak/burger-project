import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]
const buildControls = (props) => {
  return (
    <div className='BuildControls'>
      <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(item => (
        <BuildControl disabled={props.disabled[item.type]} add={props.addIngredient} remove={props.removeIngredient} label={item.label} key={item.label} type={item.type} />
      ))}
      <button disabled={!props.purchasable} className='OrderButton'>ORDER NOW</button>
    </div>
  );
}

export default buildControls;