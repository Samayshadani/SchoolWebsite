import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const ContactUs = () => {
  return (
    <div className="container mt-4">
      <h2>Contact Us</h2>
      <p>Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Email: info@springdale.edu</p>
      <h3>Contact Form</h3>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          message: Yup.string().required('Required'),
        })}
        onSubmit={(values, action) => {
          console.log(values);
          action.resetForm();
        }}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <Field name="message" as="textarea" className="form-control" />
            <ErrorMessage name="message" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </Form>
      </Formik>
      <h3>Location</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509897!2d144.9559273158569!3d-37.817209742021594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776f9f1347aa0!2sEducation%20Lane%2C%20Cityville!5e0!3m2!1sen!2s!4v1624216819600!5m2!1sen!2s"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactUs;