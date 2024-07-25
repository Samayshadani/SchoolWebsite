import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="header text-center my-4">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2 text-center">
            <img src="logo.png" alt="School Logo" className="logo img-fluid" />
          </div>
          <div className="col-md-6 order-md-1">
            <h1>Springdale Public School</h1>
            <p>Welcome to Springdale Public School, where we are dedicated to providing a holistic education to our students. Our mission is to foster a nurturing and stimulating environment where young minds can thrive academically, socially, and personally. At Springdale, we believe in a balanced approach to education, combining rigorous academic programs with a wide range of extracurricular activities to ensure the overall development of our students.</p>
            <p>Join us in our journey to inspire and prepare the leaders of tomorrow. Explore our website to learn more about our programs, admissions process, and the vibrant life at our school.</p>
          </div>
        </div>
      </header>
      <Carousel className="carousel mb-4">
        <Carousel.Item>
          <img src="sports_day.jpg" alt="Annual Sports Day" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="science_exhibition.webp" alt="Science Exhibition" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Science Exhibition</h3>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="cultural_fest.jpg" alt="Cultural Fest" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Cultural Fest</h3>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="highlights">
        <div className="container">
          <h2>Highlights</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="highlight-card">
                <h3>Recent Achievements</h3>
                <p>Learn about our latest awards and recognitions.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="highlight-card">
                <h3>Upcoming Events</h3>
                <p>Stay updated with our upcoming events and deadlines.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="highlight-card">
                <h3>Virtual Tour</h3>
                <p>Explore our campus virtually and get a feel for our environment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='quick'>Quick Links</div>
      <div className="quick-links d-flex justify-content-around mt-4">
        <a href="/about-us" className="btn btn-primary">About Us</a>
        <a href="/academics" className="btn btn-primary">Academics</a>
        <a href="/admissions" className="btn btn-primary">Admissions</a>
      </div>
    </div>
  );
};

export default Home;

