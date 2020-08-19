import React from 'react';

const Modal = (props) => {
  return (
    <>
      <div style={props.show ? { visibility: 'visible', opacity: 1 } : { visibility: 'hidden', opacity: 0 }} className="modal-backdrop"></div>
      <div className='modal'
        style={{
          transform: props.show ? 'translate(-50%,-50%)' : 'translate(-50%,-150vh)',
          opacity: props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </>
  );
}

export default React.memo(Modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children);
