import React from 'react';
import { Link } from "react-router-dom";
import classes from './LandingPage.module.css';
import logo from './../img/logos/jw-logo_lp.png';

const LandingPage = () => {
  return (
    <div className={classes.LandingPage}>
      <header className={classes.Header}>
        <div className={classes.LogoWrapper}>
          <img src={logo} alt="Logo" className={classes.Logo} />
        </div>
        {/* <h1>John Whitten</h1> */}
      </header>
      <main>
        <Link to="/home">
          <button>Enter</button>
        </Link>
      </main>
    </div>
  );
};

export default LandingPage;