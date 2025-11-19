import React from 'react';
import '../../css/components/CompanyTable.css';

const CompanyTable = ({ companies }) => {
  if (companies.length === 0) {
    return (
      <div className="empty-state">
        <p>No companies found matching your filters.</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="company-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Industry</th>
            <th>Location</th>
            <th>Employees</th>
            <th>Founded</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company => (
            <tr key={company.id}>
              <td className="company-name-cell">
                <strong>{company.name}</strong>
              </td>
              <td>
                <span className="industry-badge">{company.industry}</span>
              </td>
              <td className="location-cell">{company.location}</td>
              <td>{company.employees.toLocaleString()}</td>
              <td>{company.founded}</td>
              <td>
                {company.website && (
                  <a 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="website-link"
                  >
                    Visit
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;

