import React from 'react';
import './ExerciseList.css';
import ExerciseItem from './ExerciseItem/ExerciseItem';

class ExerciseList extends React.Component {
  render() {
    return (
      <div className='exercise-list'>
        <p className='title'>Top Exercises</p>
        <div className='row'>
          <ExerciseItem />
          <ExerciseItem />
        </div>
      </div>
    );
  }
}

export default ExerciseList;
