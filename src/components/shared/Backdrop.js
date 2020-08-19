import React from 'react';

const Backdrop = (props) => {
  return (
    <div ref={props.reference} onClick={props.isAnimating ? null : props.cancel} className={`backdrop ${props.isMobile ? 'isMobile' : ''}`}></div>
  );
}

export default Backdrop;