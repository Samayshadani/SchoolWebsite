import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-5">
        <div className="col-md-6">
          <img src="/src/assets/images/classroom.jpeg" alt="About Us" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>About Us</h2>
          <p>
            Welcome to Springdale Public School! We are dedicated to providing the best education and environment for our students.
            Our mission is to nurture and develop our students to become responsible and productive members of society.
          </p>
          <h3>Our History</h3>
          <p>
            Springdale Public School was founded in 1990 with the vision of creating a nurturing and inclusive environment where students
            can excel academically and personally. Over the years, we have grown from a small institution to one of the leading schools
            in the region, known for our commitment to excellence in education and our supportive community.
          </p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-4">
          <img src="/src/assets/images/principal.webp" alt="Principal" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h3>Message from the Principal</h3>
          <p>
            Dear Students and Parents, Welcome to Springdale Public School! Our goal is to create a safe, nurturing, and intellectually stimulating
            environment where every student can achieve their highest potential. We believe in a holistic approach to education, ensuring the
            development of both academic and life skills. Thank you for being a part of our community.
          </p>
          <p><strong>- Principal's Name</strong></p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/src/assets/images/mission.png" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">To provide quality education and foster lifelong learning.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/src/assets/images/vision.jpg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Our Vision</h5>
              <p className="card-text">To be a leading educational institution known for excellence in teaching and learning.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/src/assets/images/values.png" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Our Values</h5>
              <p className="card-text">Integrity, respect, and a commitment to continuous improvement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
