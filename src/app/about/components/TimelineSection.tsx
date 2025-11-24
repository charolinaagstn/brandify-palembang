'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  milestone: string;
}

interface TimelineSectionProps {
  events: TimelineEvent[];
}

export default function TimelineSection({ events }: TimelineSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perjalanan Kami
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Tumbuh bersama komunitas bisnis Palembang
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div
                      className={`bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 ${
                        activeIndex === index ? 'border-accent' : 'border-border'
                      }`}
                    >
                      <div className="flex items-center mb-3">
                        <span className="text-3xl font-bold text-primary mr-3">
                          {event.year}
                        </span>
                        <div className="flex-1 h-px bg-border"></div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      
                      <p className="text-text-secondary mb-3 leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="inline-flex items-center px-3 py-1 bg-accent/10 rounded-full">
                        <Icon name="CheckCircleIcon" size={16} className="text-accent mr-2" />
                        <span className="text-sm font-semibold text-accent">
                          {event.milestone}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 items-center justify-center">
                    <div
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        activeIndex === index ? 'bg-accent scale-125' : 'bg-border'
                      }`}
                    ></div>
                  </div>
                  
                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}