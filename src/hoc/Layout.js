import React, { useState, useEffect } from 'react';
import Toolbar from '../components/Toolbar';
import SideDrawer from '../components/SideDrawer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../store/actions';
import gsap from 'gsap';

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
            gsap.to('.alert', { x: '100%', autoAlpha: 0, duration: .5, ease: 'Power2.easeOut', onComplete: () => onAlertHide() })
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
      <footer style={location.pathname === '/checkout' || location.pathname === '/checkout/contact-data' || location.pathname === '/orders' ? { position: 'fixed', bottom: 0, left: 0, width: '100vw', zIndex: '9999999' } : {}} className='footer'>
        <p className='footer__text'>© Made by <span><a href='https://github.com/Kuzniak98' target="_blank" rel="noopener noreferrer">WieJak</a></span>. 2020</p>
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
