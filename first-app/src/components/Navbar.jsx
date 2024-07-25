// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Ensure you import your custom CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <NavLink className="navbar-brand" to="/">Springdale Public School</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/" end>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/about-us">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/academics">Academics</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/admissions">Admissions</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/faculty">Faculty</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/students">Students</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/gallery">Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/contact-us">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
