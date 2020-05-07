import React from 'react';
import './SearchExerciseContainer.css';
import '../../../shared/styles.css';
import SearchBar from '../../../shared/SearchBar/SearchBar';
import ExerciseList from './ExerciseList/ExerciseList';

class SearchExerciseContainer extends React.Component {
  render() {
    return (
      <div className='search-exercise-container' >
        <div className="card-lg">
          <SearchBar />
          <ExerciseList />
        </div>
      </div >
    );
  }
}

export default SearchExerciseContainer;
