import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import classes from './Home.module.css'

const Home = () => (
  <main>
    <div className={classes.Home}>
    <NavBar />
    <header >
    <Link to="/" activestyle>
        <div className={classes.Logo}>
          <h3><Link to="/">John Whitten</Link></h3>
        </div>
      </Link>
      </header >
    {/* <h2>Welcome to my portfolio!</h2>
    <p>Here you will find information about my projects and experience.</p> */}
    </div>
  </main>
);

export default Home;