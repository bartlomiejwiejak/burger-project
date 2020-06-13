import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';
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
        <Toolbar isAuth={this.props.isAuth} SideDrawerHandle={this.SideDrawerHandler} />
        <SideDrawer isAuth={this.props.isAuth} show={this.state.SideDrawerShown} SideDrawerHandle={this.SideDrawerHandler} />
        <main>
          {this.props.children}
        </main>
      </Auxiliary>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout);
