import React from 'react';
import PropTypes from 'prop-types'
import './CropImageGrid.css';
import CropImage from './CropImage';

class CropImageGrid extends React.Component {
  render() {
    const { imageProperties } = this.props

    return (
      <div className="image-grid">
        {imageProperties.map(imageProperty => (
          <CropImage src={imageProperty.src} key={imageProperty.name} />
        ))}
      </div>
    );
  }
}

CropImageGrid.propTypes = {
  imageProperties: PropTypes.arrayOf(PropTypes.object)
};

export default CropImageGrid;
