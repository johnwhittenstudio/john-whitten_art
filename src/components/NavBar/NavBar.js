import { useEffect, useState } from 'react';
import classes from './NavBar.module.css';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

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
      {isMobile ? <MobileNavigation /> : <Navigation />}
    </div>
  );
};

export default NavBar;