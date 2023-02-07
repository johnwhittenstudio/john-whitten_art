import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types'

function PhotoList(props) {
  return (
    <React.Fragment>
      <h1 className="headingFont" style={{color: "black"}}>Currently On Tap</h1>
      <hr />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
      
      {props.photoList.map((photo) => 
        <div class="col mb-4">
          <div id="card" className="card shadow-lg h-100 text-left" >
            <br/>
            <Photo
              whenPhotoClicked = {props.onPhotoSelection}
              title={photo.title}
              description={photo.description}
              size={photo.size}
              year={photo.year}
              id={photo.id}
              key={photo.id}/>
          </div>
        </div>
        )}
      </div>
    </React.Fragment>
  );
}

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onPhotoSelection: PropTypes.func
};

export default PhotoList