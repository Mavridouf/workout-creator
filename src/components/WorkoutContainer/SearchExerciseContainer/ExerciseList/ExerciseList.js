import React from 'react';
import './ExerciseList.css';
import ExerciseItem from './ExerciseItem/ExerciseItem';
import Spinner from '../../../../shared/Spinner/Spinner';

class ExerciseList extends React.Component {
  exerciseAdd = (exercise) => {
    this.props.exerciseToAdd(exercise);
  }

  render() {
    const exercises = this.props.exercises.map((exercise) =>
      <ExerciseItem workout={this.props.workout}
        exerciseToAdd={this.exerciseAdd}
        key={exercise.id}
        exercise={exercise}
        name={exercise.fields.Name}
        imageUrl={exercise.fields.Photo && exercise.fields.Photo[0].url} />)
    return (
      <div className='exercise-list'>
        <p className='title'>Top Exercises</p>
        <div className='row'>
          {this.props.loading ?
            <div className='col-12 d-flex justify-content-center'>
              <Spinner />
            </div> : exercises}
        </div>
      </div>
    );
  }
}

export default ExerciseList;
