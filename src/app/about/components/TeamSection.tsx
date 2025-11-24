import AppImage from '@/components/ui/AppImage';


interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  image: string;
  alt: string;
}

interface TeamSectionProps {
  members: TeamMember[];
}

export default function TeamSection({ members }: TeamSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tim Kreatif Kami
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Profesional berpengalaman yang memahami pasar lokal Palembang
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              <div className="relative h-80 overflow-hidden">
                <AppImage
                  src={member.image}
                  alt={member.alt}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                
                <p className="text-primary font-semibold mb-3">
                  {member.role}
                </p>
                
                <p className="text-text-secondary text-sm leading-relaxed">
                  {member.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}