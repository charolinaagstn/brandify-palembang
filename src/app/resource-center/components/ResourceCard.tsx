'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ResourceCardProps {
  resource: {
    id: number;
    title: string;
    description: string;
    category: string;
    type: 'article' | 'guide' | 'template' | 'video' | 'tool';
    image: string;
    alt: string;
    downloadUrl?: string;
    readTime?: string;
    downloads?: number;
  };
  onDownload?: (id: number) => void;
}

const ResourceCard = ({ resource, onDownload }: ResourceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTypeIcon = () => {
    switch (resource.type) {
      case 'article':
        return 'DocumentTextIcon';
      case 'guide':
        return 'BookOpenIcon';
      case 'template':
        return 'DocumentDuplicateIcon';
      case 'video':
        return 'PlayCircleIcon';
      case 'tool':
        return 'WrenchScrewdriverIcon';
      default:
        return 'DocumentIcon';
    }
  };

  const getTypeLabel = () => {
    switch (resource.type) {
      case 'article':
        return 'Artikel';
      case 'guide':
        return 'Panduan';
      case 'template':
        return 'Template';
      case 'video':
        return 'Video';
      case 'tool':
        return 'Alat';
      default:
        return 'Sumber Daya';
    }
  };

  const handleDownload = () => {
    if (onDownload) {
      onDownload(resource.id);
    }
  };

  return (
    <div
      className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={resource.image}
          alt={resource.alt}
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
          <Icon name={getTypeIcon()} size={14} variant="solid" />
          <span>{getTypeLabel()}</span>
        </div>
        {resource.downloads && (
          <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Icon name="ArrowDownTrayIcon" size={14} />
            <span>{resource.downloads}</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
            {resource.category}
          </span>
          {resource.readTime && (
            <span className="text-xs text-text-secondary flex items-center space-x-1">
              <Icon name="ClockIcon" size={14} />
              <span>{resource.readTime}</span>
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
          {resource.title}
        </h3>

        <p className="text-sm text-text-secondary mb-4 line-clamp-3">
          {resource.description}
        </p>

        <div className="flex items-center space-x-2">
          {resource.downloadUrl ? (
            <button
              onClick={handleDownload}
              className="flex-1 bg-accent text-accent-foreground px-4 py-2 rounded-md font-semibold text-sm hover:bg-accent/90 transition-colors flex items-center justify-center space-x-2"
            >
              <Icon name="ArrowDownTrayIcon" size={16} variant="solid" />
              <span>Unduh</span>
            </button>
          ) : (
            <button className="flex-1 bg-secondary text-secondary-foreground px-4 py-2 rounded-md font-semibold text-sm hover:bg-secondary/90 transition-colors flex items-center justify-center space-x-2">
              <Icon name="EyeIcon" size={16} variant="solid" />
              <span>Lihat</span>
            </button>
          )}
          <button className="p-2 border border-border rounded-md hover:bg-muted transition-colors">
            <Icon name="ShareIcon" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;