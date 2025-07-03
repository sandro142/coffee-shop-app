// src/pages/Home.js
import React, { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import './../styles/Page.css';

const Home = () => {
  const [visitCount, setVisitCount] = useLocalStorage('coffeeShopVisits', 0);

  
  useEffect(() => {
    // Increment visit count only once when the component mounts
    setVisitCount(prevCount => prevCount + 1);
  }, [setVisitCount]); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="page-container home-page">
      <h1>Welcome to Our Coffee Shop!</h1>
      <p>
        We are passionately dedicated to bringing you the ultimate coffee experience, meticulously sourcing the finest beans and crafting each cup with unparalleled care and expertise.
      </p>
      {/* The image is back, using a placeholder similar to the original for now */}
      <img src="https://via.placeholder.com/600x300?text=Our+Team" alt="Our Team" className="page-image" />
      <p>Founded in 2023, our mission is to create a welcoming space for coffee lovers.</p>
      <div className="info-box">
        <p>You have visited this page <span className="highlight">{visitCount}</span> times!</p>
      </div>
    </div>
  );
};

export default Home;