import React, { useEffect, useRef, useState } from 'react';
import NavigationItems from './NavigationItems';
import Backdrop from './Backdrop';
import gsap from 'gsap';
import BurgerSvg from './BurgerSvg';

const SideDrawer = (props) => {
  const sideDrawer = useRef(null);
  const backDrop = useRef(null);
  const heading = useRef(null);
  const navigation = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const svg = useRef(null);
  useEffect(() => {
    const sideDrawerCurr = sideDrawer.current;
    const backDropCurr = backDrop.current;
    const headingCurr = heading.current;
    const navigationCurr = navigation.current.querySelectorAll('.link');
    const svgItems = svg.current.querySelectorAll('.item');
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    if (props.show) {
      setIsAnimating(true);
      gsap.to(backDropCurr, { duration: .3, autoAlpha: 1, ease: "Power2.easeOut" });;
      tl.to(sideDrawerCurr, { transform: 'translateX(0)', duration: .2, ease: "Power2.easeOut" });
      tl.fromTo(headingCurr, { x: '-30rem', autoAlpha: 0 }, { x: '0', ease: "back.out(1.7)", autoAlpha: 1, duration: 1 });
      tl.fromTo([navigationCurr, svgItems], { x: '-30rem', autoAlpha: 0 }, { stagger: .06, x: '0', ease: "back.out(1.7)", autoAlpha: 1, onComplete: () => setIsAnimating(false) }, '-=.8');

    } else {
      setIsAnimating(true);
      gsap.to(backDropCurr, { duration: .3, autoAlpha: 0 });
      tl.to([svgItems, navigationCurr, headingCurr], { alpha: '0', x: '-30rem', duration: .2, ease: "Power2.easeOut" })
        .to(sideDrawerCurr, {
          transform: 'translateX(-100%)', duration: .3, ease: "Power2.easeOut", onComplete: () => {
            setIsAnimating(false);
          }
        }, '-=.2')
    }
  }, [props.show])
  return (
    <>
      <Backdrop isAnimating={isAnimating} reference={backDrop} isMobile show={props.show} cancel={props.sideDrawerHandle} />
      <div ref={sideDrawer} className='side-drawer'>
        <div ref={heading} style={{ borderBottom: '1px solid white', borderTop: '1px solid white', width: '100%', textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.8rem', letterSpacing: '1px' }} className='heading-primary'>-LE BURGER BUILDER-</h1>
        </div>
        <nav>
          <NavigationItems reference={navigation} isAnimating={isAnimating} sideDrawerHandle={props.sideDrawerHandle} isAuth={props.isAuth} />
        </nav>
        <BurgerSvg reference={svg} />
      </div>
    </>
  );
}

export default SideDrawer;