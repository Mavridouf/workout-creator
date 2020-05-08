import React from 'react';
import './CurrentWorkoutContainer.css';
import WorkoutElement from './WorkoutElement/WorkoutElement';

class CurrentWorkoutContainer extends React.Component {
  render() {
    return (
      <div className='current-workout-container'>
        <div className='card-lg'>
          <WorkoutElement exercise={{ Duration: '1m', Name: 'Jumping Jacks', Sets: '5', Speed: 'Fast', Id: 'dss123123' }} />
          <WorkoutElement exercise={{ Duration: '5m', Name: 'Break', Id: 'wdwd12341234' }} />
        </div>
      </div>
    );
  }
}

export default CurrentWorkoutContainer;
