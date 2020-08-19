import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { useDispatch } from 'react-redux';

import BurgerSvg from '../shared/BurgerSvg';
import * as actions from '../../store/actions';

function PreLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('load', () => {
      gsap.to('.preloader .burger .item', .3, { stagger: .15, x: -200, autoAlpha: 0 })
      gsap.to('.preloader h2', 1, {
        y: -100, autoAlpha: 0, delay: 1.3, onComplete: () => {
          gsap.to('.preloader', 1, {
            autoAlpha: 0, onComplete: () => {
              dispatch(actions.loadEnd());
              setIsLoading(false);
              gsap.to('.toolbar', 1, { y: 0, delay: 2.2 })
            }
          })
        }
      })
    })
  }, [dispatch])

  return (
    isLoading && <div className='preloader'>
      <BurgerSvg preLoader noEvents />
      <h2>Loading...</h2>
    </div>
  )
}

export default PreLoader
