import React, { useState } from 'react';
import axios from 'axios';

const DomainRegistration = () => {
  const [domain, setDomain] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);


  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };

  const registerDomain = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://dns-manager-ohfc.onrender.com/register', {
        domainName: domain
      });
      console.log(response);
      if (response.status === 201) {
        setMessage('Domain successfully registered!');
      } else {
        setMessage('Failed to register domain');
      }
    } catch (error) {
      setMessage('An error occurred while registering domain');
    } finally {
        setLoading(false);
      }
  };

  return (
    <div>
      <h2>Domain Registration</h2>
      <h3>enter domain to register </h3>
      <input type="text" value={domain} onChange={handleDomainChange} placeholder="Enter domain" />
      <button onClick={registerDomain}>Register Domain</button>
      {loading && <p>Registering domain, please wait...</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default DomainRegistration;
