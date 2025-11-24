'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';


interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  alt: string;
  popular?: boolean;
}

export default function ServiceCard({
  title,
  description,
  price,
  duration,
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