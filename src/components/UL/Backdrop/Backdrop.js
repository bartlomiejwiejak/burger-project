import React from 'react';
import './backdrop.scss';

const Backdrop = (props) => {
  return (
    <div ref={props.reference} onClick={props.isAnimating ? null : props.cancel} className={`backdrop ${props.isMobile ? 'isMobile' : ''}`}></div>
  );
}

export default Backdrop;