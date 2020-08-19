import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import BurgerSvg from '../../shared/BurgerSvg';
import BurgerBuilder from './BurgerBuilder';
import * as actions from '../../../store/actions';

const BurgerBuilderStart = ({ history }) => {

  const [fillPercent, setFillPercent] = useState(0);
  const [inter, setInter] = useState(null);
  const [success, setSuccess] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const isLoaded = useSelector(state => state.redirect.isLoaded)

  const fillBar = () => {
    clearInterval(inter);
    gsap.set('.progress-bar', { visibility: 'visible' })
    setInter(setInterval(() => {
      setFillPercent(prevPercent => prevPercent + 1)
    }, 10))
  }
  useEffect(() => {
    if (fillPercent >= 100) {
      clearInterval(inter)
    }
    if (fillPercent < 0) {
      setFillPercent(0)
      clearInterval(inter)
      setInter(null)
    }
  }, [fillPercent, setInter, inter])
  const checkFillBarState = () => {
    clearInterval(inter)
    if (fillPercent < 100) {
      setInter(setInterval(() => {
        setFillPercent(prevPercent => prevPercent - 1.5)
      }, 10))
    }
    else {
      setSuccess(true);
    }
  }
  const message = () => {
    if (fillPercent >= 100) {
      return 'Explode!'
    } else if (fillPercent < 2) {
      return 'Click me!'
    }
    else {
      return 'Hold!'
    }
  }
  useEffect(() => {
    if (success) {
      gsap.to('.progress-bar', { autoAlpha: 0, duration: .2 })
      gsap.to('.heading-build', { autoAlpha: 0, duration: .2 })
      gsap.set('.burger-builder-animation .burger', { cursor: 'default' })
      gsap.set('.burger-builder-animation .burger .item', { cursor: 'pointer' })
    }
  }, [success])

  useEffect(() => {
    if (!isLoaded) return;
    document.querySelector('html').style.setProperty('overflow-x', 'hidden');
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.fromTo('.burger-builder-animation .burger .item', { x: '-500', autoAlpha: 0 }, { x: 0, autoAlpha: 1, stagger: .1, duration: '.5' })
    tl.fromTo('.heading-build', { scale: 15, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: .3 })
  }, [isLoaded])
  let content = (
    <>
      <h1 className='heading-build'>
        {message()}
      </h1>
      <div className="burger-container">
        <div onMouseUp={checkFillBarState} onMouseDown={fillBar} onTouchStart={fillBar} onTouchEnd={checkFillBarState} onTouchCancel={checkFillBarState} onMouseLeave={checkFillBarState} className="trigger">
          <BurgerSvg complete={setAnimationComplete} success={success} fill={fillPercent} />
        </div>
      </div>
      <div className="progress-bar">
        <div style={{ width: `${fillPercent}%` }} className="fill"></div>
      </div>
    </>
  )
  if (animationComplete) {
    content = <BurgerBuilder />
  }
  const dispatch = useDispatch();
  const leaving = useSelector(state => state.redirect.leaving);
  const path = useSelector(state => state.redirect.path)

  useEffect(() => {
    const onInitIngredients = () => dispatch(actions.initIngredients());
    onInitIngredients();
  }, [dispatch])

  useEffect(() => {
    const onRedirectEnd = () => dispatch(actions.redirectEnd());
    const redirect = () => {
      onRedirectEnd();
      history.push(path)
    }
    if (leaving) {
      gsap.to('.burger-builder-animation', { autoAlpha: 0, scale: .95, duration: 1, ease: 'power2.out', onComplete: redirect })
    }
  }, [leaving, history, path, dispatch])
  return (
    <div className="burger-builder-animation">
      {content}
    </div>
  );
}

export default withRouter(BurgerBuilderStart);