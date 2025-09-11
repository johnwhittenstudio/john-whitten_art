import React, { useState, useEffect, useCallback } from "react";
import NavBar from "../NavBar/NavBar.js";
import ReactPaginate from 'react-paginate';
import classes from "./Photographys.module.css";
import data from "../../data/photographys.js";
import { paginate } from "../../utils/paginate.js";

function PhotographysIndex() {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 1;

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
    const { paginatedData, pageCount } = getPaginatedData(data.photographys, pageSize, currentPage);
    setPaginatedDataState(paginatedData);
    setPageCountState(pageCount);
  }, [getPaginatedData, pageSize, currentPage]);

  // Disable Right-Click Context Menu
  useEffect(() => {
    const disableContextMenu = (e) => {
      e.preventDefault();
    };
    
    document.addEventListener('contextmenu', disableContextMenu);

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
    };
  }, []);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className={classes.PhotographysIndexContainer}>
      <NavBar />
      <div className={classes.PhotographyAndTextContainer}>
        <div className={classes.PhotographysIndex}>
          {paginatedDataState.map((photography, index) => (
            <div key={index} className={classes.PhotographyInfo}>
              <h4>{photography?.title}</h4>
              <p>{photography?.description}</p>
              <p>{photography?.size}</p>
              <p>{photography?.year}</p>
              <br />
            </div>
          ))}
          <div className={classes.PaginationContainer}>
            <ReactPaginate
              breakLabel="..."
              pageCount={pageCountState}
              onPageChange={handlePageClick}
              forcePage={currentPage}
              marginPagesDisplayed={1}
              pageRangeDisplayed={4}
              previousLabel={"<"}
              nextLabel={">"}
              containerClassName={classes.pagination}
              activeClassName={classes.active}
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
        <div className={classes.Photography}>
          <div className={classes["img-container"]}>
            <img 
              src={paginatedDataState[0]?.image} 
              alt={paginatedDataState[0]?.title}
              draggable="false" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotographysIndex;
