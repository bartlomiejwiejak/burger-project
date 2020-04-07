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
      {controls.map(item => (
        <BuildControl add={props.addIngredient} remove={props.removeIngredient} label={item.label} key={item.label} type={item.type} />
      ))}
    </div>
  );
}

export default buildControls;