import React from 'react';
import './sideDrawerToggler.scss';
const SideDrawerToggler = (props) => {
  return (
    <div onClick={props.toggle} className='sideDrawerToggler'>
      <div className="hamburger">
      </div>
    </div>
  );
}

export default SideDrawerToggler;