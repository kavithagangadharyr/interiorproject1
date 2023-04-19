import React from 'react';
import { Link } from 'react-router-dom';
import './about.css'

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>We are a team of passionate professionals dedicated to providing the best services to our clients.</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default AboutUs;

