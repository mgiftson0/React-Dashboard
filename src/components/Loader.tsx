import React from 'react';
import './Loader.css'; // Ensure you create the corresponding CSS file for styling

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
};

export default Loader;
