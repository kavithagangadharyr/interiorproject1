import { Link } from 'react-router-dom';
import './header.css';
function Header() {
  
    return (
      <header className="header">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </header>
    );
}
  
  export default Header;
  