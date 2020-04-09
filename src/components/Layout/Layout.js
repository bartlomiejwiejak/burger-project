import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import './Layout.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const Layout = (props) => (
  <Auxiliary>
    <Toolbar />
    <main>
      {props.children}
    </main>
  </Auxiliary>
)

export default Layout;
