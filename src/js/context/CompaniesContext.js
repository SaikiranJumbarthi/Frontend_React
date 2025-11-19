import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { fetchCompanies, filterCompanies } from '../services/api';

const CompaniesContext = createContext();

export const useCompanies = () => {
  const context = useContext(CompaniesContext);
  if (!context) {
    throw new Error('useCompanies must be used within CompaniesProvider');
  }
  return context;
};

export const CompaniesProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    name: '',
    industry: '',
    location: ''
  });

  // Fetch companies on mount
  useEffect(() => {
    const loadCompanies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCompanies();
        setCompanies(data);
        setFilteredCompanies(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch companies');
      } finally {
        setLoading(false);
      }
    };

    loadCompanies();
  }, []);

  // Apply filters whenever filters or companies change
  useEffect(() => {
    const filtered = filterCompanies(companies, filters);
    setFilteredCompanies(filtered);
  }, [companies, filters]);

  const updateFilter = useCallback((filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  }, []);

  const updateFilters = useCallback((newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      name: '',
      industry: '',
      location: ''
    });
  }, []);

  const retryFetch = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchCompanies();
      setCompanies(data);
      setFilteredCompanies(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch companies');
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    companies,
    filteredCompanies,
    loading,
    error,
    filters,
    updateFilter,
    updateFilters,
    clearFilters,
    retryFetch
  };

  return (
    <CompaniesContext.Provider value={value}>
      {children}
    </CompaniesContext.Provider>
  );
};

