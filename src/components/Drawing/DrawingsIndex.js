import React from "react";
// import { Link } from 'react-router-dom';
import classes from './Drawings.module.css'
import rock from './../Drawing/img/rock.png'
import water from './../Drawing/img/water.png'
import dirt from './../Drawing/img/dirt.png'

function DrawingsIndexPage({ drawings }) {

  return (
    <>
    <div className={classes.Drawings}>
      <div className={classes.DrawingsIndex}>
        {/* <h2 className={classes.Header}>view our exhibitions</h2> */}
          <div className={classes.Container}>
            <div className={classes.Row}>
              <div className={classes.Column}>
              {/* <Link to="/exhibitions/ts1"> */}
                    <img className={classes.DrawingsCover} src={rock} alt="me"></img>
                    <div className={classes.Text}>
                      <h3>46.2496° N, 122.1369° W</h3>
                      <p>graphite pencil on paper,</p>
                      <p>22 x 30 inches,</p>
                      <p>2022</p>
                    </div>
                    {/* <hr color="008c95" width='1000px'></hr> */}
              {/* </Link> */}
              {/* <Link to="/exhibitions/ts2"> */}
                    <img className={classes.DrawingsCover} src={water} alt="me"></img>
                    <div className={classes.Text}>
                      <h3>46.2956° N, 122.2522° W</h3>
                      <p>graphite pencil on paper,</p>
                      <p>22 x 30 inches,</p>
                      <p>2022</p>
                    </div>
              {/* </Link> */}
              {/* <Link to="/exhibitions/ts2"> */}
                    <img className={classes.DrawingsCover} src={dirt} alt="me"></img>
                    <div className={classes.Text}>
                      <h3>38.1123° N, 109.5311° W</h3>
                      <p>graphite pencil on paper,</p>
                      <p>22 x 30 inches,</p>
                      <p>2022</p>
                    </div>
              {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default DrawingsIndexPage;