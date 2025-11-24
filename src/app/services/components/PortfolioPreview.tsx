import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  alt: string;
}

interface PortfolioPreviewProps {
  items: PortfolioItem[];
}

export default function PortfolioPreview({ items }: PortfolioPreviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <a
          key={index}
          href="/portfolio-showcase"
          className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
        >
          <div className="relative h-48 overflow-hidden">
            <AppImage
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <Icon name="ArrowRightIcon" size={24} className="text-white" />
            </div>
          </div>
          <div className="p-4">
            <span className="text-xs text-accent font-semibold uppercase tracking-wide">{item.category}</span>
            <h4 className="font-bold text-foreground mt-1 group-hover:text-accent transition-colors">{item.title}</h4>
          </div>
        </a>
      ))}
    </div>
  );
}