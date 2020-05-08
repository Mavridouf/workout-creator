import React from 'react';
import SearchExerciseContainer from './SearchExerciseContainer/SearchExerciseContainer'
import './WorkoutContainer.css'
import CurrentWorkoutContainer from './CurrentWorkoutContainer/CurrentWorkoutContainer';

class WorkoutContainer extends React.Component {
  render() {
    return (
      <div className='workout-container row no-gutters' >
        <div className='col-md-6'>
          <span className='title1'>Customize</span>
          <span className='title2' > your workout</span>
        </div>
        <div className='col-md-6'></div>
        <div className='col-md-6'> <SearchExerciseContainer />
        </div>
        <div className='col-md-6'>
          <CurrentWorkoutContainer />
        </div>
      </div >
    );
  }
}

export default WorkoutContainer;
