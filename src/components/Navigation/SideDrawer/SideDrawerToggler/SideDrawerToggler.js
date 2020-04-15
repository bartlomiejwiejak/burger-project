import React from 'react';
import './SideDrawerToggler.scss';
const SideDrawerToggler = (props) => {
  return (
    <div onClick={props.toggle} className='SideDrawerToggler'>
      <div className="Hamburger">
      </div>
    </div>
  );
}

export default SideDrawerToggler;