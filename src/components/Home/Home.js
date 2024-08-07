import React from "react";
import { Link } from "react-router-dom";
import image01 from './../img/06.jpg';
import image02 from './../img/00.png';
import image03 from './../img/01.jpg';
import image04 from './../img/09.jpg';
import NavBar from "../NavBar/NavBar";
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.HomeContainer}>
      <NavBar />
      <div className={classes.HomeGallery} id="homeGallery">
      <div className={classes.HomeItem}>
          <Link to="/drawings">
            <img className={classes.HomeImage} src={image01} alt="drawing gallery" />
            <div className={classes.HomeItemOverlay}>
              <p className={classes.ImageText}>drawings</p>
            </div>
            <p className={classes.ImageTextBelow}>drawings</p>
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
          <Link to="/collaborations">
            <img className={classes.HomeImage} src={image02} alt="collaborations gallery" />
            <div className={classes.HomeItemOverlay}>
              <p className={classes.ImageText}>collaborations</p>
            </div>
            <p className={classes.ImageTextBelow}>collaborations</p>
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
