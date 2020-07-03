import React from 'react';
import './logo.scss';
import { ReactComponent as LogoSvg } from '../../Assets/Images/burger.svg';
import Link from '../UL/Link/Link';
const Logo = (props) => {
  return (
    <div className='Logo'>
      <Link wrapp to='/'><LogoSvg /></Link>
    </div>
  );
}

export default Logo;