'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface PortfolioFiltersProps {
  categories: FilterOption[];
  industries: FilterOption[];
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  category: string;
  industry: string;
  searchQuery: string;
}

const PortfolioFilters = ({ categories, industries, onFilterChange }: PortfolioFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    industry: 'all',
    searchQuery: ''
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters: FilterState = {
      category: 'all',
      industry: 'all',
      searchQuery: ''
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  const activeFilterCount = Object.values(filters).filter(
    (value, index) => index < 2 && value !== 'all'
  ).length;

  return (
    <div className="bg-card border border-border rounded-lg p-4 lg:p-6 mb-8">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-muted rounded-md text-foreground font-medium"
        >
          <span className="flex items-center space-x-2">
            <Icon name="FunnelIcon" size={20} />
            <span>Filter Portfolio</span>
            {activeFilterCount > 0 && (
              <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
                {activeFilterCount}
              </span>
            )}
          </span>
          <Icon 
            name="ChevronDownIcon" 
            size={20} 
            className={`transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Filter Content */}
      <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block space-y-4`}>
        {/* Search Bar */}
        <div className="relative">
          <Icon 
            name="MagnifyingGlassIcon" 
            size={20} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
          />
          <input
            type="text"
            placeholder="Cari proyek..."
            value={filters.searchQuery}
            onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground bg-background"
          />
        </div>

        {/* Filter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Kategori Layanan
            </label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full px-3 py-2.5 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground bg-background"
            >
              <option value="all">Semua Kategori</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label} ({cat.count})
                </option>
              ))}
            </select>
          </div>

          {/* Industry Filter */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Industri
            </label>
            <select
              value={filters.industry}
              onChange={(e) => handleFilterChange('industry', e.target.value)}
              className="w-full px-3 py-2.5 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground bg-background"
            >
              <option value="all">Semua Industri</option>
              {industries.map((ind) => (
                <option key={ind.id} value={ind.id}>
                  {ind.label} ({ind.count})
                </option>
              ))}
            </select>
          </div>

          {/* Reset Button */}
          <div className="flex items-end">
            <button
              onClick={resetFilters}
              disabled={activeFilterCount === 0 && !filters.searchQuery}
              className="w-full px-4 py-2.5 border border-border rounded-md text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <Icon name="ArrowPathIcon" size={18} />
              <span>Reset Filter</span>
            </button>
          </div>
        </div>

        {/* Active Filters Display */}
        {(activeFilterCount > 0 || filters.searchQuery) && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
            <span className="text-sm text-text-secondary">Filter aktif:</span>
            {filters.category !== 'all' && (
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center space-x-1">
                <span>{categories.find(c => c.id === filters.category)?.label}</span>
                <button onClick={() => handleFilterChange('category', 'all')}>
                  <Icon name="XMarkIcon" size={14} />
                </button>
              </span>
            )}
            {filters.industry !== 'all' && (
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm flex items-center space-x-1">
                <span>{industries.find(i => i.id === filters.industry)?.label}</span>
                <button onClick={() => handleFilterChange('industry', 'all')}>
                  <Icon name="XMarkIcon" size={14} />
                </button>
              </span>
            )}
            {filters.searchQuery && (
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm flex items-center space-x-1">
                <span>"{filters.searchQuery}"</span>
                <button onClick={() => handleFilterChange('searchQuery', '')}>
                  <Icon name="XMarkIcon" size={14} />
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioFilters;