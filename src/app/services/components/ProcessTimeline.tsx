import Icon from '@/components/ui/AppIcon';

interface TimelineStep {
  title: string;
  description: string;
  duration: string;
  icon: string;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-6 mb-8 last:mb-0">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0 shadow-md">
              <Icon name={step.icon as any} size={24} />
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-full bg-border mt-2 flex-grow min-h-[60px]" />
            )}
          </div>
          
          <div className="flex-1 pb-8">
            <div className="flex items-center gap-3 mb-2">
              <h4 className="font-bold text-lg text-foreground">{step.title}</h4>
              <span className="px-3 py-1 bg-muted text-text-secondary text-xs rounded-full font-medium">
                {step.duration}
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}