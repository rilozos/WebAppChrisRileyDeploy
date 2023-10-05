import React, { useState } from "react";
import Entry from "./Entry.js";
import './App.css'
import LoadingMessage from "./LoadingMessage.js"; 
import OfficeGuy from './OfficeGuy.png';

export default function App() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);  

  const handleNewsFetched = (fetchedNews) => {
    setNews(fetchedNews);
    setLoading(false); 
  };

  const handleSearchInitiated = () => {
    setLoading(true);  
  };

  return (
    <div className="App">
      <div className="title">TechNews</div>
      <div className="image-container">
      </div> 
      <div className="search-container">
        <img className="office-guy" src={OfficeGuy} alt="Office Guy"/>
          <Entry onNewsFetched={handleNewsFetched} onSearchInitiated={handleSearchInitiated} />
      </div>
      {loading && <LoadingMessage />}
      {news && news.articles.map((article, index) => (
        <a href={article.url} className="news-link" key={index}>
          <div className="news-container">
            <h2 className="news-title">{article.title}</h2>       
            <p className="news-description">{article.description}</p>
          </div>
        </a>
      ))}
      <div className="grid">
        <a href="url-for-thing-one" className="news-link">
          <div className="thing-one">Chris</div>
        </a>
        <a href="url-for-thing-two" className="news-link">
          <div className="thing-two">Riley</div>
        </a>
      </div>
    </div>
  );
}
