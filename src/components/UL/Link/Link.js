import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Link = ({ to, history, children, leaving, onRedirectStart, activeClass, classes }) => {
  let style = []
  style = [...style, classes];
  useEffect(() => {
    if (activeClass && history.location.pathname === to) {
      style.push('link--active');
    }
  }, [activeClass, history.location.pathname, to, style])
  const linkTo = () => {
    if (leaving || history.location.pathname === to) {
      return;
    }
    onRedirectStart(to)
  }
  return <button className={style.join(' ')} onClick={linkTo}>{children}</button>
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