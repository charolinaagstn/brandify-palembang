

interface HeroSectionProps {
  title: string;
  subtitle: string;
  motto: string;
}

export default function HeroSection({ title, subtitle, motto }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
            {subtitle}
          </p>
          
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <p className="text-2xl md:text-3xl font-bold text-white font-accent">
              "{motto}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}