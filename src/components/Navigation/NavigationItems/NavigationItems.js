import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Link from '../../UL/Link/Link';
import { withRouter } from 'react-router-dom';
const NavigationItems = (props) => {
  return (
    <ul className='NavigationItems'>
      <NavigationItem click={props.sideHandle} link='/' exact>Burger builder</NavigationItem>
      {props.isAuth ? <NavigationItem click={props.sideHandle} link='/orders'>Orders</NavigationItem> : null}
      {props.isAuth ? <NavigationItem click={props.sideHandle} link='/logout'>Logout</NavigationItem> : <NavigationItem click={props.sideHandle} link='/auth'>Authenticate</NavigationItem>}
    </ul>
  );
}

export default withRouter(NavigationItems);