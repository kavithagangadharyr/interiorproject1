import React from 'react';
import { Link } from 'react-router-dom';
import portfolioimg1 from '../images/portfolioimg1.jpg';
import portfolioimg2 from '../images/portfolioimg2.jpg';
import portfolioimg3 from '../images/portfolioimg3.jpg';

import "./portfolio.css";

function Portfolio() {
  
  return (
    <section className="portfolio">
      <h1>Recent Projects</h1>
      <p>With tools to make every part of your process more human and a support team excited to help you, getting started with us never been easier.</p>
      <div className="portfolio-grid">
        <img src={portfolioimg1} alt=''  />
        <h3>Winery Dry Creek Building</h3>
        <Link to="/winery-dry-building" className="btn">Learn More</Link>

        <img src={portfolioimg2} alt=''  />
        <h3>Creative Workplace Design</h3>
        <Link to="/creative-workplace-design" className="btn">Learn More</Link>

        <img src={portfolioimg3} alt=''  />
        <h3>Bedroom Interior Pot Work</h3>
        <Link to="/bedroom-interior-pot-work" className="btn">Learn More</Link>

        
      </div>
    </section>
  );
}



export default Portfolio;
