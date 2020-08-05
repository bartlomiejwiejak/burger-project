import React, { useEffect, useState } from 'react';
import burger from '../assets/images/burger.png';
import plate from '../assets/images/plate.png';
import gsap from 'gsap';

const BurgerPlate = ({ isTriggered }) => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const setPosition = (event) => {
    setPositionX((event.clientX - window.innerWidth / 2) * .15)
    setPositionY((event.clientY - window.innerHeight / 2) * .25)
  }
  useEffect(() => {
    let mounted = true;
    const tl = gsap.timeline({ defaults: { ease: 'Power1.easeOut' } })
    if (isTriggered) {
      tl.fromTo('.burger-plate--burger', { transform: 'translate(0, -80%)', autoAlpha: 0 }, { autoAlpha: 1, duration: .5 })
        .to('.burger-plate--burger', {
          duration: 1.5, transform: 'translate(0, 35%)', onComplete: () => {
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
    <div className="burger-plate" style={{ transform: `translate(${-positionX}px,${-positionY}px` }}>
      <img className='burger-plate__item burger-plate--burger' src={burger} alt="Delicious burger" />
      <img className='burger-plate__item burger-plate--plate' src={plate} alt="Plate" />
    </div>
  )
}

export default BurgerPlate;