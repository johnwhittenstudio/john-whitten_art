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
          <p><b>John Whitten</b> is a visual artist, educator, web developer, and community organizer based in Portland, Oregon. His work has been exhibited nationally and internationally, earning him various residencies, grants, and awards.
          <br />
          <br />
          John currently serves as director of <a href="https://www.wellwellprojects.com" target="_blank" rel="noopener noreferrer">Well Well Projects</a>, an artist-collective gallery he co-founded in 2021. In 2018, he co-founded <a href="https://www.carnationcontemporary.com" target="_blank" rel="noopener noreferrer">Carnation Contemporary</a>, another artist-collective gallery, and <a href="https://www.thunderstruckcollective.com" target="_blank" rel="noopener noreferrer">Thunderstruck</a>, a nomadic artist residency and exhibition project.</p>
        </div>
        <div className={classes.AboutIcons}>
          <div className={classes.AboutIcon} onClick={handleURL('mailto:johnwhitten.studio@gmail.com')}>
            <FiMail color="#555555" size='23px' />
          </div>
          <div className={classes.AboutIcon} onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')}>
            <FiInstagram color="#555555" size='23px' />
          </div>
          <div className={classes.AboutIcon} onClick={handleURL('https://github.com/johnwhittenstudio')}>
            <FiGithub color="#555555" size='23px' />
          </div>
          <div className={classes.AboutIcon} onClick={handleURL('https://www.linkedin.com/in/johnwhittenstudio/')}>
            <FiLinkedin color="#555555" size='23px' />
          </div>
          <div className={classes.AboutIcon} onClick={handleURL('https://www.youtube.com/channel/UC-V6tMaHcYExkqCy-NWzTxQ/featured')}>
            <FiYoutube color="#555555" size='23px' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
