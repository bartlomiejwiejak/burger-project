import React from 'react';

const Loader = (props) => {
  if (!props.loading) return null;
  return (
    <div className="Loader-container">
      <div className="Loader">Loading...</div>
    </div>

  );
}

export default Loader;