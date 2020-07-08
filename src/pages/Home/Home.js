import React, { useEffect } from 'react';
import './home.scss';
import About from './About'
import Welcome from './Welcome';
import Offer from './Offer';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Stories from './Stories';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { withRouter } from 'react-router-dom';

const Home = ({ leaving, onRedirectEnd, history, path, location }) => {
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
  useEffect(() => {
    if (leaving && path !== location.pathname) {
      console.log('wychodzimy')
      const tl = gsap.timeline({ defaults: { ease: 'Power2.easeOut' } })
      tl.to('.home .welcome, .home .arrow-container, .about *, .offer, .stories *', { duration: 1, autoAlpha: 0 })
        .to('.home', { x: '-100%', duration: 1, onComplete: () => { onRedirectEnd(); history.push(path) } })
    }
  }, [leaving, onRedirectEnd, history, path, location])
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

const mapDispatchToProps = dispatch => {
  return {
    onRedirectEnd: () => dispatch(actions.redirectEnd())
  }
}

const mapStateToProps = state => {
  return {
    leaving: state.redirect.leaving,
    path: state.redirect.path
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));