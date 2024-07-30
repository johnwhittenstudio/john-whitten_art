import { FaYoutube, FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";
import bio from './../img/about.jpg'
import NavBar from "../NavBar/NavBar"
import classes from './About.module.css'

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}

const About = () => {
  return ( 
    <div className={classes.AboutContainer}>
        <NavBar />
        <header >
        <Link to="/" activestyle>
          <div className={classes.Logo}>
            <h3><Link to="/">John Whitten</Link></h3>
          </div>
        </Link>
        </header >
        <div className={classes.About} id="about">
            <img className={classes.Bio} src={bio} alt="me"></img>
          <div className={classes.Text} >
            <p>John Whitten is a visual artist, art educator, and web developer with his home and studio located in Portland, OR. <br/><br/> Whitten co-founded the artist-collective galleries Well Well Projects and Carnation Contemporary and the artist-collective project Thunderstruck.</p>
          </div>
          <div className={classes.AboutIcons}>
            <GrMail color="#555555" size='25px' style={{padding: '1%'}}
              onClick={handleURL('mailto:johnwhitten.studio@gmail.com')} />
            <FaInstagramSquare color="#555555" size='25px' style={{padding: '1%'}}
              onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
            <FaGithub color="#555555" size='25px' style={{padding: '1%'}}
              onClick={handleURL('https://github.com/johnwhittenstudio')} />
            <FaLinkedin color="#555555" size='25px' style={{padding: '1%'}}
              onClick={handleURL('https://www.linkedin.com/in/johnwhittenstudio/')} />
            <FaYoutube color="#555555" size='25px' style={{padding: '1%'}}
              onClick={handleURL('https://www.youtube.com/channel/UC-V6tMaHcYExkqCy-NWzTxQ/featured')} />
        </div>
      </div>
    </div>
   );
}
 
export default About;