import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompanies } from '../context/CompaniesContext';
import '../../css/components/Footer.css';

const Footer = () => {
  const { companies, updateFilter } = useCompanies();
  const navigate = useNavigate();

  // Handle industry link click - filter by industry and scroll to top
  const handleIndustryClick = (industry) => {
    updateFilter('industry', industry);
    navigate('/companies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle location link click - filter by location and navigate to companies page
  const handleLocationClick = (location) => {
    updateFilter('location', location);
    navigate('/companies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get top industries
  const industryCounts = companies.reduce((acc, company) => {
    acc[company.industry] = (acc[company.industry] || 0) + 1;
    return acc;
  }, {});
  
  const topIndustries = Object.entries(industryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([industry, count]) => ({ industry, count }));

  // Get top locations
  const locationCounts = companies.reduce((acc, company) => {
    acc[company.location] = (acc[company.location] || 0) + 1;
    return acc;
  }, {});
  
  const topLocations = Object.entries(locationCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([location, count]) => ({ location, count }));

  // Social media links with better icons
  const socialMediaLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com', icon: 'FB' },
    { name: 'Instagram', url: 'https://www.instagram.com', icon: 'IG' },
    { name: 'Twitter', url: 'https://www.twitter.com', icon: 'X' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'LI' },
    { name: 'YouTube', url: 'https://www.youtube.com', icon: 'YT' },
    { name: 'GitHub', url: 'https://www.github.com', icon: 'GH' }
  ];

  return (
    <footer className="footer">
      <div className="footer-background-text">CD</div>
      <div className="footer-container">
        {/* First Row */}
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-description">
            Companies Directory provides comprehensive information about leading global companies 
            across various industries, locations, and sectors. Explore company details, filter by 
            industry or location, and discover business insights.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <button
                onClick={() => navigate('/home')}
                className="footer-link"
                aria-label="Go to Home"
              >
                <span className="footer-list-label">Home</span>
              </button>
            </li>
            <li className="footer-list-item">
              <button
                onClick={() => navigate('/companies')}
                className="footer-link"
                aria-label="Go to Companies Directory"
              >
                <span className="footer-list-label">Search Companies</span>
              </button>
            </li>
            <li className="footer-list-item">
              <button
                className="footer-link"
                onClick={() => {
                  // Trigger About Us modal if available
                  const aboutBtn = document.querySelector('.navbar-btn-about');
                  if (aboutBtn) {
                    aboutBtn.click();
                  }
                }}
                aria-label="About Us"
              >
                <span className="footer-list-label">About Us</span>
              </button>
            </li>
            <li className="footer-list-item">
              <button
                className="footer-link"
                onClick={() => {
                  // Scroll to contact section
                  const contactSections = document.querySelectorAll('.footer-section');
                  const contactSection = Array.from(contactSections).find(section => 
                    section.querySelector('.footer-title')?.textContent === 'Contact Us'
                  );
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                aria-label="Contact Us"
              >
                <span className="footer-list-label">Contact Us</span>
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Top Industries</h3>
          <ul className="footer-list">
            {topIndustries.map(({ industry, count }) => (
              <li key={industry} className="footer-list-item">
                <button
                  onClick={() => handleIndustryClick(industry)}
                  className="footer-link"
                  aria-label={`Filter by ${industry}`}
                >
                  <span className="footer-list-label">{industry}</span>
                  <span className="footer-list-value">{count}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Second Row */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <span className="footer-contact-label">Phone:</span>
              <a href="tel:99999999999" className="footer-contact-link">99999999999</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Mobile No:</span>
              <a href="tel:+91999999999" className="footer-contact-link">+91 999999999</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Email:</span>
              <a href="mailto:saiki****@gmail.com" className="footer-contact-link">saiki****@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Social Media</h3>
          <div className="footer-social-grid">
            {socialMediaLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-card"
                aria-label={social.name}
              >
                <div className="footer-social-icon">{social.icon}</div>
                <span className="footer-social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Top Locations</h3>
          <ul className="footer-list">
            {topLocations.map(({ location, count }) => (
              <li key={location} className="footer-list-item">
                <button
                  onClick={() => handleLocationClick(location)}
                  className="footer-link"
                  aria-label={`Filter by ${location}`}
                >
                  <span className="footer-list-label">{location}</span>
                  <span className="footer-list-value">{count}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Companies Directory. All rights reserved.
          </p>
          <p className="footer-note">
            Data for demonstration purposes. Company information sourced from public records.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

