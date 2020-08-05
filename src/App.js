import React, { useEffect, Suspense } from 'react';
import Layout from './hoc/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Logout from './pages/Logout';
import { connect } from 'react-redux';
import * as actions from './store/actions';

const Checkout = React.lazy(() => {
  return import('./pages/Checkout')
})
const Orders = React.lazy(() => {
  return import('./pages/Orders')
})
const Auth = React.lazy(() => {
  return import('./pages/Auth')
})

const Home = React.lazy(() => {
  return import('./pages/Home');
})
const BurgerBuilder = React.lazy(() => {
  return import('./layout/BurgerBuilderAnimation')
})

const App = (props) => {
  const { onTryAutoSignUp } = props;
  useEffect(() => {
    onTryAutoSignUp()
  }, [onTryAutoSignUp])

  useEffect(() => {
    switch (props.location.pathname) {
      case '/':
        document.title = `Le Burger Builder - Home`
        break;
      case '/auth':
        document.title = `Le Burger Builder - Authorisation`
        break;
      case '/burger-builder':
        document.title = `Le Burger Builder - Build`
        break;
      case '/checkout':
        document.title = `Le Burger Builder - Checkout`
        break;
      case '/checkout/contact-data':
        document.title = 'Le Burger Builder - Contact'
        break;
      case '/orders':
        document.title = 'Le Burger Builder - Orders'
        break;
      default:
        document.title = 'Le Burger Builder'
    }
  }, [props.location.pathname])

  let routes = (
    <Switch>
      <Route path='/' exact render={(props) => <Home {...props} />} />
      <Route path='/auth' render={(props) => <Auth {...props} />} />
      <Route path='/burger-builder' render={(props) => <BurgerBuilder {...props} />} />
      <Redirect to='/' />
    </Switch>
  )
  if (props.isAuth) {
    routes = (
      <Switch>
        <Route path='/' exact render={(props) => <Home {...props} />} />
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
    <>
      <Layout>
        <Suspense fallback={null}>
          {routes}
        </Suspense>
      </Layout>
    </>
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
