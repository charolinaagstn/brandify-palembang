import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Brandify Palembang - Transformasi Visual untuk UMKM',
  description:
    'Layanan desain grafis profesional untuk UMKM Palembang. Bangun identitas brand yang kuat dengan logo, kemasan, dan materi marketing berkualitas tinggi.',
};

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesPreview />
      </main>
      <Footer />
    </div>
  );
}
