import React, { useState } from 'react'
import Button from '../../../components/UL/Button/Button';
import Input from '../../../components/UL/Input/Input';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import { updatedObject, checkValidity } from '../../../shared/utility';
import './contactData.scss';

const ContactData = (props) => {
  const [orderForm, setOrderForm] = useState({
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
        touched: false,
        isNumeric: true
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
        touched: false,
        isEmail: true
      }
    },
    deliveryMethod: {
      elementType: 'select',
      elementConfig: {
        options: [{ value: 'fastest', displayValue: 'Fastest' }, { value: 'cheapest', displayValue: 'Cheapest' }]
      },
      value: 'fastest',
      validation: {
        required: false,
        valid: true,
        touched: false
      }
    }
  }
  )
  const [isFormValid, setIsFormValid] = useState(false)
  const orderHandler = (event) => {
    event.preventDefault();
    let formData = {};

    for (let formElementIdentifier in orderForm) {
      formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
    }
    const order = {
      ingredients: props.ings,
      price: props.price,
      orderData: formData,
      userId: props.userId
    }
    props.onPurchaseBurger(order, props.token);
  }
  const inputOnChangeHandler = (e, key) => {
    const updatedFormElement = updatedObject(orderForm[key], {
      value: e.target.value,
      validation: updatedObject(orderForm[key].validation, {
        touched: true,
        valid: checkValidity(e.target.value, orderForm[key].validation)
      })
    })
    const updatedOrderForm = updatedObject(orderForm, {
      [key]: updatedFormElement
    })
    let isFormValid = true;
    for (let inputName in updatedOrderForm) {
      if (!updatedOrderForm[inputName].validation.valid) {
        isFormValid = false;
      }
    }

    setOrderForm(updatedOrderForm);
    setIsFormValid(isFormValid);
  }
  let inputElements = [];

  for (let inputName in orderForm) {
    let obj = {}
    for (let attr in orderForm[inputName]) {
      obj[attr] = orderForm[inputName][attr];
    }
    obj['id'] = inputName;
    inputElements.push(obj);
  }
  let form = (<form onSubmit={orderHandler}>
    {inputElements.map(inputElement => <Input name={inputElement.id} touched={inputElement.validation.touched} isValid={inputElement.validation.valid} onChange={(e) => inputOnChangeHandler(e, inputElement.id)} key={inputElement.id} elementConfig={inputElement.elementConfig} elementType={inputElement.elementType} value={inputElement.value} />)}
    <Button disabled={!isFormValid} click={orderHandler} btnType='btn btn--success'>ORDER</Button>
  </form>)


  return (
    <div className='contact-data'>
      <h3 className='contact-data__heading'>Enter your Contact</h3>
      {form}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onPurchaseBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));