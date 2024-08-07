import React, { useState } from "react";
import DigitalIndex from "./DigitalIndex";
import classes from "./Digital.module.css";
import digitalData from "../../data/digital.js";

function DigitalGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [digitalPerPage] = useState(1);

  const indexOfLastDigital = currentPage * digitalPerPage;
  const indexOfFirstDigital = indexOfLastDigital - digitalPerPage;
  const currentDigital = digitalData.digital.slice(indexOfFirstDigital, indexOfLastDigital);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={classes.Digital}>
      <DigitalIndex Digital={currentDigital} />
      <div className={classes.Pagination}>
        <ul>
          {Array.from({ length: Math.ceil(digitalData.length / digitalPerPage) }, (_, i) => (
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

export default DigitalGallery;

