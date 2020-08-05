import React, { useState, useEffect, useRef } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { updatedObject, checkValidity } from '../shared/utility';
import Loader from '../components/Loader';
import gsap from 'gsap';
import { withRouter } from 'react-router-dom';

const Auth = (props) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [controls, setControls] = useState({
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Email adress'
      },
      value: '',
      validation: {
        required: true,
        valid: false,
        touched: false,
        isEmail: true
      }
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Password'
      },
      value: '',
      validation: {
        required: true,
        valid: false,
        touched: false,
        minLength: 6
      }
    }
  })
  const [isFormValid, setIsFormValid] = useState(false);
  const container = useRef(null);
  const [triedAuth, setTriedAuth] = useState(false)

  const { leaving, history, path, onRedirectEnd } = props;

  const onFocus = () => {
    const auth__container = container.current;
    gsap.to(auth__container, { duration: .3, backgroundSize: '110%' })
  }
  const onFocusOut = () => {
    const auth__container = container.current;
    gsap.to(auth__container, { duration: .3, backgroundSize: '100%' })
  }

  const inputOnChangeHandler = (e, key) => {
    const updatedControl = updatedObject(controls[key], {
      value: e.target.value,
      validation: updatedObject(controls[key].validation, {
        touched: true,
        valid: checkValidity(e.target.value, controls[key].validation)
      })
    })
    const updatedControls = updatedObject(controls, {
      [key]: updatedControl
    })
    let isFormValid = true;
    for (let inputName in updatedControls) {
      if (!updatedControls[inputName].validation.valid) {
        isFormValid = false;
      }
    }
    setControls(updatedControls);
    setIsFormValid(isFormValid);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setTriedAuth(true);
    props.onAuth(controls.email.value, controls.password.value, isSignUp);
  }
  const switchAuthModeHandler = (e) => {
    e.preventDefault();
    setIsSignUp((prevIsSignUp => !prevIsSignUp))
  }
  const { isBurgerBuilding, redirectPath, onSetAuthRedirectPath } = props;
  useEffect(() => {
    if (!isBurgerBuilding && redirectPath !== '/burger-builder') {
      onSetAuthRedirectPath('/burger-builder')
    }
  }, [isBurgerBuilding, onSetAuthRedirectPath, redirectPath])
  let inputElements = [];

  for (let inputName in controls) {
    let obj = {}
    for (let attr in controls[inputName]) {
      obj[attr] = controls[inputName][attr];
    }
    obj['id'] = inputName;
    inputElements.push(obj);
  }
  let form = (<form className={`auth__form ${props.loading ? 'auth__form--invisible' : ''}`} onSubmit={submitHandler}>
    {inputElements.map(inputElement => <Input onFocusOut={onFocusOut} onFocus={onFocus} label={inputElement.elementConfig.type} name={inputElement.id} touched={inputElement.validation.touched} isValid={inputElement.validation.valid} onChange={(e) => inputOnChangeHandler(e, inputElement.id)} key={inputElement.id} elementConfig={inputElement.elementConfig} elementType={inputElement.elementType} value={inputElement.value} />)}
    <Button click={submitHandler} disabled={!isFormValid} btnType='btn--success btn auth__btn'>{isSignUp ? 'SIGN UP' : 'SIGN IN'}</Button>
  </form>)
  let errorMessage = null;
  if (props.error) {
    errorMessage = (
      <p style={{ fontSize: '1.4rem', color: '#944317', fontWeight: '700' }}>{props.error.message}</p>
    )
  }

  const { onAuthClear, onAlertShow } = props;
  useEffect(() => {
    document.querySelector('html').style.setProperty('overflow-x', 'hidden');
    const auth__container = container.current;
    const auth__background = auth__container.querySelector('.auth__background');
    const auth__secondary = auth__container.querySelector('.heading-secondary');
    const auth__tertiary = auth__container.querySelector('.heading-tertiary');
    const auth__inputs = auth__container.querySelectorAll('.input');
    const auth__btn = auth__container.querySelectorAll('.auth__btn');
    const auth__switch = auth__container.querySelectorAll('.auth__switch');
    const tl = gsap.timeline({ defaults: { ease: 'Power3.inOut' } });
    gsap.set([auth__secondary, auth__tertiary, auth__inputs, auth__btn, auth__switch], { autoAlpha: 0, y: '1.6rem' });
    gsap.set(auth__container, { y: '-50%', x: '-30%' })
    tl.to(auth__container, .5, { autoAlpha: 1, x: '-50%', y: '-50%' })
      .fromTo(auth__background, .5, { backgroundPosition: '100%' }, { backgroundPosition: '47%' })
      .to([auth__secondary, auth__tertiary, auth__inputs, auth__btn, auth__switch], .2, { autoAlpha: 1, y: 0, stagger: .1 })
    onAuthClear();
  }, [onAuthClear])


  const authSuccess = () => {
    onRedirectEnd();
    onAlertShow('Loggin successful.')
    history.push(props.redirectPath);
  }
  if (props.isAuth && triedAuth) {
    props.onRedirectStart();
    const auth__container = container.current;
    gsap.to(auth__container, { duration: 1, ease: 'power2.out', autoAlpha: 0, scale: .95, onComplete: authSuccess })
  }
  if (props.isAuth && !triedAuth) {
    history.replace('/');
  }
  useEffect(() => {
    if (leaving) {
      const redirect = () => {
        onRedirectEnd();
        history.push(path);
      }
      const auth__container = container.current;
      gsap.to(auth__container, { duration: 1, ease: 'power2.out', autoAlpha: 0, scale: .95, onComplete: redirect })                                      // redirect dla navigacji
    }
  }, [leaving, history, onRedirectEnd, path])

  return (
    <div className='auth'>
      <div ref={container} className='auth__container'>
        <div style={{ backgroundPosition: '100%' }} className="auth__background">
        </div>
        <div className='auth__form-container'>
          <h2 className='heading-secondary'>Burger Builder App</h2>
          <h3 className='heading-tertiary'>Start building your custom burger now!</h3>
          {errorMessage}
          {form}
          <div className='auth__switch'>{isSignUp ? <><p className='auth__tip'>Already have an account? Switch to </p><Button click={switchAuthModeHandler} btnType='btn btn--danger'> SIGN IN</Button></> : <><p className='auth__tip'>Don't have an account? Switch to</p><Button click={switchAuthModeHandler} btnType='btn btn--danger'> SIGN UP</Button></>}</div>

        </div>
      </div>
      <Loader loading={props.loading} />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: (url) => dispatch(actions.setAuthRedirectPath(url)),
    onAuthClear: () => dispatch(actions.authClear()),
    onRedirectStart: () => dispatch(actions.redirectEnd()),
    onRedirectEnd: () => dispatch(actions.redirectEnd()),
    onAlertShow: (message) => dispatch(actions.alertShow(message))
  }
}
const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null,
    isBurgerBuilding: state.burgerBuilder.building,
    redirectPath: state.auth.redirectPath,
    leaving: state.redirect.leaving,
    path: state.redirect.path
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));