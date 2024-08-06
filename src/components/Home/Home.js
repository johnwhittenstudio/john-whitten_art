// import React from "react";
// import { Link } from "react-router-dom";
// import image01 from './../img/01.jpg';
// import image02 from './../img/02.jpg';
// import image03 from './../img/03.jpg';
// import image04 from './../img/00.png';
// import NavBar from "../NavBar/NavBar";
// import classes from './Home.module.css';

// const Home = () => {
//   return ( 
//     <div className={classes.HomeContainer}>
//       <NavBar />
//       <div className={classes.HomeGallery} id="homeGallery">
//         <div className={classes.HomeItem}>
//           <Link to="/drawing">
//             <img className={classes.HomeImage} src={image01} alt="1" />
//             <p className={classes.ImageText}>drawing</p>
//           </Link>
//         </div>
//         <div className={classes.HomeItem}>
//           <Link to="/digital">
//             <img className={classes.HomeImage} src={image02} alt="2" />
//             <p className={classes.ImageText}>digital</p>
//           </Link>
//         </div>
//         <div className={classes.HomeItem}>
//           <Link to="/collaborations">
//             <img className={classes.HomeImage} src={image03} alt="3" />
//             <p className={classes.ImageText}>collaborations</p>
//           </Link>
//         </div>
//         <div className={classes.HomeItem}>
//           <Link to="/video">
//             <img className={classes.HomeImage} src={image04} alt="4" />
//             <p className={classes.ImageText}>video</p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import image01 from './../img/01.jpg';
import image02 from './../img/02.jpg';
import image03 from './../img/03.jpg';
import image04 from './../img/00.png';
import NavBar from "../NavBar/NavBar";
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.HomeContainer}>
      <NavBar />
      <div className={classes.HomeGallery} id="homeGallery">
        <div className={classes.HomeItem}>
          <Link to="/drawing">
            <img className={classes.HomeImage} src={image01} alt="1" />
            <div className={classes.HomeItemOverlay}>
              <p className={classes.ImageText}>drawing</p>
            </div>
          </Link>
        </div>
        <div className={classes.HomeItem}>
          <Link to="/digital">
            <img className={classes.HomeImage} src={image02} alt="2" />
            <div className={classes.HomeItemOverlay}>
              <p className={classes.ImageText}>digital</p>
            </div>
          </Link>
        </div>
        <div className={classes.HomeItem}>
          <Link to="/collaborations">
            <img className={classes.HomeImage} src={image03} alt="3" />
            <div className={classes.HomeItemOverlay}>
              <p className={classes.ImageText}>collaborations</p>
            </div>
          </Link>
        </div>
        <div className={classes.HomeItem}>
          <Link to="/video">
            <img className={classes.HomeImage} src={image04} alt="4" />
            <div className={classes.HomeItemOverlay}>
              <p className={classes.ImageText}>video</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
