import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AboutUs from './AboutUs';
import '../../css/components/Navbar.css';

const Navbar = ({ onAboutUsClick }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showAboutUs, setShowAboutUs] = useState(false);

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleCompaniesDirectoryClick = () => {
    if (location.pathname === '/companies') {
      window.location.reload();
    } else {
      navigate('/companies');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleAboutUsClick = () => {
    if (onAboutUsClick) {
      onAboutUsClick();
    } else {
      setShowAboutUs(true);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand" onClick={handleCompaniesDirectoryClick} style={{ cursor: 'pointer' }}>
            <div className="navbar-logo">CD</div>
            <div className="navbar-brand-text">
              <h1>Companies Directory</h1>
              <span className="navbar-subtitle">Explore Global Companies</span>
            </div>
          </div>
          
          {isAuthenticated && (
            <div className="navbar-user">
              Welcome, {user?.name || user?.email || 'User'}
            </div>
          )}
          
          <div className="navbar-right">
            <div className="navbar-auth">
              <button 
                className="navbar-btn navbar-btn-home"
                onClick={handleHomeClick}
              >
                Home
              </button>
              <button 
                className="navbar-btn navbar-btn-about"
                onClick={handleAboutUsClick}
              >
                About Us
              </button>
              {isAuthenticated ? (
                <button 
                  className="navbar-btn navbar-btn-logout"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button 
                  className="navbar-btn navbar-btn-login"
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {showAboutUs && <AboutUs onClose={() => setShowAboutUs(false)} />}
    </>
  );
};

export default Navbar;

