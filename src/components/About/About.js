import { FiYoutube, FiInstagram, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import bio from './../img/about.jpg';
import NavBar from "../NavBar/NavBar";
import classes from './About.module.css';

const handleURL = (url) => {
  return () => window.open(url, "_blank");
}

const About = () => {
  return (
    <div className={classes.AboutContainer}>
      <NavBar />
      <div className={classes.About} id="about">
        <img className={classes.Bio} src={bio} alt="me" />
        <div className={classes.Text}>
          <p>John Whitten is a visual artist, educator, and web developer with his home and studio located in Portland, OR. His work has been exhibited nationally and internationally, and he's been the recipient of numerous residencies, grants, and awards.
          <br />
          <br />
          John currently serves as director of the artist-collective gallery <a href="https://www.wellwellprojects.com" target="_blank" rel="noopener noreferrer">Well Well Projects</a>, which he co-founded in 2021. In 2018, he co-founded the artist-collective gallery <a href="https://www.carnationcontemporary.com" target="_blank" rel="noopener noreferrer">Carnation Contemporary</a> and the nomadic artist residency and exhibition project <a href="https://www.thunderstruckcollective.com" target="_blank" rel="noopener noreferrer">Thunderstruck</a>.</p>
        </div>
        <div className={classes.AboutIcons}>
          <div className={classes.AboutIcon} onClick={handleURL('mailto:johnwhitten.studio@gmail.com')}>
            <FiMail color="#555555" size='30px' />
          </div>
          <div className={classes.AboutIcon} onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')}>
            <FiInstagram color="#555555" size='30px' />
          </div>
          <div className={classes.AboutIcon} onClick={handleURL('https://github.com/johnwhittenstudio')}>
            <FiGithub color="#555555" size='30px' />
          </div>
          <div className={classes.AboutIcon} onClick={handleURL('https://www.linkedin.com/in/johnwhittenstudio/')}>
            <FiLinkedin color="#555555" size='30px' />
          </div>
          <div className={classes.AboutIcon} onClick={handleURL('https://www.youtube.com/channel/UC-V6tMaHcYExkqCy-NWzTxQ/featured')}>
            <FiYoutube color="#555555" size='30px' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
