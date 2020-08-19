import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import isMobile from '../../../../functions/isMobile';
import OfferBox from './OfferBox';

const Offer = () => {
  const [isTriggered, setIsTriggered] = useState(false);
  const [isAnimationDone, setIsAnimationdone] = useState(false);
  useEffect(() => {
    let mounted = true;
    if (!isTriggered) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.set('.offer-reveal', { autoAlpha: 0 });
      gsap.to('.offer-reveal', 1, {
        scrollTrigger: { trigger: '.offer-scroll', start: 'top center' }, x: 0, y: 0, autoAlpha: 1, onComplete: () => {
          if (mounted) {
            setIsTriggered(true)
          }
        }
      })
    } else {
      if (isMobile()) {
      } else {
        gsap.to('.offer', {
          scrollTrigger: {
            trigger: '.offer',
            start: 'top center',
            end: 'center top',
            scrub: 1
          }, backgroundPositionY: '-300px'
        })
      }
      const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })
      gsap.set('.offer-wrapper', { visibility: 'visible' })
      gsap.set('.offer__box', { x: '100vw', skewX: '-15deg' })
      gsap.set('.offer__box > *', { skewX: '15deg' })
      tl.to('.offer-reveal', 1, { x: '100%', y: 0 })
        .to('.offer__box:nth-child(1)', .3, { x: 0, autoAlpha: 1 })
        .to('.offer__box:nth-child(1)', .2, { skewX: '-20deg' })
        .to('.offer__box:nth-child(1), .offer__box:nth-child(1) > *', .1, { skewX: '0deg' })
        .to('.offer__box:nth-child(2)', .3, { x: 0, autoAlpha: 1, delay: -.5 })
        .to('.offer__box:nth-child(2)', .2, { skewX: '-20deg' })
        .to('.offer__box:nth-child(2), .offer__box:nth-child(2) > *', .1, { skewX: '0deg' })
        .to('.offer__box:nth-child(3)', .3, { x: 0, autoAlpha: 1, delay: -.5 })
        .to('.offer__box:nth-child(3)', .2, { skewX: '-20deg' })
        .to('.offer__box:nth-child(3), .offer__box:nth-child(3) > *', .1, {
          skewX: '0deg', onComplete: () => {
            if (mounted) {
              setIsAnimationdone(true)
            }
          }
        })
    }
    return () => {
      mounted = false;
    }
  }, [isTriggered])
  return (
    <div className="offer-scroll">
      {isAnimationDone ? null : <div className="offer-reveal"></div>}
      <div className="offer-wrapper">
        <section className="offer">
          <div className="offer__container">
            <OfferBox favicon='fa-carrot' header='NATURAL TASTE' description='Took by the local farmers, 100% organic vegetables. Our bread is made by one of the greatest baker company in the world. 100% angus meat. Natural flavors, 2% or less of leghemoglobin (soy).' />
            <OfferBox favicon='fa-truck' header='FAST DELIVERY' description="Place and take an order in 30min or less! If we don't make it, you get 100% money refund. No joke. We make everything in order to deliver warm food at the door of your comfortable house." />
            <OfferBox favicon='fa-hamburger' header='PASSIONATE STAFF' description='Our secret is that people are carefully selected so can stay only those with true passion in order to make burgers really best possible. All with friendly atmosphere and hungry for more challenges.' />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Offer;

