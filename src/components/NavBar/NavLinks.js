import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css'

const NavLinks = (props) => {

  const animateFrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}

  return ( 
    <ul>
      <Link to="/" activeStyle>
        <div className={classes.Logo}>
        <div className={classes.shine}>
          <h1><Link to="/">John Whitten</Link></h1>
        </div>
        </div>
      </Link>
      <motion.li 
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.05}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
          <Link to="/drawing" activeStyle>
            drawing
          </Link>
      </motion.li>
      <motion.li 
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.10}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
          <Link to="/photo" activeStyle>
            photo
          </Link>
      </motion.li>
      <motion.li 
        initial={animateFrom}
        animate={animateTo}        
        transition={{delay: 0.20}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
          <Link to="/video" activeStyle>
            video
          </Link>
      </motion.li>
      <motion.li 
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.30}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
          <Link to="/about" activeStyle>
            about
          </Link>
      </motion.li>
      <motion.li 
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.40}}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
          <Link to="/contact" activeStyle>
            contact
          </Link>
      </motion.li>
    </ul>
  );
}

export default NavLinks;