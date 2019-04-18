import React from 'react';
import PropTypes from 'prop-types'

class ImageGrid extends React.Component {
  renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl} alt='crop' />
      </div>
    );
  }

  render() {
    return (
      <div className="image-grid">
        {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
      </div>
    );
  }
}

ImageGrid.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImageGrid;