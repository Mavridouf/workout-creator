import React from 'react';
import SearchExerciseContainer from './SearchExerciseContainer/SearchExerciseContainer'
import './WorkoutContainer.css'
import CurrentWorkoutContainer from './CurrentWorkoutContainer/CurrentWorkoutContainer';
import { pick } from '../../shared/helper';

class WorkoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: []
    }
  }

  addExercise = (exercise) => {
    let workoutExercise = pick(exercise.fields, ['Name', 'Weight', 'Sets', 'Repetition', 'Speed', 'Duration', 'Rest Between']);
    this.setState({ workout: [...this.state.workout, workoutExercise] });
  }

  removeExercise = (index) => {
    let workout = this.state.workout;
    workout.splice(index, 1);
    this.setState({ workout: workout });
  }

  render() {
    return (
      <div className='workout-container row no-gutters' >
        <div className='col-md-6'>
          <span className='title1'>Customize</span>
          <span className='title2' > your workout</span>
        </div>
        <div className='col-md-6'></div>
        <div className='col-md-6'> <SearchExerciseContainer exerciseToAdd={this.addExercise} />
        </div>
        <div className='col-md-6'>
          <CurrentWorkoutContainer removeElement={this.removeExercise} workout={this.state.workout} />
        </div>
      </div >
    );
  }
}

export default WorkoutContainer;
