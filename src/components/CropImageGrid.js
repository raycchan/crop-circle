import React from 'react';
import PropTypes from 'prop-types'

import './CropImageGrid.scss';
import CropImage from './CropImage';

class CropImageGrid extends React.Component {
  render() {
    const { imageProperties } = this.props

    return (
      <div className="image-grid">
        {imageProperties.map(imageProperty => (
          <CropImage
            fileName={"/images/" + imageProperty.fileName}
            key={imageProperty.name}
            cropName={imageProperty.name}
            searchTerm={this.props.searchTerm} />
        ))}
      </div>
    );
  }
}

CropImageGrid.propTypes = {
  imageProperties: PropTypes.arrayOf(PropTypes.object)
};

export default CropImageGrid;
