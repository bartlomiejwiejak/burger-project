import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggler from '../SideDrawer/SideDrawerToggler/SideDrawerToggler';
const Toolbar = (props) => {
  return (
    <header className='Toolbar'>
      <SideDrawerToggler toggle={props.sideDrawerHandle} />
      <Logo height='80%' />
      <nav className='DesktopOnly'>
        <NavigationItems isAuth={props.isAuth} />
      </nav>
    </header>
  );
}

export default Toolbar;