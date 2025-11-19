import React from 'react';
import '../../css/components/Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Loading companies...</p>
    </div>
  );
};

export default Loading;

