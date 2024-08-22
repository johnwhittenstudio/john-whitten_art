import React, { useState } from "react";
import ArchivesIndex from "./ArchivesIndex";
import classes from "./Archives.module.css";
import archivesData from "../../data/archives.js";

function ArchiveGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [archivesPerPage] = useState(1);

  const indexOfLastArchive = currentPage * archivesPerPage;
  const indexOfFirstArchive = indexOfLastArchive - archivesPerPage;
  const currentArchives = archivesData.archives.slice(indexOfFirstArchive, indexOfLastArchive);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={classes.Archives}>
      <ArchivesIndex digital={currentArchives} />
      <div className={classes.Pagination}>
        <ul>
          {Array.from({ length: Math.ceil(archivesData.length / archivesPerPage) }, (_, i) => (
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

export default ArchiveGallery;

