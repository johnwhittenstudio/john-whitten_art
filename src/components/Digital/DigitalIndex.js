import React, { useState, useEffect, useCallback } from "react";
import NavBar from "../NavBar/NavBar";
import ReactPaginate from 'react-paginate';
import classes from "./Digital.module.css";
import data from "../../data/digital.js";
import { paginate } from "../../utils/paginate";

function DigitalIndex() {
  const [currentPage, setCurrentPage] = useState(0);
  const [zoomed, setZoomed] = useState(false); // Add state to manage zoom
  const pageSize = 1; // Number of items per page

  const getPaginatedData = useCallback((data, pageSize, currentPage) => {
    if (!data || data.length === 0) {
      return { paginatedData: [], pageCount: 0 };
    }
    const paginatedData = paginate(data, pageSize, currentPage);
    const pageCount = Math.ceil(data.length / pageSize);
    return { paginatedData, pageCount };
  }, []);

  const [paginatedDataState, setPaginatedDataState] = useState([]);
  const [pageCountState, setPageCountState] = useState(0);

  useEffect(() => {
    const { paginatedData, pageCount } = getPaginatedData(data.digital, pageSize, currentPage);
    setPaginatedDataState(paginatedData);
    setPageCountState(pageCount);
  }, [getPaginatedData, pageSize, currentPage]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleImageClick = () => {
    setZoomed(!zoomed); // Toggle zoomed state on click
  };

  return (
    <div className={classes.DigitalIndexContainer}>
      <NavBar />
      <div className={classes.DigitalAndTextContainer}>
        <div className={classes.DigitalIndex}>
          {paginatedDataState.map((Digital, index) => (
            <div key={index} className={classes.DigitalInfo}>
              <h4>{Digital?.title}</h4>
              <p>{Digital?.description}</p>
              <p>{Digital?.size}</p>
              <p>{Digital?.year}</p>
              <br />
              <p>(click image to zoom)</p>
            </div>
          ))}
          <div className={classes.PaginationContainer}>
            <ReactPaginate
              pageCount={pageCountState}
              onPageChange={handlePageClick}
              forcePage={currentPage}
              marginPagesDisplayed={10}
              pageRangeDisplayed={2}
              previousLabel={"<"}
              nextLabel={">"}
              containerClassName={classes.pagination}
              activeClassName={classes.active}
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
        <div className={classes.Digital}>
          <img 
            src={paginatedDataState[0]?.image} 
            alt={paginatedDataState[0]?.title}
            className={zoomed ? classes.zoomed : ""} // Apply zoomed class based on state
            onClick={handleImageClick} // Toggle zoom on click
          />
        </div>
      </div>
    </div>
  );
}

export default DigitalIndex;
