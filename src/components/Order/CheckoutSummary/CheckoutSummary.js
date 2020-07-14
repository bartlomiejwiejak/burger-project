import React, { useEffect } from 'react'
import Burger from '../../Burger/Burger';
import Button from '../../UL/Button/Button';
import './checkoutSummary.scss';
import gsap from 'gsap';

const CheckoutSummary = (props) => {

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'Power2.easeOut' } })
    gsap.set('.checkout-summary', { autoAlpha: 1 });
    gsap.set('.checkout-summary__burger .burger-builder-burger', { overflow: 'visible' })
    gsap.set('.checkout-summary__burger .burger-builder-burger > *', { autoAlpha: 0, x: -300 })
    gsap.set('.checkout-summary__btn', { autoAlpha: 0, y: 20 })
    tl.to('.checkout-summary__heading', { y: 0, autoAlpha: 1, duration: .5 })
      .to('.checkout-summary__burger .burger-builder-burger > *', { autoAlpha: 1, x: 0, stagger: .1, duration: .3 })
      .to('.checkout-summary__btn', {
        y: 0, autoAlpha: 1, duration: .3, onComplete: () => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          })
        }
      }, '-=.3')
  }, [])
  return (
    <div className='checkout-summary'>
      <h2 className='checkout-summary__heading heading-secondary'>We hope it tastes well!</h2>
      <div className='checkout-summary__burger' style={{ width: '100%', margin: 'auto' }}>
        <Burger />
      </div>
      <Button click={props.checkoutCancelled} btnType='checkout-summary__btn btn btn--danger'>Cancel</Button>
      <Button click={props.checkoutContinue} btnType='checkout-summary__btn btn btn--success'>Continue</Button>
    </div>
  );
}

export default CheckoutSummary;