import React, { useEffect, Suspense } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './pages/BurgerBuilder/BurgerBuilder';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Logout from './pages/Auth/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from './store/actions';

const Checkout = React.lazy(() => {
  return import('./pages/Checkout/Checkout')
})
const Orders = React.lazy(() => {
  return import('./pages/Orders/Orders')
})
const Auth = React.lazy(() => {
  return import('./pages/Auth/Auth')
})

const App = (props) => {
  useEffect(() => {
    props.onTryAutoSignUp()
  }, [props])

  let routes = (
    <Switch>
      <Route path='/' exact component={BurgerBuilder} />
      <Route path='/auth' render={(props) => <Auth {...props} />} />
      <Redirect to='/' />
    </Switch>
  )
  if (props.isAuth) {
    routes = (
      <Switch>
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/checkout' render={(props) => <Checkout {...props} />} />
        <Route path='/orders' render={(props) => <Orders {...props} />} />
        <Route path='/auth' render={(props) => <Auth {...props} />} />
        <Route path='/logout' component={Logout} />
        <Redirect to='/' />
      </Switch>
    )
  }
  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
