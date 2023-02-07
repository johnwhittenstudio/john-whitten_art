import React from "react";
import NavBar from "../NavBar/NavBar"
import DrawingList from './DrawingsIndex';
// import DrawingDetail from './DrawingDetail';
import data from './data';
import classes from './Drawings.module.css'

function GalleryDrawing() {
  const { drawings } = data;

  return (
    <div className={classes.Shop}>
          <NavBar />
      {/* <Header countCartItems={cartItems.length}></Header> */}
      <div className={classes.row}>
        <DrawingList drawings={drawings} ></DrawingList>

      </div>
    </div>
  );
}

export default GalleryDrawing;