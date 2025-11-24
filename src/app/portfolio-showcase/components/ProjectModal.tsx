'use client';

import { useEffect } from 'react';
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
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
  projectDetails?: {
    duration: string;
    teamSize: string;
    deliverables: string[];
  };
}

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

const ProjectModal = ({ project, onClose, onNext, onPrevious }: ProjectModalProps) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-card border-b border-border">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
            <p className="text-sm text-text-secondary mt-1">
              {project.client} • {project.industry}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6 space-y-8">
            {/* Before/After Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="ArrowLeftIcon" size={16} />
                  <span>Sebelum</span>
                </h3>
                <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border">
                  <AppImage
                    src={project.beforeImage}
                    alt={project.beforeAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="ArrowRightIcon" size={16} />
                  <span>Sesudah</span>
                </h3>
                <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border">
                  <AppImage
                    src={project.afterImage}
                    alt={project.afterAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Deskripsi Proyek</h3>
              <p className="text-foreground leading-relaxed">{project.description}</p>
            </div>

            {/* Project Details */}
            {project.projectDetails && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="ClockIcon" size={20} className="text-primary" />
                    <span className="text-sm font-medium text-text-secondary">Durasi</span>
                  </div>
                  <p className="text-foreground font-semibold">{project.projectDetails.duration}</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="UserGroupIcon" size={20} className="text-primary" />
                    <span className="text-sm font-medium text-text-secondary">Tim</span>
                  </div>
                  <p className="text-foreground font-semibold">{project.projectDetails.teamSize}</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="CalendarIcon" size={20} className="text-primary" />
                    <span className="text-sm font-medium text-text-secondary">Selesai</span>
                  </div>
                  <p className="text-foreground font-semibold">{project.completionDate}</p>
                </div>
              </div>
            )}

            {/* Results */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Hasil & Dampak</h3>
              <div className="space-y-3">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-success/5 border border-success/20 rounded-lg">
                    <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            {project.projectDetails?.deliverables && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Deliverables</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.projectDetails.deliverables.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
                      <Icon name="DocumentCheckIcon" size={18} className="text-accent" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonial */}
            {project.testimonial && (
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <Icon name="ChatBubbleLeftRightIcon" size={32} className="text-primary mb-4" />
                <p className="text-foreground italic mb-4">"{project.testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="UserIcon" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{project.testimonial.author}</p>
                    <p className="text-sm text-text-secondary">{project.testimonial.position}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-secondary/10 text-secondary rounded-md text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        {(onPrevious || onNext) && (
          <div className="sticky bottom-0 flex items-center justify-between px-6 py-4 bg-card border-t border-border">
            <button
              onClick={onPrevious}
              disabled={!onPrevious}
              className="px-4 py-2 border border-border rounded-md text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Icon name="ChevronLeftIcon" size={20} />
              <span>Sebelumnya</span>
            </button>
            <button
              onClick={onNext}
              disabled={!onNext}
              className="px-4 py-2 border border-border rounded-md text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <span>Selanjutnya</span>
              <Icon name="ChevronRightIcon" size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;