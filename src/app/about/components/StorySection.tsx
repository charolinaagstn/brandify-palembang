import AppImage from '@/components/ui/AppImage';

interface StorySectionProps {
  story: {
    title: string;
    paragraphs: string[];
    image: string;
    alt: string;
  };
}

export default function StorySection({ story }: StorySectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {story.title}
            </h2>
            
            <div className="space-y-4">
              {story.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-text-secondary leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-[500px]">
              <AppImage
                src={story.image}
                alt={story.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}