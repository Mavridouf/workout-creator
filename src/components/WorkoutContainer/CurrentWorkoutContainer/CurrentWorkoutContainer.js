import React from 'react';
import WorkoutElement from './WorkoutElement/WorkoutElement';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import './CurrentWorkoutContainer.css';


class CurrentWorkoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid()
    }
  }

  onDragEnd = (result) => {
    this.props.setOrder(result);
  }

  deleteElement = (index) => {
    this.props.removeElement(index);
  }

  addBreak = (index) => {
    this.props.addBreak(index);
  }

  render() {
    const elements = this.props.exercises.map((element, i) =>
      <Draggable key={element.dragId} draggableId={element.dragId} index={i} >
        {(provided, snapshot) => {
          return (
            <div ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}>
              <WorkoutElement toAddBreak={this.addBreak}
                removeElement={this.deleteElement}
                workout={this.props.exercises}
                exercise={element}
                key={element.dragId}
                index={i} />
            </div>)
        }
        }
      </Draggable>
    )
    return (elements.length > 0 ?
      <div className='current-workout-container'>
        <DragDropContext onDragEnd={this.onDragEnd}>

          <Droppable droppableId={this.state.id} key={this.state.id}>
            {(provided, snapshot) => {
              return (
                <div {...provided.droppableProps}
                  ref={provided.innerRef}
                  className='card-lg'>
                  {elements}
                  {provided.placeholder}
                </div>
              )
            }
            }
          </Droppable>
        </DragDropContext>
      </div > : <div></div>
    );
  }
}

export default CurrentWorkoutContainer;
