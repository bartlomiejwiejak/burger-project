import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import NavigationItems from './NavigationItems';
import SideDrawerToggler from '../SideDrawer/Toggler';
import BurgerSvg from '../../shared/BurgerSvg';

const Toolbar = ({ sideDrawerHandle, isAuth, location }) => {

  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY <= 500) {
        setIsSolid(false)
      }
      else if (location.pathname === '/checkout' || location.pathname === '/checkout/contact-data') {
      }
      else {
        setIsSolid(true);
      }
    }
    window.addEventListener('scroll', checkScroll)
    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [location.pathname])

  return (
    <header className={`toolbar ${isSolid ? 'toolbar--solid' : ''}`}>
      <SideDrawerToggler toggle={sideDrawerHandle} />
      <BurgerSvg toolbar={true} classes={['burger--logo']} />
      <nav className='DesktopOnly'>
        <NavigationItems isAuth={isAuth} />
      </nav>
    </header>
  );
}

export default withRouter(Toolbar);