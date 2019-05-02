import React from 'react';
import PropTypes from 'prop-types'

import './CropImage.scss';

class CropImage extends React.Component {
  render() {
    const { cropName, searchTerm, fileName } = this.props

    return (
      <div className={cropName.toLowerCase() === searchTerm ? 'circled' : ''}>
        <img src={fileName} alt={cropName} />
      </div>
    );
  }
}

CropImage.propTypes = {
  cropName: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired
};

export default CropImage;
