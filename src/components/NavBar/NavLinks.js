import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { FaInstagramSquare } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import classes from './NavBar.module.css'

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}

const NavLinks = (props) => {

  const animateFrom = {opacity: 0, y: 0}
  const animateTo = {opacity: 1, y: 0}

  return ( 
    <ul>
      {/* <Link to="/" activestyle>
        <div className={classes.Logo}>
          <h3><Link to="/">John Whitten</Link></h3>
        </div>
      </Link> */}
      <motion.li 
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.05}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
          <Link to="/drawing" activestyle>
            drawing
          </Link>
      </motion.li>
      <motion.li 
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.10}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
          <Link to="/photo" activestyle>
            photo
          </Link>
      </motion.li>
      <motion.li 
        initial={animateFrom}
        animate={animateTo}        
        transition={{delay: 0.20}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
          <Link to="/video" activestyle>
            video
          </Link>
      </motion.li>
      <motion.li 
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.30}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
          <Link to="/about" activestyle>
            about
          </Link>
      </motion.li>
      <div className={classes.Social}>
        <motion.li 
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.40}}
          onClick={() => props.isMobile && props.closeMobileMenu()}>
          <GrMail color="#555555" size='25px' style={{padding: '0%'}}
            onClick={handleURL('mailto:johnwhitten.studio@gmail.com')} />
          </motion.li>
          <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.50}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
            <FaInstagramSquare color="#555555" size='25px' style={{padding: '0%'}}
              onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
          </motion.li>
        </div>
    </ul>
  );
}

export default NavLinks;