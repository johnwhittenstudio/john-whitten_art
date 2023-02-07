import React from 'react';
import PhotoList from './PhotoList';
import PhotoDetail from './PhotoDetail';
import PhotoData from './PhotoData';

class PhotoControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPhotoList: PhotoData,
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPhoto != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPhoto: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage 
      }));
    } 
  }


  handleChangingSelectedPhoto = (id) => {
    const selectedPhoto =this.state.mainPhotoList.filter(photo => photo.id === id)[0];
    this.setState({selectedPhoto: selectedPhoto});
  }




  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedPhoto != null) {
      currentlyVisibleState = <PhotoDetail 
        photo={this.state.selectedPhoto} />
      buttonText= "Return to Photo List";
    } else {
      currentlyVisibleState = <PhotoList photoList={this.state.mainPhotoList} onPhotoSelection = {this.handleChangingSelectedPhoto}/>
      buttonText= "ooooo";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn shadow deleteBtn btn-outline-secondary" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default PhotoControl;