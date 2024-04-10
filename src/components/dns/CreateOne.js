// CreateDNSRecord.jsx

import React, { useState } from 'react';
import axios from 'axios';

const CreateDNSRecord = () => {
  const [hostedZoneId, setHostedZoneId] = useState('');
  const [domainName, setDomainName] = useState('');
  const [type, setType] = useState('');
  const [TTL, setTTL] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleCreateDNS = async () => {
    try {
      const response = await axios.post('https://dns-manager-ohfc.onrender.com/dns/create/one', {
        hostedZoneId,
        domainName,
        type,
        TTL,
        value
      });

      if (response.status === 200) {
        setMessage('DNS record created successfully');
        // Optionally, you can reset the input fields or trigger any other action after successful creation
      } else {
        setError('Failed to create DNS record');
      }
    } catch (error) {
      console.error('Error creating DNS record:', error);
      setError('An error occurred while creating DNS record');
    }
  };

  return (
    <div>
      <h2>Create DNS Record</h2>
      <input
        type="text"
        value={hostedZoneId}
        onChange={(e) => setHostedZoneId(e.target.value)}
        placeholder="Hosted Zone ID"
      />
      <input
        type="text"
        value={domainName}
        onChange={(e) => setDomainName(e.target.value)}
        placeholder="Domain Name"
      />
      <input
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Type"
      />
      <input
        type="text"
        value={TTL}
        onChange={(e) => setTTL(e.target.value)}
        placeholder="TTL"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Value"
      />
      <button onClick={handleCreateDNS}>Create DNS Record</button>

      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateDNSRecord;
