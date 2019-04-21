import React from 'react';

import CropImageGrid from './CropImageGrid'
import imageProperties from './../data/ImageProperties'

class CropView extends React.Component {
  render() {
    return (
      <CropImageGrid
        imageProperties={imageProperties}
        searchTerm={this.props.searchTerm} />
    );
  }
}

export default CropView;
