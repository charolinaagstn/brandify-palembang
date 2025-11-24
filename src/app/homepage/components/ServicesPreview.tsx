import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  features: string[];
  link: string;
}

interface ServicesPreviewProps {
  className?: string;
}

const ServicesPreview = ({ className = '' }: ServicesPreviewProps) => {
  const services: Service[] = [
  {
    id: 1,
    title: 'Desain Logo & Branding',
    description: 'Ciptakan identitas visual yang kuat dan memorable untuk bisnis Anda',
    icon: 'SparklesIcon',
    image: "https://images.unsplash.com/photo-1713616147761-c126f8009c6f",
    alt: 'Designer sketching creative logo concepts with pencil on paper with color swatches nearby',
    features: ['Logo Profesional', 'Brand Guidelines', 'Stationery Design'],
    link: '/services'
  },
  {
    id: 2,
    title: 'Desain Kemasan Produk',
    description: 'Kemasan menarik yang meningkatkan daya jual produk UMKM Anda',
    icon: 'CubeIcon',
    image: "https://images.unsplash.com/photo-1675843203587-b1437032ad88",
    alt: 'Colorful product packaging boxes arranged on white surface showing modern minimalist design',
    features: ['Packaging Design', 'Label Produk', 'Box Design'],
    link: '/services'
  },
  {
    id: 3,
    title: 'Desain Media Sosial',
    description: 'Konten visual yang engaging untuk meningkatkan presence online Anda',
    icon: 'DevicePhoneMobileIcon',
    image: "https://images.unsplash.com/photo-1540122867794-3c8b7e3a22c0",
    alt: 'Smartphone displaying colorful social media feed with engaging graphics and photos',
    features: ['Feed Instagram', 'Story Templates', 'Banner Promosi'],
    link: '/services'
  },
  {
    id: 4,
    title: 'Desain Marketing Material',
    description: 'Materi promosi profesional untuk campaign marketing yang efektif',
    icon: 'MegaphoneIcon',
    image: "https://images.unsplash.com/photo-1662904200699-cc3a81261464",
    alt: 'Marketing materials including brochures flyers and business cards spread on wooden desk',
    features: ['Brosur & Flyer', 'Banner & Poster', 'Katalog Produk'],
    link: '/services'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Layanan Desain Profesional
          </h2>
          <p className="text-lg text-text-secondary">
            Solusi desain grafis lengkap untuk mengembangkan bisnis UMKM Anda di Palembang
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) =>
          <div
            key={service.id}
            className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">

              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={service.image}
                alt={service.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name={service.icon as any} size={24} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-4 text-sm">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) =>
                <li key={index} className="flex items-center text-sm text-text-secondary">
                      <Icon name="CheckCircleIcon" size={16} className="text-accent mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                )}
                </ul>

                {/* CTA Link */}
                <Link
                href={service.link}
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group">

                  Pelajari Lebih Lanjut
                  <Icon name="ArrowRightIcon" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">

            Lihat Semua Layanan
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>);

};

export default ServicesPreview;