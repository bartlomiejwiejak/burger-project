import React, { useEffect } from 'react';
import bgVideo from '../../Assets/bg-video.mp4';
import './stories.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import sandra from '../../Assets/Images/sandra.jpg';
import paulina from '../../Assets/Images/paulina.jpg';
import oskar from '../../Assets/Images/oskar.jpg';
import Story from './Story';

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
        <Story img={sandra} name='Sandra Thielmann' heading='BEST BURGER IN MY LIFE' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a magni corporis dolores non repudiandae laborum in porro voluptates consequuntur accusantium blanditiis optio repellat veniam ab, et culpa praesentium rerum.' />
        <Story img={oskar} name='Oskar Thielman' heading='SUPER FAST DELIVERY' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a magni corporis dolores non repudiandae laborum in porro voluptates consequuntur accusantium blanditiis optio repellat veniam ab, et culpa praesentium rerum.' />
        <Story img={paulina} name='Paulina Pogorzelska' heading='HIGHEST QUALITY MEAT I HAVE EVER TASTED' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a magni corporis dolores non repudiandae laborum in porro voluptates consequuntur accusantium blanditiis optio repellat veniam ab, et culpa praesentium rerum.' />
      </div>
    </section>
  );
}

export default Stories;
