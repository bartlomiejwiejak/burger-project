import React from 'react';
import './navigationItems.css';
import Link from '../../UL/Link/Link';
import { withRouter } from 'react-router-dom';
const NavigationItems = (props) => {
  return (
    <ul ref={props.reference} className='navigationItems'>
      <Link isAnimating={props.isAnimating} sideDrawerHandle={props.sideDrawerHandle} to='/' exact>HOME</Link>
      <Link isAnimating={props.isAnimating} sideDrawerHandle={props.sideDrawerHandle} to='/burger-builder' exact>BUILD</Link>
      {props.isAuth ? <Link isAnimating={props.isAnimating} sideDrawerHandle={props.sideDrawerHandle} to='/orders'>ORDERS</Link> : null}
      {props.isAuth ? <Link isAnimating={props.isAnimating} sideDrawerHandle={props.sideDrawerHandle} to='/logout'>LOGOUT</Link> : <Link isAnimating={props.isAnimating} sideDrawerHandle={props.sideDrawerHandle} to='/auth'>SIGN IN/UP</Link>}
    </ul>
  );
}

export default withRouter(NavigationItems);