import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { inputVal: '' }

  onInputType = event => {
    let term = event.target.value;
    this.setState({ inputVal: term });
    this.props.onType(term);
  }

  render() {
    const style = this.props.width ? { width: this.props.width + 'px' } : null;
    return (
      <div className='SearchBar' style={style}>
        <div className="form-group">
          <input type="text" className="form-control"
            placeholder={`${this.props.text}`}
            value={this.state.inputVal}
            onChange={this.onInputType}
          />
        </div>
      </div>
    );
  }
}

SearchBar.defaultProps = {
  text: 'Search:'
}

export default SearchBar;
