import React from 'react';
import { Link } from 'react-router-dom';
import './services.css';

function Services() {
  return ( 
    <section className="services">
       
      <h2>Our Services</h2>
      <ul>
        <li><Link to="/interior-painting"><i className="fas fa-paint-roller"></i> Interior Painting</Link></li>
        <li><Link to="/furniture-selection"><i className="fas fa-couch"></i> Furniture Selection</Link></li>
        
        <li><Link to="/space-planning"><i className="fas fa-ruler"></i> Space Planning</Link></li>
      </ul>
      <div>
        <Link to="/interior-painting"><button>Go to Interior Painting</button></Link>
        <Link to="/furniture-selection"><button>Go to Furniture Selection</button></Link>
        
        <Link to="/space-planning"><button>Go to Space Planning</button></Link>
      </div>
    </section>
  );
}

export default Services;

