import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const NavigationItems = () => {
  return (
    <ul className='NavigationItems'>
      <NavigationItem link='/' exact>Burger builder</NavigationItem>
      <NavigationItem link='/orders'>Orders</NavigationItem>
    </ul>
  );
}

export default NavigationItems;