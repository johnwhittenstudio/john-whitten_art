import React from "react";
import data from "../../data/news";
import NavBar from "../NavBar/NavBar";
import classes from './News.module.css';

const News = () => {
  return (
    <div className={classes.NewsContainer}>
      <NavBar />
      <div className={classes.NewsContent}>
        {data.news.map((item) => (
          <div key={item.id} className={classes.NewsItem}>
            <h3 className={classes.NewsDate}>{item.date}</h3>
            <br />
            <h1 className={classes.NewsHeadline}>{item.headline}</h1>
            <img 
              className={classes.NewsImage} 
              src={item.image} 
              alt={item.headline} 
            />
            <p className={classes.ImageCredit}>{item.imageCredit}</p>
            <div 
              className={classes.NewsBody} 
              dangerouslySetInnerHTML={{ __html: item.body }} 
            />
            <br />
            <hr className={classes.Divider} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
