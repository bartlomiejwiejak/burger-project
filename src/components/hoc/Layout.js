import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import gsap from 'gsap';

import Toolbar from '../layout/Toolbar';
import SideDrawer from '../layout/SideDrawer';
import * as actions from '../../store/actions';

const Layout = ({ isAuth, children, location, alertShow, alertMessage, onAlertHide }) => {
  const [sideDrawerShown, setSideDrawerShown] = useState(false);

  const sideDrawerHandler = () => {
    setSideDrawerShown((prevState) => !prevState)
  }
  useEffect(() => {
    if (alertShow) {
      gsap.fromTo('.alert', { x: '100%', autoAlpha: 0 }, {
        x: 0, autoAlpha: 1, duration: .5, ease: 'back.out(1.7)', onComplete: () => {
          setTimeout(() => {
            gsap.to('.alert', { x: '100%', autoAlpha: 0, duration: .5, ease: 'power2.out', onComplete: () => onAlertHide() })
          }, 5000)
        }
      })
    }
  }, [alertShow, onAlertHide])
  return (
    <>
      {alertShow ? <div className="alert">{alertMessage}</div> : null}
      <Toolbar isAuth={isAuth} sideDrawerHandle={sideDrawerHandler} />
      <SideDrawer isAuth={isAuth} show={sideDrawerShown} sideDrawerHandle={sideDrawerHandler} />
      <main>
        {children}
      </main>
      <footer style={(location.pathname === '/checkout' || location.pathname === '/checkout/contact-data' || location.pathname === '/orders' || location.pathname === '/burger-builder' || location.pathname === '/auth') ? { position: 'fixed', bottom: 0, left: 0, width: '100vw', zIndex: '9999' } : {}} className='footer'>
        <p className='footer__text'>© Made by <span><a href='https://github.com/bartlomiejwiejak' target="_blank" rel="noopener noreferrer">Bartłomiej Wiejak</a></span>. 2020</p>
      </footer>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null,
    alertShow: state.alert.show,
    alertMessage: state.alert.message
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAlertHide: () => dispatch(actions.alertHide())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
