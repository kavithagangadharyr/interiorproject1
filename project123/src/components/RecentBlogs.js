import React from 'react';
import { Link } from 'react-router-dom';
import './RecentBlogs.css';

function RecentBlogs() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h1>Recent Blogs</h1>
      <div className="blog-buttons">
        <Link to="/residential-interior-designer-new-york" className="btn" onClick={handleClick}>Residential Interior Designer In New York, USA</Link>
        <Link to="/best-wall-art-decor" className="btn" onClick={handleClick}>How To Choose The Best Wall Art & Decor House?</Link>
        <Link to="/increase-interior-value" className="btn" onClick={handleClick}>Tips To Increase The Interior Value Of Your House</Link>
      </div>
    </div>
  );
}

export default RecentBlogs;
