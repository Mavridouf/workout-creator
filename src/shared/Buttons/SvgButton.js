import React from 'react';
import './SvgButton.css';
import Add from './Add/Add';

class SvgButton extends React.Component {
  render() {
    return (
      <button className="svg-button">
        <Add />
      </button>
    );
  }
}

export default SvgButton;
