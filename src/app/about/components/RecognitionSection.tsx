import Icon from '@/components/ui/AppIcon';

interface Recognition {
  type: 'award' | 'media' | 'community';
  title: string;
  description: string;
  date: string;
  icon: string;
}

interface RecognitionSectionProps {
  recognitions: Recognition[];
}

export default function RecognitionSection({ recognitions }: RecognitionSectionProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'award':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'media':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'community':
        return 'bg-secondary/10 text-accent border-accent/20';
      default:
        return 'bg-muted text-foreground border-border';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'award':
        return 'Penghargaan';
      case 'media':
        return 'Media';
      case 'community':
        return 'Komunitas';
      default:
        return 'Lainnya';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pengakuan & Pencapaian
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Kebanggaan kami dalam melayani komunitas bisnis Palembang
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {recognitions.map((recognition, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${getTypeColor(recognition.type)}`}>
                  <Icon
                    name={recognition.icon as any}
                    size={24}
                  />
                </div>
                
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(recognition.type)}`}>
                  {getTypeLabel(recognition.type)}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">
                {recognition.title}
              </h3>
              
              <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                {recognition.description}
              </p>
              
              <div className="flex items-center text-xs text-text-secondary">
                <Icon name="CalendarIcon" size={14} className="mr-1" />
                <span>{recognition.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}