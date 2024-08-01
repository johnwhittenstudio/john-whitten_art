import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import classes from './Video.module.css';
import bio from './../img/rock.png';
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
          <img 
            src={bio} 
            alt="Bio" 
            style={{ 
              width: '1000px', 
              height: '667px', 
              // backgroundColor: '#000000',
              backgroundPosition: '50%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              // height: '50%',
              // paddingBottom: '56%',
              // width: '50%',
            }} />
        </div>
      </Zoom>
    </div>
  </main>
);

export default Video;