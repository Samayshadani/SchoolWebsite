import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../assets/css/Home.css'; // Create a CSS file for styling if needed 

const Home = () => {
  return (
    <div className="home">
      <header className="header text-center my-4">
        <img src="/src/assets/images/logo.png" alt="School Logo" className="logo" />
        <h1>Springdale Public School</h1>
        <p>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
      </header>
      <Carousel className="carousel mb-4">
        <Carousel.Item>
          <img src="/src/assets/images/sports_day.jpg" alt="Annual Sports Day" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/src/assets/images/science_exhibition.webp" alt="Science Exhibition" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Science Exhibition</h3>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/src/assets/images/cultural_fest.jpg" alt="Cultural Fest" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Cultural Fest</h3>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="quick-links d-flex justify-content-around">
        <a href="/about-us" className="btn btn-primary">About Us</a>
        <a href="/academics" className="btn btn-primary">Academics</a>
        <a href="/admissions" className="btn btn-primary">Admissions</a>
      </div>
    </div>
  );
};

export default Home;