import React from 'react';
import PropTypes from 'prop-types'
import './CropImage.css';

class CropImage extends React.Component {
  render() {
    const { src } = this.props

    return (
      <img src={src} alt='crop' />
    );
  }
}

CropImage.propTypes = {
  src: PropTypes.string.isRequired
};

export default CropImage;
