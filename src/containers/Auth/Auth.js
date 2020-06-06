import React, { Component } from 'react';
import Input from '../../components/UL/Input/Input';
import Button from '../../components/UL/Button/Button';
import './Auth.css';
class Auth extends Component {
  state = {
    controls: {
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
    },
    isFormValid: false
  }
  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid
    }
    return isValid;
  }
  inputOnChangeHandler = (e, key) => {
    let updatedControls = { ...this.state.controls };
    updatedControls[key].value = e.target.value
    updatedControls[key].validation.touched = true;
    updatedControls[key].validation.valid = this.checkValidity(updatedControls[key].value, updatedControls[key].validation);
    let isFormValid = true;
    for (let inputName in this.state.orderForm) {
      if (!this.state.orderForm[inputName].validation.valid) {
        isFormValid = false;
      }
    }
    this.setState({
      controls: updatedControls,
      isFormValid
    })
  }
  render() {
    let inputElements = [];

    for (let inputName in this.state.controls) {
      let obj = {}
      for (let attr in this.state.controls[inputName]) {
        obj[attr] = this.state.controls[inputName][attr];
      }
      obj['id'] = inputName;
      inputElements.push(obj);
    }
    let form = (<form onSubmit={this.orderHandler}>
      {inputElements.map(inputElement => <Input name={inputElement.id} touched={inputElement.validation.touched} isValid={inputElement.validation.valid} onChange={(e) => this.inputOnChangeHandler(e, inputElement.id)} key={inputElement.id} elementConfig={inputElement.elementConfig} elementType={inputElement.elementType} value={inputElement.value} />)}
      <Button disabled={!this.state.isFormValid} btnType='Success'>SUBMIT</Button>
    </form>)

    return (
      <div className='Auth'>
        {form}
      </div>
    );
  }
}

export default Auth;