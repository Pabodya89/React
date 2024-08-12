import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';


const ContactUs = () => {
  return (    
    <div className="contact-container">
      <h1>Contact Us</h1>
      <h3>Any question or remark? Just write Us massage.</h3>
      <ContactForm />
      <div className="additional-info">
        <h2>Additional Contact Information</h2>
        <p>Address: Rajaguruwatta,Kolonna,Sri Lankan</p>
        <p>Phone: +94 768596355</p>
        <p>Email: kolonnasuraksha@company.com</p>
      </div>
    </div>
  );
};

export default ContactUs;
