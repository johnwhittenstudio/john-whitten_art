// import React from "react";
// import classes from "./Drawings.module.css";
// import data from "../../data/drawings.js";
// import Drawing from "./Drawing.js";

// function DrawingsIndex() {
//   return (
//     <div className={classes.DrawingsIndex}>
//       {data.drawings.map((drawing) => (
//         <div key={drawing.id} className={classes.Column}>
//           <div className={classes.Container}>
//             <Drawing
//               src={drawing.image}
//               alt={drawing.title}
//               className={classes.DrawingsCover}
//             />
//             <div className={classes.Text}>
//               <h3>{drawing.title}</h3>
//               <p>{drawing.description}</p>
//               <p>{drawing.size}</p>
//               <p>{drawing.year}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DrawingsIndex;



// import React, { useState } from "react";
// import classes from "./Drawings.module.css";
// import data from "../../data/drawings.js";
// import Drawing from "./Drawing.js";

// function DrawingsIndex() {
//   const [currentDrawingIndex, setCurrentDrawingIndex] = useState(0);

//   const handlePrevClick = () => {
//     if (currentDrawingIndex > 0) {
//       setCurrentDrawingIndex(currentDrawingIndex - 1);
//     }
//   };

//   const handleNextClick = () => {
//     if (currentDrawingIndex < data.drawings.length - 1) {
//       setCurrentDrawingIndex(currentDrawingIndex + 1);
//     }
//   };

//   return (
//     <div className={classes.DrawingsIndex}>
//       <div className={classes.DrawingsPagination}>
//         <button onClick={handlePrevClick} disabled={currentDrawingIndex === 0}>
//           Prev
//         </button>
//         <span>{`${currentDrawingIndex + 1} / ${data.drawings.length}`}</span>
//         <button
//           onClick={handleNextClick}
//           disabled={currentDrawingIndex === data.drawings.length - 1}
//         >
//           Next
//         </button>
//       </div>
//       <div className={classes.DrawingsContainer}>
//         <Drawing
//           title={data.drawings[currentDrawingIndex].title}
//           description={data.drawings[currentDrawingIndex].description}
//           size={data.drawings[currentDrawingIndex].size}
//           year={data.drawings[currentDrawingIndex].year}
//           image={data.drawings[currentDrawingIndex].image}
//         />
//       </div>
//     </div>
//   );
// }

// export default DrawingsIndex;






// import React, { useState } from "react";
// import Pagination from "react-bootstrap/Pagination";
// import classes from "./Drawings.module.css";
// import data from "../../data/drawings.js";
// import Drawing from "./Drawing.js";
// import { paginate } from "../../utils/paginate";

// function DrawingsIndex() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 1; // Change this to the number of items you want to display per page
//   const paginatedData = paginate(data.drawings, pageSize, currentPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className={classes.DrawingsIndex}>
//       {paginatedData.map((drawing) => (
//         <Drawing
//           key={drawing.id}
//           title={drawing.title}
//           description={drawing.description}
//           size={drawing.size}
//           year={drawing.year}
//           image={drawing.image}
//         />
//       ))}
//       <Pagination
//         itemsCount={data.drawings.length}
//         pageSize={pageSize}
//         onPageChange={handlePageChange}
//         currentPage={currentPage}
//       />
//     </div>
//   );
// }

// export default DrawingsIndex;



import React, { useState } from "react";
import ReactPaginate from 'react-paginate';
import classes from "./Drawings.module.css";
import data from "../../data/drawings.js";
import Drawing from "./Drawing.js";
import { paginate } from "../../utils/paginate";

function DrawingsIndex() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const pageSize = 4; // Change this to the number of items you want to display per page
  const paginatedData = paginate(data.drawings, pageSize, pageCount, currentPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePageCount = (pageCount) => {
    setPageCount(pageCount);
  };

  return (
    <div className={classes.DrawingsIndexContainer}>
      <div className={classes.DrawingsIndex}>
        {/* <div className={classes.DrawingInfo}> */}
        <Drawing
          title={<h4 className={classes.DrawingInfo}>{paginatedData[0].title}</h4>}
          description={<p className={classes.DrawingInfo}>{paginatedData[0].description}</p>}
          size={<span className={classes.DrawingInfo}>{paginatedData[0].size}</span>}
          year={<span className={classes.DrawingInfo}>{paginatedData[0].year}</span>}
          image={paginatedData[0].image}
        />
        {/* </div> */}
      </div>
      <div className={classes.PaginationContainer}>
      <ReactPaginate
        onPageCount={handlePageCount}
        forceCount={pageCount - 1}
        onPageChange={handlePageChange}
        forcePage={currentPage - 1} // subtract 1 here
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        breakLabel="..."
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
