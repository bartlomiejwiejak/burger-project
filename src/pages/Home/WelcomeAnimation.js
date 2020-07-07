import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import './welcome-animation.scss';

const WelcomeAnimation = () => {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
    const disableScroll = () => { window.scrollTo({ top: 0 }) }
    window.addEventListener('scroll', disableScroll)
    const tl = gsap.timeline({ defaults: { ease: 'Power2.easeOut' } })
    tl.to('.welcome-animation', { y: 0, duration: 1 })
      .to(['.welcome', '.arrow-container'], { duration: 0, visibility: 'visible' })
      .to('.welcome-wrapper', { duration: 0, backgroundColor: '#f7f7f7' })
      .to('.welcome-animation', { x: '-100%', duration: 1 })
      .fromTo('.welcome__text-box', { scale: 10 }, { scale: 1, autoAlpha: 1, duration: .5, }, '+=.2')
      .fromTo('.welcome-wrapper .arrow', { y: '-100%' }, { duration: .3, autoAlpha: 1, y: 0 }, '+=.5')
      .fromTo('.welcome-wrapper .arrow-text', { visibility: 'hidden', duration: .2 }, { autoAlpha: 1, onComplete: () => { window.removeEventListener('scroll', disableScroll); setAnimationDone(true) } })
  }, [])

  return (
    animationDone ? null : <div className="welcome-animation"></div>
  );
}

export default WelcomeAnimation;