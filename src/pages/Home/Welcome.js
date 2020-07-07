import React, { useEffect } from 'react';
import WelcomeAnimation from './WelcomeAnimation';
import './welcome.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Arrow from './Arrow';

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
      <WelcomeAnimation />
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