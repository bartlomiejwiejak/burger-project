import React from 'react';
import './burgerBuilder.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let ingredientComponents = [];
  let index = 100;
  for (const ingredient in props.ingredients) {
    for (let i = 0; i < props.ingredients[ingredient]; i++) {
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
      </ul>
    </div>
  );
}


export default Burger;