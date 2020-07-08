import React, { useEffect, useState } from 'react';
import './offer.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OfferBox from './OfferBox';

const Offer = () => {
  const [isTriggered, setIsTriggered] = useState(false);
  const [isAnimationDone, setIsAnimationdone] = useState(false);
  useEffect(() => {
    let mounted = true;
    if (!isTriggered) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.set('.offer-reveal', { autoAlpha: 0 });
      gsap.to('.offer-reveal', {
        scrollTrigger: { trigger: '.offer-scroll', start: 'top center' }, duration: 1, transform: 'translate(0,0)', autoAlpha: 1, onComplete: () => {
          if (mounted) {
            setIsTriggered(true)
          }
        }
      })
    } else {
      const tl = gsap.timeline({ defaults: { ease: 'Power1.easeOut' } })
      gsap.to('.offer', {
        scrollTrigger: {
          trigger: '.offer',
          start: 'top center',
          end: 'center top',
          scrub: 1
        }, backgroundPositionY: '-300px'
      })
      gsap.set('.offer-wrapper', { visibility: 'visible' })
      gsap.set('.offer__box', { x: '100vw', skewX: '-15deg' })
      gsap.set('.offer__box > *', { skewX: '15deg' })
      tl.to('.offer-reveal', { duration: 1, transform: 'translate(100%,0)' })
        .to('.offer__box:nth-child(1)', { duration: .3, x: 0, autoAlpha: 1 })
        .to('.offer__box:nth-child(1)', { duration: .2, skewX: '-20deg' })
        .to('.offer__box:nth-child(1), .offer__box:nth-child(1) > *', { duration: .1, skewX: '0deg' })
        .to('.offer__box:nth-child(2)', { duration: .3, x: 0, autoAlpha: 1 }, '-=.5')
        .to('.offer__box:nth-child(2)', { duration: .2, skewX: '-20deg' })
        .to('.offer__box:nth-child(2), .offer__box:nth-child(2) > *', { duration: .1, skewX: '0deg' })
        .to('.offer__box:nth-child(3)', { duration: .3, x: 0, autoAlpha: 1 }, '-=.5')
        .to('.offer__box:nth-child(3)', { duration: .2, skewX: '-20deg' })
        .to('.offer__box:nth-child(3), .offer__box:nth-child(3) > *', {
          duration: .1, skewX: '0deg', onComplete: () => {
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
            <OfferBox favicon='fa-carrot' header='100% ORGANIC INGREDIENTS' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ad voluptatibus quaerat quae. Odio, facilis necessitatibus dolorem saepe dolore incidunt numquam praesentium, labore optio ullam hic atque inventore nihil obcaecati.' />
            <OfferBox favicon='fa-truck' header='SUPER FAST DELIVERY' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ad voluptatibus quaerat quae. Odio, facilis necessitatibus dolorem saepe dolore incidunt numquam praesentium, labore optio ullam hic atque inventore nihil obcaecati.' />
            <OfferBox favicon='fa-hamburger' header='NATURAL TASTE' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ad voluptatibus quaerat quae. Odio, facilis necessitatibus dolorem saepe dolore incidunt numquam praesentium, labore optio ullam hic atque inventore nihil obcaecati.' />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Offer;

