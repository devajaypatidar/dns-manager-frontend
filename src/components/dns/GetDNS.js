// GetDNS.jsx

import React, { useState } from 'react';
import axios from 'axios';

const GetDNS = () => {
  const [hostedZoneId, setHostedZoneId] = useState('');
  const [dnsRecords, setDNSRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGetDNS = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(' https://dns-manager-ohfc.onrender.com/dns/all', { hostedZoneId });
      setDNSRecords(response.data);
    } catch (error) {
      setError('An error occurred while fetching DNS records.');
      console.error('Error in getting DNS records:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setHostedZoneId(e.target.value);
  };

  return (
    <div>
      <h2>Get DNS Records</h2>
      <input
        type="text"
        value={hostedZoneId}
        onChange={handleInputChange}
        placeholder="Enter Hosted Zone ID"
      />
      <button onClick={handleGetDNS}>Get DNS Records</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      {dnsRecords.length >=  0 && (
        <div>
          <h3>DNS Records</h3>
          <ul>
            {dnsRecords.map((record, index) => (
              <li key={index}>{JSON.stringify(record)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GetDNS;
