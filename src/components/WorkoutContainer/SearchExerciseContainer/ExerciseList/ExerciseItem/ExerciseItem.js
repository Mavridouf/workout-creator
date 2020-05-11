import React from 'react';
import './ExerciseItem.css';
import SvgButton from '../../../../../shared/Buttons/SvgButton';
import { maxWorkoutLength } from '../../../../../shared/helper';

class ExerciseItem extends React.Component {

  exerciseClicked = () => {
    if (!maxWorkoutLength(this.props.workout))
      this.props.exerciseToAdd(this.props.exercise);
  }

  render() {
    const imgStyle = {
      backgroundImage: 'url(' + this.props.imageUrl + ')'
    }
    const btnStyle = {
      margin: '4px 8px 0 0'
    }

    return (
      <div className='exercise-item col-6'>
        <div className={'wrapper d-flex ' + (maxWorkoutLength(this.props.workout) ? 'disabled' : '')} style={imgStyle} onClick={this.exerciseClicked}>
          <span className='align-self-end'>{this.props.name} </span>
          {!maxWorkoutLength(this.props.workout) ?
            <div className='ml-auto add-exercise-btn' style={btnStyle}>
              <SvgButton />
            </div> : null}
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
