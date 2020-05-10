import React from 'react';
import './WorkoutElementAttribute.css';

class WorkoutElementAttribute extends React.Component {
  mapKeytoTitle = (key) => {
    switch (key) {
      case 'Repetition': return 'Reps';
      case 'Duration': return 'Time';
      case 'Rest Between': return 'Rest';
      default: return key;
    }
  }

  render() {
    let title = this.props.title;
    title = title.toUpperCase();
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
