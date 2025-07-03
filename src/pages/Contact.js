// src/pages/Contact.js
import React from 'react';
import './../styles/Page.css'; // We will create this CSS file soon

const Contact = () => {
  return (
    <div className="page-container contact-page">
      <h1>Contact Us</h1>
      <p>Have questions or feedback? Reach out to us!</p>
      <p>Email: info@coffeeshop.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: 123 Coffee Lane, Brew City, CA 90210</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;