import React from 'react';
import './input.scss';
const Input = (props) => {
  let inputElement = null;
  let classes = ['inputElement'];
  let validationError = null;

  if (!props.isValid && props.touched) {
    classes.push('invalid');
    validationError = <p className='validationError'>Please enter a valid {props.name} .</p>
  }
  classes = classes.join(' ');
  switch (props.elementType) {
    case ('input'):
      inputElement = <input onBlur={props.onFocusOut} onFocus={props.onFocus} onChange={props.onChange} className={classes} {...props.elementConfig} value={props.value} />
      break;
    case ('textarea'):
      inputElement = <textarea onBlur={props.onFocusOut} onFocus={props.onFocus} onChange={props.onChange} className={classes} {...props.elementConfig} value={props.value} />
      break;
    case ('select'):
      inputElement = <select onBlur={props.onFocusOut} onFocus={props.onFocus} onChange={props.onChange} className={classes} value={props.value} >
        {props.elementConfig.options.map(option => <option key={option.value} value={option.value}>{option.displayValue}</option>)}
      </select>
      break;
    default:
      inputElement = <input onBlur={props.onFocusOut} onFocus={props.onFocus} onChange={props.onChange} className={classes} {...props.elementConfig} value={props.value} />
  }
  return (
    <div className='input'>
      <label className='label'>{props.elementType === 'select' ? props.elementConfig.name : props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
}

export default Input;