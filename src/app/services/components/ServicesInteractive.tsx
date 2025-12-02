'use client';

import { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import ServiceCategory from './ServiceCategory';
import ProcessTimeline from './ProcessTimeline';
import Icon from '@/components/ui/AppIcon';

interface ServiceFeature {
  text: string;
  included: boolean;
}

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: ServiceFeature[];
  image: string;
  alt: string;
  popular?: boolean;
}

interface Category {
  id: string;
  icon: string;
  title: string;
  description: string;
  services: Service[];
}

interface TimelineStep {
  title: string;
  description: string;
  duration: string;
  icon: string;
}

interface MatrixFeature {
  name: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  alt: string;
}

export default function ServicesInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('branding');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories: Category[] = [
    {
      id: 'branding',
      icon: 'SparklesIcon',
      title: 'Branding & Identitas Visual',
      description: 'Ciptakan identitas merek yang kuat dan berkesan untuk bisnis Anda',
      services: [
        {
          id: 'brand-basic',
          title: 'Paket Logo Basic',
          description:
            'Solusi branding terjangkau untuk UMKM yang baru memulai perjalanan bisnis mereka',
          price: 'Rp 21.700',
          duration: '4-6 hari kerja',
          features: [
            { text: '2 konsep desain logo', included: true },
            { text: '2 kali revisi', included: true },
            { text: 'File format PNG & JPG', included: true },
            { text: 'Panduan penggunaan logo sederhana', included: true },
            { text: 'File format vektor (AI/EPS)', included: false },
            { text: 'Brand guideline lengkap', included: false },
          ],
          image:
            'https://img.rocket.new/generatedImages/rocket_gen_img_1e809369f-1763975606104.png',
          alt: 'Modern minimalist logo designs displayed on white background with geometric shapes and clean typography',
        },
        {
          id: 'brand-standard',
          title: 'Paket Branding Standard',
          description:
            'Paket lengkap untuk membangun identitas visual yang profesional dan konsisten',
          price: 'Rp 27.300',
          duration: '2-4 hari kerja',
          features: [
            { text: '4 konsep desain logo', included: true },
            { text: 'Revisi unlimited', included: true },
            { text: 'File format lengkap (PNG, JPG, AI, EPS, PDF)', included: true },
            { text: 'Brand guideline dasar', included: true },
            { text: 'Desain kartu nama', included: true },
            { text: 'Desain kop surat', included: true },
            { text: 'Mockup presentasi', included: true },
            { text: 'Konsultasi branding 2 jam', included: false },
          ],
          image: 'https://images.unsplash.com/photo-1507328221230-44612ee52bf3',
          alt: 'Professional brand identity package showing logo, business cards, and letterhead mockups on wooden desk',
          popular: true,
        },
        {
          id: 'brand-premium',
          title: 'Paket Branding Premium',
          description: 'Solusi branding komprehensif dengan strategi dan implementasi penuh',
          price: 'Rp 34.900',
          duration: '1-2 hari kerja',
          features: [
            { text: '6 konsep desain logo', included: true },
            { text: 'Revisi unlimited', included: true },
            { text: 'File format lengkap semua ekstensi', included: true },
            { text: 'Brand guideline lengkap 20+ halaman', included: true },
            { text: 'Desain stationery set lengkap', included: true },
            { text: 'Desain packaging sederhana', included: true },
            { text: 'Social media kit (template 10 post)', included: true },
            { text: 'Konsultasi branding 5 jam', included: true },
            { text: 'Brand strategy workshop', included: true },
          ],
          image:
            'https://img.rocket.new/generatedImages/rocket_gen_img_1ab128b0a-1763975610724.png',
          alt: 'Comprehensive brand identity system with logo variations, color palettes, and typography samples on display',
        },
      ],
    },

    {
      id: 'digital',
      icon: 'DevicePhoneMobileIcon',
      title: 'Desain Digital & Social Media',
      description: 'Konten visual menarik untuk meningkatkan engagement media sosial Anda',
      services: [
        {
          id: 'social-basic',
          title: 'Paket Social Media Basic',
          description: 'Konten visual berkualitas untuk kehadiran media sosial yang konsisten',
          price: 'Rp 20.900',
          duration: '5-6 hari kerja',
          features: [
            { text: '10 desain post feed Instagram/Facebook', included: true },
            { text: '2 kali revisi per desain', included: true },
            { text: 'Template editable Canva', included: true },
            { text: 'Konsultasi konten 1 jam', included: true },
            { text: 'Desain Instagram Story', included: false },
            { text: 'Video motion graphics', included: false },
          ],
          image: 'https://images.unsplash.com/photo-1708447134771-f2c8ccb650bd',
          alt: 'Smartphone displaying colorful social media feed with engaging posts and vibrant graphics',
        },
        {
          id: 'social-standard',
          title: 'Paket Social Media Standard',
          description:
            'Paket lengkap untuk strategi konten visual yang efektif di berbagai platform',
          price: 'Rp 26.800',
          duration: '2-4 hari kerja',
          features: [
            { text: '20 desain post multi-platform', included: true },
            { text: 'Revisi unlimited', included: true },
            { text: '10 desain Instagram Story', included: true },
            { text: '5 template Reels/TikTok', included: true },
            { text: 'Content calendar 1 bulan', included: true },
            { text: 'Konsultasi strategi konten 2 jam', included: true },
            { text: 'Hashtag research', included: true },
            { text: 'Video motion graphics 3 video', included: false },
          ],
          image: 'https://images.unsplash.com/photo-1676276376474-74ab06e89307',
          alt: 'Creative workspace with laptop showing social media analytics and colorful content designs',
          popular: true,
        },
        {
          id: 'social-premium',
          title: 'Paket Social Media Premium',
          description:
            'Solusi konten visual premium dengan video dan animasi untuk maksimal engagement',
          price: 'Rp 33.500',
          duration: '1-2 hari kerja',
          features: [
            { text: '30 desain post premium multi-platform', included: true },
            { text: 'Revisi unlimited', included: true },
            { text: '15 desain Instagram Story interaktif', included: true },
            { text: '10 template Reels/TikTok dengan musik', included: true },
            { text: '5 video motion graphics profesional', included: true },
            { text: 'Content calendar 2 bulan', included: true },
            { text: 'Konsultasi strategi 5 jam', included: true },
            { text: 'Copywriting untuk semua post', included: true },
            { text: 'Performance report template', included: true },
          ],
          image: 'https://images.unsplash.com/photo-1695138331294-be3a79b1aa77',
          alt: 'Professional video production setup with camera, lights, and laptop showing video editing software',
        },
      ],
    },

    {
      id: 'print',
      icon: 'PrinterIcon',
      title: 'Desain Cetak & Promosi',
      description: 'Material promosi cetak yang menarik perhatian dan meningkatkan penjualan',
      services: [
        {
          id: 'print-basic',
          title: 'Paket Promosi Basic',
          description: 'Material promosi esensial untuk kebutuhan marketing offline Anda',
          price: 'Rp 20.500',
          duration: '4-6 hari kerja',
          features: [
            { text: 'Desain flyer A5 (2 sisi)', included: true },
            { text: 'Desain brosur lipat 3', included: true },
            { text: '2 kali revisi', included: true },
            { text: 'File siap cetak (PDF print-ready)', included: true },
            { text: 'Desain banner', included: false },
            { text: 'Desain katalog produk', included: false },
          ],
          image: 'https://images.unsplash.com/photo-1717609589917-817b52b34690',
          alt: 'Colorful printed marketing materials including flyers and brochures arranged on white surface',
        },
        {
          id: 'print-standard',
          title: 'Paket Promosi Standard',
          description: 'Paket lengkap material promosi untuk kampanye marketing yang efektif',
          price: 'Rp 27.900',
          duration: '2-4 hari kerja',
          features: [
            { text: 'Desain flyer A5 & A4', included: true },
            { text: 'Desain brosur lipat 3 premium', included: true },
            { text: 'Desain banner roll-up', included: true },
            { text: 'Desain poster A3', included: true },
            { text: 'Revisi unlimited', included: true },
            { text: 'File siap cetak semua format', included: true },
            { text: 'Mockup presentasi', included: true },
            { text: 'Desain katalog produk 8 halaman', included: false },
          ],
          image:
            'https://img.rocket.new/generatedImages/rocket_gen_img_1e84b06f8-1763975621215.png',
          alt: 'Professional marketing collateral set with brochures, posters, and banners displayed on desk',
          popular: true,
        },
        {
          id: 'print-premium',
          title: 'Paket Promosi Premium',
          description: 'Solusi promosi komprehensif dengan katalog dan material premium',
          price: 'Rp 34.300',
          duration: '1-2 hari kerja',
          features: [
            { text: 'Semua material paket Standard', included: true },
            { text: 'Desain katalog produk 20 halaman', included: true },
            { text: 'Desain packaging produk', included: true },
            { text: 'Desain x-banner & backdrop', included: true },
            { text: 'Desain voucher & kartu member', included: true },
            { text: 'Revisi unlimited', included: true },
            { text: 'Konsultasi marketing 3 jam', included: true },
            { text: 'File editable untuk update mandiri', included: true },
            { text: 'Koordinasi dengan percetakan', included: true },
          ],
          image:
            'https://img.rocket.new/generatedImages/rocket_gen_img_1e797c5ca-1763975608460.png',
          alt: 'Premium product catalog and packaging designs showcasing professional layout and photography',
        },
      ],
    },

    {
      id: 'banner',
      icon: 'RectangleStackIcon',
      title: 'Desain Spanduk & Banner',
      description: 'Spanduk dan banner outdoor yang eye-catching untuk promosi bisnis Anda',
      services: [
        {
          id: 'banner-basic',
          title: 'Paket Spanduk Basic',
          description: 'Desain spanduk sederhana yang efektif untuk promosi toko atau acara',
          price: 'Rp 20.200',
          duration: '5-6 hari kerja',
          features: [
            { text: '1 desain spanduk ukuran standard', included: true },
            { text: 'Format file JPG & PNG', included: true },
            { text: '2 kali revisi', included: true },
            { text: 'Resolusi siap cetak 300 DPI', included: true },
            { text: 'File PDF print-ready', included: true },
            { text: 'Desain banner tambahan', included: false },
            { text: 'File editable (PSD/AI)', included: false },
          ],
          image: '/hero-home/spanduk1.jpeg',
          alt: 'Colorful outdoor banner advertising grand opening sale with bold typography and vibrant colors',
        },
        {
          id: 'banner-standard',
          title: 'Paket Spanduk & Banner Standard',
          description: 'Paket lengkap spanduk dan banner untuk kampanye promosi yang lebih besar',
          price: 'Rp 26.500',
          duration: '2-4 hari kerja',
          features: [
            { text: '2 desain spanduk berbeda ukuran', included: true },
            { text: '2 desain banner/x-banner', included: true },
            { text: 'Revisi unlimited', included: true },
            { text: 'File format lengkap (JPG, PNG, PDF)', included: true },
            { text: 'File editable (PSD/AI)', included: true },
            { text: 'Mockup visualisasi 3D', included: true },
            { text: 'Konsultasi desain 1 jam', included: true },
            { text: 'Desain backdrop event', included: false },
          ],
          image: '/hero-home/spanduk2.jpeg',
          alt: 'Modern roll-up banner stands displaying professional business advertisement at trade show',
          popular: true,
        },
        {
          id: 'banner-premium',
          title: 'Paket Campaign Premium',
          description: 'Solusi lengkap desain outdoor advertising untuk campaign besar',
          price: 'Rp 33.100',
          duration: '1-2 hari kerja',
          features: [
            { text: '4 desain spanduk berbagai ukuran', included: true },
            { text: '3 desain x-banner & roll-up banner', included: true },
            { text: '2 desain backdrop event', included: true },
            { text: 'Desain neon box/papan nama', included: true },
            { text: 'Revisi unlimited', included: true },
            { text: 'File semua format lengkap', included: true },
            { text: 'File editable semua desain', included: true },
            { text: 'Mockup 3D realistic', included: true },
            { text: 'Konsultasi marketing 3 jam', included: true },
            { text: 'Koordinasi dengan percetakan', included: true },
            { text: 'Support instalasi desain', included: true },
          ],
          image: '/hero-home/spanduk3.jpeg',
          alt: 'Large outdoor billboard advertising display with professional photography and bold branding design',
        },
      ],
    },
  ];

  const processSteps: TimelineStep[] = [
    {
      title: 'DESAIN LOGO',
      description:
        'Tim kami melakukan riset kompetitor, analisis tren industri, dan mengembangkan konsep desain yang sesuai dengan positioning brand Anda di pasar Palembang.',
      duration: '1-3 hari',
      icon: 'ChatBubbleLeftRightIcon',
    },
    {
      title: 'DESAIN KEMASAN PRODUK',
      description:
        'Kami membuat beberapa alternatif desain kemasan produk berdasarkan brief dan riset. Setiap konsep dipresentasikan dengan penjelasan reasoning di balik setiap keputusan desain.',
      duration: '1-3 hari',
      icon: 'MagnifyingGlassIcon',
    },
    {
      title: 'DESAIN KONTENT MEDIA SOSIAL',
      description:
        'Tim kami melakukan riset kompetitor, analisis tren industri, dan mengembangkan konsep desain yang sesuai dengan positioning brand Anda di pasar Palembang.',
      duration: '1-3 hari',
      icon: 'PaintBrushIcon',
    },
    {
      title: 'DESAIN WEBSITE',
      description:
        'Tim kami melakukan riset kompetitor, analisis tren industri, dan mengembangkan konsep desain yang sesuai dengan kebutuhan web usaha anda',
      duration: '1-3 hari',
      icon: 'ArrowPathIcon',
    },
    {
      title: 'DESAIN SPANDUK',
      description:
        'Memberikan desain terbaik berdasarkan trend pasar sehingga menghasilkan identitas visual yang kuat dan profesional.',
      duration: '1-3 hari',
      icon: 'CheckBadgeIcon',
    },
    {
      title: 'DAN LAIN LAIN',
      description: 'Jelajahi banyak layanan yang kami sediakan untuk usaha anda',
      duration: 'YUK CEK SEKARANG',
      icon: 'PaintBrushIcon',
    },
  ];

  const comparisonFeatures: MatrixFeature[] = [
    { name: 'Konsep Desain', basic: true, standard: true, premium: true },
    { name: 'Jumlah Revisi', basic: true, standard: true, premium: true },
    { name: 'File Format Lengkap', basic: false, standard: true, premium: true },
    { name: 'Brand Guideline', basic: false, standard: true, premium: true },
    { name: 'Konsultasi Branding', basic: false, standard: true, premium: true },
    { name: 'Mockup Presentasi', basic: false, standard: true, premium: true },
    { name: 'Social Media Kit', basic: false, standard: false, premium: true },
    { name: 'Video Content', basic: false, standard: false, premium: true },
    { name: 'Motion Graphics', basic: false, standard: false, premium: true },
    { name: 'Brand Strategy Workshop', basic: false, standard: false, premium: true },
    { name: 'Priority Support', basic: false, standard: false, premium: true },
    { name: 'Unlimited Revisions', basic: false, standard: true, premium: true },
  ];

  const faqs: FAQ[] = [
    {
      question: 'Berapa lama waktu pengerjaan untuk setiap paket layanan?',
      answer:
        'Waktu pengerjaan bervariasi tergantung paket yang dipilih. Paket Basic umumnya 3-7 hari kerja, Standard 7-14 hari kerja, dan Premium 14-30 hari kerja. Timeline spesifik akan dikonfirmasi saat konsultasi awal berdasarkan kompleksitas proyek dan antrian pekerjaan.',
    },
    {
      question: 'Apakah saya bisa request revisi setelah desain selesai?',
      answer:
        'Ya, setiap paket memiliki kuota revisi yang berbeda. Paket Basic mendapat 2-3 kali revisi, sedangkan paket Standard dan Premium mendapat revisi unlimited selama masa pengerjaan. Revisi major setelah approval final akan dikenakan biaya tambahan.',
    },
    {
      question: 'Format file apa saja yang akan saya terima?',
      answer:
        'Untuk paket Basic, Anda akan menerima file PNG dan JPG. Paket Standard dan Premium mendapat file lengkap termasuk format vektor (AI, EPS, SVG), PDF, dan file editable. Semua file dikirim dalam resolusi tinggi siap cetak dan digital.',
    },
    {
      question: 'Apakah harga sudah termasuk biaya cetak?',
      answer:
        'Tidak, harga yang tertera adalah untuk jasa desain saja. Biaya cetak atau produksi fisik tidak termasuk dalam paket. Namun, kami dapat membantu koordinasi dengan percetakan rekanan dan memberikan rekomendasi vendor terpercaya di Palembang.',
    },
    {
      question: 'Bagaimana cara pembayaran untuk layanan desain?',
      answer:
        'Pembayaran dilakukan dengan sistem DP 50% di awal untuk memulai proyek, dan pelunasan 50% sebelum file final dikirimkan. Kami menerima transfer bank, e-wallet, dan QRIS. Invoice resmi akan diberikan untuk setiap transaksi.',
    },
    {
      question: 'Apakah saya mendapat hak cipta penuh atas desain?',
      answer:
        'Ya, setelah pembayaran lunas, Anda mendapat hak cipta penuh (full ownership) atas desain yang telah dibuat. Anda bebas menggunakan, memodifikasi, dan mengkomersialkan desain tersebut tanpa batasan. Kami hanya meminta izin untuk menampilkan karya di portfolio.',
    },
    {
      question: 'Bagaimana jika saya tidak puas dengan hasil desain?',
      answer:
        'Kepuasan klien adalah prioritas kami. Jika setelah revisi maksimal Anda masih belum puas, kami akan melakukan diskusi mendalam untuk memahami ekspektasi. Dalam kasus tertentu, kami dapat menawarkan refund parsial atau mengulang dari konsep baru sesuai kebijakan yang berlaku.',
    },
    {
      question: 'Apakah ada paket khusus untuk UMKM dengan budget terbatas?',
      answer:
        'Ya, kami memahami tantangan UMKM. Selain paket Basic yang sudah terjangkau, kami juga menawarkan program cicilan untuk paket Standard dan Premium. Hubungi kami untuk diskusi solusi yang sesuai dengan budget dan kebutuhan bisnis Anda.',
    },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      title: 'Warung Kopi Sriwijaya',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1632299619792-4dc75bac0201',
      alt: 'Modern coffee shop branding with brown and cream color palette showing logo on storefront',
    },
    {
      title: 'Toko Kue Pempek Manis',
      category: 'Packaging',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11d00fd57-1763975622343.png',
      alt: 'Colorful food packaging design for traditional Palembang snacks with vibrant patterns',
    },
    {
      title: 'Salon Cantik Palembang',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1665470909901-162912ec16f7',
      alt: 'Beauty salon social media posts with elegant pink and gold design theme',
    },
    {
      title: 'Toko Fashion Musi',
      category: 'E-commerce',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_17e65bf39-1763975621359.png',
      alt: 'Modern e-commerce website design for fashion store with clean product showcase',
    },
    {
      title: 'Restoran Seafood Ampera',
      category: 'Print Design',
      image: 'https://images.unsplash.com/photo-1559029662-4260aa0652b9',
      alt: 'Restaurant menu design with appetizing food photography and elegant typography',
    },
    {
      title: 'Gym & Fitness Center',
      category: 'Branding',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1712647e9-1763975607301.png',
      alt: 'Athletic fitness center branding with bold typography and energetic color scheme',
    },
  ];

  const activeCategoryData = categories.find((cat) => cat.id === activeCategory);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3"></div>
            <div className="h-6 bg-muted rounded w-2/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-muted rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Icon name="SparklesIcon" size={16} />
              <span>Layanan Desain Profesional</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transformasi Visual untuk <span className="text-accent">UMKM Palembang</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
              Dari logo hingga website, kami menyediakan solusi desain lengkap yang membantu bisnis
              Anda tampil profesional dan menarik perhatian pelanggan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/order-form"
                className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <span>Mulai Proyek Anda</span>
                <Icon name="ArrowRightIcon" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pilih Kategori Layanan
              </h2>
              <p className="text-text-secondary text-lg">
                Temukan paket desain yang sesuai dengan kebutuhan bisnis Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {categories.map((category) => (
                <ServiceCategory
                  key={category.id}
                  icon={category.icon}
                  title={category.title}
                  description={category.description}
                  isActive={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              ))}
            </div>

            {/* Service Cards */}
            {activeCategoryData && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeCategoryData.services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    price={service.price}
                    duration={service.duration}
                    image={service.image}
                    alt={service.alt}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Layanan Kami</h2>
              <p className="text-text-secondary text-lg">
                Kami menyediakan layanan desain profesional untuk membantu UMKM Palembang tampil
                lebih profesional
              </p>
            </div>

            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-accent via-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Transformasi Bisnis Anda?</h2>
            <p className="text-lg mb-8 opacity-90">
              Bergabunglah dengan ratusan UMKM Palembang yang telah mempercayai kami untuk membangun
              identitas visual mereka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/order-form"
                className="px-8 py-4 bg-white text-accent font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Icon name="RocketLaunchIcon" size={20} />
                <span>Mulai Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
