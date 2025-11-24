'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ServiceFeature {
  text: string;
  included: boolean;
}

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  features: ServiceFeature[];
  image: string;
  alt: string;
  popular?: boolean;
}

export default function ServiceCard({
  title,
  description,
  price,
  duration,
  features,
  image,
  alt,
  popular = false
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-card rounded-lg border-2 ${popular ? 'border-accent shadow-xl' : 'border-border'} overflow-hidden transition-all duration-300 hover:shadow-lg relative`}>
      {popular && (
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold z-10">
          Paling Populer
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-bold text-primary">{price}</span>
          <span className="text-text-secondary text-sm">/ proyek</span>
        </div>

        <div className="flex items-center gap-2 text-text-secondary text-sm mb-6">
          <Icon name="ClockIcon" size={16} />
          <span>{duration}</span>
        </div>

        <div className="space-y-3 mb-6">
          {features.slice(0, isExpanded ? features.length : 4).map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Icon
                name={feature.included ? 'CheckCircleIcon' : 'XCircleIcon'}
                size={20}
                variant="solid"
                className={feature.included ? 'text-success flex-shrink-0' : 'text-muted-foreground flex-shrink-0'}
              />
              <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {features.length > 4 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary text-sm font-medium flex items-center gap-1 mb-4 hover:text-primary/80 transition-colors"
          >
            {isExpanded ? 'Lihat Lebih Sedikit' : 'Lihat Semua Fitur'}
            <Icon
              name="ChevronDownIcon"
              size={16}
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        )}

        <a
          href="/order-form"
          className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Pesan Sekarang
        </a>
      </div>
    </div>
  );
}