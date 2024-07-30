import React, { useState, useEffect, useCallback } from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import classes from "./Drawings.module.css";
import data from "../../data/drawings.js";
import Drawing from "./Drawing.js";
import { paginate } from "../../utils/paginate";

function DrawingsIndex() {
  const [currentPage, setCurrentPage] = useState(0);
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
    console.log("Drawings data:", data.drawings);
    const { paginatedData, pageCount } = getPaginatedData(data.drawings, pageSize, currentPage);
    setPaginatedDataState(paginatedData);
    setPageCountState(pageCount);
    console.log("Paginated data:", paginatedData);
    console.log("Page count:", pageCount);
  }, [getPaginatedData, pageSize, currentPage]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className={classes.DrawingsIndexContainer}>
      <NavBar />
      <header >
        <Link to="/" activestyle>
          <div className={classes.Logo}>
            <h3><Link to="/">John Whitten</Link></h3>
          </div>
        </Link>
      </header >
      <div className={classes.DrawingAndTextContainer}>
        <div className={classes.DrawingsIndex}>
        {paginatedDataState.map((drawing, index) => (
            <Drawing
              key={index}
              title={<h4 className={classes.DrawingInfo}>{drawing?.title}</h4>}
              description={<p className={classes.DrawingInfo}>{drawing?.description}</p>}
              size={<p className={classes.DrawingInfo}>{drawing?.size}</p>}
              year={<p className={classes.DrawingInfo}>{drawing?.year}</p>}
              image={drawing?.image}
            />
          ))}
          <div className={classes.PaginationContainer}>
            <ReactPaginate
              pageCount={pageCountState}
              onPageChange={handlePageClick}
              forcePage={currentPage} // zero-based index
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              breakLabel={"..."}
              previousLabel={"<"}
              nextLabel={">"}
              containerClassName={classes.pagination}
              activeClassName={classes.active}
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawingsIndex;

