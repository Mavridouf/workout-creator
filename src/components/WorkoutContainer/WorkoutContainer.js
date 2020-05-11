import React from 'react';
import SearchExerciseContainer from './SearchExerciseContainer/SearchExerciseContainer'
import './WorkoutContainer.css'
import CurrentWorkoutContainer from './CurrentWorkoutContainer/CurrentWorkoutContainer';
import { pick } from '../../shared/helper';
import SearchBar from '../../shared/SearchBar/SearchBar';

class WorkoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: [],
      totalDuration: 0
    }
  }

  getExerciseDuration = (workoutExercise) => {
    let dur = workoutExercise.Duration;
    let rest = workoutExercise['Rest Between'];
    let sets = workoutExercise.Sets;
    dur = dur ? +dur.replace('m', '') : 0;
    rest = rest ? +rest.replace('m', '') : 0;
    sets = sets ? +sets : 1;
    return (dur + rest) * sets;
  }

  addExercise = (exercise) => {
    let workoutExercise = pick(exercise.fields, ['Name', 'Weight', 'Sets', 'Repetition', 'Speed', 'Duration', 'Rest Between', 'Rest Between (seconds)']);
    workoutExercise['Rest Between (seconds)'] += "”";
    this.setState({
      workout: [...this.state.workout, workoutExercise],
      totalDuration: this.state.totalDuration + this.getExerciseDuration(workoutExercise)
    });
  }

  removeExercise = (index) => {
    let workout = this.state.workout;
    let exerciseDuration = this.getExerciseDuration(workout[index]);
    workout.splice(index, 1);
    this.setState({
      workout: workout,
      totalDuration: this.state.totalDuration - exerciseDuration
    });
  }

  addBreakAtPosition = (index) => {
    const breakElement = { Name: 'Break', Duration: '5m' };
    let workout = this.state.workout;
    workout.splice(index, 0, breakElement);
    this.setState({ workout: workout, totalDuration: this.state.totalDuration + 5 });
  }

  render() {
    return (
      <div className='workout-container row no-gutters' >
        <div className='col-md-6'>
          <span className='title1'>Customize</span>
          <span className='title2' > your workout</span>
        </div>
        <div className='col-md-6'></div>
        <div className='col-md-12'>
          <div className='workout-row row no-gutters'>
            <div className='col-md-6 align-items-center'><SearchBar text='Input Text' width='420' /></div>
            <div className='col-md-6 d-flex justify-content-end align-items-center'>
              <span className='workoutTotalLabel'>Total Time &nbsp;</span>
              <span className='workoutTotalValue'>{' ' + this.state.totalDuration + ' ' + 'm'}</span>
              <button type="button" className="save-workout-btn">Save</button>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <SearchExerciseContainer addBreak={this.addBreakAtPosition} workout={this.state.workout} exerciseToAdd={this.addExercise} />
        </div>
        <div className='col-md-6'>
          <CurrentWorkoutContainer addBreak={this.addBreakAtPosition} removeElement={this.removeExercise} workout={this.state.workout} />
        </div>
      </div >
    );
  }
}

export default WorkoutContainer;
