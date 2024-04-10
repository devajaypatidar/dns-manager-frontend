// AllDomains.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetAllDomain = () => {
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const response = await axios.get('https://dns-manager-ohfc.onrender.com/domain/all'); // Adjust the URL according to your API endpoint
        setDomains(response.data.domain);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching domains:', error);
        setLoading(false);
      }
    };

    fetchDomains();

    // Cleanup function if needed
    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div>
      <h2>All Domains</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {domains.map((domain, index) => (
            <li key={index}>{domain.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetAllDomain;
