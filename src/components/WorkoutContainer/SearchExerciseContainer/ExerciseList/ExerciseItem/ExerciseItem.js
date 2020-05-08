import React from 'react';
import './ExerciseItem.css';
import SvgButton from '../../../../../shared/Buttons/SvgButton';

class ExerciseItem extends React.Component {

  exerciseClicked = () => {
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
        <div className='wrapper d-flex' style={imgStyle} onClick={this.exerciseClicked}>
          <span className='align-self-end'>{this.props.name} </span>
          <div className='ml-auto add-exercise-btn' style={btnStyle}>
            <SvgButton />
          </div>
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
