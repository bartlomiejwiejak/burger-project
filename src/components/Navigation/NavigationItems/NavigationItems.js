import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const NavigationItems = (props) => {
  return (
    <ul className='NavigationItems'>
      <NavigationItem link='/' exact>Burger builder</NavigationItem>
      {props.isAuth ? <NavigationItem link='/orders'>Orders</NavigationItem> : null}
      {props.isAuth ? <NavigationItem link='/logout'>Logout</NavigationItem> : <NavigationItem link='/auth'>Authenticate</NavigationItem>}
    </ul>
  );
}

export default NavigationItems;