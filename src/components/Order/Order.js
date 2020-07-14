import React, { useEffect, useRef } from 'react';
import './order.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Order = (props) => {
  let ingredients = [];
  const orderRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(orderRef.current, {
      x: 0, autoAlpha: 1, duration: .7, scrollTrigger: {
        trigger: orderRef.current,
        start: 'top center'
      }
    })
  }, [])
  const mouseEnterAnimation = () => {
    const offerbox = orderRef.current;
    gsap.to(offerbox, { y: '-1.5rem', scale: 1.03, duration: .3 })
  }
  const mouseleaveAnimation = () => {
    const offerbox = orderRef.current;
    gsap.to(offerbox, { y: 0, scale: 1, duration: .3 })
  }
  for (let ingredient in props.ingredients) {
    ingredients.push({
      name: ingredient,
      amount: props.ingredients[ingredient],
      price: props.ingredientPrices[ingredient],
      totalPrice: props.ingredientPrices[ingredient] * props.ingredients[ingredient]
    })
  }
  const outputIngredients = ingredients.map(ingredient => {
    return (
      <>
        <div className="order__cell">{ingredient.name}</div>
        <div className="order__cell">{ingredient.amount}</div>
        <div className="order__cell">$ {ingredient.price.toFixed(2)}</div>
        <div className="order__cell">$ {ingredient.totalPrice.toFixed(2)}</div>
      </>
    )
  })
  return (
    <div onMouseEnter={mouseEnterAnimation} onMouseLeave={mouseleaveAnimation} ref={orderRef} className='order'>
      <div className="order__cell order__name">Ingredients</div>
      <div className="order__cell order__name">Amount</div>
      <div className="order__cell order__name">Price</div>
      <div className="order__cell order__name">Total Price</div>
      {outputIngredients}
      <div className="order__cell order__empty"></div>
      <div className="order__cell order__empty"></div>
      <div className="order__cell order__empty"></div>
      <p className='order__price order__cell'>$ {Number.parseFloat(props.price).toFixed(2)}</p>
      <div className="order__date order__cell">Ordered {props.date}</div>
    </div>
  );
}

export default Order;