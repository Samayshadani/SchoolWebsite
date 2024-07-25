// src/pages/Faculty.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const facultyData = [
  {
    name: 'John Doe',
    title: 'Principal',
    qualifications: 'Ph.D. in Education, M.A. in Educational Leadership',
    experience: '20 years of experience in educational administration and teaching',
    image: '/src/assets/images/men1.jpg'
  },
  {
    name: 'Jane Smith',
    title: 'Math Teacher',
    qualifications: 'M.Sc. in Mathematics, B.Ed.',
    experience: '10 years of experience teaching high school mathematics',
    image: '/src/assets/images/men2.jpg'
  },
  {
    name: 'Mary Johnson',
    title: 'English Teacher',
    qualifications: 'M.A. in English Literature, B.Ed.',
    experience: '8 years of experience teaching high school English',
    image: '/src/assets/images/female1.jpg'
  },
  {
    name: 'James Williams',
    title: 'Science Teacher',
    qualifications: 'M.Sc. in Physics, B.Ed.',
    experience: '12 years of experience teaching high school science',
    image: '/src/assets/images/men3.jpg'
  },
  {
    name: 'Patricia Brown',
    title: 'History Teacher',
    qualifications: 'M.A. in History, B.Ed.',
    experience: '15 years of experience teaching high school history',
    image: '/src/assets/images/female2.jpeg'
  },
  {
    name: 'Michael Davis',
    title: 'Physical Education Teacher',
    qualifications: 'B.Sc. in Physical Education, M.Ed.',
    experience: '7 years of experience teaching physical education',
    image: '/src/assets/images/men4.jpg'
  },
  // Add more faculty members here
];

const Faculty = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Faculty</h2>
      <div className="row">
        {facultyData.map((member, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4">
              <img src={member.image} className="card-img-top" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{member.title}</h6>
                <p className="card-text"><strong>Qualifications:</strong> {member.qualifications}</p>
                <p className="card-text"><strong>Experience:</strong> {member.experience}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
