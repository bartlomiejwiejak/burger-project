import React, { useRef } from 'react';
import './button.scss';
import gsap from 'gsap';

const Button = (props) => {
  const btnRef = useRef(null)

  const onMouseEnter = () => {
    gsap.to(btnRef.current, { y: -3, textShadow: '0 1rem 2rem rgba(0,0,0, 0.5)', duration: .1 })
  }
  const onMouseLeave = () => {
    gsap.to(btnRef.current, { y: 0, textShadow: 'none', duration: .1 })
  }
  return (
    <button ref={btnRef} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} disabled={props.disabled} onClick={props.click} className={['button', props.btnType].join(' ')}>{props.children}</button>
  );
}

export default Button;