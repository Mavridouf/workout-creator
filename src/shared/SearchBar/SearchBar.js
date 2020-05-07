import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className='SearchBar'>
        <div className="form-group">
          <input type="text" className="form-control" placeholder={`${this.props.text}`} />
        </div>
      </div>
    );
  }
}

SearchBar.defaultProps = {
  text: 'Search:'
}

export default SearchBar;
