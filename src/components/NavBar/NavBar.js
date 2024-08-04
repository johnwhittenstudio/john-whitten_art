import { useEffect, useState } from 'react';
import classes from './NavBar.module.css';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import logo from './../img/logos/jw-logo.png';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={classes.NavBar}>
      <header className={classes.Header}>
        <div className={classes.LogoWrapper}>
          <img src={logo} alt="Logo" className={classes.Logo} />
        </div>
        {isMobile ? <MobileNavigation /> : <Navigation />}
      </header>
    </div>
  );
};

export default NavBar;