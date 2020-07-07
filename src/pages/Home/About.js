import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Link from '../../components/UL/Link/Link';
import BurgerPlate from '../../components/BurgerPlate/BurgerPlate';
import './about.scss';
import Arrow from './Arrow';

const About = () => {
  const [isTriggered, setIsTriggered] = useState(false);
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    if (!isTriggered) {
      gsap.set('.about', { transform: 'translate(-100%, 100%)', autoAlpha: 0 })
      gsap.to('.about', { duration: 1, ease: 'Power2.easeOut', scrollTrigger: { trigger: '.about', start: '-80% center' }, x: 0, y: 0, autoAlpha: 1, onComplete: () => setIsTriggered(true) })
    }
    else {
      const tl = gsap.timeline({ defaults: { ease: 'Power1.easeOut' } })
      let delay = '+=2.5';
      const style = getComputedStyle(document.querySelector('.about__right'));
      const display = style.display;
      if (display === 'none') {
        delay = '+=0';
      }

      tl.fromTo('.about .heading-secondary', { y: '100%' }, { y: 0, autoAlpha: 1, duration: .5 }, delay)
        .fromTo(['.about__paragraph'], { y: 30 }, { stagger: .1, ease: 'back.out(1.7)', autoAlpha: 1, y: 0 })
        .fromTo('.about .link', { scale: 1.1, y: 30 }, { y: 0, scale: 1, autoAlpha: 1, duration: .3 }, '-=.5')
        .fromTo('.about-scroll .arrow', { y: '-100%' }, { duration: .3, autoAlpha: 1, y: 0 })
        .fromTo('.about-scroll .arrow-text', { visibility: 'hidden', duration: .2 }, { autoAlpha: 1 })
    }
  }, [isTriggered])
  const scrollToOffer = () => {
    document.querySelector('.offer-scroll').scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <div className="about-scroll">
      <section className="about">
        <h2 className="heading-secondary">YOU ARE GOING TO FALL IN LOVE WITH BURGER APP</h2>
        <div className="about__container">
          <div className="about__left">
            <div className="about__paragraph">
              <h3 className="heading-tertiary">Who we are</h3>
              <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil excepturi delectus non commodi deserunt perspiciatis nemo amet, veniam perferendis quod, adipisci doloremque maiores? Iusto aliquam aspernatur facilis atque culpa?</p>
            </div>
            <div className="about__paragraph">
              <h3 className="heading-tertiary">What we offer</h3>
              <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolores recusandae libero mollitia beatae cupiditate esse laudantium delectus quam, sapiente distinctio, obcaecati, praesentium voluptatum doloremque repudiandae nisi cumque excepturi alias?</p>
            </div>
            <Link to='/auth'>GET STARTED NOW!</Link>
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