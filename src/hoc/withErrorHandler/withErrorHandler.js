import React from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Modal from '../../components/UL/Modal/Modal';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, errorConfirmedHandler] = useHttpErrorHandler(axios);
    return (
      <Aux>
        <Modal show={error} cancel={errorConfirmedHandler} >
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    )
  }
}

export default withErrorHandler;