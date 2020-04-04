import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Aux>
        <div>Burger</div>
        <div>Burger controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;