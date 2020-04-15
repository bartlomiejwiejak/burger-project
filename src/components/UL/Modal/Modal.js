import React, { Component } from 'react';
import './Modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.show !== this.props.show;
  }
  componentDidUpdate() {
    console.log("Update modaluuu")
  }
  render() {
    return (
      <Aux>
        <Backdrop cancel={this.props.cancelPurchase} show={this.props.show} />
        <div className='Modal'
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;