import React from 'react';
import './navigationItems.scss';
import Link from '../../UL/Link/Link';
import { withRouter } from 'react-router-dom';
const NavigationItems = (props) => {
  return (
    <ul ref={props.reference} className='navigation-items'>
      <Link animationTime={300} activeClass='true' isAnimating={props.isAnimating} sideDrawerHandle={props.sideDrawerHandle} to='/' exact>HOME</Link>
      <Link animationTime={300} activeClass='true' isAnimating={props.isAnimating} sideDrawerHandle={props.sideDrawerHandle} to='/burger-builder' exact>BUILD</Link>
      {props.isAuth ? <Link animationTime={300} activeClass='true' isAnimating={props.isAnimating} sideDrawerHandle={props.sideDrawerHandle} to='/orders'>ORDERS</Link> : null}
      {props.isAuth ? <Link animationTime={300} activeClass='true' isAnimating={props.isAnimating} sideDrawerHandle={props.sideDrawerHandle} to='/logout'>LOGOUT</Link> : <Link animationTime={300} activeClass='true' isAnimating={props.isAnimating} sideDrawerHandle={props.sideDrawerHandle} to='/auth'>SIGN IN/UP</Link>}
    </ul>
  );
}

export default withRouter(NavigationItems);