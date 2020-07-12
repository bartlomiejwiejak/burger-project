import React, { useEffect } from 'react';
import './buildControls.scss'
import BuildControl from './BuildControl/BuildControl';
import gsap from 'gsap';

const controls = [
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Tomato', type: 'tomato' },
  { label: 'Gerkins', type: 'gerkins' }
]
const BuildControls = (props) => {

  useEffect(() => {
    gsap.set('.build-controls-container', { y: '100%' })
    gsap.set('.build-controls > *', { autoAlpha: 0, y: 50 })
    gsap.set('.burger-builder-burger > *', { autoAlpha: 0, x: -100 })
    const tl = gsap.timeline({ defaults: { ease: 'Power2.out' } })
    tl.to('.burger-builder-burger > *', { autoAlpha: 1, x: 0, duration: .3, stagger: .1 })
      .to('.build-controls-container', { y: 0, duration: 1 }, '+=.2')
      .to('.build-controls > *', { autoAlpha: 1, y: 0, stagger: .1, duration: .1 })

  }, [])

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