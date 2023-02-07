import React from 'react'
import PropTypes from 'prop-types'


function Photo(props) {

  return (
    <React.Fragment>
      <div onClick= {() => props.whenPhotoClicked(props.id)}>
        <span><strong>{alert}</strong></span>
        <h3>Title{props.title}</h3>
        <h5>Description{props.description}</h5>
        <p>Size: <em>{props.size}</em></p>
        <hr id="cardhr" />
        <p>Year: <em>{props.year}%</em></p>
      </div>
    </React.Fragment>
  );
}

Photo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenPhotoClicked: PropTypes.func,
}

export default Photo;