import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {
  return (
    <div ref={props.reference} onClick={props.isAnimating ? null : props.cancel} className={`Backdrop ${props.isMobile ? 'isMobile' : ''}`}></div>
  );
}

export default Backdrop;