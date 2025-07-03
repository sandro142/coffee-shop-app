// src/pages/Home.js
import React, { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage'; // Import custom hook
import './../styles/Page.css'; // This file will contain our image size adjustments

const Home = () => {
  // Use our custom useLocalStorage hook for a visit counter
  const [visitCount, setVisitCount] = useLocalStorage('coffeeShopVisits', 0);

  useEffect(() => {
    // Increment visit count every time the Home page loads
    setVisitCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array means this effect runs only ONCE when the component mounts

  return (
    <div className="page-container home-page">
      <h1>Welcome to Our Coffee Shop!</h1>
      <p>Experience the finest coffee and a cozy atmosphere.</p>
      {/* This is the image that was working, now we will just control its size with CSS */}
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" alt="Delicious Coffee" className="page-image" />
      <p>Start your day with a perfect brew.</p>
      <div className="info-box">
        <p>You have visited this page <span className="highlight">{visitCount}</span> times!</p>
      </div>
    </div>
  );
};

export default Home;