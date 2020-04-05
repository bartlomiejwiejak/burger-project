import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = () => {
  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top' />
      <BurgerIngredient type='meat' />
      <BurgerIngredient type='cheeese' />
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
}

export default burger;