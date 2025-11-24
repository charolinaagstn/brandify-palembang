'use client';

import { useState, useEffect } from 'react';
import PortfolioFilters, { FilterState } from './PortfolioFilters';
import PortfolioCard from './PortfolioCard';
import ProjectModal from './ProjectModal';
import StatsSection from './StatsSection';
import Icon from '@/components/ui/AppIcon';

interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  description: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  tags: string[];
  completionDate: string;
  results: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
  projectDetails?: {
    duration: string;
    teamSize: string;
    deliverables: string[];
  };
}

const PortfolioShowcaseInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<PortfolioProject[]>([]);
  const [displayCount, setDisplayCount] = useState(9);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Rebranding Warung Kopi Palembang',
    client: 'Kopi Pempek Heritage',
    category: 'Logo & Branding',
    industry: 'Kuliner',
    description: 'Transformasi identitas visual warung kopi tradisional menjadi brand modern yang tetap mempertahankan nilai-nilai lokal Palembang. Menciptakan logo yang menggabungkan elemen kopi dan pempek sebagai ikon khas kota.',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_19b252a36-1763975606186.png",
    beforeAlt: 'Old coffee shop logo with plain text and basic design on white background',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1178ddf4a-1763975608338.png",
    afterAlt: 'Modern coffee shop logo featuring stylized coffee cup with Palembang cultural elements in warm brown tones',
    tags: ['Logo Design', 'Brand Identity', 'Packaging', 'Menu Design'],
    completionDate: 'November 2024',
    results: [
    'Peningkatan brand awareness 65% dalam 3 bulan pertama',
    'Kenaikan penjualan 40% setelah rebranding',
    'Ekspansi ke 3 cabang baru dengan identitas visual yang konsisten'],

    testimonial: {
      text: 'Brandify berhasil menangkap esensi warung kopi kami yang tradisional namun dikemas dengan desain yang sangat modern. Pelanggan baru berdatangan karena tertarik dengan tampilan brand kami yang fresh!',
      author: 'Budi Santoso',
      position: 'Pemilik Kopi Pempek Heritage'
    },
    projectDetails: {
      duration: '6 Minggu',
      teamSize: '4 Designer',
      deliverables: ['Logo Suite', 'Brand Guidelines', 'Packaging Design', 'Menu Board', 'Social Media Templates']
    }
  },
  {
    id: '2',
    title: 'Desain Kemasan Keripik Kentang Premium',
    client: 'Kentang Renyah Nusantara',
    category: 'Packaging Design',
    industry: 'Makanan & Minuman',
    description: 'Pengembangan desain kemasan yang eye-catching untuk produk keripik kentang premium dengan target pasar modern. Menggunakan ilustrasi custom dan warna-warna cerah yang menonjol di rak supermarket.',
    beforeImage: "https://images.unsplash.com/photo-1694101493127-eca6dfef5011",
    beforeAlt: 'Plain plastic bag packaging with simple printed label for potato chips',
    afterImage: "https://images.unsplash.com/photo-1613420057914-8062689e1b7e",
    afterAlt: 'Premium potato chips packaging with vibrant colors, custom illustrations of golden potatoes, and modern typography',
    tags: ['Packaging', 'Illustration', 'Product Design', 'Print Ready'],
    completionDate: 'Oktober 2024',
    results: [
    'Produk diterima di 15 supermarket besar di Palembang',
    'Peningkatan harga jual 30% dengan positioning premium',
    'Memenangkan penghargaan Best Packaging Design UMKM Sumsel 2024'],

    projectDetails: {
      duration: '4 Minggu',
      teamSize: '3 Designer',
      deliverables: ['Packaging Design', 'Die-cut Template', 'Print Files', 'Product Photography Direction']
    }
  },
  {
    id: '3',
    title: 'Website E-Commerce Fashion Lokal',
    client: 'Batik Modern Palembang',
    category: 'Web Design',
    industry: 'Fashion & Retail',
    description: 'Desain website e-commerce yang menampilkan koleksi batik modern dengan user experience yang smooth dan visual yang memukau. Mengintegrasikan galeri produk, sistem checkout, dan blog fashion.',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1bdef52e4-1763975610631.png",
    beforeAlt: 'Basic website template with cluttered layout and outdated design showing fashion products',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10842a835-1763975611996.png",
    afterAlt: 'Modern e-commerce website with clean layout, large product images of batik clothing, and elegant typography',
    tags: ['Web Design', 'UI/UX', 'E-Commerce', 'Responsive Design'],
    completionDate: 'September 2024',
    results: [
    'Conversion rate meningkat 85% dibanding website lama',
    'Average order value naik 50% dengan layout produk yang lebih baik',
    'Mobile traffic meningkat 120% dengan desain responsive'],

    testimonial: {
      text: 'Website baru kami tidak hanya cantik, tapi juga sangat fungsional. Pelanggan lebih mudah berbelanja dan kami bisa showcase produk batik dengan lebih elegan. Penjualan online melonjak drastis!',
      author: 'Siti Nurhaliza',
      position: 'Owner Batik Modern Palembang'
    },
    projectDetails: {
      duration: '8 Minggu',
      teamSize: '5 Designer',
      deliverables: ['UI Design', 'Prototype', 'Design System', 'Asset Library', 'Developer Handoff']
    }
  },
  {
    id: '4',
    title: 'Social Media Branding Cafe Aesthetic',
    client: 'Aesthetic Corner Cafe',
    category: 'Social Media Design',
    industry: 'Kuliner',
    description: 'Pembuatan template dan konten visual untuk Instagram dan TikTok dengan tema aesthetic minimalis yang konsisten. Termasuk feed planning, story templates, dan reels cover design.',
    beforeImage: "https://images.unsplash.com/photo-1668031772591-435d47be5f75",
    beforeAlt: 'Inconsistent social media posts with random photos and no cohesive design theme',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1c17a65f8-1763975625053.png",
    afterAlt: 'Cohesive Instagram feed with aesthetic minimalist design, pastel colors, and professional food photography',
    tags: ['Social Media', 'Content Design', 'Instagram', 'Brand Consistency'],
    completionDate: 'November 2024',
    results: [
    'Follower Instagram bertambah 5000+ dalam 2 bulan',
    'Engagement rate naik dari 2% menjadi 8.5%',
    'Cafe menjadi trending topic di TikTok Palembang'],

    projectDetails: {
      duration: '3 Minggu',
      teamSize: '2 Designer',
      deliverables: ['Feed Templates', 'Story Templates', 'Reels Covers', 'Content Calendar', 'Brand Guidelines']
    }
  },
  {
    id: '5',
    title: 'Flyer & Poster Event Festival Musik',
    client: 'Palembang Music Festival 2024',
    category: 'Print Design',
    industry: 'Event & Entertainment',
    description: 'Desain materi promosi untuk festival musik tahunan terbesar di Palembang. Menciptakan visual yang energik dan eye-catching untuk menarik perhatian target audience muda.',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1d23bc61b-1763975607452.png",
    beforeAlt: 'Simple text-based event poster with basic layout and minimal visual appeal',
    afterImage: "https://images.unsplash.com/photo-1688385261323-8dbaeb03aef2",
    afterAlt: 'Dynamic music festival poster with bold typography, vibrant gradient colors, and energetic design elements',
    tags: ['Poster Design', 'Flyer', 'Event Branding', 'Print Media'],
    completionDate: 'Agustus 2024',
    results: [
    'Tiket sold out 2 minggu sebelum event',
    'Poster viral di social media dengan 50K+ shares',
    'Brand awareness festival meningkat 200%'],

    testimonial: {
      text: 'Desain poster dan flyer dari Brandify benar-benar mencuri perhatian! Kami dapat respons luar biasa dari target audience dan tiket terjual habis lebih cepat dari tahun-tahun sebelumnya.',
      author: 'Andi Wijaya',
      position: 'Event Director PMF 2024'
    },
    projectDetails: {
      duration: '2 Minggu',
      teamSize: '3 Designer',
      deliverables: ['Poster A3', 'Flyer A5', 'Banner Design', 'Social Media Assets', 'Print Files']
    }
  },
  {
    id: '6',
    title: 'Corporate Identity Startup Teknologi',
    client: 'TechHub Palembang',
    category: 'Logo & Branding',
    industry: 'Teknologi',
    description: 'Pengembangan identitas korporat lengkap untuk startup teknologi yang fokus pada solusi digital untuk UMKM. Menciptakan brand yang modern, trustworthy, dan inovatif.',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_15b62594f-1763975606058.png",
    beforeAlt: 'Generic tech company logo with basic geometric shapes and standard blue color',
    afterImage: "https://images.unsplash.com/photo-1706007496099-a3e4fea6a835",
    afterAlt: 'Modern tech startup logo with innovative geometric design, gradient colors, and professional business card mockup',
    tags: ['Corporate Identity', 'Logo Design', 'Stationery', 'Brand Strategy'],
    completionDate: 'Oktober 2024',
    results: [
    'Berhasil mendapat funding Series A senilai 5M',
    'Brand recognition meningkat 150% di komunitas startup',
    'Menarik 20+ klien korporat dalam 3 bulan pertama'],

    projectDetails: {
      duration: '5 Minggu',
      teamSize: '4 Designer',
      deliverables: ['Logo Suite', 'Business Cards', 'Letterhead', 'Email Signature', 'Brand Book']
    }
  },
  {
    id: '7',
    title: 'Menu Board Design Restoran',
    client: 'Pempek Palembang Asli',
    category: 'Print Design',
    industry: 'Kuliner',
    description: 'Desain menu board yang menarik dan mudah dibaca untuk restoran pempek dengan konsep modern. Mengorganisir 50+ item menu dengan hierarki visual yang jelas.',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1404c16f0-1763975619977.png",
    beforeAlt: 'Cluttered restaurant menu board with small text and poor organization',
    afterImage: "https://images.unsplash.com/photo-1532885118845-ecfdb20258f6",
    afterAlt: 'Clean and organized restaurant menu board with clear sections, appetizing food photos, and readable typography',
    tags: ['Menu Design', 'Food Photography', 'Print Design', 'Typography'],
    completionDate: 'September 2024',
    results: [
    'Waktu pemesanan customer berkurang 40%',
    'Penjualan menu premium naik 55%',
    'Customer satisfaction score meningkat dari 7.5 menjadi 9.2'],

    projectDetails: {
      duration: '3 Minggu',
      teamSize: '2 Designer',
      deliverables: ['Menu Board Design', 'Table Tent', 'Take-away Menu', 'Digital Menu Display']
    }
  },
  {
    id: '8',
    title: 'Brand Identity Produk Kecantikan Lokal',
    client: 'Glow Natural Skincare',
    category: 'Logo & Branding',
    industry: 'Beauty & Wellness',
    description: 'Pengembangan brand identity untuk produk skincare lokal dengan bahan-bahan alami. Menciptakan visual yang feminine, natural, dan premium untuk target market wanita 20-35 tahun.',
    beforeImage: "https://images.unsplash.com/photo-1671789407769-1d422d5a33ce",
    beforeAlt: 'Simple skincare product packaging with basic label and minimal branding',
    afterImage: "https://images.unsplash.com/photo-1656147962576-613e7b936c31",
    afterAlt: 'Premium skincare product line with elegant packaging, botanical illustrations, and cohesive brand identity in soft pastel colors',
    tags: ['Brand Identity', 'Packaging', 'Product Design', 'Beauty Industry'],
    completionDate: 'November 2024',
    results: [
    'Produk masuk ke 25 beauty store di Sumatera Selatan',
    'Instagram followers tumbuh dari 500 menjadi 15K',
    'Monthly revenue meningkat 300% dalam 4 bulan'],

    testimonial: {
      text: 'Brandify membantu kami menciptakan brand identity yang benar-benar mencerminkan nilai natural dan premium produk kami. Packaging yang cantik membuat produk kami stand out di pasaran!',
      author: 'Maya Putri',
      position: 'Founder Glow Natural Skincare'
    },
    projectDetails: {
      duration: '7 Minggu',
      teamSize: '5 Designer',
      deliverables: ['Logo & Brand Mark', 'Packaging Design', 'Label Design', 'Brand Guidelines', 'Marketing Collateral']
    }
  },
  {
    id: '9',
    title: 'Infografis Edukasi Kesehatan',
    client: 'Klinik Sehat Palembang',
    category: 'Illustration & Infographic',
    industry: 'Healthcare',
    description: 'Pembuatan series infografis edukatif tentang kesehatan untuk social media dan materi edukasi pasien. Menggunakan ilustrasi custom yang friendly dan mudah dipahami.',
    beforeImage: "https://images.unsplash.com/photo-1641748182997-f9745e9a0348",
    beforeAlt: 'Text-heavy health information document with no visual elements or graphics',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10ef97536-1763975607673.png",
    afterAlt: 'Colorful health infographic with custom illustrations, clear data visualization, and easy-to-understand layout',
    tags: ['Infographic', 'Illustration', 'Healthcare', 'Educational Design'],
    completionDate: 'Oktober 2024',
    results: [
    'Konten infografis dibagikan 10K+ kali di social media',
    'Awareness program kesehatan meningkat 180%',
    'Kunjungan pasien baru naik 45% setelah campaign'],

    projectDetails: {
      duration: '4 Minggu',
      teamSize: '3 Designer',
      deliverables: ['10 Infographic Designs', 'Custom Illustrations', 'Social Media Posts', 'Print Posters']
    }
  },
  {
    id: '10',
    title: 'Rebranding Toko Buku Independen',
    client: 'Buku & Kopi Corner',
    category: 'Logo & Branding',
    industry: 'Retail & Education',
    description: 'Transformasi brand toko buku independen yang menggabungkan konsep bookstore dan coffee shop. Menciptakan identitas yang cozy, intellectual, dan community-focused.',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_14af80a87-1763975608440.png",
    beforeAlt: 'Traditional bookstore logo with serif font and book icon on plain background',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f2ee3809-1763975607813.png",
    afterAlt: 'Modern bookstore and cafe logo combining book and coffee cup elements with warm earthy tones and contemporary typography',
    tags: ['Rebranding', 'Logo Design', 'Interior Signage', 'Community Space'],
    completionDate: 'Agustus 2024',
    results: [
    'Footfall meningkat 70% setelah rebranding',
    'Menjadi community hub untuk book club dan events',
    'Revenue dari coffee shop naik 90%'],

    projectDetails: {
      duration: '6 Minggu',
      teamSize: '4 Designer',
      deliverables: ['Logo Redesign', 'Signage System', 'Menu Board', 'Loyalty Card', 'Tote Bag Design']
    }
  },
  {
    id: '11',
    title: 'Campaign Design Produk Fashion Sustainable',
    client: 'EcoWear Indonesia',
    category: 'Social Media Design',
    industry: 'Fashion & Sustainability',
    description: 'Desain campaign visual untuk brand fashion sustainable yang fokus pada edukasi dan awareness. Menggunakan earth tone colors dan natural imagery untuk memperkuat message sustainability.',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1005bb544-1763975609501.png",
    beforeAlt: 'Standard fashion advertisement with model on plain background and basic product shots',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1366f521f-1763975622608.png",
    afterAlt: 'Sustainable fashion campaign with natural outdoor setting, earth tone colors, and eco-friendly messaging integrated into design',
    tags: ['Campaign Design', 'Sustainability', 'Fashion Marketing', 'Social Impact'],
    completionDate: 'September 2024',
    results: [
    'Campaign reach 500K+ impressions di Instagram',
    'Brand awareness untuk sustainability meningkat 250%',
    'Penjualan sustainable collection naik 120%'],

    testimonial: {
      text: 'Brandify berhasil menerjemahkan nilai sustainability kami ke dalam visual yang powerful dan engaging. Campaign ini tidak hanya meningkatkan penjualan tapi juga awareness tentang fashion berkelanjutan.',
      author: 'Rina Kusuma',
      position: 'Marketing Director EcoWear Indonesia'
    },
    projectDetails: {
      duration: '5 Minggu',
      teamSize: '4 Designer',
      deliverables: ['Campaign Concept', 'Social Media Assets', 'Video Content', 'Print Ads', 'Website Banner']
    }
  },
  {
    id: '12',
    title: 'Desain Aplikasi Mobile Food Delivery',
    client: 'Makan Yuk Palembang',
    category: 'UI/UX Design',
    industry: 'Teknologi & Kuliner',
    description: 'Desain user interface dan user experience untuk aplikasi food delivery lokal yang fokus pada kuliner khas Palembang. Prioritas pada kemudahan navigasi dan proses checkout yang cepat.',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_101ae70a0-1763975607325.png",
    beforeAlt: 'Basic mobile app interface with cluttered layout and confusing navigation structure',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11fb5ac7c-1763975607376.png",
    afterAlt: 'Modern food delivery app interface with clean design, intuitive navigation, appetizing food images, and smooth user flow',
    tags: ['Mobile App', 'UI/UX', 'Food Tech', 'User Experience'],
    completionDate: 'Oktober 2024',
    results: [
    'App rating meningkat dari 3.2 menjadi 4.7 stars',
    'Order completion rate naik 65%',
    'Daily active users bertambah 200% dalam 2 bulan'],

    projectDetails: {
      duration: '8 Minggu',
      teamSize: '6 Designer',
      deliverables: ['UI Design', 'UX Research', 'Prototype', 'Design System', 'Icon Set', 'Onboarding Flow']
    }
  }];


  const categories = [
  { id: 'logo-branding', label: 'Logo & Branding', count: 4 },
  { id: 'packaging', label: 'Packaging Design', count: 2 },
  { id: 'web-design', label: 'Web Design', count: 1 },
  { id: 'social-media', label: 'Social Media Design', count: 2 },
  { id: 'print', label: 'Print Design', count: 2 },
  { id: 'uiux', label: 'UI/UX Design', count: 1 }];


  const industries = [
  { id: 'kuliner', label: 'Kuliner', count: 4 },
  { id: 'fashion', label: 'Fashion & Retail', count: 2 },
  { id: 'teknologi', label: 'Teknologi', count: 2 },
  { id: 'beauty', label: 'Beauty & Wellness', count: 1 },
  { id: 'healthcare', label: 'Healthcare', count: 1 },
  { id: 'event', label: 'Event & Entertainment', count: 1 },
  { id: 'education', label: 'Retail & Education', count: 1 }];


  const stats = [
  { icon: 'BriefcaseIcon', value: '150+', label: 'Proyek Selesai', color: 'bg-primary' },
  { icon: 'UserGroupIcon', value: '80+', label: 'Klien Puas', color: 'bg-secondary' },
  { icon: 'TrophyIcon', value: '12', label: 'Penghargaan', color: 'bg-accent' },
  { icon: 'SparklesIcon', value: '98%', label: 'Tingkat Kepuasan', color: 'bg-success' }];


  useEffect(() => {
    if (isHydrated) {
      setFilteredProjects(mockProjects);
    }
  }, [isHydrated]);

  const handleFilterChange = (filters: FilterState) => {
    if (!isHydrated) return;

    let filtered = mockProjects;

    if (filters.category !== 'all') {
      filtered = filtered.filter((p) =>
      p.category.toLowerCase().replace(/\s+/g, '-').includes(filters.category)
      );
    }

    if (filters.industry !== 'all') {
      filtered = filtered.filter((p) =>
      p.industry.toLowerCase().replace(/\s+/g, '-').includes(filters.industry)
      );
    }

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(query) ||
      p.client.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    setFilteredProjects(filtered);
    setDisplayCount(9);
  };

  const handleViewDetails = (project: PortfolioProject) => {
    if (!isHydrated) return;
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    if (!isHydrated) return;
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    if (!isHydrated || !selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1]);
    }
  };

  const handlePreviousProject = () => {
    if (!isHydrated || !selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1]);
    }
  };

  const loadMore = () => {
    if (!isHydrated) return;
    setDisplayCount((prev) => Math.min(prev + 9, filteredProjects.length));
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3"></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) =>
              <div key={i} className="h-32 bg-muted rounded"></div>
              )}
            </div>
            <div className="h-64 bg-muted rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-muted rounded"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  const displayedProjects = filteredProjects.slice(0, displayCount);
  const hasMore = displayCount < filteredProjects.length;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Portfolio Kami
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Jelajahi koleksi proyek desain kami yang telah membantu UMKM Palembang bertransformasi dan berkembang. Setiap proyek adalah cerita sukses yang menginspirasi.
          </p>
        </div>

        {/* Stats Section */}
        <StatsSection stats={stats} />

        {/* Filters */}
        <PortfolioFilters
          categories={categories}
          industries={industries}
          onFilterChange={handleFilterChange} />


        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-text-secondary">
            Menampilkan <span className="font-semibold text-foreground">{displayedProjects.length}</span> dari{' '}
            <span className="font-semibold text-foreground">{filteredProjects.length}</span> proyek
          </p>
        </div>

        {/* Portfolio Grid */}
        {displayedProjects.length > 0 ?
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {displayedProjects.map((project) =>
            <PortfolioCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails} />

            )}
            </div>

            {/* Load More Button */}
            {hasMore &&
          <div className="text-center">
                <button
              onClick={loadMore}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors inline-flex items-center space-x-2">

                  <span>Muat Lebih Banyak</span>
                  <Icon name="ChevronDownIcon" size={20} />
                </button>
              </div>
          }
          </> :

        <div className="text-center py-16">
            <Icon name="FolderOpenIcon" size={64} className="mx-auto text-text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Tidak Ada Proyek Ditemukan
            </h3>
            <p className="text-text-secondary">
              Coba ubah filter atau kata kunci pencarian Anda
            </p>
          </div>
        }

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-lg p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Mari wujudkan visi brand Anda bersama Brandify Palembang. Hubungi kami untuk konsultasi gratis dan mulai transformasi bisnis Anda hari ini!
          </p>
          <a
            href="/order-form"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-white text-primary rounded-md font-semibold hover:bg-white/90 transition-colors shadow-lg">

            <span>Mulai Proyek Sekarang</span>
            <Icon name="ArrowRightIcon" size={20} />
          </a>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
        onNext={selectedProject && filteredProjects.findIndex((p) => p.id === selectedProject.id) < filteredProjects.length - 1 ? handleNextProject : undefined}
        onPrevious={selectedProject && filteredProjects.findIndex((p) => p.id === selectedProject.id) > 0 ? handlePreviousProject : undefined} />

    </div>);

};

export default PortfolioShowcaseInteractive;