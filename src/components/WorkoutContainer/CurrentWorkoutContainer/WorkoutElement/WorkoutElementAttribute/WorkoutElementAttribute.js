import React from 'react';
import './WorkoutElementAttribute.css';

function WorkoutElementAttribute(props) {
  return (
    <div className='col workout-element-attribute d-flex flex-column justify-content-center align-items-center '>
      <div className='wrapper d-flex flex-column justify-content-center align-items-center'>
        <span className='element-title'>{props.title}</span>
        <span className='element-value'>{props.value}</span>
      </div>
    </div>
  );
}

export default WorkoutElementAttribute;
