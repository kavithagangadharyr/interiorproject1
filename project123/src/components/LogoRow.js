import React from 'react';
import logo1 from '../images/logo1.jpg';
import logo2 from '../images/logo2.jpg';
import logo3 from '../images/logo3.jpg';
import './LogoRow.css';



function LogoRow() {
  return (
    <div className="logo-row">
      <div className="logo-container">
        <img src={logo1} alt="logo 1" />
        <div className="label"></div>
      </div>
      <div className="logo-container">
        <img src={logo2} alt="logo 2" />
        <div className="label">Success Project</div>
      </div>
      <div className="logo-container">
        <img src={logo3} alt="logo 3" />
        <div className="label">Active Project</div>
      </div>
    </div>
  );
}

export default LogoRow;
