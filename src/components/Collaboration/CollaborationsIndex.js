import React, { useState, useEffect, useCallback } from "react";
import NavBar from "../NavBar/NavBar";
import ReactPaginate from 'react-paginate';
import classes from "./Collaborations.module.css";
import data from "../../data/collaborations.js";
import { paginate } from "../../utils/paginate";

function CollaborationsIndex() {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 1;
  const [isZoomed, setIsZoomed] = useState(false); // State for zoom

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
    const { paginatedData, pageCount } = getPaginatedData(data.collaborations, pageSize, currentPage);
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
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className={classes.CollaborationsIndexContainer}>
      <NavBar />
      <div className={classes.CollaborationAndTextContainer}>
        <div className={classes.CollaborationsIndex}>
          {paginatedDataState.map((collaboration, index) => (
            <div key={index} className={classes.CollaborationInfo}>
              <h4>{collaboration?.title}</h4>
              <p>{collaboration?.description}</p>
              <p>{collaboration?.size}</p>
              {/* <p>{collaboration?.year}</p> */}
              <br />
              <p>(click image to zoom)</p>
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
        <div className={`${classes.Collaboration} ${isZoomed ? classes.zoomed : ''}`}>
          <div 
            className={`${classes["img-container"]} ${isZoomed ? classes.zoomed : ''}`}
            onClick={toggleZoom}
          >
            <img 
              src={paginatedDataState[0]?.image} 
              alt={paginatedDataState[0]?.title}
              className={isZoomed ? classes.zoomed : ''}
              draggable="false" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollaborationsIndex;
