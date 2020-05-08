import React from 'react';
import './CurrentWorkoutContainer.css';
import WorkoutElement from './WorkoutElement/WorkoutElement';

class CurrentWorkoutContainer extends React.Component {

  render() {
    const elements = this.props.workout.map((element, i) => <WorkoutElement exercise={element} key={i} />)
    return (
      <div className='current-workout-container'>
        <div className='card-lg'>
          {elements}
        </div>
      </div>
    );
  }
}

export default CurrentWorkoutContainer;
