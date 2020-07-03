import React from 'react';
import './NavigationItems.css';
import Link from '../../UL/Link/Link';
import { withRouter } from 'react-router-dom';
const NavigationItems = (props) => {
  return (
    <ul ref={props.reference} className='NavigationItems'>
      <Link isAnimating={props.isAnimating} sideDrawerHandle={props.sideDrawerHandle} to='/' exact>Home</Link>
      <Link isAnimating={props.isAnimating} sideDrawerHandle={props.sideDrawerHandle} to='/burger-builder' exact>Burger Builder</Link>
      {props.isAuth ? <Link isAnimating={props.isAnimating} sideDrawerHandle={props.sideDrawerHandle} to='/orders'>Orders</Link> : null}
      {props.isAuth ? <Link isAnimating={props.isAnimating} sideDrawerHandle={props.sideDrawerHandle} to='/logout'>Logout</Link> : <Link isAnimating={props.isAnimating} sideDrawerHandle={props.sideDrawerHandle} to='/auth'>Sign in/up</Link>}
    </ul>
  );
}

export default withRouter(NavigationItems);