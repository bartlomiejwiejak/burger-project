import React, { useState, useEffect } from 'react';
import Input from '../../components/UL/Input/Input';
import Button from '../../components/UL/Button/Button';
import { connect } from 'react-redux';
import Spinner from '../../components/UL/Spinner/Spinner';
import * as actions from '../../store/actions';
import { Redirect } from 'react-router-dom';
import './Auth.css';
import { updatedObject, checkValidity } from '../../shared/utility';
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
    props.onAuth(controls.email.value, controls.password.value, isSignUp);
  }
  const switchAuthModeHandler = (e) => {
    e.preventDefault();
    setIsSignUp((prevIsSignUp => !prevIsSignUp))
  }
  const { isBurgerBuilding, redirectPath, onSetAuthRedirectPath } = props;
  useEffect(() => {
    if (!isBurgerBuilding && redirectPath !== '/') {
      onSetAuthRedirectPath('/')
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
  let form = (<form onSubmit={submitHandler}>
    {inputElements.map(inputElement => <Input name={inputElement.id} touched={inputElement.validation.touched} isValid={inputElement.validation.valid} onChange={(e) => inputOnChangeHandler(e, inputElement.id)} key={inputElement.id} elementConfig={inputElement.elementConfig} elementType={inputElement.elementType} value={inputElement.value} />)}
    <Button click={submitHandler} disabled={!isFormValid} btnType='Success'>SUBMIT</Button>
  </form>)
  if (props.loading) {
    form = <Spinner />
  }
  let errorMessage = null;
  if (props.error) {
    errorMessage = (
      <p>{props.error.message}</p>
    )
  }
  let redirect = null;
  if (props.isAuth) {
    redirect = <Redirect to={props.redirectPath} />
  }
  return (
    <div className='Auth'>
      {redirect}
      {errorMessage}
      {form}
      <Button click={switchAuthModeHandler} btnType='Danger'>SWITCH TO {isSignUp ? 'SIGN IN' : 'SIGN UP'}</Button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: (url) => dispatch(actions.setAuthRedirectPath(url))
  }
}
const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null,
    isBurgerBuilding: state.burgerBuilder.building,
    redirectPath: state.auth.redirectPath
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);