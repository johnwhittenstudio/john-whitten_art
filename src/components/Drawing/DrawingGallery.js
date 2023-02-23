import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import DrawingsIndex from "./DrawingsIndex";
import classes from "./Drawings.module.css";
import drawingsData from "../../data/drawings.js";

function DrawingGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [drawingsPerPage] = useState(1);

  const indexOfLastDrawing = currentPage * drawingsPerPage;
  const indexOfFirstDrawing = indexOfLastDrawing - drawingsPerPage;
  const currentDrawings = drawingsData.drawings.slice(indexOfFirstDrawing, indexOfLastDrawing);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={classes.Drawings}>
      <NavBar />
      <DrawingsIndex drawings={currentDrawings} />
      <div className={classes.Pagination}>
        <ul>
          {Array.from({ length: Math.ceil(drawingsData.length / drawingsPerPage) }, (_, i) => (
            <li key={i}>
              <button className={classes.PaginationButton} onClick={() => paginate(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DrawingGallery;
