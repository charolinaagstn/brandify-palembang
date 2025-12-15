import Icon from '@/components/ui/AppIcon';

interface Value {
  title: string;
  description: string;
  icon: string;
}

interface ValuesSectionProps {
  values: Value[];
}

export default function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nilai-Nilai Kami
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Prinsip yang memandu setiap karya dan kolaborasi kami
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border hover:border-accent group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                <Icon
                  name={value.icon as any}
                  size={28}
                  className="text-accent"
                />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}