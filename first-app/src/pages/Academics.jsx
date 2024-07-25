import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Academics = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Curriculum</h2>
      
      {/* Curriculum Sections */}
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 curriculum-card">
            <div className="card-body">
              <h5 className="card-title">Primary Education</h5>
              <p className="card-text">
                Our primary education program focuses on foundational skills in literacy, numeracy, and social development. 
                We provide a nurturing environment where young learners can build essential skills through interactive and engaging activities.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 curriculum-card">
            <div className="card-body">
              <h5 className="card-title">Secondary Education</h5>
              <p className="card-text">
                The secondary education program prepares students for further education and future careers. 
                Our curriculum includes a broad range of subjects including science, mathematics, humanities, and technology.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 curriculum-card">
            <div className="card-body">
              <h5 className="card-title">Senior Secondary Education</h5>
              <p className="card-text">
                In senior secondary education, students specialize in their areas of interest, with advanced courses in various disciplines. 
                We offer guidance and support for higher education and career planning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <h2 className="text-center mt-5 mb-4">Subjects Offered</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="subjects-section">
            <h3>Primary Level</h3>
            <ul className="list-group">
              <li className="list-group-item">English</li>
              <li className="list-group-item">Mathematics</li>
              <li className="list-group-item">Science</li>
              <li className="list-group-item">Social Studies</li>
              <li className="list-group-item">Art</li>
              <li className="list-group-item">Physical Education</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="subjects-section">
            <h3>Secondary Level</h3>
            <ul className="list-group">
              <li className="list-group-item">English Language & Literature</li>
              <li className="list-group-item">Mathematics</li>
              <li className="list-group-item">Physics</li>
              <li className="list-group-item">Chemistry</li>
              <li className="list-group-item">Biology</li>
              <li className="list-group-item">History</li>
              <li className="list-group-item">Geography</li>
              <li className="list-group-item">Computer Science</li>
            </ul>
          </div>
        </div>
        <div className="col-md-12 mt-4">
          <div className="subjects-section">
            <h3>Senior Secondary Level</h3>
            <ul className="list-group">
              <li className="list-group-item">Advanced Mathematics</li>
              <li className="list-group-item">Advanced Physics</li>
              <li className="list-group-item">Advanced Chemistry</li>
              <li className="list-group-item">Advanced Biology</li>
              <li className="list-group-item">Economics</li>
              <li className="list-group-item">Political Science</li>
              <li className="list-group-item">Psychology</li>
              <li className="list-group-item">Business Studies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
