import React from 'react';
import classes from './Drawing.module.css'

export default function drawing(props) {
  const { drawing } = props;
  return (
    <div className={classes.merchCard}>
      <img className={classes.small} src={drawing.image} alt={drawing.title} />
      <h3 style={{fontSize: "1rem", color: "rgb(0, 31, 97)"}}>{drawing.title}</h3>
      <p style={{fontSize: "0.9rem", color: "rgb(0, 31, 97)"}}>{drawing.description}</p>
      <div style={{fontSize: "1rem", color: "rgb(0, 31, 97)"}}>${drawing.size}.00</div>
      <div style={{fontSize: "1rem", color: "rgb(0, 31, 97)"}}>${drawing.year}</div>
      <br></br>
      <div>
      </div>
      <hr className={classes.hr}/>
    </div>
  );
}