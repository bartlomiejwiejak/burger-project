import { useState, useEffect } from 'react';

export default axios => {
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
  }, [reqInterceptor, resInterceptor, axios.interceptors.request, axios.interceptors.response])

  return [error, errorConfirmedHandler]
}