import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import { ReactComponent as BunTop } from '../../assets/burger/bunTop.svg'
import { ReactComponent as Cheese } from '../../assets/burger/cheese.svg'
import { ReactComponent as Meat } from '../../assets/burger/meat.svg'
import { ReactComponent as Bacon } from '../../assets/burger/bacon.svg'
import { ReactComponent as Lettuce } from '../../assets/burger/lettuce.svg'
import { ReactComponent as BunBottom } from '../../assets/burger/bunBottom.svg'
import { ReactComponent as Tomato } from '../../assets/burger/tomato.svg';
import { ReactComponent as Gerkins } from '../../assets/burger/gerkins.svg';


const BurgerSvg = ({ classes, reference, toolbar, fill, success, complete }) => {
  let styles = ['burger'];
  if (classes) {
    styles = [...styles, classes];
  }
  const bunTopRef = useRef(null)
  const lettuceRef = useRef(null)
  const tomatoRef = useRef(null)
  const gerkinsRef = useRef(null)
  const baconRef = useRef(null)
  const meatRef = useRef(null)
  const cheeseRef = useRef(null)
  const bunBottomRef = useRef(null)
  const shadowRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: .03 } })
    if (fill >= 100 && !success) {
      tl.to('.burger-builder-animation .burger', { x: '2%' })
        .to('.burger-builder-animation .burger', { x: '-2%' })
        .to('.burger-builder-animation .burger', { x: 0, onComplete: () => tl.restart() })
    }
    return () => {
      tl.kill();
    }
  }, [fill, success])



  const mouseEnter = () => {
    const bunTop = bunTopRef.current;
    const tomato = tomatoRef.current;
    const lettuce = lettuceRef.current;
    const gerkins = gerkinsRef.current;
    const cheese = cheeseRef.current;
    const bacon = baconRef.current;
    const meat = meatRef.current;
    const bunBottom = bunBottomRef.current;
    const shadow = shadowRef.current;
    if (success) return
    gsap.defaults({
      ease: 'power2.out',
      duration: .5
    })
    gsap.to(bunTop, { y: '80' })
    gsap.to(bunBottom, { y: '-130' })
    gsap.to(tomato, { y: '58' })
    gsap.to(meat, { y: '-109' })
    gsap.to(bacon, { y: '-74' })
    gsap.to(lettuce, { y: '31' })
    gsap.to(cheese, { y: '-31' })
    gsap.to(gerkins, { y: '1' })
    gsap.to(shadow, { y: '-152' })
    gsap.to(bunTop, { y: '80' })
  }
  const mouseDown = () => {
    if (toolbar) {
      window.scrollTo({
        behavior: 'smooth',
        top: 0
      })
    }
    const bunTop = bunTopRef.current;
    const tomato = tomatoRef.current;
    const lettuce = lettuceRef.current;
    const gerkins = gerkinsRef.current;
    const cheese = cheeseRef.current;
    const bacon = baconRef.current;
    const meat = meatRef.current;
    const bunBottom = bunBottomRef.current;
    const shadow = shadowRef.current;
    if (success) return

    gsap.to(bunTop, { y: '100' })
    gsap.to(bunBottom, { y: '-150' })
    gsap.to(tomato, { y: '72' })
    gsap.to(meat, { y: '-123' })
    gsap.to(bacon, { y: '-84' })
    gsap.to(lettuce, { y: '41' })
    gsap.to(cheese, { y: '-35' })
    gsap.to(gerkins, { y: '5' })
    gsap.to(shadow, { y: '-182' })
    gsap.to(bunTop, { y: '100' })
  }
  const mouseRelease = () => {
    const bunTop = bunTopRef.current;
    const tomato = tomatoRef.current;
    const lettuce = lettuceRef.current;
    const gerkins = gerkinsRef.current;
    const cheese = cheeseRef.current;
    const bacon = baconRef.current;
    const meat = meatRef.current;
    const bunBottom = bunBottomRef.current;
    const shadow = shadowRef.current;
    if (fill >= 100) return;
    gsap.to(bunTop, { y: '80' })
    gsap.to(bunBottom, { y: '-130' })
    gsap.to(tomato, { y: '58' })
    gsap.to(meat, { y: '-109' })
    gsap.to(bacon, { y: '-74' })
    gsap.to(lettuce, { y: '31' })
    gsap.to(cheese, { y: '-31' })
    gsap.to(gerkins, { y: '1' })
    gsap.to(shadow, { y: '-152' })
    gsap.to(bunTop, { y: '80' })
  }
  const mouseOut = () => {
    const bunTop = bunTopRef.current;
    const tomato = tomatoRef.current;
    const lettuce = lettuceRef.current;
    const gerkins = gerkinsRef.current;
    const cheese = cheeseRef.current;
    const bacon = baconRef.current;
    const meat = meatRef.current;
    const bunBottom = bunBottomRef.current;
    const shadow = shadowRef.current;
    if (fill >= 100) return;
    gsap.to(bunTop, { y: '90' })
    gsap.to(bunBottom, { y: '-140' })
    gsap.to(tomato, { y: '65' })
    gsap.to(meat, { y: '-116' })
    gsap.to(bacon, { y: '-79' })
    gsap.to(lettuce, { y: '36' })
    gsap.to(cheese, { y: '-33' })
    gsap.to(gerkins, { y: '3' })
    gsap.to(shadow, { y: '-162' })
  }
  useEffect(() => {
    if (success) {
      const bunTop = bunTopRef.current;
      const tomato = tomatoRef.current;
      const lettuce = lettuceRef.current;
      const gerkins = gerkinsRef.current;
      const cheese = cheeseRef.current;
      const bacon = baconRef.current;
      const meat = meatRef.current;
      const bunBottom = bunBottomRef.current;
      const shadow = shadowRef.current;
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      tl.to([bunTop, bunBottom, tomato, meat, bacon, lettuce, cheese, gerkins, bunTop], { y: '0', duration: .3 })
        .to(shadow, { y: '-20', duration: .3 }, '-=.3')
        .to('.burger-builder-animation .item svg.ing', { opacity: .6, duration: .1, stagger: .1 }, '+=.5')
        .fromTo('.burger-builder-animation .item .item-text', { autoAlpha: 0 }, { x: 0, stagger: .1, duration: .2, autoAlpha: 1 }, '-=.5')
        .to('.burger-builder-animation .bun_top', { y: '-=20', duration: .5 }, '+=1')
        .to('.burger-builder-animation .bun_bottom', { y: '+=20', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .shadow', { y: '+=20', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .meat', { y: '+=15', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .bacon', { y: '+=10', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .cheese', { y: '+=5', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .tomato', { y: '-=15', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .lettuce', { y: '-=10', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .gerkins', { y: '-=5', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .item .item-text', { autoAlpha: 0, duration: .3 })
        .to('.burger-builder-animation svg.ing', { opacity: 1, duration: .5 }, '-=.3')
        .to('.burger-builder-animation .bun_top', { y: '90', duration: .5 })
        .to('.burger-builder-animation .bun_bottom', { y: '-140', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .shadow', { y: '-162', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .meat', { y: '-116', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .bacon', { y: '-79', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .cheese', { y: '-33', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .tomato', { y: '65', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .lettuce', { y: '36', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .gerkins', { y: '3', duration: .5 }, '-=.5')
        .to('.burger-builder-animation .burger', { duration: .3, y: -100, autoAlpha: 0, onComplete: () => complete(true) })
    }
  }, [success, complete])

  return (
    <ul onMouseEnter={mouseEnter} onMouseDown={mouseDown} onTouchStart={mouseDown} onClick={mouseRelease} onMouseLeave={mouseOut} ref={reference} className={styles.join(' ')}>
      <li ref={bunTopRef} className="item bun_top">
        <BunTop />
      </li>
      <li ref={tomatoRef} className="item tomato">
        <Tomato />
        <div className="item-text">Tomato</div>
      </li>
      <li ref={lettuceRef} className="item lettuce">
        <Lettuce />
        <div className="item-text">Lettuce</div>
      </li>
      <li ref={gerkinsRef} className="item gerkins">
        <Gerkins />
        <div className="item-text">Gerkins</div>
      </li>
      <li ref={cheeseRef} className="item cheese">
        <Cheese />
        <div className="item-text">Cheese</div>
      </li>
      <li ref={baconRef} className="item bacon">
        <Bacon />
        <div className="item-text">Bacon</div>
      </li>
      <li ref={meatRef} className="item meat">
        <Meat />
        <div className="item-text">Meat</div>
      </li>
      <li ref={bunBottomRef} className="item bun_bottom">
        <BunBottom />
      </li>
      <li ref={shadowRef} className="item shadow"></li>
    </ul>
  )
}

export default BurgerSvg;

