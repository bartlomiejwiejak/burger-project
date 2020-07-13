import React from 'react';
import './buildControls.scss'
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Tomato', type: 'tomato' },
  { label: 'Gerkins', type: 'gerkins' }
]
const BuildControls = (props) => {

  return (
    <div className='build-controls-container'>
      <div className="build-controls">
        <p className='build-controls-price'>Current price: <strong>{props.price.toFixed(2)}$</strong></p>
        {controls.map(item => (
          <BuildControl disabled={props.disabled[item.type]} add={props.addIngredient} remove={props.removeIngredient} key={item.label} type={item.type} />
        ))}
        <div className="orderBtn-wrapper"><button onClick={props.purchase} disabled={!props.purchasable} className='build-controls-orderBtn'>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER NOW'}</button></div>
      </div>
    </div>
  );
}

export default BuildControls;