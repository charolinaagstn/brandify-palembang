import Icon from '@/components/ui/AppIcon';

interface VisionMissionItem {
  type: 'vision' | 'mission';
  title: string;
  content: string;
  icon: string;
}

interface VisionMissionSectionProps {
  items: VisionMissionItem[];
}

export default function VisionMissionSection({ items }: VisionMissionSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visi & Misi Kami
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Komitmen kami untuk membangun ekosistem UMKM Palembang yang lebih kuat
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                item.type === 'vision' ? 'bg-primary/10' : 'bg-secondary/10'
              }`}>
                <Icon
                  name={item.icon as any}
                  size={32}
                  className={item.type === 'vision' ? 'text-primary' : 'text-secondary'}
                />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}