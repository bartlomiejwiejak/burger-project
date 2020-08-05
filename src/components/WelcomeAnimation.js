import React, { useEffect, useState } from 'react';
import { useToggle, useLockBodyScroll } from 'react-use';
import gsap from 'gsap';

const WelcomeAnimation = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const [locked, toggleLocked] = useToggle(true)
  useLockBodyScroll(locked);
  useEffect(() => {
    let mounted = true;
    window.scrollTo({
      top: 0
    })
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.to('.welcome-animation', 1, { y: 0 })
      .to(['.welcome', '.arrow-container'], 0, { visibility: 'visible' })
      .to('.welcome-wrapper', 0, { backgroundColor: '#f7f7f7' })
      .to('.welcome-animation', 1, { x: '-100%' })
      .fromTo('.welcome__text-box', .5, { scale: 10 }, { scale: 1, autoAlpha: 1, delay: .2 })
      .fromTo('.welcome-wrapper .arrow', .3, { y: '-100%' }, { autoAlpha: 1, y: 0, delay: .5 })
      .fromTo('.welcome-wrapper .arrow-text', .2, { visibility: 'hidden' }, {
        autoAlpha: 1, onComplete: () => {
          if (mounted) {
            toggleLocked(false);
            setAnimationDone(true)
            document.querySelector('html').style.setProperty('overflow-x', 'hidden');
          }
        }
      })

    return () => {
      mounted = false;
    };
  }, [toggleLocked])

  return (
    animationDone ? null : <div className="welcome-animation"></div>
  );
}

export default WelcomeAnimation;