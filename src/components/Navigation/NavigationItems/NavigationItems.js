import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const NavigationItems = () => {
  return (
    <ul className='NavigationItems'>
      <NavigationItem link='/' active>Burger builder</NavigationItem>
      <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
  );
}

export default NavigationItems;