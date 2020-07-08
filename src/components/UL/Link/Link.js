import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import './link.scss';

const Link = ({ to, history, children, leaving, onRedirectStart, activeClass, classNames, wrapp, sideDrawerHandle, isAnimating, animationTime }) => {
  let classes = ['link animate']
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
  return <div className={classes.join(' ')} onClick={linkTo}>{children}</div>
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