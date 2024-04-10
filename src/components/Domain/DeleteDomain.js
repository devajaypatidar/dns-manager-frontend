// DeleteDomain.js

import React, { useState } from 'react';
import axios from 'axios';

const DeleteDomain = () => {
  const [domainId, setDomainId] = useState('');
  const [message, setMessage] = useState('');


  const handleDelete = async () => {
    try {
      const response = await axios.delete('https://dns-manager-ohfc.onrender.com/domain/delete', { data: { domainId } });
      if (response.status === 204) {
        console.log('Domain deleted successfully');
        setMessage('Domain deleted successfully');
        
      } else {
        console.error('Failed to delete domain:', response.data.error);
        setMessage('Domain not deleted ');
      }
    } catch (error) {
      console.error('Error deleting domain:', error.message);
      // Optionally, handle error or show a message indicating failure
    }
  };

  const handleInputChange = (e) => {
    setDomainId(e.target.value);
  };

  return (
    <div>
    <h4> Want to delete domain Please enter domain Id</h4>
      <input
        type="text"
        value={domainId}
        onChange={handleInputChange}
        placeholder="Enter Domain ID"
      />
      <button onClick={handleDelete}>Delete Domain</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteDomain;
