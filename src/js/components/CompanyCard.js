import React from 'react';
import '../../css/components/CompanyCard.css';

const CompanyCard = ({ company }) => {
  return (
    <div className="company-card">
      <div className="company-card-header">
        <h3 className="company-name">{company.name}</h3>
        <span className="company-industry">{company.industry}</span>
      </div>
      <div className="company-card-body">
        <div className="company-info">
          <div className="info-item info-item-location">
            <span className="info-label">Location:</span>
            <span className="info-value">{company.location}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Employees:</span>
            <span className="info-value">{company.employees.toLocaleString()}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Founded:</span>
            <span className="info-value">{company.founded}</span>
          </div>
        </div>
        {company.description && (
          <p className="company-description">{company.description}</p>
        )}
        {company.website && (
          <a 
            href={company.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="company-website"
          >
            Visit Website →
          </a>
        )}
      </div>
    </div>
  );
};

export default CompanyCard;

