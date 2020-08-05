import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as BunTop } from '../assets/burger/bunTop.svg';
import { ReactComponent as BunBottom } from '../assets/burger/bunBottom.svg';
import { ReactComponent as Lettuce } from '../assets/burger/lettuce.svg';
import { ReactComponent as Meat } from '../assets/burger/meat.svg';
import { ReactComponent as Tomato } from '../assets/burger/tomato.svg';
import { ReactComponent as Gerkins } from '../assets/burger/gerkins.svg';
import { ReactComponent as Cheese } from '../assets/burger/cheese.svg';
import { ReactComponent as Bacon } from '../assets/burger/bacon.svg';

const burgerIngredient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case ('bun_bottom'):
      ingredient = <li className='Bun-bottom'><BunBottom /></li>
      break;
    case ('bun_top'):
      ingredient = <li className='Bun-top'><BunTop /></li>
      break;
    case ('meat'):
      ingredient = <li className='Meat burger-ing' style={{ zIndex: props.index }}><Meat /></li>
      break;
    case ('cheese'):
      ingredient = <li className='Cheese burger-ing' style={{ zIndex: props.index }}><Cheese /></li>
      break;
    case ('lettuce'):
      ingredient = <li className='Lettuce burger-ing' style={{ zIndex: props.index }}><Lettuce /></li>
      break;
    case ('bacon'):
      ingredient = <li className='Bacon burger-ing' style={{ zIndex: props.index }}><Bacon /></li>
      break;
    case ('tomato'):
      ingredient = <li className='Tomato burger-ing' style={{ zIndex: props.index }}><Tomato /></li>
      break;
    case ('gerkins'):
      ingredient = <li className='Gerkins burger-ing' style={{ zIndex: props.index }}><Gerkins /></li>
      break;
    default:
      ingredient = null;
  }
  return ingredient;

}
burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}
export default burgerIngredient;