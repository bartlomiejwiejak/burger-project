import React, { useRef } from 'react';
import gsap from 'gsap';

const Arrow = ({ click }) => {
  const arrowRef = useRef(null);
  const hoverArrow = () => {
    gsap.to(arrowRef.current, { y: 10, scale: 0.9, duration: .2, textShadow: 'none' })
  }
  const leaveArrow = () => {
    gsap.to(arrowRef.current, { y: 0, scale: 1, duration: .2, textShadow: '0 1rem 1.5rem rgba(0, 0, 0, .2)' })
  }
  return (
    <div className="arrow-container">
      <p className='arrow-text'>Scroll</p>
      <i ref={arrowRef} onMouseEnter={hoverArrow} onMouseLeave={leaveArrow} onClick={click} className="fa arrow fa-arrow-down" aria-hidden="true"></i>
    </div>
  );
}

export default Arrow;