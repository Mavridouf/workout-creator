import React from 'react';
import './WorkoutElementAttribute.css';

class WorkoutElementAttribute extends React.Component {
  mapKeytoTitle = (key) => {
    switch (key) {
      case 'Repetition': return 'REPS';
      case 'Duration': return 'TIME';
      case 'Rest Between (seconds)': return 'REST';
      default: return key.toUpperCase();
    }
  }

  render() {
    return (
      <div className='col workout-element-attribute d-flex flex-column justify-content-center align-items-center '>
        <div className='wrapper d-flex flex-column justify-content-center align-items-center'>
          <span className='element-title'>{this.mapKeytoTitle(this.props.title)}</span>
          <span className='element-value'>{this.props.value}</span>
        </div>
      </div>
    );
  }
}

export default WorkoutElementAttribute;
