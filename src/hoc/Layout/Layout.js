import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
  state = {
    SideDrawerShown: false
  }
  SideDrawerHandler = () => {
    this.setState((prevState) => {
      return ({
        SideDrawerShown: !prevState.SideDrawerShown
      })
    })
  }
  render() {
    return (
      <Auxiliary>
        <Toolbar SideDrawerHandle={this.SideDrawerHandler} />
        <SideDrawer show={this.state.SideDrawerShown} SideDrawerHandle={this.SideDrawerHandler} />
        <main>
          {this.props.children}
        </main>
      </Auxiliary>
    )
  }
}

export default Layout;
