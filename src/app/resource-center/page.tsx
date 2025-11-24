import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ResourceCenterInteractive from './components/ResourceCenterInteractive';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pusat Sumber Daya - Brandify Palembang',
  description: 'Akses panduan design gratis, template branding, video tutorial, dan tools interaktif untuk membantu UMKM Palembang membangun brand yang kuat dan profesional.',
};

export default function ResourceCenterPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <ResourceCenterInteractive />
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-white leading-none">Brandify</span>
                  <span className="text-xs text-white/70 leading-none">Palembang</span>
                </div>
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                Partner design terpercaya untuk UMKM Palembang. Kami membantu bisnis lokal membangun identitas visual yang kuat dan profesional.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Icon name="EnvelopeIcon" size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Icon name="PhoneIcon" size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Icon name="MapPinIcon" size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Navigasi</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/homepage" className="text-white/70 hover:text-white transition-colors">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/70 hover:text-white transition-colors">
                    Layanan
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio-showcase" className="text-white/70 hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-white mb-4">Sumber Daya</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/resource-center" className="text-white/70 hover:text-white transition-colors">
                    Pusat Sumber Daya
                  </Link>
                </li>
                <li>
                  <Link href="/order-form" className="text-white/70 hover:text-white transition-colors">
                    Pesan Sekarang
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Brandify Palembang. Semua hak dilindungi.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}