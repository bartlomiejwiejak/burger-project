import React, { useEffect } from 'react';
import gsap from 'gsap';

import burger from '../../../../assets/images/burger.png';
import plate from '../../../../assets/images/plate.png';

const BurgerPlate = ({ isTriggered }) => {

  const setPosition = (event) => {
    gsap.to('.burger-plate', 1, { x: `${(event.clientX - window.innerWidth / 2) * .15}`, y: `${(event.clientY - window.innerHeight / 2) * .25}` })
  }

  useEffect(() => {
    let mounted = true;
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })
    if (isTriggered) {
      tl.fromTo('.burger-plate--burger', .3, { y: '-80%', autoAlpha: 0 }, { autoAlpha: 1 })
        .to('.burger-plate--burger', 1, {
          y: '35%', onComplete: () => {
            if (mounted) {
              window.addEventListener('mousemove', setPosition)
            }
          }
        })
    }
    return () => {
      tl.kill();
      mounted = false;
      window.removeEventListener('mousemove', setPosition)
    }
  }, [isTriggered])
  return (
    <div className="burger-plate">
      <img className='burger-plate__item burger-plate--burger' src={burger} alt="Delicious burger" />
      <img className='burger-plate__item burger-plate--plate' src={plate} alt="Plate" />
    </div>
  )
}

export default BurgerPlate;