import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompanies } from '../context/CompaniesContext';
import '../../css/components/Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();
  const { updateFilters } = useCompanies();

  // Handle India filter click - filter by India location
  const handleIndiaFilter = () => {
    updateFilters({
      name: '',
      industry: '',
      location: 'india'
    });
    navigate('/companies');
  };

  // Handle America filter click - filter by America/US locations
  const handleAmericaFilter = () => {
    updateFilters({
      name: '',
      industry: '',
      location: 'america'
    });
    navigate('/companies');
  };

  // Handle Global Companies filter click - clear all filters to show all
  const handleGlobalFilter = () => {
    updateFilters({
      name: '',
      industry: '',
      location: ''
    });
    navigate('/companies');
  };

  // Handle Search button click - navigate to companies page
  const handleSearchClick = () => {
    navigate('/companies');
  };

  return (
    <div className="homepage">
      <div className="homepage-hero">
        <div className="homepage-container">
          <h1 className="homepage-title">Welcome to Companies Directory</h1>
          <p className="homepage-subtitle">Explore leading companies from India, America, and around the world</p>
          <button 
            className="homepage-search-btn"
            onClick={handleSearchClick}
          >
            🔍 Search Companies
          </button>
        </div>
      </div>

      <div className="homepage-content">
        <div className="homepage-container">
          <div className="homepage-section">
            <div className="homepage-card homepage-card-clickable" onClick={handleIndiaFilter}>
              <div className="homepage-card-icon">🇮🇳</div>
              <h2 className="homepage-card-title">India</h2>
              <p className="homepage-card-description">
                India is one of the fastest-growing economies in the world, home to a diverse range of companies 
                spanning technology, manufacturing, pharmaceuticals, finance, and more. From established IT giants 
                to innovative startups, Indian companies are making their mark globally.
              </p>
              <div className="homepage-card-stats">
                <div className="homepage-stat">
                  <span className="homepage-stat-value">Diverse</span>
                  <span className="homepage-stat-label">Industries</span>
                </div>
                <div className="homepage-stat">
                  <span className="homepage-stat-value">Global</span>
                  <span className="homepage-stat-label">Presence</span>
                </div>
              </div>
            </div>

            <div className="homepage-card homepage-card-clickable" onClick={handleAmericaFilter}>
              <div className="homepage-card-icon">🇺🇸</div>
              <h2 className="homepage-card-title">America</h2>
              <p className="homepage-card-description">
                The United States is home to some of the world's most influential companies across various sectors 
                including technology, finance, healthcare, retail, and entertainment. From Silicon Valley tech giants 
                to Wall Street financial institutions, American companies drive innovation and economic growth worldwide.
              </p>
              <div className="homepage-card-stats">
                <div className="homepage-stat">
                  <span className="homepage-stat-value">Innovation</span>
                  <span className="homepage-stat-label">Leader</span>
                </div>
                <div className="homepage-stat">
                  <span className="homepage-stat-value">Global</span>
                  <span className="homepage-stat-label">Impact</span>
                </div>
              </div>
            </div>

            <div className="homepage-card homepage-card-clickable" onClick={handleGlobalFilter}>
              <div className="homepage-card-icon">🌍</div>
              <h2 className="homepage-card-title">Global Companies</h2>
              <p className="homepage-card-description">
                Our directory features companies from around the world, providing comprehensive information about 
                their industries, locations, employee counts, founding dates, and more. Whether you're researching 
                potential partners, competitors, or investment opportunities, our platform helps you discover and 
                explore companies efficiently.
              </p>
              <div className="homepage-card-stats">
                <div className="homepage-stat">
                  <span className="homepage-stat-value">Comprehensive</span>
                  <span className="homepage-stat-label">Database</span>
                </div>
                <div className="homepage-stat">
                  <span className="homepage-stat-value">Easy</span>
                  <span className="homepage-stat-label">Search</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

