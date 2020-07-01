import React from 'react';
import './sideDrawer.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UL/Backdrop/Backdrop';
import gif from '../../../Assets/Images/6lL.gif';
const SideDrawer = (props) => {
  let styles = ['SideDrawer'];
  props.show ? styles.push('Open') : styles.push('Close');
  styles = styles.join(' ');
  return (
    <Aux>
      <Backdrop isMobile show={props.show} cancel={props.sideDrawerHandle} />
      <div className={styles}>
        <div style={{ borderBottom: '1px solid white', borderTop: '1px solid white', width: '100%', textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.8rem', letterSpacing: '1px' }} className='heading-primary'>-LE BURGER BUILDER-</h1>
        </div>
        <nav>
          <NavigationItems sideHandle={props.sideDrawerHandle} isAuth={props.isAuth} />
        </nav>
        <img style={{ width: '90%' }} src={gif} alt='burger'></img>
      </div>
    </Aux>
  );
}

export default SideDrawer;