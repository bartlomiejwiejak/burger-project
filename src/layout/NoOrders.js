import React, { useEffect } from 'react'
import gsap from 'gsap';
import Link from '../components/Link';

const NoOrders = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.to('.no-orders-modal', { x: 0, autoAlpha: 1, duration: .6 })
      .to('.no-orders__heading, .no-orders .link', { y: 0, autoAlpha: 1, duration: .3, stagger: .1 })
  }, [])
  return (
    <div className="no-orders">
      <div className="no-orders-modal">
        <h2 className='no-orders__heading'>You don't seem to have any orders yet. Click button below to start building your first dream burger now!</h2>
        <Link to='/burger-builder' exact>START BUILDING!</Link>
      </div>
    </div>
  );
}

export default NoOrders;