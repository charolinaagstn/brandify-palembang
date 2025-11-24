'use client';

import { useState, useEffect } from 'react';
import ResourceCard from './ResourceCard';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import NewsletterSignup from './NewsletterSignup';
import FeaturedTools from './FeaturedTools';
import Icon from '@/components/ui/AppIcon';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'guide' | 'template' | 'video' | 'tool';
  image: string;
  alt: string;
  downloadUrl?: string;
  readTime?: string;
  downloads?: number;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface Tool {
  id: number;
  name: string;
  description: string;
  icon: string;
  link: string;
}

const ResourceCenterInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories: Category[] = [
  { id: 'semua', name: 'Semua Sumber Daya', icon: 'RectangleStackIcon', count: 24 },
  { id: 'branding', name: 'Branding & Identitas', icon: 'SparklesIcon', count: 8 },
  { id: 'design', name: 'Tips Design', icon: 'PaintBrushIcon', count: 6 },
  { id: 'marketing', name: 'Marketing Visual', icon: 'MegaphoneIcon', count: 5 },
  { id: 'umkm', name: 'Sukses UMKM', icon: 'BuildingStorefrontIcon', count: 5 }];


  const mockResources: Resource[] = [
  {
    id: 1,
    title: 'Panduan Lengkap Membangun Brand Identity untuk UMKM',
    description: 'Pelajari langkah demi langkah cara membangun identitas brand yang kuat dan konsisten untuk bisnis UMKM Anda. Termasuk worksheet dan checklist.',
    category: 'branding',
    type: 'guide',
    image: "https://images.unsplash.com/photo-1590402494628-9b9acf0b90ae",
    alt: 'Business team collaborating on brand strategy with colorful sticky notes on glass wall',
    downloadUrl: '/downloads/brand-identity-guide.pdf',
    readTime: '15 menit',
    downloads: 1247
  },
  {
    id: 2,
    title: '10 Prinsip Design yang Wajib Diketahui Pemilik UMKM',
    description: 'Artikel mendalam tentang prinsip-prinsip design fundamental yang dapat meningkatkan daya tarik visual bisnis Anda tanpa perlu keahlian design profesional.',
    category: 'design',
    type: 'article',
    image: "https://images.unsplash.com/photo-1695712551846-4dc15433fbd4",
    alt: 'Designer working on laptop with colorful design elements and sketches on desk',
    readTime: '8 menit',
    downloads: 892
  },
  {
    id: 3,
    title: 'Template Logo & Brand Kit Siap Pakai',
    description: 'Koleksi template logo profesional dan brand kit lengkap yang dapat disesuaikan untuk berbagai jenis bisnis UMKM. Format editable tersedia.',
    category: 'branding',
    type: 'template',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_188026ff6-1763975609194.png",
    alt: 'Collection of modern minimalist logo designs displayed on white background',
    downloadUrl: '/downloads/logo-templates.zip',
    downloads: 2156
  },
  {
    id: 4,
    title: 'Video Tutorial: Membuat Konten Visual Menarik dengan Smartphone',
    description: 'Tutorial video praktis tentang cara membuat konten visual berkualitas tinggi menggunakan smartphone untuk media sosial bisnis Anda.',
    category: 'marketing',
    type: 'video',
    image: "https://images.unsplash.com/photo-1718809428903-23e32b1c1683",
    alt: 'Person holding smartphone recording video content with professional lighting setup',
    readTime: '12 menit',
    downloads: 1534
  },
  {
    id: 5,
    title: 'Checklist Branding untuk Peluncuran Produk Baru',
    description: 'Daftar periksa komprehensif yang memastikan semua elemen branding Anda siap sebelum meluncurkan produk atau layanan baru ke pasar.',
    category: 'branding',
    type: 'template',
    image: "https://images.unsplash.com/photo-1500831850490-02aa18c22212",
    alt: 'Checklist on clipboard with pen and coffee cup on wooden desk',
    downloadUrl: '/downloads/product-launch-checklist.pdf',
    downloads: 1089
  },
  {
    id: 6,
    title: 'Studi Kasus: Transformasi Brand UMKM Palembang',
    description: 'Analisis mendalam tentang bagaimana rebranding membantu UMKM lokal meningkatkan penjualan hingga 300% dalam 6 bulan. Termasuk before-after dan strategi.',
    category: 'umkm',
    type: 'article',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_104908859-1763975615121.png",
    alt: 'Small business owner smiling in front of modern storefront with new branding',
    readTime: '10 menit',
    downloads: 756
  },
  {
    id: 7,
    title: 'Panduan Memilih Warna Brand yang Tepat',
    description: 'Psikologi warna dalam branding dan cara memilih palet warna yang mencerminkan nilai bisnis Anda dan menarik target audience yang tepat.',
    category: 'design',
    type: 'guide',
    image: "https://images.unsplash.com/photo-1696865156946-b3173ab972de",
    alt: 'Colorful paint swatches and color palette samples arranged on white surface',
    downloadUrl: '/downloads/color-guide.pdf',
    readTime: '12 menit',
    downloads: 1423
  },
  {
    id: 8,
    title: 'Template Social Media Post untuk UMKM',
    description: 'Koleksi 50+ template post Instagram, Facebook, dan WhatsApp Business yang siap pakai dan dapat disesuaikan dengan brand Anda.',
    category: 'marketing',
    type: 'template',
    image: "https://images.unsplash.com/photo-1708447134771-f2c8ccb650bd",
    alt: 'Smartphone displaying social media feed with colorful branded posts',
    downloadUrl: '/downloads/social-media-templates.zip',
    downloads: 2891
  },
  {
    id: 9,
    title: 'Cara Membuat Packaging yang Menjual',
    description: 'Artikel tentang design packaging yang efektif untuk produk UMKM, termasuk tips material, ukuran, dan elemen visual yang meningkatkan perceived value.',
    category: 'design',
    type: 'article',
    image: "https://images.unsplash.com/photo-1580680849668-45d32df32e67",
    alt: 'Elegant product packaging boxes in various sizes with minimalist design',
    readTime: '9 menit',
    downloads: 1167
  },
  {
    id: 10,
    title: 'Video: Fotografi Produk dengan Budget Minimal',
    description: 'Tutorial lengkap tentang teknik fotografi produk profesional menggunakan peralatan sederhana dan pencahayaan alami untuk hasil maksimal.',
    category: 'marketing',
    type: 'video',
    image: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c",
    alt: 'Product photography setup with natural lighting and simple white background',
    readTime: '15 menit',
    downloads: 1678
  },
  {
    id: 11,
    title: 'Strategi Branding untuk Bisnis Kuliner Palembang',
    description: 'Panduan khusus untuk UMKM kuliner di Palembang tentang cara membangun brand yang menonjol di pasar yang kompetitif dengan identitas lokal yang kuat.',
    category: 'umkm',
    type: 'guide',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c3312ddd-1763975615883.png",
    alt: 'Traditional Palembang food beautifully plated with modern presentation style',
    downloadUrl: '/downloads/culinary-branding-guide.pdf',
    readTime: '14 menit',
    downloads: 934
  },
  {
    id: 12,
    title: 'Template Presentasi Pitch Deck untuk Investor',
    description: 'Template presentasi profesional yang dirancang khusus untuk UMKM yang ingin menarik investor atau partner bisnis dengan visual yang meyakinkan.',
    category: 'branding',
    type: 'template',
    image: "https://images.unsplash.com/photo-1733397315165-dca1ba4927ae",
    alt: 'Business presentation slides displayed on large screen in modern conference room',
    downloadUrl: '/downloads/pitch-deck-template.pptx',
    downloads: 1456
  }];


  const featuredTools: Tool[] = [
  {
    id: 1,
    name: 'Generator Nama Brand',
    description: 'Buat nama brand yang unik dan memorable untuk bisnis Anda',
    icon: 'SparklesIcon',
    link: '#'
  },
  {
    id: 2,
    name: 'Pembuat Palet Warna',
    description: 'Ciptakan kombinasi warna harmonis untuk brand identity',
    icon: 'SwatchIcon',
    link: '#'
  },
  {
    id: 3,
    name: 'Kalkulator Harga Design',
    description: 'Estimasi budget design untuk berbagai kebutuhan branding',
    icon: 'CalculatorIcon',
    link: '#'
  },
  {
    id: 4,
    name: 'Checker Konsistensi Brand',
    description: 'Evaluasi konsistensi visual brand Anda di berbagai platform',
    icon: 'CheckBadgeIcon',
    link: '#'
  }];


  useEffect(() => {
    if (!isHydrated) return;

    let filtered = mockResources;

    if (activeCategory !== 'semua') {
      filtered = filtered.filter((resource) => resource.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (resource) =>
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query)
      );
    }

    setFilteredResources(filtered);
  }, [activeCategory, searchQuery, isHydrated]);

  const handleDownload = (id: number) => {
    const resource = mockResources.find((r) => r.id === id);
    if (resource) {
      alert(`Mengunduh: ${resource.title}`);
    }
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3"></div>
            <div className="h-64 bg-muted rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-muted rounded"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pusat Sumber Daya Design
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Panduan, template, dan tools gratis untuk membantu UMKM Palembang membangun brand yang kuat
            </p>
            <div className="max-w-2xl mx-auto">
              <SearchBar onSearch={setSearchQuery} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory} />

              <FeaturedTools tools={featuredTools} />
            </aside>

            {/* Resources Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {activeCategory === 'semua' ? 'Semua Sumber Daya' :
                  categories.find((c) => c.id === activeCategory)?.name}
                </h2>
                <span className="text-sm text-text-secondary">
                  {filteredResources.length} sumber daya ditemukan
                </span>
              </div>

              {filteredResources.length === 0 ?
              <div className="text-center py-16">
                  <Icon name="MagnifyingGlassIcon" size={64} className="text-text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Tidak ada hasil ditemukan
                  </h3>
                  <p className="text-text-secondary">
                    Coba ubah kata kunci pencarian atau pilih kategori lain
                  </p>
                </div> :

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredResources.map((resource) =>
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onDownload={handleDownload} />

                )}
                </div>
              }
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24+</div>
              <div className="text-sm text-text-secondary">Sumber Daya</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15K+</div>
              <div className="text-sm text-text-secondary">Total Unduhan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-sm text-text-secondary">UMKM Terbantu</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">4.9/5</div>
              <div className="text-sm text-text-secondary">Rating Pengguna</div>
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default ResourceCenterInteractive;