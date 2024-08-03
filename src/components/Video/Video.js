import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import ImageZoom from '../../utils/ImageZoom';
import classes from './Video.module.css';
import bio from './../img/rock.png';

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
      <div className={classes.ImageContainer}>
        <ImageZoom
          src={bio}
          alt="Bio"
        />
      </div>
    </div>
  </main>
);

export default Video;
