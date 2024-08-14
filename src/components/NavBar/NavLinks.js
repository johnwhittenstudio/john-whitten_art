import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { FiMail  } from "react-icons/fi";
import { TiInfoOutline } from "react-icons/ti";
// import { GrSatellite } from "react-icons/gr";
// import { MdOutlineSatellite } from "react-icons/md";
// import { RiFlashlightLine } from "react-icons/ri";
import { BiHighlight } from "react-icons/bi";

import { FiInstagram } from "react-icons/fi";
import { CgHome } from "react-icons/cg";
import classes from './NavBar.module.css'

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}

const NavLinks = (props) => {

  const animateFrom = {opacity: 0, y: 0}
  const animateTo = {opacity: 1, y: 0}

  return ( 
    <ul>
      <motion.li 
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.05}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
          <Link to="/home" activestyle>
          <CgHome 
            color="#555555" size='25px' style={{padding: '0%', color: '#555555' }}
            />
          </Link>
      </motion.li>
      <motion.li 
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.10}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
          <Link to="/info" activestyle>
          <TiInfoOutline 
            color="#555555" size='28px' style={{padding: '0%'}}
            />
          </Link>
      </motion.li>
      <motion.li 
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.15}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
          <Link to="/highlights" activestyle>
          <BiHighlight 
            className={classes.CustomIcon}
            size="28px" 
            style={{ padding: '0%' }} 
          />
          </Link>
      </motion.li>
      <div className={classes.Social}>
        <motion.li 
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.20}}
          onClick={() => props.isMobile && props.closeMobileMenu()}>
          <FiMail color="#555555" size='25px' style={{padding: '0%'}}
            onClick={handleURL('mailto:johnwhitten.studio@gmail.com')} />
          </motion.li>
          <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.25}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
            <FiInstagram color="#555555" size='25px' style={{padding: '0%'}}
              onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
          </motion.li>
        </div>
    </ul>
  );
}

export default NavLinks;