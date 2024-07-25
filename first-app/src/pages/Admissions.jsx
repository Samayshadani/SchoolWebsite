// src/pages/Admissions.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admissions = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admission Process & Criteria</h2>
      
      {/* Admission Process Section */}
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="process-section">
            <h3>Admission Process</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Step 1: Application</strong> - Submit the online application form along with the required documents.
              </li>
              <li className="list-group-item">
                <strong>Step 2: Entrance Exam</strong> - Eligible candidates will be invited for an entrance examination.
              </li>
              <li className="list-group-item">
                <strong>Step 3: Interview</strong> - Shortlisted candidates will be called for a personal interview.
              </li>
              <li className="list-group-item">
                <strong>Step 4: Admission Decision</strong> - Successful candidates will receive an admission offer.
              </li>
              <li className="list-group-item">
                <strong>Step 5: Enrollment</strong> - Complete the enrollment process by paying the required fees.
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Admission Criteria Section */}
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="criteria-section">
            <h3>Admission Criteria</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Academic Performance:</strong> Students must demonstrate a strong academic record.
              </li>
              <li className="list-group-item">
                <strong>Entrance Exam:</strong> A minimum score in the entrance exam is required for eligibility.
              </li>
              <li className="list-group-item">
                <strong>Personal Interview:</strong> Candidates must successfully clear the personal interview round.
              </li>
              <li className="list-group-item">
                <strong>Extracurricular Activities:</strong> Participation in extracurricular activities is a plus.
              </li>
              <li className="list-group-item">
                <strong>Recommendations:</strong> Strong recommendations from previous educators or mentors.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Downloadable Forms Section */}
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="forms-section">
            <h3>Downloadable Admission Forms</h3>
            <p>
              You can download the necessary admission forms below. Please ensure that all forms are filled out accurately and completely before submission.
            </p>
            <a href="/src/assets/forms/admission_form.pdf" className="btn btn-primary" download>Download Admission Form</a>
          </div>
        </div>
      </div>

      {/* Important Dates Section */}
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="dates-section">
            <h3>Important Dates & Deadlines</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Application Deadline:</strong> March 31, 2024
              </li>
              <li className="list-group-item">
                <strong>Entrance Exam Date:</strong> April 15, 2024
              </li>
              <li className="list-group-item">
                <strong>Interview Dates:</strong> April 20-25, 2024
              </li>
              <li className="list-group-item">
                <strong>Admission Decision:</strong> May 1, 2024
              </li>
              <li className="list-group-item">
                <strong>Enrollment Deadline:</strong> May 15, 2024
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
