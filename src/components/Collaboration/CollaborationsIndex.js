import React, { useState, useEffect, useCallback } from "react";
import NavBar from "../NavBar/NavBar";
import ReactPaginate from 'react-paginate';
import classes from "./Collaborations.module.css";
import data from "../../data/collaborations.js";
import { paginate } from "../../utils/paginate";

function CollaborationsIndex() {
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
    const { paginatedData, pageCount } = getPaginatedData(data.collaborations, pageSize, currentPage);
    setPaginatedDataState(paginatedData);
    setPageCountState(pageCount);
  }, [getPaginatedData, pageSize, currentPage]);

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
    <div className={classes.CollaborationsIndexContainer}>
      <NavBar />
      <div className={classes.CollaborationAndTextContainer}>
        <div className={classes.CollaborationsIndex}>
          {paginatedDataState.map((collaboration, index) => (
            <div key={index} className={classes.CollaborationInfo}>
              <h4>{collaboration?.title}</h4>
              <p>{collaboration?.year}</p>
              <p>{collaboration?.description}</p>
              <p>{collaboration?.size}</p>
              <br />
              <p>{collaboration?.click}</p>
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
        <div className={classes.Collaboration}>
          <div className={classes["img-container"]}>
            <a href={paginatedDataState[0]?.youtubeLink} target="_blank" rel="noopener noreferrer">
              <img 
                src={paginatedDataState[0]?.image} 
                alt={paginatedDataState[0]?.title}
                draggable="false" 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollaborationsIndex;
