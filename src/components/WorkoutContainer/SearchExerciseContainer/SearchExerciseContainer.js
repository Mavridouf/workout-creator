import React from 'react';
import './SearchExerciseContainer.css';
import '../../../shared/styles.css';
import SearchBar from '../../../shared/SearchBar/SearchBar';
import ExerciseList from './ExerciseList/ExerciseList';
import base from '../../../shared/api'
import AddBreak from './AddBreak/AddBreak';

class SearchExerciseContainer extends React.Component {
  exerciseAdd = (exercise) => {
    this.props.exerciseToAdd(exercise)
  }

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      topExercises: [],
      exerciseList: [],
      loading: false,
    }
  }

  componentDidMount() {
    this.getTop();
  }

  getTop = () => {
    this.setState({ loading: true });
    base('Exercises').select({
      maxRecords: 8,
      sort: [{ field: "Uses", direction: "desc" }],
      view: "Grid view"
    }).eachPage((records, fetchNextPage) => {
      records.forEach(record => {
        this.setState({ topExercises: [...this.state.topExercises, record] })
      });
      fetchNextPage();
    }, (err) => {
      this.setState({ loading: false });
      if (err) { console.error(err); return; }
    });
  }

  getExercises = (name) => {
    this.setState({ exerciseList: [], loading: true });
    base('Exercises').select({
      filterByFormula: `{Name} = "${name}"`,
      view: "Grid view"
    }).eachPage((records, fetchNextPage) => {
      records.forEach(record => {
        this.setState({ exerciseList: [...this.state.exerciseList, record] });
      });
      fetchNextPage();
    }, (err) => {
      this.setState({ loading: false });
      if (err) { console.error(err); return; }
    });
  }

  onSearch = (term) => {
    this.setState({ searchTerm: term });
    if (term.length >= 3) {
      this.getExercises(term);
    }
  }

  breakClicked = (index) => {
    this.props.addBreak(index);
  }

  render() {
    return (
      <div className='search-exercise-container' >
        <div className="card-lg">
          <SearchBar onType={this.onSearch} />
          <AddBreak addBreak={this.breakClicked} workout={this.props.workout} />
          <ExerciseList exerciseToAdd={this.exerciseAdd} loading={this.state.loading} exercises={this.state.searchTerm.length < 3 ? this.state.topExercises : this.state.exerciseList} />
        </div>
      </div >
    );
  }
}

export default SearchExerciseContainer;
