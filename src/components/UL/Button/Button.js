import React from 'react';
import './button.scss';

const Button = (props) => {
  return (
    <button disabled={props.disabled} onClick={props.click} className={['button', props.btnType].join(' ')}>{props.children}</button>
  );
}

export default Button;