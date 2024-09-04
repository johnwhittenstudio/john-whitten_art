import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import NavBar from '../NavBar/NavBar';
import books from '../../data/books';
import classes from './Books.module.css';

const Book = () => {
  const [pageWidth, setPageWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = pageWidth > 900;
  const isTablet = pageWidth <= 900 && pageWidth > 500;
  const isMobile = pageWidth <= 500;

  return (
    <div className={classes.BookContainer}>
      <NavBar />
      <div className={classes.FlipBookWrapper}>
        <HTMLFlipBook
          width={isDesktop ? 400 : isTablet ? 600 : isMobile ? 300 : 300}
          height={isDesktop ? 650 : isTablet ? 500 : isMobile ? 500 : 400}
          size="fixed"
          minWidth={300}
          maxWidth={1000}
          minHeight={300}
          maxHeight={1200}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          drawShadow={true}
          useMouseEvents={true}
          clickEventForward={true}
          swipeDistance={50}
          usePortrait={false}
          startPage={0}
          className="my-flipbook"
        >
          {books.map((page, index) => (
            <div
              key={page.id}
              className={`${classes.page} ${index === 0 ? classes.cover : ''}`}
            >
              <img src={page.image} alt={page.title} />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
      <div className={classes.LowerText}>
        <p>click/drag pages to view</p>
      </div>
    </div>
  );
};

export default Book;
