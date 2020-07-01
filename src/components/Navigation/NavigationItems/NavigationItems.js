import React from 'react';
import './NavigationItems.css';
import Link from '../../UL/Link/Link';
import { withRouter } from 'react-router-dom';
const NavigationItems = (props) => {
  return (
    <ul className='NavigationItems'>
      <Link click={props.sideHandle} link='/' exact>Home</Link>
      <Link click={props.sideHandle} link='/burger-builder' exact>Burger Builder</Link>
      {props.isAuth ? <Link click={props.sideHandle} link='/orders'>Orders</Link> : null}
      {props.isAuth ? <Link click={props.sideHandle} link='/logout'>Logout</Link> : <Link click={props.sideHandle} link='/auth'>Sign in/up</Link>}
    </ul>
  );
}

export default withRouter(NavigationItems);