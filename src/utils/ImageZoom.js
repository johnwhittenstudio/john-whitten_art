import React from 'react';
import './ImageZoom.css'; // Import CSS for zoom effect

const ImageZoom = ({ src, alt }) => {
  return (
    <div className="image-zoom-container">
      <img
        className="image-zoom"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default ImageZoom;