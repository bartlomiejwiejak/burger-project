import React from 'react';
import './input.scss';
const Input = (props) => {
  let inputElement = null;
  let classes = ['InputElement'];
  let validationError = null;

  if (!props.isValid && props.touched) {
    classes.push('Invalid');
    validationError = <p className='ValidationError'>Please enter a valid {props.name} .</p>
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
    <div className='input'>
      <label className='Label'>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
}

export default Input;