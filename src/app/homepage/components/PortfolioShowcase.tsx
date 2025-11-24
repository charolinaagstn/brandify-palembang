'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  client: string;
  image: string;
  alt: string;
  description: string;
}

interface PortfolioShowcaseProps {
  className?: string;
}

const PortfolioShowcase = ({ className = '' }: PortfolioShowcaseProps) => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Logo & Branding', 'Kemasan', 'Media Sosial', 'Marketing'];

  const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Rebranding Kopi Palembang',
    category: 'Logo & Branding',
    client: 'Kopi Nusantara',
    image: "https://images.unsplash.com/photo-1710543071590-0de9e9bc92d1",
    alt: 'Modern coffee shop logo design with brown and cream colors on business cards and packaging',
    description: 'Transformasi identitas brand untuk kedai kopi lokal dengan konsep modern minimalis'
  },
  {
    id: 2,
    title: 'Kemasan Pempek Premium',
    category: 'Kemasan',
    client: 'Pempek Sriwijaya',
    image: "https://images.unsplash.com/photo-1606296440704-f21b92e1f25e",
    alt: 'Premium food packaging box design with traditional Palembang patterns in red and gold',
    description: 'Desain kemasan eksklusif yang meningkatkan nilai jual produk pempek'
  },
  {
    id: 3,
    title: 'Campaign Ramadan UMKM',
    category: 'Media Sosial',
    client: 'Toko Berkah',
    image: "https://images.unsplash.com/photo-1680010233136-b31d0944e8f5",
    alt: 'Colorful Ramadan social media post design with Islamic patterns and festive colors',
    description: 'Konten media sosial untuk campaign Ramadan yang engaging dan konsisten'
  },
  {
    id: 4,
    title: 'Brosur Fashion Lokal',
    category: 'Marketing',
    client: 'Batik Palembang',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12f5e60c3-1763975620310.png",
    alt: 'Elegant fashion brochure layout featuring traditional batik patterns with modern typography',
    description: 'Materi promosi untuk koleksi batik dengan sentuhan kontemporer'
  },
  {
    id: 5,
    title: 'Brand Identity Kuliner',
    category: 'Logo & Branding',
    client: 'Warung Makan Sedap',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a13de530-1763975611965.png",
    alt: 'Restaurant brand identity including logo menu design and signage in warm orange tones',
    description: 'Identitas visual lengkap untuk warung makan tradisional'
  },
  {
    id: 6,
    title: 'Packaging Snack Lokal',
    category: 'Kemasan',
    client: 'Keripik Nusantara',
    image: "https://images.unsplash.com/photo-1587406399582-1b6fbfa4963a",
    alt: 'Vibrant snack packaging design with playful illustrations and bold colors on display',
    description: 'Kemasan menarik untuk produk keripik dengan target pasar modern'
  }];


  const filteredItems = activeCategory === 'Semua' ?
  portfolioItems :
  portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Portfolio Inspiratif
          </h2>
          <p className="text-lg text-text-secondary">
            Lihat bagaimana kami membantu UMKM Palembang mencapai kesuksesan melalui desain yang powerful
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category ?
            'bg-primary text-white shadow-lg scale-105' :
            'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'}`
            }>

              {category}
            </button>
          )}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) =>
          <div
            key={item.id}
            className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">

              {/* Portfolio Image */}
              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <span className="inline-block px-3 py-1 bg-accent rounded-full text-xs font-semibold mb-2">
                      {item.category}
                    </span>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>

              {/* Portfolio Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center text-sm text-text-secondary">
                  <Icon name="BuildingStorefrontIcon" size={16} className="mr-2" />
                  <span>{item.client}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* View All Portfolio CTA */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio-showcase"
            className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">

            Jelajahi Semua Portfolio
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>);

};

export default PortfolioShowcase;