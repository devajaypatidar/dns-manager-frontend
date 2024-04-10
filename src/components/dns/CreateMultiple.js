import React, { useState } from 'react';
import axios from 'axios';

const CreateMultipleDNSRecords = () => {
  const [hostedZoneId, setHostedZoneId] = useState('');
  const [dnsRecords, setDNSRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUpdateMultipleDNS = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://dns-manager-ohfc.onrender.com/dns/create/multiple', {
        hostedZoneId,
        dnsRecord: dnsRecords
      });

      if (response.status === 200) {
        
        console.log('DNS records updated successfully');
      } else {
        setError('Failed to update DNS records');
      }
    } catch (error) {
      console.error('Error updating DNS records:', error);
      setError('An error occurred while updating DNS records');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setHostedZoneId(e.target.value);
  };

  // Function to handle changes in DNS records
  const handleDNSRecordsChange = (index, key, value) => {
    const updatedRecords = [...dnsRecords];
    updatedRecords[index][key] = value;
    setDNSRecords(updatedRecords);
  };

  // Function to add a new DNS record
  const addDNSRecord = () => {
    setDNSRecords([...dnsRecords, { name: '', type: '', TTL: '', value: '' }]);
  };

  // Function to remove a DNS record
  const removeDNSRecord = (index) => {
    const updatedRecords = [...dnsRecords];
    updatedRecords.splice(index, 1);
    setDNSRecords(updatedRecords);
  };

  return (
    <div>
      <h2>Create Multiple DNS Records</h2>
      <input
        type="text"
        value={hostedZoneId}
        onChange={handleInputChange}
        placeholder="Enter Hosted Zone ID"
      />
      
      {dnsRecords.map((record, index) => (
        <div key={index}>
          <input
            type="text"
            value={record.name}
            onChange={(e) => handleDNSRecordsChange(index, 'name', e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            value={record.type}
            onChange={(e) => handleDNSRecordsChange(index, 'type', e.target.value)}
            placeholder="Type"
          />
          <input
            type="text"
            value={record.TTL}
            onChange={(e) => handleDNSRecordsChange(index, 'TTL', e.target.value)}
            placeholder="TTL"
          />
          <input
            type="text"
            value={record.value}
            onChange={(e) => handleDNSRecordsChange(index, 'value', e.target.value)}
            placeholder="Value"
          />
          <button onClick={() => removeDNSRecord(index)}>Remove</button>
        </div>
      ))}

      <button onClick={addDNSRecord}>Add DNS Record</button>
      <button onClick={handleUpdateMultipleDNS}>Update Multiple DNS Records</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateMultipleDNSRecords;
