import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import classes from './Video.module.css';
import bio from './../img/about.jpg';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Video = () => (
  <main>
    <div className={classes.Video}>
      <NavBar />
      <header>
        <Link to="/" activestyle>
          <div className={classes.Logo}>
            <h3><Link to="/">John Whitten</Link></h3>
          </div>
        </Link>
      </header>
      <Zoom>
        <div className={classes.ImageContainer}>
          <img src={bio} alt="Bio" style={{ width: '1000px', height: '667px' }} />
        </div>
      </Zoom>
    </div>
  </main>
);

export default Video;