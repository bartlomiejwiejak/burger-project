import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
  let ingredientComponents = [];
  for (const ingredient in props.ingredients) {
    for (let i = 0; i < props.ingredients[ingredient]; i++) {
      ingredientComponents.push(<BurgerIngredient type={ingredient} key={ingredient + i} />);
    }
  }
  if (ingredientComponents.length === 0) {
    ingredientComponents = <p>Please, add ingredients.</p>
  }
  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top' />
      {ingredientComponents}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
}


export default burger;