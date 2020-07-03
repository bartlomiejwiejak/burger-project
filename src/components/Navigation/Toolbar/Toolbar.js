import React from 'react';
import './toolbar.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggler from '../SideDrawer/SideDrawerToggler/SideDrawerToggler';
import BurgerSvg from '../../BurgerSvg/BurgerSvg';

const Toolbar = (props) => {
  return (
    <header className='Toolbar'>
      <SideDrawerToggler toggle={props.sideDrawerHandle} />
      <BurgerSvg classes={['burger--logo']} />
      <nav className='DesktopOnly'>
        <NavigationItems isAuth={props.isAuth} />
      </nav>
    </header>
  );
}

export default Toolbar;