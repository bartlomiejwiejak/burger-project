import React, { Component } from 'react'
import Button from '../../../components/UL/Button/Button';
import './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UL/Spinner/Spinner';
import Input from '../../../components/UL/Input/Input';
class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        value: '',
        validation: {
          required: true,
          valid: false,
          touched: false
        }
      },

      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true,
          valid: false,
          touched: false
        }
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: '',
        validation: {
          required: true,
          valid: false,
          minLength: 5,
          maxLength: 5,
          touched: false
        }
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true,
          valid: false,
          touched: false
        }
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email'
        },
        value: '',
        validation: {
          required: true,
          valid: false,
          touched: false
        }
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [{ value: 'fastest', displayValue: 'Fastest' }, { value: 'cheapest', displayValue: 'Cheapest' }]
        },
        value: '',
        validation: {
          required: false,
          valid: true,
          touched: false
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
    return isValid;
  }
  orderHandler = (event) => {
    event.preventDefault();
    let formData = {};

    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }
    this.setState({
      loading: true
    })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    }

    axios.post('/orders.json', order)
      .then(res => {
        this.setState({
          loading: false,
        })
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          loading: false,
        })
      })
  }
  inputOnChangeHandler = (e, key) => {
    let updatedOrderForm = { ...this.state.orderForm };
    updatedOrderForm[key].value = e.target.value
    updatedOrderForm[key].validation.touched = true;
    updatedOrderForm[key].validation.valid = this.checkValidity(updatedOrderForm[key].value, updatedOrderForm[key].validation);
    let isFormValid = true;
    for (let inputName in this.state.orderForm) {
      if (!this.state.orderForm[inputName].validation.valid) {
        isFormValid = false;
      }
    }
    this.setState({
      orderForm: updatedOrderForm,
      isFormValid
    })
  }
  render() {
    let inputElements = [];

    for (let inputName in this.state.orderForm) {
      let obj = {}
      for (let attr in this.state.orderForm[inputName]) {
        obj[attr] = this.state.orderForm[inputName][attr];
      }
      obj['id'] = inputName;
      inputElements.push(obj);
    }
    let form = (<form onSubmit={this.orderHandler}>
      {inputElements.map(inputElement => <Input name={inputElement.id} touched={inputElement.validation.touched} isValid={inputElement.validation.valid} onChange={(e) => this.inputOnChangeHandler(e, inputElement.id)} key={inputElement.id} elementConfig={inputElement.elementConfig} elementType={inputElement.elementType} value={inputElement.value} />)}
      <Button disabled={!this.state.isFormValid} click={this.orderHandler} btnType='Success'>ORDER</Button>
    </form>)

    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className='ContactData'>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;