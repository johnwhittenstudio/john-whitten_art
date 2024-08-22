import React, { useState, useEffect, useCallback } from "react";
import NavBar from "../NavBar/NavBar";
import ReactPaginate from 'react-paginate';
import classes from "./Archives.module.css";
import data from "../../data/archives.js";
import { paginate } from "../../utils/paginate";

function ArchivesIndex() {
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
    const { paginatedData, pageCount } = getPaginatedData(data.archives, pageSize, currentPage);
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
    <div className={classes.ArchivesIndexContainer}>
      <NavBar />
      <div className={classes.ArchiveAndTextContainer}>
        <div className={classes.ArchivesIndex}>
          {paginatedDataState.map((archive, index) => (
            <div key={index} className={classes.ArchiveInfo}>
              <h4>{archive?.title}</h4>
              <p>{archive?.description}</p>
              <p>{archive?.size}</p>
              <p>{archive?.year}</p>
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
        <div className={`${classes.Archive} ${isZoomed ? classes.zoomed : ''}`}>
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

export default ArchivesIndex;
