import React, { useEffect } from 'react';
import './home.scss';
import About from './About'
import Welcome from './Welcome';
import Offer from './Offer';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Stories from './Stories';

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo('.home', { y: 0 }, {
      scrollTrigger: {
        trigger: '.home',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
      }, y: -200
    })
  }, [])

  return (
    <div className="wrapper">
      <div className="home">
        <Welcome />
        <About />
        <Offer />
        <Stories />
      </div>
    </div>
  )
}

export default Home;