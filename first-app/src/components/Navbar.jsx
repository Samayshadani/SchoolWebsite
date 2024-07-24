import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Springdale Public School</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/academics">Academics</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admissions">Admissions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/faculty">Faculty</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/students">Students</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
