import React from 'react';
import { useSelector } from 'react-redux';

import BurgerIngredient from './BurgerIngredient';

const Burger = () => {
  let ingredientComponents = [];
  let index = 100;


  const ingredients = useSelector(state => state.burgerBuilder.ingredients);

  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      ingredientComponents.push(<BurgerIngredient index={index--} type={ingredient} key={ingredient + i} />);
    }
  }
  if (ingredientComponents.length === 0) {
    ingredientComponents = <p className='tooltip'>Please, add ingredients.</p>
  }

  return (
    <div className='burger-builder'>
      <ul className="burger-builder-burger">
        <BurgerIngredient type='bun_top' />
        {ingredientComponents}
        <BurgerIngredient type='bun_bottom' />
        <li className='burger-shadow'></li>
      </ul>
    </div>
  );
}


export default Burger;