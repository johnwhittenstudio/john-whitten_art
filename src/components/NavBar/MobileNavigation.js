// import classes from './NavBar.module.css'
// import NavLinks from './NavLinks'
// import {CgMenu} from 'react-icons/cg'
// import {CgClose} from 'react-icons/cg'
// import {useState} from 'react'

// const MobileNavigation = () => {

//   const [open, setOpen] = useState(false);


//   const hamburgerIcon = <CgMenu className={classes.Hamburger} 
//                           size='35px' color='#00121a'
//                           onClick={() => setOpen(!open)}
//                           />


//   const closeIcon = <CgClose className={classes.Hamburger} 
//                       size='35px' color='#00121a'
//                       onClick={() => setOpen(!open)}
//                       />

//   const closeMobileMenu = () => setOpen(false);                          

//   return ( 
//     <nav className={classes.MobileNavigation}>
//     {open ? closeIcon : hamburgerIcon}
//     {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
//     </nav>
//   );
// }

// export default MobileNavigation;

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CgMenu, CgClose } from 'react-icons/cg';
import classes from './NavBar.module.css';
import NavLinks from './NavLinks';

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Reset open state when the route changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const hamburgerIcon = (
    <CgMenu
      className={classes.Hamburger}
      size="35px"
      color="#00121a"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgClose
      className={classes.Hamburger}
      size="35px"
      color="#00121a"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={classes.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
