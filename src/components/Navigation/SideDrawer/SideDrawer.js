import React, { useEffect, useRef, useState } from 'react';
import './sideDrawer.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UL/Backdrop/Backdrop';
import gsap from 'gsap';

const SideDrawer = (props) => {
  const sideDrawer = useRef(null);
  const backDrop = useRef(null);
  const heading = useRef(null);
  const navigation = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    const sideDrawerCurr = sideDrawer.current;
    const backDropCurr = backDrop.current;
    const headingCurr = heading.current;
    const navigationCurr = navigation.current.querySelectorAll('.action-button');
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    if (props.show) {
      setIsAnimating(true);
      gsap.to(backDropCurr, { duration: .3, autoAlpha: 1 });;
      tl.to(sideDrawerCurr, { transform: 'translateX(0)', duration: .2 });
      tl.fromTo(headingCurr, { x: '-30rem', autoAlpha: 0 }, { x: '0', ease: "back.out(1.7)", autoAlpha: 1, duration: 1 });
      tl.fromTo(navigationCurr, { x: '-30rem', autoAlpha: 0 }, { stagger: .1, x: '0', ease: "back.out(1.7)", autoAlpha: 1, onComplete: () => setIsAnimating(false) }, '-=.7');
    } else {
      setIsAnimating(true);
      gsap.to(backDropCurr, { duration: .3, autoAlpha: 0 });
      tl.to(sideDrawerCurr, {
        transform: 'translateX(-100%)', duration: .3, onComplete: () => {
          setIsAnimating(false);
        }
      })
    }
  }, [props.show])
  return (
    <Aux>
      <Backdrop isAnimating={isAnimating} reference={backDrop} isMobile show={props.show} cancel={props.sideDrawerHandle} />
      <div ref={sideDrawer} className='SideDrawer'>
        <div ref={heading} style={{ borderBottom: '1px solid white', borderTop: '1px solid white', width: '100%', textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.8rem', letterSpacing: '1px' }} className='heading-primary'>-LE BURGER BUILDER-</h1>
        </div>
        <nav>
          <NavigationItems reference={navigation} isAnimating={isAnimating} sideDrawerHandle={props.sideDrawerHandle} isAuth={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
}

export default SideDrawer;