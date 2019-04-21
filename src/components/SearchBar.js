import React from 'react';

import './SearchBar.scss';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setSearchTerm(event.target.value);
  }

  render() {
    return (
      <input autoFocus type='text' onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
