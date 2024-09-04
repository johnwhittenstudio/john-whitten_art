import React from "react";

function Collaboration({ image, title, description, size, year, click, className }) {
  return (
    <div>
      <img src={image} alt={title} className={className} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{size}</p>
      <p>{year}</p>
      <p>{click}</p>
    </div>
  );
}

export default Collaboration;