import React from 'react';
import PropTypes from 'prop-types';




//this is a function component that will take in the progress of file upload and then display to the DOM through other components
//it is a good example of a reuseable component
const Progress = ({percentage}) => {
  return (
    <div className='progress'>
      <div
        className='progress-bar progress-bar-striped bg-success'
        role='progressbar'
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};





Progress.propTypes = {
  percentage: PropTypes.number.isRequired
};



export default Progress;