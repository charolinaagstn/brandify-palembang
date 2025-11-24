'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  description: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  tags: string[];
  completionDate: string;
  results: string[];
}

interface PortfolioCardProps {
  project: PortfolioProject;
  onViewDetails: (project: PortfolioProject) => void;
}

const PortfolioCard = ({ project, onViewDetails }: PortfolioCardProps) => {
  const [showBefore, setShowBefore] = useState(false);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image Container with Before/After Toggle */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <AppImage
          src={showBefore ? project.beforeImage : project.afterImage}
          alt={showBefore ? project.beforeAlt : project.afterAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Before/After Toggle */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={() => setShowBefore(false)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              !showBefore 
                ? 'bg-primary text-primary-foreground shadow-md' 
                : 'bg-white/90 text-foreground hover:bg-white'
            }`}
          >
            Sesudah
          </button>
          <button
            onClick={() => setShowBefore(true)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              showBefore 
                ? 'bg-primary text-primary-foreground shadow-md' 
                : 'bg-white/90 text-foreground hover:bg-white'
            }`}
          >
            Sebelum
          </button>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm font-medium shadow-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Client */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-foreground mb-1 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-sm text-text-secondary flex items-center space-x-1">
            <Icon name="BuildingOfficeIcon" size={16} />
            <span>{project.client}</span>
            <span className="mx-2">•</span>
            <span>{project.industry}</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Results Preview */}
        {project.results.length > 0 && (
          <div className="mb-4 p-3 bg-success/5 border border-success/20 rounded-md">
            <div className="flex items-start space-x-2">
              <Icon name="CheckCircleIcon" size={18} className="text-success mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground line-clamp-2">
                {project.results[0]}
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs text-text-secondary flex items-center space-x-1">
            <Icon name="CalendarIcon" size={14} />
            <span>{project.completionDate}</span>
          </span>
          <button
            onClick={() => onViewDetails(project)}
            className="px-4 py-2 bg-accent text-accent-foreground rounded-md text-sm font-medium hover:bg-accent/90 transition-colors flex items-center space-x-1"
          >
            <span>Lihat Detail</span>
            <Icon name="ArrowRightIcon" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;