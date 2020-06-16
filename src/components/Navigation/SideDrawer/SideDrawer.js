import React from 'react';
import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UL/Backdrop/Backdrop';
const SideDrawer = (props) => {
  let styles = ['SideDrawer'];
  props.show ? styles.push('Open') : styles.push('Close');
  styles = styles.join(' ');
  return (
    <Aux>
      <Backdrop show={props.show} cancel={props.SideDrawerHandle} />
      <div className={styles}>
        <Logo height='11%' mb='32px' />
        <nav>
          <NavigationItems sideHandle={props.SideDrawerHandle} isAuth={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
}

export default SideDrawer;