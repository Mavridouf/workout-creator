import React from 'react';
import SearchExerciseContainer from './SearchExerciseContainer/SearchExerciseContainer';
import CurrentWorkoutContainer from './CurrentWorkoutContainer/CurrentWorkoutContainer';
import Input from '../../shared/Input/Input';
import { pick } from '../../shared/helper';
import Spinner from '../../shared/Spinner/Spinner';
import base from '../../shared/api';
import { v4 as uuid } from 'uuid';
import './WorkoutContainer.css';


class WorkoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: {
        [uuid()]: {
          exercises: []
        }
      },
      totalDuration: 0,
      workoutName: '',
      loading: false,
    }
  }

  getStateExercises = () => {
    return this.state.workout[Object.keys(this.state.workout)[0]].exercises;
  }

  saveWorkout = () => {
    let req = this.initSaveWorkoutRequest();
    this.setState({ loading: true });
    base('Workout').create(req, (err, record) => {
      this.setState({ loading: false });
      if (err) {
        console.error(err);
        return;
      }
    });
  }

  initSaveWorkoutRequest = () => {
    let workoutRequest = {
      Name: this.state.workoutName,
      Duration: this.state.totalDuration,
      Exercises: []
    }
    workoutRequest['Link to Exercises'] = this.getExercisesIds();
    this.getStateExercises().forEach((exercise, index) => {
      workoutRequest['Exercises'].push(index + 1 + ' - ' + exercise.Name.trim());
    });
    return workoutRequest;
  }

  getExercisesIds = () => {
    let ids = this.getStateExercises().map(exercise => exercise.id);
    return [...new Set(ids)];
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
    workoutExercise['id'] = exercise.id;
    workoutExercise['dragId'] = uuid();
    this.setState(prevState => {
      return ({
        workout: {
          [Object.keys(prevState.workout)[0]]: {
            exercises: [...prevState.workout[Object.keys(prevState.workout)[0]].exercises, workoutExercise]
          }
        },
        totalDuration: this.state.totalDuration + this.getExerciseDuration(workoutExercise)
      })
    });
  }

  removeExercise = (index) => {
    let exercises = this.getStateExercises();
    let exerciseDuration = this.getExerciseDuration(exercises[index]);
    exercises.splice(index, 1);
    this.setState(prevState => {
      return ({
        workout: {
          [Object.keys(prevState.workout)[0]]: {
            exercises: exercises
          }
        },
        totalDuration: this.state.totalDuration - exerciseDuration
      });
    })
  }

  addBreakAtPosition = (index) => {
    const breakElement = { Name: 'Break', Duration: '5m', id: 'recE8aHgqqWguo8jV', dragId: uuid() };
    let exercises = this.getStateExercises();
    exercises.splice(index, 0, breakElement);
    this.setState(prevState => {
      return ({
        workout: {
          [Object.keys(prevState.workout)[0]]: {
            exercises: exercises
          }
        },
        totalDuration: this.state.totalDuration + 5
      });
    });
  }

  updateWorkoutName = (name) => {
    this.setState({ workoutName: name });
  }

  orderItemsOnDrag = (result) => {
    const { source, destination } = result;
    const column = this.state.workout[Object.keys(this.state.workout)[0]];
    const copiedItems = [...column.exercises];
    const [removed] = copiedItems.splice(source.index, 1);
    let totalDuration = this.state.totalDuration;
    if (result.destination) {
      copiedItems.splice(destination.index, 0, removed);
    }
    else totalDuration -= this.getExerciseDuration(removed);
    this.setState(prevState => {
      return ({
        workout: {
          [Object.keys(prevState.workout)[0]]: {
            exercises: copiedItems
          }
        },
        totalDuration: totalDuration
      });
    });
  }

  render() {
    return (
      <div className='workout-container row no-gutters' >
        <div className='col-md-6'>
          <span className='title1'>Customize</span>
          <span className='title2'> your workout</span>
        </div>
        <div className='col-md-6'></div>
        <div className='col-md-12'>
          <div className='workout-row row no-gutters'>
            <div className='col-md-6 align-items-center'><Input inputType={'workout-name'} onType={this.updateWorkoutName} maxLength={12} label='Workout name' width='420' /></div>
            <div className='col-md-6 d-flex justify-content-end align-items-center'>
              <span className='workoutTotalLabel'>Total Time&nbsp;</span>
              <span className='workoutTotalValue'>{this.state.totalDuration + ' m'}</span>
              {this.state.loading ? <Spinner /> :
                <button type="button" onClick={this.saveWorkout} className="save-workout-btn" disabled={(this.getStateExercises && this.getStateExercises().length === 0) || this.state.workoutName.length === 0} >Save</button>
              }
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <SearchExerciseContainer addBreak={this.addBreakAtPosition} workout={this.getStateExercises()} exerciseToAdd={this.addExercise} />
        </div>
        <div className='col-md-6'>
          <CurrentWorkoutContainer setOrder={this.orderItemsOnDrag} addBreak={this.addBreakAtPosition} removeElement={this.removeExercise} workout={this.state.workout} exercises={this.getStateExercises()} />
        </div>
      </div >
    );
  }
}

export default WorkoutContainer;
