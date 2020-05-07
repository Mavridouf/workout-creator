import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { searchValue: '' }

  onInputType = event => {
    let term = event.target.value;
    this.setState({ searchValue: term });
    this.props.onType(term);
  }

  render() {
    return (
      <div className='SearchBar'>
        <div className="form-group">
          <input type="text" className="form-control"
            placeholder={`${this.props.text}`}
            value={this.state.searchValue}
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
