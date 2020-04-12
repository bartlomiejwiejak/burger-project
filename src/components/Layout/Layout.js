import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import './Layout.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const Layout = (props) => (
  <Auxiliary>
    <Toolbar />
    <SideDrawer />
    <main>
      {props.children}
    </main>
  </Auxiliary>
)

export default Layout;
