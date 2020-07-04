import React, { useRef } from 'react';
import { ReactComponent as BunTop } from '../../Assets/burger/bunTop.svg'
import { ReactComponent as Cheese } from '../../Assets/burger/cheese.svg'
import { ReactComponent as Meat } from '../../Assets/burger/meat.svg'
import { ReactComponent as Bacon } from '../../Assets/burger/bacon.svg'
import { ReactComponent as Lettuce } from '../../Assets/burger/lettuce.svg'
import { ReactComponent as BunBottom } from '../../Assets/burger/bunBottom.svg'
import gsap from 'gsap';
import CustomEase from 'gsap/src/CustomEase';
import './burgerSvg.scss';


const BurgerSvg = ({ classes, reference }) => {
  let styles = ['burger'];
  if (classes) {
    styles = [...styles, classes];
  }
  const bunTop = useRef(null)
  const lettuce = useRef(null)
  const bacon = useRef(null)
  const meat = useRef(null)
  const cheese = useRef(null)
  const bunBottom = useRef(null)
  const shadow = useRef(null)


  const hover = () => {
    const bunTopCurr = bunTop.current;
    const lettuceCurr = lettuce.current;
    const baconCurr = bacon.current;
    const meatCurr = meat.current;
    const cheeseCurr = cheese.current;
    const bunBottomCurr = bunBottom.current;
    const shadowCurr = shadow.current;
    gsap.registerPlugin(CustomEase);

    gsap.to(bunTopCurr, { y: 60, duration: .4, ease: CustomEase.create("custom", "M0,-0.06,C0,0.04,0.042,-0.548,0.2,-0.4,0.392,-0.22,0.818,1.001,1,1") })
    gsap.to(bunBottomCurr, { y: -40, duration: .4, ease: CustomEase.create("custom", "M0,-0.06,C0,0.04,0.042,-0.548,0.2,-0.4,0.392,-0.22,0.818,1.001,1,1") })
    gsap.to(meatCurr, { y: -20, duration: .4, ease: CustomEase.create("custom", "M0,-0.06,C0,0.04,0.042,-0.548,0.2,-0.4,0.392,-0.22,0.818,1.001,1,1") })
    gsap.to(lettuceCurr, { y: 40, duration: .4, ease: CustomEase.create("custom", "M0,-0.06,C0,0.04,0.042,-0.548,0.2,-0.4,0.392,-0.22,0.818,1.001,1,1") })
    gsap.to(baconCurr, { y: 0, duration: .4, ease: CustomEase.create("custom", "M0,-0.06,C0,0.04,0.042,-0.548,0.2,-0.4,0.392,-0.22,0.818,1.001,1,1") })
    gsap.to(cheeseCurr, { y: 20, duration: .4, ease: CustomEase.create("custom", "M0,-0.06,C0,0.04,0.042,-0.548,0.2,-0.4,0.392,-0.22,0.818,1.001,1,1") })
    gsap.to(shadowCurr, { y: -60, duration: .4, ease: CustomEase.create("custom", "M0,-0.06,C0,0.04,0.042,-0.548,0.2,-0.4,0.392,-0.22,0.818,1.001,1,1") })
  }

  const mouseOut = () => {
    const bunTopCurr = bunTop.current;
    const lettuceCurr = lettuce.current;
    const baconCurr = bacon.current;
    const meatCurr = meat.current;
    const cheeseCurr = cheese.current;
    const bunBottomCurr = bunBottom.current;
    const shadowCurr = shadow.current;

    gsap.to(bunTopCurr, { y: 90, duration: .3 })
    gsap.to(bunBottomCurr, { y: -70, duration: .3 })
    gsap.to(meatCurr, { y: -40, duration: .3 })
    gsap.to(lettuceCurr, { y: 70, duration: .3 })
    gsap.to(baconCurr, { y: -5, duration: .3 })
    gsap.to(cheeseCurr, { y: 40, duration: .3 })
    gsap.to(shadowCurr, { y: -90, duration: .3 })
  }
  const mouseDown = () => {
    const bunTopCurr = bunTop.current;
    const lettuceCurr = lettuce.current;
    const baconCurr = bacon.current;
    const meatCurr = meat.current;
    const cheeseCurr = cheese.current;
    const bunBottomCurr = bunBottom.current;
    const shadowCurr = shadow.current;

    gsap.to(bunTopCurr, { y: 90, duration: .1 })
    gsap.to(bunBottomCurr, { y: -70, duration: .1 })
    gsap.to(meatCurr, { y: -40, duration: .1 })
    gsap.to(lettuceCurr, { y: 70, duration: .1 })
    gsap.to(baconCurr, { y: -5, duration: .1 })
    gsap.to(cheeseCurr, { y: 40, duration: .1 })
    gsap.to(shadowCurr, { y: -90, duration: .1 })
  }
  const mouseUp = () => {
    const bunTopCurr = bunTop.current;
    const lettuceCurr = lettuce.current;
    const baconCurr = bacon.current;
    const meatCurr = meat.current;
    const cheeseCurr = cheese.current;
    const bunBottomCurr = bunBottom.current;
    const shadowCurr = shadow.current;
    gsap.to(bunTopCurr, { y: 60, duration: .2, ease: CustomEase.create("custom", "M0,-0.06,C0,0.04,0.042,-0.548,0.2,-0.4,0.392,-0.22,0.818,1.001,1,1") })
    gsap.to(bunBottomCurr, { y: -40, duration: .2, ease: CustomEase.create("custom", "M0,-0.06,C0,0.04,0.042,-0.548,0.2,-0.4,0.392,-0.22,0.818,1.001,1,1") })
    gsap.to(meatCurr, { y: -20, duration: .2, ease: CustomEase.create("custom", "M0,-0.06,C0,0.04,0.042,-0.548,0.2,-0.4,0.392,-0.22,0.818,1.001,1,1") })
    gsap.to(lettuceCurr, { y: 40, duration: .2, ease: CustomEase.create("custom", "M0,-0.06,C0,0.04,0.042,-0.548,0.2,-0.4,0.392,-0.22,0.818,1.001,1,1") })
    gsap.to(baconCurr, { y: 0, duration: .2, ease: CustomEase.create("custom", "M0,-0.06,C0,0.04,0.042,-0.548,0.2,-0.4,0.392,-0.22,0.818,1.001,1,1") })
    gsap.to(cheeseCurr, { y: 20, duration: .2, ease: CustomEase.create("custom", "M0,-0.06,C0,0.04,0.042,-0.548,0.2,-0.4,0.392,-0.22,0.818,1.001,1,1") })
    gsap.to(shadowCurr, { y: -60, duration: .2, ease: CustomEase.create("custom", "M0,-0.06,C0,0.04,0.042,-0.548,0.2,-0.4,0.392,-0.22,0.818,1.001,1,1") })
  }
  return (
    <ul onMouseEnter={hover} onTouchMove={mouseOut} onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseLeave={mouseOut} ref={reference} className={styles.join(' ')}>
      <li ref={bunTop} className="item bun_top">
        <BunTop />
      </li>
      <li ref={lettuce} className="item lettuce">
        <Lettuce />
      </li>

      <li ref={cheese} className="item cheese">
        <Cheese />
      </li>
      <li ref={bacon} className="item bacon">
        <Bacon />
      </li>
      <li ref={meat} className="item meat">
        <Meat />
      </li>
      <li ref={bunBottom} className="item bun_bottom">
        <BunBottom />
      </li>
      <li ref={shadow} className="item shadow"></li>
    </ul>
  )
}

export default BurgerSvg;

