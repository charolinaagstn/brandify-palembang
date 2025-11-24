import Icon from '@/components/ui/AppIcon';

interface Tool {
  id: number;
  name: string;
  description: string;
  icon: string;
  link: string;
}

interface FeaturedToolsProps {
  tools: Tool[];
}

const FeaturedTools = ({ tools }: FeaturedToolsProps) => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center space-x-2">
        <Icon name="WrenchScrewdriverIcon" size={20} variant="solid" className="text-accent" />
        <span>Alat Interaktif</span>
      </h3>
      <div className="space-y-4">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={tool.icon as any} size={20} className="text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">{tool.name}</h4>
                <p className="text-sm text-text-secondary">{tool.description}</p>
              </div>
              <Icon name="ChevronRightIcon" size={20} className="text-text-secondary" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTools;