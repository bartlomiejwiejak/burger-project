import React from 'react';
const SideDrawerToggler = (props) => {
  return (
    <div onClick={props.toggle} className='sideDrawerToggler'>
      <div className="hamburger">
      </div>
    </div>
  );
}

export default SideDrawerToggler;