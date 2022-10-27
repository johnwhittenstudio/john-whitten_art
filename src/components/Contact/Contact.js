import React from "react";
import { FaYoutube, FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import bio from './../img/bio.JPG'
import classes from './Contact.module.css'

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}

const Contact = () => {
  return ( 
    <div className={classes.Contact} id="contact">
      <div className={classes.Text} >
        <img className={classes.Bio} src={bio} alt="me"></img>
        <p>please get in touch</p>
      </div>
      <div className={classes.ContactIcons}>
        <GrMail color="008c95" size='30px' style={{padding: '1%'}}
          onClick={handleURL('mailto:johnwhitten.studio@gmail.com')} />
        <FaInstagramSquare color="008c95" size='30px' style={{padding: '1%'}}
          onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
        <FaGithub color="008c95" size='30px' style={{padding: '1%'}}
          onClick={handleURL('https://github.com/johnwhittenstudio')} />
        <FaLinkedin color="008c95" size='30px' style={{padding: '1%'}}
          onClick={handleURL('https://www.linkedin.com/in/johnwhittenstudio/')} />
        <FaYoutube color="008c95" size='30px' style={{padding: '1%'}}
          onClick={handleURL('https://www.youtube.com/channel/UC-V6tMaHcYExkqCy-NWzTxQ/featured')} />
    </div>
    </div>
   );
}
 
export default Contact;