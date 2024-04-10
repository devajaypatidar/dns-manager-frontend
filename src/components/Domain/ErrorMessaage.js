import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div style={{ color: 'red', margin: '10px 0' }}>
      <p>Error: {message}</p>
    </div>
  );
};

export default ErrorMessage;
