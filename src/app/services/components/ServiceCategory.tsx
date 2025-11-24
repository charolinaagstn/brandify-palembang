import Icon from '@/components/ui/AppIcon';

interface ServiceCategoryProps {
  icon: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

export default function ServiceCategory({
  icon,
  title,
  description,
  isActive,
  onClick
}: ServiceCategoryProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-lg border-2 transition-all duration-300 ${
        isActive
          ? 'border-accent bg-accent/5 shadow-md'
          : 'border-border bg-card hover:border-accent/50 hover:shadow-sm'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${isActive ? 'bg-accent text-accent-foreground' : 'bg-muted text-foreground'}`}>
          <Icon name={icon as any} size={24} />
        </div>
        <div className="flex-1">
          <h3 className={`font-bold text-lg mb-1 ${isActive ? 'text-accent' : 'text-foreground'}`}>
            {title}
          </h3>
          <p className="text-text-secondary text-sm">{description}</p>
        </div>
        <Icon
          name="ChevronRightIcon"
          size={20}
          className={`flex-shrink-0 transition-transform duration-300 ${
            isActive ? 'rotate-90 text-accent' : 'text-muted-foreground'
          }`}
        />
      </div>
    </button>
  );
}