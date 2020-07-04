import React, { useState, useEffect } from 'react';
import './toolbar.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggler from '../SideDrawer/SideDrawerToggler/SideDrawerToggler';
import BurgerSvg from '../../BurgerSvg/BurgerSvg';

const Toolbar = (props) => {

  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        setIsSolid(true)
      }
      else {
        setIsSolid(false)
      }
    })
  }, [])

  return (
    <header className={`toolbar ${isSolid ? 'toolbar--solid' : ''}`}>
      <SideDrawerToggler toggle={props.sideDrawerHandle} />
      <BurgerSvg classes={['burger--logo']} />
      <nav className='DesktopOnly'>
        <NavigationItems isAuth={props.isAuth} />
      </nav>
    </header>
  );
}

export default Toolbar;