import React from 'react';
import './loader.css';

const Loader = (props) => {
  if (!props.loading) return null;
  return (
    <div className="Loader-container">
      <div className="Loader">Loading...</div>
    </div>

  );
}

export default Loader;