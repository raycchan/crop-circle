import React from 'react';
import './SideBar.css';
import SearchBar from './SearchBar';

class SideBar extends React.Component {
  render() {
    return (
      <div className='sidebar'>
        <div className='sidebar-header'>
          Crop Circle
        </div>

        <SearchBar {...this.props} />

        <div className='instructions'>
          Type in one of the below to identify which photo it belongs to!
        </div>

        <ul>
          <li>Arugula</li>
          <li>Basil</li>
          <li>Bok Choy</li>
          <li>Kale</li>
          <li>Kohlrabi</li>
          <li>Lettuce</li>
          <li>Mustard Green</li>
          <li>Oakleaf</li>
          <li>Romaine</li>
        </ul>

        <div className='github'>
          <a href='https://github.com/raycchan/crop-circle'>github source code</a>
        </div>
      </div>
    );
  }
}

export default SideBar;
