import React, { useState } from 'react';
import { getNews } from "./api.js";

const Entry = ({ onNewsFetched, onSearchInitiated }) => {
  const [keyword, setKeyword] = useState('');

  const fetchAndSubmit = async (e) => {
    e.preventDefault();
    try {
      onSearchInitiated(); 
      const newsData = await getNews(keyword);
      onNewsFetched(newsData);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <form className="entry-form" onSubmit={fetchAndSubmit}>
      <input 
        className="entry-input"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter keyword"
      />
      <button className="entry-button" type="submit">Search</button>
    </form>
  );
};

export default Entry;
