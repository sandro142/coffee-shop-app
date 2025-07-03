// src/pages/Products.js
import React from 'react';
import useFetch from '../hooks/useFetch'; // Import custom hook
import './../styles/Page.css'; // Contains styling for products and quote box

const Products = () => {
  // Use our custom useFetch hook to get a Kanye West quote (example public API)
  const { data: quoteData, loading, error } = useFetch('https://api.kanye.rest/');

  return (
    <div className="page-container products-page">
      <h1>Our Products</h1>
      <p>Explore our wide range of coffee beans, pastries, and more.</p>

      {/* Product Grid - remains at the top */}
      <div className="product-grid">
        <div className="product-item">
          <h3>Espresso Blend</h3>
          <p>Rich and intense, perfect for your daily shot.</p>
          {/* <img src={espressoBeansImg} alt="Espresso Beans" /> -- REMOVED */}
        </div>
        <div className="product-item">
          <h3>Latte Art Kit</h3>
          <p>Everything you need to master your latte art skills.</p>
          {/* <img src={latteArtImg} alt="Latte Art Kit" /> -- REMOVED */}
        </div>
        <div className="product-item">
          <h3>Assorted Pastries</h3>
          <p>Freshly baked croissants, muffins, and cookies.</p>
          {/* <img src={assortedPastriesImg} alt="Assorted Pastries" /> -- REMOVED */}
        </div>
      </div>

      {/* API data display - at the bottom */}
      <div className="api-data-box">
        <h2>Kanye Quote</h2>
        {loading && <p>Loading inspiration...</p>}
        {error && <p className="error-message">Error loading inspiration: {error.message}</p>}
        {quoteData && <p className="api-quote">"{quoteData.quote}"</p>}
      </div>
    </div>
  );
};

export default Products;