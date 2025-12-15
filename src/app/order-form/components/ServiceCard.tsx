import Icon from '@/components/ui/AppIcon';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  timeline: string;
  icon: string;
}

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onSelect: () => void;
}

const ServiceCard = ({ service, isSelected, onSelect }: ServiceCardProps) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full p-6 rounded-lg border-2 transition-all duration-300 text-left ${
        isSelected
          ? 'border-accent bg-secondary/5 shadow-lg'
          : 'border-border hover:border-accent/50 hover:shadow-md'
      }`}
    >
      <div className="flex items-start space-x-4">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
            isSelected ? 'bg-secondary text-white' : 'bg-muted text-primary'
          }`}
        >
          <Icon name={service.icon as any} size={24} />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg text-foreground">{service.name}</h3>
            {isSelected && (
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                <Icon name="CheckIcon" size={16} className="text-white" />
              </div>
            )}
          </div>
          <p className="text-sm text-text-secondary mb-3">{service.description}</p>
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-primary">{service.price}</span>
            <span className="text-text-secondary flex items-center">
              <Icon name="ClockIcon" size={16} className="mr-1" />
              {service.timeline}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ServiceCard;