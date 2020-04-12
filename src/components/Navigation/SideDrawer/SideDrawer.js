import React from 'react';
import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
const SideDrawer = (props) => {
  return (
    <div className='SideDrawer'>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
}

export default SideDrawer;