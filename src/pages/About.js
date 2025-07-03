// src/pages/About.js
import React from 'react';
import './../styles/Page.css'; // This file will get new styles for the enhanced text

const About = () => {
  return (
    <div className="page-container about-page">
      <h1>About Our Coffee Shop</h1>
      <p>We are passionately dedicated to bringing you the ultimate coffee experience, meticulously sourcing the finest beans and crafting each cup with unparalleled care and expertise.</p>
      <p>Founded in 2023, our mission is to create a welcoming space for coffee lovers.</p>
    </div>
  );
};

export default About;