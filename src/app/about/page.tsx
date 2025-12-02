import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import VisionMissionSection from './components/VisionMissionSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Tentang Kami - Brandify Palembang',
  description:
    'Brandify Palembang adalah mitra desain grafis terpercaya untuk UMKM di Palembang. Kami mengubah visi bisnis menjadi identitas visual yang kuat dan membantu usaha lokal berkembang di pasar yang kompetitif.',
};

export default function AboutPage() {
  const heroData = {
    title: 'Membangun UMKM Palembang Melalui Kekuatan Desain',
    subtitle:
      'Kami adalah mitra kreatif yang berdedikasi untuk mengubah visi bisnis lokal menjadi identitas visual yang kuat dan berkesan',
    motto: 'Bangun UMKM Palembang!',
  };

  const storyData = {
    title: 'Cerita Kami',
    paragraphs: [
      'Brandify Palembang hadir sebagai startup kreatif yang lahir dari keinginan sederhana: membantu UMKM di Palembang memiliki identitas visual yang profesional tanpa harus mengeluarkan biaya besar. Di tengah persaingan digital yang semakin ketat, kami percaya bahwa tampilan visual yang kuat adalah kunci untuk membuat bisnis kecil tampil lebih percaya diri dan mudah dikenal.',
      'Sebagai startup yang baru berkembang, kami berangkat dari tim kecil dengan semangat besar. Meski masih baru, kami berfokus untuk memberikan layanan desain yang cepat, rapi, dan terjangkau agar UMKM bisa langsung merasakan dampaknya dalam bisnis mereka.',
      'Kami percaya bahwa desain tidak hanya soal estetika, tetapi bagaimana visual mampu membangun kepercayaan dan menarik perhatian pelanggan. Dengan memahami kebutuhan UMKM lokal dan mengikuti tren desain terkini, kami hadir untuk menciptakan solusi visual yang sederhana, relevan, dan benar-benar membantu usaha kecil bertumbuh.',
    ],

    image: 'https://images.unsplash.com/photo-1571573680328-f20cbb17e7ba',
    alt: 'Tim kreatif Brandify Palembang sedang berkolaborasi di ruang kerja modern dengan laptop dan sketsa desain di meja',
  };

  const visionMissionData = [
    {
      type: 'vision' as const,
      title: 'Visi Kami',
      content:
        'Menjadi mitra desain grafis terdepan yang memberdayakan UMKM Palembang untuk bersaing di pasar lokal dan nasional melalui identitas visual yang kuat dan profesional.',
      icon: 'EyeIcon',
    },
    {
      type: 'mission' as const,
      title: 'Misi Kami',
      content:
        'Menyediakan layanan desain grafis berkualitas tinggi yang terjangkau, memahami kebutuhan unik setiap klien, dan membangun hubungan jangka panjang yang saling menguntungkan dengan komunitas bisnis Palembang.',
      icon: 'RocketLaunchIcon',
    },
  ];

  const ctaData = {
    title: 'Siap Transformasi Brand Anda?',
    description:
      'Mari wujudkan visi bisnis Anda menjadi identitas visual yang kuat dan berkesan. Tim kami siap membantu perjalanan branding Anda.',
    primaryCTA: {
      text: 'Mulai Proyek Sekarang',
      href: '/order-form',
    },
  };

  const footerData = {
    sections: [
      {
        title: 'Navigasi',
        links: [
          { label: 'Beranda', href: '/homepage' },
          { label: 'Tentang Kami', href: '/about' },
          { label: 'Layanan', href: '/services' },
        ],
      },
      {
        title: 'Layanan',
        links: [
          { label: 'Desain Logo', href: '/services#logo' },
          { label: 'Branding', href: '/services#branding' },
          { label: 'Social Media', href: '/services#social' },
          { label: 'Packaging', href: '/services#packaging' },
        ],
      },
    ],

    socialLinks: [
      {
        platform: 'Instagram',
        href: 'https://www.instagram.com/brandify.palembang?igsh=MWZkOTliaHVraW54cw==',
        icon: 'CameraIcon',
      },
      {
        platform: 'WhatsApp',
        href: 'https://wa.me/6282375328943',
        icon: 'ChatBubbleLeftRightIcon',
      },
    ],

    contactInfo: {
      address: 'Jl. Sudirman No. 123, Ilir Timur I, Palembang, Sumatera Selatan 30114',
      phone: '+62 823-7532-8943',
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection {...heroData} />
      <StorySection story={storyData} />
      <VisionMissionSection items={visionMissionData} />
      <CTASection {...ctaData} />
      <Footer {...footerData} />
    </main>
  );
}
