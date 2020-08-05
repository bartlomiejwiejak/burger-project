import React, { useEffect } from 'react';
import About from './About'
import Welcome from '../layout/Welcome';
import Offer from '../components/Offer';
import gsap from 'gsap';
import Stories from '../layout/Stories';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { withRouter } from 'react-router-dom';

const Home = ({ leaving, onRedirectEnd, history, path, location }) => {

  useEffect(() => {
    if (leaving && path !== location.pathname) {
      gsap.to('.home', { ease: 'power2.out', scale: .95, autoAlpha: 0, duration: 1, onComplete: () => { onRedirectEnd(); history.push(path) } })
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