import React from 'react';
import './Input.css';

class Input extends React.Component {
  state = { inputVal: '' }

  onInputType = event => {
    let term = event.target.value;
    this.setState({ inputVal: term });
    this.props.onType(term);
  }

  inputFocused = event => {
    event.target.parentNode.classList.add('active');
  }

  inputBlured = event => {
    if (!event.target.value) event.target.parentNode.classList.remove('active');
  }


  render() {
    const style = this.props.width ? { width: this.props.width + 'px' } : null;
    return (
      <div className='Input' style={style}>
        <div className="form-group float-container">
          <label htmlFor='input'>{this.props.label}</label>
          <input onBlur={this.inputBlured}
            onFocus={this.inputFocused}
            id="input"
            type="text"
            className={"form-control " + (this.props.inputType)}
            placeholder={this.props.text}
            value={this.state.inputVal}
            onChange={this.onInputType}
            maxLength={this.props.maxLength}
          />
        </div>
      </div>
    );
  }
}

Input.defaultProps = {
  text: null,
  label: null
}

export default Input;
