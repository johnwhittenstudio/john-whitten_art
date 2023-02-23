
import classes from './NavBar.module.css'
import NavLinks from './NavLinks'
import {CgMenu} from 'react-icons/cg'
import {CgClose} from 'react-icons/cg'
import {useState} from 'react'

const MobileNavigation = () => {

  const [open, setOpen] = useState(false);


  const hamburgerIcon = <CgMenu className={classes.Hamburger} 
                          size='40px' color='#15b7ff'
                          onClick={() => setOpen(!open)}
                          />


  const closeIcon = <CgClose className={classes.Hamburger} 
                      size='40px' color='#15b7ff'
                      onClick={() => setOpen(!open)}
                      />

  const closeMobileMenu = () => setOpen(false);                          

  return ( 
    <nav className={classes.MobileNavigation}>
    {open ? closeIcon : hamburgerIcon}
    {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}

export default MobileNavigation;