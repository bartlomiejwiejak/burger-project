import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import './Layout.scss';
const Layout = (props) => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
  </Auxiliary>
)

export default Layout;
