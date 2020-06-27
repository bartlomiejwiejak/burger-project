import React, { useState, useEffect } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Modal from '../../components/UL/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    const reqInterceptor = axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });

    const resInterceptor = axios.interceptors.response.use(res => res, (err) => {
      console.log('ustawiamy error')
      setError(err)
    })

    const errorConfirmedHandler = () => {
      setError(null);
    }
    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      }
    }, [reqInterceptor, resInterceptor])
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