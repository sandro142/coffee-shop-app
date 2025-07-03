// src/hooks/useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom Hook for fetching data from an API
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run effect if URL changes

  return { data, loading, error };
}

export default useFetch;