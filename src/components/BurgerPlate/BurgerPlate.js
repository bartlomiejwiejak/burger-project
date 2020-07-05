import React from 'react';
import burger from '../../Assets/Images/burger.png';
import plate from '../../Assets/Images/plate.png';
import './burgerPlate.scss';

const BurgerPlate = () => {
  return (
    <div className="burger-plate">
      <img className='burger-plate__item burger-plate--burger' src={burger} alt="Delicious burger" />
      <img className='burger-plate__item burger-plate--plate' src={plate} alt="Plate" />
    </div>
  )
}

export default BurgerPlate;