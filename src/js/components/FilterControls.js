import React, { useState, useEffect } from 'react';
import { useCompanies } from '../context/CompaniesContext';
import '../../css/components/FilterControls.css';

const FilterControls = ({ viewMode, setViewMode }) => {
  const { filters, updateFilter, updateFilters, clearFilters, companies } = useCompanies();
  
  // Local form state (not applied until Submit)
  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    location: ''
  });

  // Sync form data with filters when filters change externally
  useEffect(() => {
    setFormData({
      name: filters.name || '',
      industry: filters.industry || '',
      location: filters.location || ''
    });
  }, [filters]);

  // Get unique values for dropdowns
  const industries = [...new Set(companies.map(c => c.industry))].sort();
  const locations = [...new Set(companies.map(c => c.location))].sort();
  
  // Add India and America as filter options
  const locationOptions = [
    { value: 'india', label: 'India' },
    { value: 'america', label: 'America' },
    ...locations.map(loc => ({ value: loc, label: loc }))
  ];

  // Handle name input change - auto-set defaults to "All Industries" and "All Locations"
  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setFormData(prev => ({
      ...prev,
      name: nameValue,
      // Auto-set defaults to "All Industries" and "All Locations" when name is entered
      industry: nameValue ? '' : prev.industry,
      location: nameValue ? '' : prev.location
    }));
  };

  // Handle industry change
  const handleIndustryChange = (e) => {
    setFormData(prev => ({
      ...prev,
      industry: e.target.value
    }));
  };

  // Handle location change
  const handleLocationChange = (e) => {
    setFormData(prev => ({
      ...prev,
      location: e.target.value
    }));
  };

  // Handle form submit - apply filters
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFilters({
      name: formData.name,
      industry: formData.industry,
      location: formData.location
    });
  };

  // Handle clear filters
  const handleClearFilters = () => {
    setFormData({
      name: '',
      industry: '',
      location: ''
    });
    clearFilters();
  };

  const hasActiveFilters = filters.name || filters.industry || filters.location;

  return (
    <div className="filter-controls">
      <div className="filters-header">
        <h2>Companies Directory</h2>
        <div className="view-toggle">
          <button
            className={`view-btn ${viewMode === 'table' ? 'active' : ''}`}
            onClick={() => setViewMode('table')}
            aria-label="Table view"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 4h16v2H2V4zm0 5h16v2H2V9zm0 5h16v2H2v-2z" />
            </svg>
          </button>
          <button
            className={`view-btn ${viewMode === 'cards' ? 'active' : ''}`}
            onClick={() => setViewMode('cards')}
            aria-label="Card view"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 4h6v6H2V4zm0 8h6v6H2v-6zm8-8h8v6h-8V4zm0 8h8v6h-8v-6z" />
            </svg>
          </button>
        </div>
      </div>

      <form className="filters-container" onSubmit={handleSubmit}>
        <div className="filter-group">
          <label htmlFor="name-filter">Search by Name</label>
          <input
            id="name-filter"
            type="text"
            placeholder="Enter company name..."
            value={formData.name}
            onChange={handleNameChange}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="industry-filter">Industry</label>
          <select
            id="industry-filter"
            value={formData.industry}
            onChange={handleIndustryChange}
            className="filter-select"
          >
            <option value="">All Industries</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="location-filter">Location</label>
          <select
            id="location-filter"
            value={formData.location}
            onChange={handleLocationChange}
            className="filter-select"
          >
            <option value="">All Locations</option>
            {locationOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-actions">
          <button
            type="submit"
            className="submit-filters-btn"
            aria-label="Apply filters"
          >
            Submit
          </button>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="clear-filters-btn"
              aria-label="Clear all filters"
            >
              Clear Filters
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FilterControls;

