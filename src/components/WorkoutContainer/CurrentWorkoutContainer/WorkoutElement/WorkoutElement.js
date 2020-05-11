import React from 'react';
import './WorkoutElement.css';
import WorkoutElementAttribute from './WorkoutElementAttribute/WorkoutElementAttribute';
import { maxWorkoutLength } from '../../../../shared/helper';

class WorkoutElement extends React.Component {

  deleteElement = () => {
    this.props.removeElement(this.props.index);
  }

  addBreak = () => {
    this.props.toAddBreak(this.props.index + 1);
  }

  render() {
    const index = this.props.index;

    let attributes = [];
    for (const key in this.props.exercise) {
      if (key !== 'Id' && key !== 'Name')
        attributes.push({
          title: key,
          value: this.props.exercise[key]
        })
    }
    const workoutElementAttributes = attributes.map((attribute) => attribute.title !== 'Rest Between' && attribute.title !== 'id' ? <WorkoutElementAttribute key={attribute.title} title={attribute.title} value={attribute.value} /> : null
    )

    return (
      <div className='workout-element' >
        <div className='card-sm'>
          <div className='row no-gutters'>
            <div className='col-12 d-flex align-items-center'>
              <svg width="14px" height="10px" viewBox="0 0 14 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Group</title>
                <g id="Components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fillOpacity="0.2">
                  <g id="Exercise---Hover" transform="translate(-24.000000, -25.000000)" fill="#191919">
                    <g id="Group" transform="translate(24.000000, 25.000000)">
                      <rect id="Rectangle" x="0" y="0" width="14" height="2"></rect>
                      <rect id="Rectangle-Copy" x="0" y="8" width="14" height="2"></rect>
                    </g>
                  </g>
                </g>
              </svg>
              <span className='card-name'>{this.props.exercise.Name}</span>
              {this.props.exercise.Name === 'Break' ? <span className='break-duration '>{this.props.exercise.Duration}</span> : null}
              <svg onClick={this.deleteElement} className='ml-auto' width="16px" height="20px" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>universal/delete</title>
                <g id="Components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.3">
                  <g id="Exercise---Hover" transform="translate(-364.000000, -20.000000)" fill="#131313">
                    <g id="universal/delete" transform="translate(360.000000, 18.000000)">
                      <path d="M18,9 C18.5522847,9 19,9.44771525 19,10 L19,20 C19,21.1045695 18.1045695,22 17,22 L7,22 C5.8954305,22 5,21.1045695 5,20 L5,10 C5,9.44771525 5.44771525,9 6,9 L18,9 Z M9,12 C8.44771525,12 8,12.4477153 8,13 L8,18 C8,18.5522847 8.44771525,19 9,19 C9.55228475,19 10,18.5522847 10,18 L10,13 C10,12.4477153 9.55228475,12 9,12 Z M15,12 C14.4477153,12 14,12.4477153 14,13 L14,18 C14,18.5522847 14.4477153,19 15,19 C15.5522847,19 16,18.5522847 16,18 L16,13 C16,12.4477153 15.5522847,12 15,12 Z M13,2 C13.5522847,2 14,2.44771525 14,3 L14,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 C20,6.32842712 19.3284271,7 18.5,7 L5.5,7 C4.67157288,7 4,6.32842712 4,5.5 C4,4.67157288 4.67157288,4 5.5,4 L10,4 L10,3 C10,2.44771525 10.4477153,2 11,2 L13,2 Z" id="Combined-Shape"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          {this.props.exercise.Name !== 'Break' ?
            <div className='row no-gutters attributes-row'>
              {workoutElementAttributes}
            </div> : null}
        </div>
        {!maxWorkoutLength(this.props.workout) && this.props.workout[index].Name !== 'Break' && index + 1 < this.props.workout.length && this.props.workout[index + 1].Name !== 'Break' ?
          <div onClick={this.addBreak} className='add-break-element d-flex justify-content-between align-items-center row no-gutters'>
            <div className='line'></div>
            <span className='break-line'>Add Break</span>
            <div className='line'></div>
          </div> : <div></div>
        }
      </div >
    );
  }
}

export default WorkoutElement;
