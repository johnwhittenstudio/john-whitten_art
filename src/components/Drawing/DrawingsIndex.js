import React, { useState, useEffect, useCallback } from "react";
import ReactPaginate from 'react-paginate';
import classes from "./Drawings.module.css";
import data from "../../data/drawings.js";
import Drawing from "./Drawing.js";
import { paginate } from "../../utils/paginate";

function DrawingsIndex() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4; // Change this to the number of items you want to display per page

  const getPaginatedData = useCallback((data, pageSize, currentPage) => {
    const paginatedData = paginate(data, pageSize, currentPage);
    const pageCount = Math.ceil(data.length / pageSize);
    return { paginatedData, pageCount };
  }, []);

  const [paginatedDataState, setPaginatedDataState] = useState([]);
  const [pageCountState, setPageCountState] = useState(0);

  useEffect(() => {
    const { paginatedData, pageCount } = getPaginatedData(data.drawings, pageSize, currentPage);
    setPaginatedDataState(paginatedData);
    setPageCountState(pageCount);
  }, [getPaginatedData, pageSize, currentPage]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <div className={classes.DrawingsIndexContainer}>
      <div className={classes.DrawingsIndex}>
        <Drawing
          title={<h4 className={classes.DrawingInfo}>{paginatedDataState[0]?.title}</h4>}
          description={<p className={classes.DrawingInfo}>{paginatedDataState[0]?.description}</p>}
          size={<span className={classes.DrawingInfo}>{paginatedDataState[0]?.size}</span>}
          year={<span className={classes.DrawingInfo}>{paginatedDataState[0]?.year}</span>}
          image={paginatedDataState[0]?.image}
        />
      </div>
      <div className={classes.PaginationContainer}>
        <ReactPaginate
          pageCount={pageCountState}
          onPageChange={handlePageClick}
          forcePage={currentPage - 1} // subtract 1 here
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          breakLabel={"/"}
          previousLabel={"Prev"}
          nextLabel={"Next"}
          containerClassName={classes.pagination}
          activeClassName={classes.active}
        />
      </div>
    </div>
  );
}

export default DrawingsIndex;


