import React from 'react';
import './ExerciseItem.css';

class ExerciseItem extends React.Component {

  render() {
    const divStyle = {
      backgroundImage: 'url(' + this.props.imageUrl + ')'
    }
    return (
      <div className='exercise-item col-6'>
        <div className='wrapper d-flex' style={divStyle}>
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
