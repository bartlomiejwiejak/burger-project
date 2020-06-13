import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const NavigationItems = (props) => {
  return (
    <ul className='NavigationItems'>
      <NavigationItem link='/' exact>Burger builder</NavigationItem>
      <NavigationItem link='/orders'>Orders</NavigationItem>
      {props.isAuth ? <NavigationItem link='/logout'>Logout</NavigationItem> : <NavigationItem link='/auth'>Authenticate</NavigationItem>}
    </ul>
  );
}

export default NavigationItems;