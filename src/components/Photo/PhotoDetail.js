import React from 'react'
import PropTypes from 'prop-types'

function PhotoDetail(props) {
  const { photo } = props;

  return (
    <React.Fragment>
      <div className="card shadow-lg w-75 mx-auto" style={{fontSize: 24, color: "black"}}>
        <div className="headingFont card-header text-center text-black" style={{fontSize: 24, backgroundColor: "#ffdcd2", color: "black"}}><em>photo Details</em></div>
          <div className="card-body">
            <div class="row">
              <h2><strong>{photo.title}</strong></h2>
            </div>
            <h3><strong>{photo.description}</strong></h3>
            <h5><em>{photo.size}</em></h5>
            <hr />
            <p>Year: <em>{photo.year}%</em></p>
          </div>
          <div className="card-footer justify-content-center" style={{backgroundColor: "white"}}>
        </div>
      </div>
    </React.Fragment>
  );
}

PhotoDetail.propTypes = {
  photo: PropTypes.object,
}

export default PhotoDetail