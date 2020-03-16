import React from 'react';
import PropTypes from 'prop-types';



// this is a functional component that will take in a message returned to us from axios and display in DOM through other components
//a good example of a reusable component
const Message = ({msg}) => {
  return (
    <div className='alert alert-info alert-dismissible fade show' role='alert'>
      {msg}

      <button
        type='button'
        className='close'
        data-dismiss='alert'
        aria-label='Close'
      >
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  );
};



Message.propTypes = {
  msg: PropTypes.string.isRequired
};



export default Message;