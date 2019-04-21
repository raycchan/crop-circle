import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchTerm: '' }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const searchTerm = event.target.value;
    this.setState({ searchTerm: searchTerm });
    this.props.setSearchTerm(searchTerm);
  }

  render() {
    return (
      <input
        autoFocus
        type='text'
        value={this.state.searchTerm}
        onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
