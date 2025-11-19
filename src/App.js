import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CompaniesProvider, useCompanies } from './js/context/CompaniesContext';
import { AuthProvider, useAuth } from './js/context/AuthContext';
import Navbar from './js/components/Navbar';
import Footer from './js/components/Footer';
import Homepage from './js/components/Homepage';
import LoginPage from './js/components/LoginPage';
import RegisterPage from './js/components/RegisterPage';
import AboutUs from './js/components/AboutUs';
import FilterControls from './js/components/FilterControls';
import CompanyCard from './js/components/CompanyCard';
import CompanyTable from './js/components/CompanyTable';
import Loading from './js/components/Loading';
import Error from './js/components/Error';
import ScrollToTop from './js/components/ScrollToTop';
import './css/App.css';

const CompaniesDirectory = () => {
  const { filteredCompanies, loading, error, retryFetch, updateFilter } = useCompanies();
  const [viewMode, setViewMode] = useState('cards');
  const [showAboutUs, setShowAboutUs] = useState(false);

  const handleLocationFilter = (location) => {
    updateFilter('location', location);
  };

  const handleIndustryFilter = (industry) => {
    updateFilter('industry', industry);
  };

  if (loading) {
    return (
      <>
        <Navbar 
          onAboutUsClick={() => setShowAboutUs(true)} 
          onLocationFilter={handleLocationFilter}
          onIndustryFilter={handleIndustryFilter}
        />
        <Loading />
        <Footer />
        {showAboutUs && <AboutUs onClose={() => setShowAboutUs(false)} />}
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar 
          onAboutUsClick={() => setShowAboutUs(true)} 
          onLocationFilter={handleLocationFilter}
          onIndustryFilter={handleIndustryFilter}
        />
        <Error 
          message={error}
          onRetry={retryFetch}
        />
        <Footer />
        {showAboutUs && <AboutUs onClose={() => setShowAboutUs(false)} />}
      </>
    );
  }

  return (
    <>
      <Navbar 
        onAboutUsClick={() => setShowAboutUs(true)}
        onLocationFilter={handleLocationFilter}
      />
      {showAboutUs ? (
        <AboutUs onClose={() => setShowAboutUs(false)} />
      ) : (
        <>
          <div className="app-container">
            <div className="app-content">
              <FilterControls viewMode={viewMode} setViewMode={setViewMode} />
              
              <div className="results-header">
                <p className="results-count">
                  Showing <strong>{filteredCompanies.length}</strong> {filteredCompanies.length === 1 ? 'company' : 'companies'}
                </p>
              </div>

              {viewMode === 'cards' ? (
                <div className="companies-grid">
                  {filteredCompanies.map(company => (
                    <CompanyCard key={company.id} company={company} />
                  ))}
                </div>
              ) : (
                <CompanyTable companies={filteredCompanies} />
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route 
        path="/home" 
        element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Homepage />
              <Footer />
            </>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/companies" 
        element={
          <ProtectedRoute>
            <CompaniesDirectory />
          </ProtectedRoute>
        } 
      />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <CompaniesProvider>
          <AppRoutes />
          <ScrollToTop />
        </CompaniesProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
