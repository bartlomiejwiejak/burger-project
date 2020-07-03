import React, { useEffect, Suspense } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Logout from './pages/Auth/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import Home from './pages/Home/Home';
import Loader from './components/UL/Link/Link';

const Checkout = React.lazy(() => {
  return import('./pages/Checkout/Checkout')
})
const Orders = React.lazy(() => {
  return import('./pages/Orders/Orders')
})
const Auth = React.lazy(() => {
  return import('./pages/Auth/Auth')
})
const BurgerBuilder = React.lazy(() => {
  return import('./pages/BurgerBuilder/BurgerBuilder');
})

const App = (props) => {
  const { onTryAutoSignUp } = props;
  useEffect(() => {
    onTryAutoSignUp()
  }, [onTryAutoSignUp])

  let routes = (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/burger-builder' render={(props) => <BurgerBuilder {...props} />} />
      <Route path='/auth' render={(props) => <Auth {...props} />} />
      <Redirect to='/' />
    </Switch>
  )
  if (props.isAuth) {
    routes = (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/burger-builder' render={(props) => <BurgerBuilder {...props} />} />
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
        <Suspense fallback={<Loader />}>{routes}</Suspense>
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
