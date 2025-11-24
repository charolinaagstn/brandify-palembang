import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PortfolioShowcaseInteractive from './components/PortfolioShowcaseInteractive';

export const metadata: Metadata = {
  title: 'Portfolio Showcase - Brandify Palembang',
  description: 'Jelajahi koleksi proyek desain grafis kami yang telah membantu UMKM Palembang bertransformasi. Lihat hasil kerja nyata dari logo, branding, packaging, hingga web design yang menginspirasi.',
};

export default function PortfolioShowcasePage() {
  return (
    <>
      <Header />
      <PortfolioShowcaseInteractive />
    </>
  );
}