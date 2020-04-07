import React from 'react';
import './BuildControl.css';
const buildControl = (props) => {
  return (
    <div className='BuildControl'>
      <div className='Label'>{props.label}</div>
      <button onClick={() => props.remove(props.type)} disabled={props.disabled} className='Less'>Less</button>
      <button onClick={() => props.add(props.type)} className='More'>More</button>
    </div>
  );
}

export default buildControl;