import React from 'react';
import './ExerciseItem.css';

class ExerciseItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='exercise-item col-6'>
        <div className='wrapper d-flex' styles={{ backgroundImage: this.props.imageUrl }}>
          <span className='align-self-end'>{this.props.name} </span>
        </div>
      </div>
    );
  }
}

ExerciseItem.defaultProps = {
  name: 'Exercise Name',
  imageUrl: 'wdwd'
}

export default ExerciseItem;
