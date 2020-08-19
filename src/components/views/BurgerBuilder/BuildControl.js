import React from 'react';

import { ReactComponent as Lettuce } from '../../../assets/burger/lettuce.svg';
import { ReactComponent as Tomato } from '../../../assets/burger/tomato.svg';
import { ReactComponent as Meat } from '../../../assets/burger/meat.svg';
import { ReactComponent as Bacon } from '../../../assets/burger/bacon.svg';
import { ReactComponent as Gerkins } from '../../../assets/burger/gerkins.svg';
import { ReactComponent as Cheese } from '../../../assets/burger/cheese.svg';

const BuildControl = (props) => {
  let svg = null;
  switch (props.type) {
    case 'meat':
      svg = <div className="ingredient ingredient-meat"><Meat /><div className="ingredient-name">Meat</div></div>
      break;
    case 'lettuce':
      svg = <div className="ingredient ingredient-lettuce"><Lettuce /><div className="ingredient-name">Lettuce</div></div>
      break;
    case 'tomato':
      svg = <div className="ingredient ingredient-tomato"><Tomato /><div className="ingredient-name">Tomato</div></div>
      break;
    case 'bacon':
      svg = <div className="ingredient ingredient-bacon"><Bacon /><div className="ingredient-name">Bacon</div></div>
      break;
    case 'gerkins':
      svg = <div className="ingredient ingredient-gerkins"><Gerkins /><div className="ingredient-name">Gerkins</div></div>
      break;
    case 'cheese':
      svg = <div className="ingredient ingredient-cheese"><Cheese /><div className="ingredient-name">Cheese</div></div>
      break;
    default:
      svg = null;
  }

  return (
    <div className='build-control'>
      <button onClick={() => props.remove(props.type)} disabled={props.disabled} className='build-control-btn'>-1</button>
      {svg}
      <button onClick={() => props.add(props.type)} className='build-control-btn'>+1</button>
    </div>
  );
}

export default BuildControl;