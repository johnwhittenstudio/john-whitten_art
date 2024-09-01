import React, { useState } from "react";
import CollaborationsIndex from "./CollaborationsIndex";
import classes from "./Collaborations.module.css";
import collaborationsData from "../../data/collaborations.js";

function CollaborationGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [collaborationsPerPage] = useState(1);

  const indexOfLastCollaboration = currentPage * collaborationsPerPage;
  const indexOfFirstCollaboration = indexOfLastCollaboration - collaborationsPerPage;
  const currentCollaborations = collaborationsData.collaborations.slice(indexOfFirstCollaboration, indexOfLastCollaboration);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={classes.Collaborations}>
      <CollaborationsIndex collaboration={currentCollaborations} />
      <div className={classes.Pagination}>
        <ul>
          {Array.from({ length: Math.ceil(collaborationsData.length / collaborationsPerPage) }, (_, i) => (
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

export default CollaborationGallery;

