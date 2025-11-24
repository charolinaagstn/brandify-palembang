import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServicesInteractive from './components/ServicesInteractive';

export const metadata: Metadata = {
  title: 'Layanan Desain - Brandify Palembang',
  description: 'Jelajahi layanan desain profesional kami untuk UMKM Palembang. Dari branding, social media, hingga website - solusi visual lengkap untuk transformasi bisnis Anda.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ServicesInteractive />
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">B</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg leading-none">Brandify</span>
                    <span className="text-xs opacity-80 leading-none">Palembang</span>
                  </div>
                </div>
                <p className="text-sm opacity-80 mb-4">
                  Bangun UMKM Palembang! Partner terpercaya untuk transformasi visual bisnis Anda.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4">Layanan</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><a href="/services" className="hover:text-accent transition-colors">Branding</a></li>
                  <li><a href="/services" className="hover:text-accent transition-colors">Social Media</a></li>
                  <li><a href="/services" className="hover:text-accent transition-colors">Print Design</a></li>
                  <li><a href="/services" className="hover:text-accent transition-colors">Web Design</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Perusahaan</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><a href="/about" className="hover:text-accent transition-colors">Tentang Kami</a></li>
                  <li><a href="/portfolio-showcase" className="hover:text-accent transition-colors">Portfolio</a></li>
                  <li><a href="/resource-center" className="hover:text-accent transition-colors">Sumber Daya</a></li>
                  <li><a href="/order-form" className="hover:text-accent transition-colors">Hubungi Kami</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
              <p>&copy; {new Date().getFullYear()} Brandify Palembang. Semua hak dilindungi.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}