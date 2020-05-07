import React from 'react';
import SearchExerciseContainer from './SearchExerciseContainer/SearchExerciseContainer'
import './WorkoutContainer.css'

class WorkoutContainer extends React.Component {
  render() {
    return (
      <div className='workout-container' >
        <span className='title1'>Customize</span>
        <span className='title2' > your workout</span>
        <SearchExerciseContainer />
      </div >
    );
  }
}

export default WorkoutContainer;
