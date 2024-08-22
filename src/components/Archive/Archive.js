import React from "react";

function Archive({ image, title, description, size, year, className }) {
  return (
    <div>
      <img src={image} alt={title} className={className} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{size}</p>
      <p>{year}</p>
    </div>
  );
}

export default Archive;