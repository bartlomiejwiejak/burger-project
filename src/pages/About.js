import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Link from '../components/Link';
import BurgerPlate from '../components/BurgerPlate';
import Arrow from '../components/Arrow';

const About = () => {
  const [isTriggered, setIsTriggered] = useState(false);
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    let mounted = true;
    if (!isTriggered) {
      gsap.set('.about', { transform: 'translate(-100%, 100%)', autoAlpha: 0 })
      gsap.to('.about', {
        duration: 1, ease: 'Power2.easeOut', scrollTrigger: { trigger: '.about', start: '-80% center' }, x: 0, y: 0, autoAlpha: 1, onComplete: () => {
          if (mounted) {
            setIsTriggered(true)
          }
        }
      })
    }
    else {
      const tl = gsap.timeline({ defaults: { ease: 'Power1.easeOut' } })
      let delay = '+=2';
      const style = getComputedStyle(document.querySelector('.about__right'));
      const display = style.display;
      if (display === 'none') {
        delay = '+=0';
      }

      tl.fromTo('.about .heading-secondary', { y: '100%' }, { y: 0, autoAlpha: 1, duration: .1 }, delay)
        .fromTo(['.about__paragraph'], { y: 30 }, { stagger: .1, ease: 'back.out(1.7)', autoAlpha: 1, y: 0 })
        .fromTo('.about .link', { scale: 1.1, y: 30 }, { y: 0, scale: 1, autoAlpha: 1, duration: .1 }, '-=.5')
        .fromTo('.about-scroll .arrow', { y: '-100%' }, { duration: .3, autoAlpha: 1, y: 0 })
        .fromTo('.about-scroll .arrow-text', { visibility: 'hidden', duration: .2 }, { autoAlpha: 1 })
    }
    return () => {
      mounted = false;
    };
  }, [isTriggered])
  const scrollToOffer = () => {
    document.querySelector('.offer-scroll').scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <div className="about-scroll">
      <section className="about">
        <h2 className="heading-secondary">YOU ARE GOING TO FALL IN LOVE WITH BURGER BUILDER APP</h2>
        <div className="about__container">
          <div className="about__left">
            <div className="about__paragraph">
              <h3 className="heading-tertiary">Who we are</h3>
              <p className="paragraph">We are the fastest growing online fast food company. Started as small local restaurant, now we deliver our burgers in many countries. After 10 years of work we made it possible. You won't be disappointed. </p>
            </div>
            <div className="about__paragraph">
              <h3 className="heading-tertiary">How it works</h3>
              <p className="paragraph">Hungry? Then why don’t you treat yourself tonight to our delicious takeaway. Ordering food online have never been that easy and convenient. With the Burger Builder App you can select ingredients and being delivered your delicious custom burger at your home extremely fast. Click a button bellow to start building your custom burger now!</p>
            </div>
            <Link to='/burger-builder'>GET STARTED NOW!</Link>
          </div>
          <div className="about__right">
            <BurgerPlate isTriggered={isTriggered} />
          </div>
        </div>
        <Arrow click={scrollToOffer} />
      </section>
    </div>
  );
}

export default About;