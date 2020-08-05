import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { Redirect } from 'react-router-dom';
const Logout = (props) => {
  const { onLogout, onAlertShow } = props;
  useEffect(() => {
    onAlertShow('Logout successful.')
    onLogout();
  }, [onLogout, onAlertShow])

  return (
    <Redirect to="/" />
  );
}

const dispatchActionsToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout()),
    onAlertShow: (message) => dispatch(actions.alertShow(message))
  }
}

export default connect(null, dispatchActionsToProps)(Logout);