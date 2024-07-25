// src/pages/Students.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Students = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Life</h2>

      <div className="row mb-5">
        <div className="col-md-6">
          <img src="extra.jpg" alt="Extracurricular Activities" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>Extracurricular Activities</h3>
          <p>
            At Springdale Public School, we believe that education goes beyond the classroom. Our students are encouraged to participate in a wide range of extracurricular activities, including sports, music, drama, and more. These activities help students develop important life skills such as teamwork, leadership, and time management.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <img src="achievements.jpg" alt="Achievements and Accolades" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>Achievements and Accolades</h3>
          <p>
            Our students have consistently excelled in various fields, bringing laurels to the school. Whether it's winning academic competitions, excelling in sports, or showcasing their talents in arts and culture, our students have made us proud. We celebrate their achievements and encourage them to strive for excellence in all endeavors.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <img src="leader.webp" alt="Student Council" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>Student Council and Leadership Opportunities</h3>
          <p>
            The Student Council at Springdale Public School plays a vital role in representing the student body and organizing various events and initiatives. Leadership opportunities are provided to students to develop their leadership skills, make a positive impact, and prepare for future responsibilities. Being part of the Student Council helps students build confidence and hone their decision-making abilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Students;
