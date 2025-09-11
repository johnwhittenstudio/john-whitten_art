import React, { useState } from "react";
import PhotographysIndex from "./PhotographyIndex.js";
import classes from "./Photographys.module.css";
import photographysData from "../../data/photographys.js";

function PhotographyGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [photographysPerPage] = useState(1);

  const indexOfLastPhotography = currentPage * photographysPerPage;
  const indexOfFirstPhotography = indexOfLastPhotography - photographysPerPage;
  const currentPhotographys = photographysData.photographys.slice(indexOfFirstPhotography, indexOfLastPhotography);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={classes.Photographys}>
      <PhotographysIndex photography={currentPhotographys} />
      <div className={classes.Pagination}>
        <ul>
          {Array.from({ length: Math.ceil(photographysData.length / photographysPerPage) }, (_, i) => (
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

export default PhotographyGallery;

