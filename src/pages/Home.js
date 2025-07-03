// src/pages/Home.js
import React, { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import './../styles/Page.css';

const Home = () => {
  const [visitCount, setVisitCount] = useLocalStorage('coffeeShopVisits', 0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Increment visit count only once when the component mounts
    setVisitCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="page-container home-page">
      <h1>Welcome to Our Coffee Shop!</h1>
      <p>Experience the finest coffee and a cozy atmosphere.</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" alt="Delicious Coffee" className="page-image" />
      <p>Start your day with a perfect brew.</p>
      <div className="info-box">
        <p>You have visited this page <span className="highlight">{visitCount}</span> times!</p>
      </div>
    </div>
  );
};

export default Home;