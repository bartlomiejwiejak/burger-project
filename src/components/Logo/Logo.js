import React from 'react';
import './Logo.css';
import logo from '../../Assets/Images/logoBurger.png';
const Logo = () => {
  return (
    <div className='Logo'>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;