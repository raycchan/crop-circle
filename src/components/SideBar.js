import React from 'react';

import './SideBar.scss';
import imageProperties from './../data/ImageProperties'
import SearchBar from './SearchBar';

class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.imageProperties = imageProperties
  }

  cropNames() {
    return this.imageProperties.map(property => (property.name)).sort()
  }

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
          {this.cropNames().map(name => (<li key={name}>{name}</li>))}
        </ul>

        <div className='github'>
          <a href='https://github.com/raycchan/crop-circle' target='blank'>
            github source code
          </a>
        </div>
      </div>
    );
  }
}

export default SideBar;
