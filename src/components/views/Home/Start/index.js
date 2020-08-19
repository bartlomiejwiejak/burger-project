import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Animation from './Animation';
import Arrow from '../../../shared/Arrow';

const Welcome = () => {

  const scrollDown = () => {
    document.querySelector('.about-scroll').scrollIntoView({
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.welcome', { backgroundPositionY: '0' }, {
      scrollTrigger: {
        trigger: '.welcome',
        start: 'top 150px',
        end: 'bottom 300px',
        scrub: .5,
      }, backgroundPositionY: '-300px'
    })
  }, [])

  return (
    <div className="welcome-wrapper">
      <Animation />
      <section className="welcome">
        <div className="welcome__text-box">
          <h1 className="heading-primary heading-primary--main">-LE BURGER BUILDER-</h1>
          <h2 className="heading-primary heading-primary--sub">...a burger, built by you!</h2>
        </div>
      </section>
      <Arrow click={scrollDown} />
    </div>
  );
}

export default Welcome;