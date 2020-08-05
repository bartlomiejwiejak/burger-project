import React, { useEffect } from 'react';
import bgVideo from '../assets/bg-video.mp4';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import sandra from '../assets/images/sandra.jpg';
import paulina from '../assets/images/paulina.jpg';
import oskar from '../assets/images/oskar.jpg';
import Story from '../components/Story';

const Stories = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.stories__line--1', { x: '20%' }, {
      scrollTrigger: {
        trigger: '.stories__lines-box',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      }, x: '-70%'
    })
    gsap.fromTo('.stories__line--2', { x: '-80%' }, {
      scrollTrigger: {
        trigger: '.stories__lines-box',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      }, x: '20%'
    })
    gsap.fromTo('.stories__line--3', { x: '20%' }, {
      scrollTrigger: {
        trigger: '.stories__lines-box',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      }, x: '-100%'
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.stories__wrapper',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    tl.fromTo('.story:nth-child(1)', { x: '-150%' }, { x: 0 })
      .fromTo('.story:nth-child(2)', { x: '150%' }, { x: 0 })
      .fromTo('.story:nth-child(3)', { x: '-150%' }, { x: 0 })
  }, [])

  return (
    <section className="stories">
      <div className="bg-video">
        <video src={bgVideo} autoPlay muted loop className="bg-video__content"></video>
      </div>
      <div className="stories__lines-box">
        <div className="stories__line stories__line--1">121 LOCALS IN COUNTRY - 121 LOCALS IN COUNTRY</div>
        <div className="stories__line stories__line--2">HIGHEST SERVICE QUALITY - HIGHEST SERVICE QUALITY</div>
        <div className="stories__line stories__line--3">THOUSANDS HAPPY CUSTOMERS - THOUSANDS HAPPY CUSTOMERS</div>
      </div>
      <div className="stories__wrapper">
        <Story img={sandra} name='Sandra Thielmann' heading='BEST BURGER IN MY LIFE' description="I really like an idea of creating my own burger since it really me decide what's inside. I am really suprised that I can get highest quality ingredients with such a price. I am going to order more, definitely. 10/10" />
        <Story img={oskar} name='Oskar Thielman' heading='SUPER FAST DELIVERY' description="I was very suprised it can be delivered so fast! After around 20 minutes, my custom burger was already at my door, warm and ready to be eaten. I couldn't think of better delivery handling than this. If you are too lazy too cook, there is no faster way to get delicious meal in your house." />
        <Story img={paulina} name='Paulina Pogorzelska' heading='HIGHEST QUALITY MEAT I HAVE EVER TASTED' description="Tasty ingredients, well spiced. But what note me most, is absolutely delicious meat. Really, I have never had something that juicy and true to taste in my mouth. I am really happy I've discovered Burger Builder App. Never supposed it could be so easy, fast and most important - unquestionably mouth-watering." />
      </div>
    </section>
  );
}

export default Stories;
