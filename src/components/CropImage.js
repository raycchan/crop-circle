import React from 'react';
import PropTypes from 'prop-types'

import './CropImage.scss';

class CropImage extends React.Component {
  render() {
    const { cropName, searchTerm, src } = this.props

    return (
      <div className={cropName.toLowerCase() === searchTerm ? 'circled' : ''}>
        <img src={src} alt={cropName} />
      </div>
    );
  }
}

CropImage.propTypes = {
  cropName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default CropImage;
