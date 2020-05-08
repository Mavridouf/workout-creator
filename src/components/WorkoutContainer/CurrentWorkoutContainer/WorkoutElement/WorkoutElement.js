import React from 'react';
import './WorkoutElement.css';
import WorkoutElementAttribute from './WorkoutElementAttribute/WorkoutElementAttribute';

class WorkoutElement extends React.Component {


  render() {
    let attributes = [];
    for (const key in this.props.exercise) {
      if (key !== 'Id' && key !== 'Name')
        attributes.push({
          title: key,
          value: this.props.exercise[key]
        })
    }
    const workoutElementAttributes = attributes.map((attribute) => <WorkoutElementAttribute key={attribute.title} title={attribute.title} value={attribute.value} />
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
            </div>
          </div>
          {this.props.exercise.Name !== 'Break' ?
            <div className='row no-gutters attributes-row'>
              {workoutElementAttributes}
            </div> : null}
        </div>
      </div>
    );
  }
}

export default WorkoutElement;
