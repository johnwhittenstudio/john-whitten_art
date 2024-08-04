// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { CgMenu, CgClose } from 'react-icons/cg';
// import classes from './NavBar.module.css';
// import NavLinks from './NavLinks';

// const MobileNavigation = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setOpen(false);
//     document.body.classList.remove('menu-open');
//   }, [location]);

//   useEffect(() => {
//     if (open) {
//       document.body.classList.add('menu-open');
//     } else {
//       document.body.classList.remove('menu-open');
//     }
//   }, [open]);

//   const hamburgerIcon = (
//     <CgMenu
//       className={classes.Hamburger}
//       size="35px"
//       color="#00121a"
//       onClick={() => setOpen(!open)}
//     />
//   );

//   const closeIcon = (
//     <CgClose
//       className={classes.Hamburger}
//       size="35px"
//       color="#00121a"
//       onClick={() => setOpen(!open)}
//     />
//   );

//   const closeMobileMenu = () => setOpen(false);

//   return (
//     <nav className={classes.MobileNavigation}>
//       {open ? closeIcon : hamburgerIcon}
//       {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
//     </nav>
//   );
// };

// export default MobileNavigation;

import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CgMenu, CgClose } from 'react-icons/cg';
import classes from './NavBar.module.css';
import NavLinks from './NavLinks';
import logo from './../img/logos/jw-logo.png';

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    document.body.classList.remove('menu-open');
  }, [location]);

  useEffect(() => {
    if (open) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [open]);

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
    <nav className={`${classes.MobileNavigation} ${open ? classes.open : ''}`}>
      <div className={classes.LogoWrapper}>
        <Link to="/">
        <img src={logo} alt="Logo" className={classes.MobileLogo} />
        </Link>
      </div>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;

