import React, { useState } from "react";
import DigitalsIndex from "./DigitalsIndex";
import classes from "./Digitals.module.css";
import digitalsData from "../../data/digitals.js";

function DigitalGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [digitalsPerPage] = useState(1);

  const indexOfLastDigital = currentPage * digitalsPerPage;
  const indexOfFirstDigital = indexOfLastDigital - digitalsPerPage;
  const currentDigitals = digitalsData.digitals.slice(indexOfFirstDigital, indexOfLastDigital);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={classes.Digitals}>
      <DigitalsIndex digital={currentDigitals} />
      <div className={classes.Pagination}>
        <ul>
          {Array.from({ length: Math.ceil(digitalsData.length / digitalsPerPage) }, (_, i) => (
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

