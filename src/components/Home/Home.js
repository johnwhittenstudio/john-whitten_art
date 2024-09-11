import React from "react";
import { Link } from "react-router-dom";
import image01 from './../img/clouds.jpg';
import image02 from './../img/pigeon.jpg';
import image03 from './../img/salt_01.jpg';
import image04 from './../img/waves_b.jpg';
import NavBar from "../NavBar/NavBar";
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.HomeContainer}>
      <NavBar />
      <div className={classes.HomeGallery} id="homeGallery">
      <div className={classes.HomeItem}>
          <Link to="/drawing">
            <img className={classes.HomeImage} src={image01} alt="drawing gallery" />
            <div className={classes.HomeItemOverlay}>
              <p className={classes.ImageText}>drawing</p>
            </div>
            <p className={classes.ImageTextBelow}>drawing</p>
          </Link>
        </div>
        <div className={classes.HomeItem}>
          <Link to="/digital">
            <img className={classes.HomeImage} src={image03} alt="digital gallery" />
            <div className={classes.HomeItemOverlay}>
              <p className={classes.ImageText}>digital</p>
            </div>
            <p className={classes.ImageTextBelow}>digital</p>
          </Link>
        </div>
        <div className={classes.HomeItem}>
          <Link to="/collaboration">
            <img className={classes.HomeImage} src={image02} alt="collaboration gallery" />
            <div className={classes.HomeItemOverlay}>
              <p className={classes.ImageText}>collaboration</p>
            </div>
            <p className={classes.ImageTextBelow}>collaboration</p>
          </Link>
        </div>
        <div className={classes.HomeItem}>
          <Link to="/archive">
            <img className={classes.HomeImage} src={image04} alt="archive gallery" />
            <div className={classes.HomeItemOverlay}>
              <p className={classes.ImageText}>archive</p>
            </div>
            <p className={classes.ImageTextBelow}>archive</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
