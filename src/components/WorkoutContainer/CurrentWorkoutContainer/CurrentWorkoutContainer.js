import React from 'react';
import './CurrentWorkoutContainer.css';
import WorkoutElement from './WorkoutElement/WorkoutElement';

class CurrentWorkoutContainer extends React.Component {
  deleteElement = (index) => {
    this.props.removeElement(index);
  }

  addBreak = (index) => {
    this.props.addBreak(index);
  }

  render() {
    const elements = this.props.workout.map((element, i) => <WorkoutElement toAddBreak={this.addBreak} removeElement={this.deleteElement} workout={this.props.workout} exercise={element} key={i} index={i} />)
    return (elements.length > 0 ?
      <div className='current-workout-container'>
        <div className='card-lg'>
          {elements}
        </div>
      </div> : <div></div>
    );
  }
}

export default CurrentWorkoutContainer;
