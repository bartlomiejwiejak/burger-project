import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {
  return (
    props.show ? <div onClick={props.cancel} className={`Backdrop ${props.isMobile ? 'isMobile' : ''}`}></div> : null
  );
}

export default Backdrop;