import React from 'react';
import './Logo.css';
import logo from '../../Assets/Images/logoBurger.png';
const Logo = (props) => {
  return (
    <div className='Logo' style={{ height: props.height }}>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;