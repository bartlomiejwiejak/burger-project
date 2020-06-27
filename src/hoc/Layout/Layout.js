import React, { useState } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';
const Layout = (props) => {
  const [sideDrawerShown, setSideDrawerShown] = useState(false);

  const sideDrawerHandler = () => {
    setSideDrawerShown((prevState) => !prevState)
  }
  return (
    <Auxiliary>
      <Toolbar isAuth={props.isAuth} sideDrawerHandle={sideDrawerHandler} />
      <SideDrawer isAuth={props.isAuth} show={sideDrawerShown} sideDrawerHandle={sideDrawerHandler} />
      <main>
        {props.children}
      </main>
    </Auxiliary>
  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout);
