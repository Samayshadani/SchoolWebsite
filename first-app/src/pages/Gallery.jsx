import React from 'react';

const Gallery = () => {
  return (
    <div className="container mt-4">
      <h2>Gallery</h2>
      <h3>Photos</h3>
      <div className="row">
        <div className="col-md-4">
          <img src="/src/assets/images/sports_day.jpg" alt="Sports Day" className="img-fluid" />
          <p>Sports Day</p>
        </div>
        <div className="col-md-4">
          <img src="/src/assets/images/science_exhibition.webp" alt="Science Exhibition" className="img-fluid" />
          <p>Science Exhibition</p>
        </div>
        <div className="col-md-4">
          <img src="/src/assets/images/cultural_fest.jpg" alt="Cultural Fest" className="img-fluid" />
          <p>Cultural Fest</p>
        </div>
        <div className="col-md-4">
          <img src="/src/assets/images/classroom.jpeg" alt="Classroom" className="img-fluid" />
          <p>Classroom</p>
        </div>
        <div className="col-md-4">
          <img src="/src/assets/images/library.jpg" alt="Library" className="img-fluid" />
          <p>Library</p>
        </div>
      </div>
      <h3>Videos</h3>
      <div className="row">
        <div className="col-md-6">
          <video controls className="img-fluid">
            <source src="/src/assets/videos/vecteezy_an-empty-classroom_14070803.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>School Tour</p>
        </div>
        <div className="col-md-6">
          <video controls className="img-fluid">
            <source src="/src/assets/videos/vecteezy_an-empty-classroom_14070803.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Annual Function</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;