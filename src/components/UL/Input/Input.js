import React from 'react';
import './Input.css';
const Input = (props) => {
  let inputElement = null;
  let classes = ['InputElement'];
  if (!props.isValid && props.touched) {
    classes.push('Invalid');
  }
  classes = classes.join(' ');
  switch (props.elementType) {
    case ('input'):
      inputElement = <input onChange={props.onChange} className={classes} {...props.elementConfig} value={props.value} />
      break;
    case ('textarea'):
      inputElement = <textarea onChange={props.onChange} className={classes} {...props.elementConfig} value={props.value} />
      break;
    case ('select'):
      inputElement = <select onChange={props.onChange} className={classes} value={props.value} >
        {props.elementConfig.options.map(option => <option key={option.value} value={option.value}>{option.displayValue}</option>)}
      </select>
      break;
    default:
      inputElement = <input onChange={props.onChange} className={classes} {...props.elementConfig} value={props.value} />
  }
  return (
    <div className='Input'>
      <label className='Label'>{props.label}</label>
      {inputElement}
    </div>
  );
}

export default Input;