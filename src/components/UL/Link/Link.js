import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import './link.scss';

const Link = ({ to, history, children, leaving, onRedirectStart, activeClass, classNames }) => {
  let classes = ['link']
  if (classNames) {
    classes = [...classes, ...classNames];
  }
  useEffect(() => {
    if (activeClass && history.location.pathname === to) {
      classes.push('link--active');
    }
  }, [activeClass, history.location.pathname, to, classes])
  const linkTo = () => {
    if (leaving || history.location.pathname === to) {
      return;
    }
    onRedirectStart(to)
  }
  return <button className={classes.join(' ')} onClick={linkTo}>{children}</button>
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