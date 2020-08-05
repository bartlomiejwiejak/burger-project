import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import gsap from 'gsap';

const Link = ({ to, history, children, leaving, onRedirectStart, activeClass, classNames, wrapp, sideDrawerHandle, isAnimating, animationTime, instant }) => {
  let classes = ['link animate']
  const linkRef = useRef(null);
  if (wrapp) {
    classes = ['wrapp']
  }
  if (classNames) {
    classes = [...classes, ...classNames];
  }
  if (activeClass && history.location.pathname === to) {
    classes.push('link--active');
  }
  const linkTo = () => {
    if (instant && sideDrawerHandle && isAnimating === false) {
      sideDrawerHandle();
      setTimeout(() => {
        history.replace(to);
      }, animationTime)
      return;
    }
    if (instant) {
      history.replace(to);
      return;
    }
    if (leaving || history.location.pathname === to) {
      return;
    }
    if (isAnimating === true) {
      return;
    }
    if (sideDrawerHandle && isAnimating === false) {
      sideDrawerHandle();
      setTimeout(() => {
        onRedirectStart(to)
      }, animationTime)
      return;
    }
    onRedirectStart(to);
  }
  const onMouseEnter = () => {
    gsap.to(linkRef.current, { y: -3, boxShadow: '0 1rem 2rem rgba(0,0,0, 0.2)', duration: .1 })
  }
  const onMouseLeave = () => {
    gsap.to(linkRef.current, { y: 0, boxShadow: 'none', duration: .1 })
  }
  return <div ref={linkRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={classes.join(' ')} onClick={linkTo}>{children}</div>
}
const mapStateToProps = state => {
  return {
    leaving: state.redirect.leaving
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onRedirectStart: (to) => dispatch(actions.redirectStart(to))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Link));