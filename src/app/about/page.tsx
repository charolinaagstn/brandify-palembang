import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import VisionMissionSection from './components/VisionMissionSection';
import ValuesSection from './components/ValuesSection';
import TeamSection from './components/TeamSection';
import TimelineSection from './components/TimelineSection';
import RecognitionSection from './components/RecognitionSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Tentang Kami - Brandify Palembang',
  description: 'Brandify Palembang adalah mitra desain grafis terpercaya untuk UMKM di Palembang. Kami mengubah visi bisnis menjadi identitas visual yang kuat dan membantu usaha lokal berkembang di pasar yang kompetitif.'
};

export default function AboutPage() {
  const heroData = {
    title: 'Membangun UMKM Palembang Melalui Kekuatan Desain',
    subtitle: 'Kami adalah mitra kreatif yang berdedikasi untuk mengubah visi bisnis lokal menjadi identitas visual yang kuat dan berkesan',
    motto: 'Bangun UMKM Palembang!'
  };

  const storyData = {
    title: 'Cerita Kami',
    paragraphs: [
    'Brandify Palembang lahir dari keyakinan sederhana: setiap UMKM di Palembang berhak memiliki identitas visual yang profesional dan menarik. Kami memahami bahwa di era digital ini, tampilan visual bukan lagi kemewahan, melainkan kebutuhan untuk bersaing.',
    'Berawal dari studio kecil di jantung kota Palembang, kami telah berkembang menjadi mitra terpercaya bagi ratusan UMKM lokal. Setiap proyek yang kami tangani adalah kesempatan untuk membantu pengusaha lokal mewujudkan impian mereka.',
    'Kami percaya bahwa desain yang baik bukan hanya tentang estetika, tetapi tentang membangun koneksi emosional dengan pelanggan. Dengan memahami pasar lokal Palembang dan tren global, kami menciptakan solusi visual yang relevan dan berdampak.'],

    image: "https://images.unsplash.com/photo-1571573680328-f20cbb17e7ba",
    alt: 'Tim kreatif Brandify Palembang sedang berkolaborasi di ruang kerja modern dengan laptop dan sketsa desain di meja'
  };

  const visionMissionData = [
  {
    type: 'vision' as const,
    title: 'Visi Kami',
    content: 'Menjadi mitra desain grafis terdepan yang memberdayakan UMKM Palembang untuk bersaing di pasar lokal dan nasional melalui identitas visual yang kuat dan profesional.',
    icon: 'EyeIcon'
  },
  {
    type: 'mission' as const,
    title: 'Misi Kami',
    content: 'Menyediakan layanan desain grafis berkualitas tinggi yang terjangkau, memahami kebutuhan unik setiap klien, dan membangun hubungan jangka panjang yang saling menguntungkan dengan komunitas bisnis Palembang.',
    icon: 'RocketLaunchIcon'
  }];

  const timelineData = [
  {
    year: '2019',
    title: 'Awal Perjalanan',
    description: 'Brandify Palembang didirikan dengan visi memberdayakan UMKM lokal melalui desain grafis profesional yang terjangkau.',
    milestone: 'Studio Pertama Dibuka'
  },
  {
    year: '2020',
    title: 'Ekspansi Layanan',
    description: 'Menambah layanan digital marketing dan branding strategy untuk memberikan solusi yang lebih komprehensif kepada klien.',
    milestone: '50+ Klien Dilayani'
  },
  {
    year: '2021',
    title: 'Pengakuan Komunitas',
    description: 'Menerima penghargaan "Best Creative Partner" dari Asosiasi UMKM Palembang atas kontribusi dalam pengembangan bisnis lokal.',
    milestone: 'Penghargaan Pertama'
  },
  {
    year: '2022',
    title: 'Pertumbuhan Tim',
    description: 'Memperluas tim dengan menambah desainer dan spesialis marketing untuk meningkatkan kapasitas dan kualitas layanan.',
    milestone: '150+ Proyek Selesai'
  },
  {
    year: '2023',
    title: 'Inovasi Digital',
    description: 'Meluncurkan platform online untuk memudahkan klien memesan layanan dan melacak progress proyek secara real-time.',
    milestone: 'Platform Digital Diluncurkan'
  },
  {
    year: '2024',
    title: 'Mitra Terpercaya',
    description: 'Menjadi mitra resmi berbagai event bisnis dan startup di Palembang, memperkuat posisi sebagai leader di industri kreatif lokal.',
    milestone: '300+ Klien Puas'
  }];





  const ctaData = {
    title: 'Siap Transformasi Brand Anda?',
    description: 'Mari wujudkan visi bisnis Anda menjadi identitas visual yang kuat dan berkesan. Tim kami siap membantu perjalanan branding Anda.',
    primaryCTA: {
      text: 'Mulai Proyek Sekarang',
      href: '/order-form'
    },
    secondaryCTA: {
      text: 'Lihat Portfolio Kami',
      href: '/portfolio-showcase'
    }
  };

  const footerData = {
    sections: [
    {
      title: 'Navigasi',
      links: [
      { label: 'Beranda', href: '/homepage' },
      { label: 'Tentang Kami', href: '/about' },
      { label: 'Layanan', href: '/services' },
      { label: 'Portfolio', href: '/portfolio-showcase' }]

    },
    {
      title: 'Layanan',
      links: [
      { label: 'Desain Logo', href: '/services#logo' },
      { label: 'Branding', href: '/services#branding' },
      { label: 'Social Media', href: '/services#social' },
      { label: 'Packaging', href: '/services#packaging' }]

    }],

    socialLinks: [
    { platform: 'Instagram', href: 'https://instagram.com/brandifypalembang', icon: 'CameraIcon' },
    { platform: 'Facebook', href: 'https://facebook.com/brandifypalembang', icon: 'UserGroupIcon' },
    { platform: 'WhatsApp', href: 'https://wa.me/628123456789', icon: 'ChatBubbleLeftRightIcon' }],

    contactInfo: {
      address: 'Jl. Sudirman No. 123, Ilir Timur I, Palembang, Sumatera Selatan 30114',
      phone: '+62 812-3456-7890',
      email: 'hello@brandifypalembang.com'
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection {...heroData} />
      <StorySection story={storyData} />
      <VisionMissionSection items={visionMissionData} />
      <TimelineSection events={timelineData} />
      <CTASection {...ctaData} />
      <Footer {...footerData} />
    </main>);

}