import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary to-secondary text-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Siap Transformasi Bisnis Anda?
          </h2>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl mb-8 text-white/90">
            Bergabunglah dengan ratusan UMKM Palembang yang telah sukses bersama Brandify
          </p>

          {/* Value Propositions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Icon name="BoltIcon" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-1">Proses Cepat</h3>
              <p className="text-sm text-white/80">Pengerjaan efisien tanpa mengorbankan kualitas</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Icon name="CurrencyDollarIcon" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-1">Harga Terjangkau</h3>
              <p className="text-sm text-white/80">Paket khusus untuk UMKM dengan budget fleksibel</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Icon name="SparklesIcon" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-1">Hasil Maksimal</h3>
              <p className="text-sm text-white/80">Desain profesional yang meningkatkan penjualan</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/order-form"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Mulai Proyek Sekarang
              <Icon name="ArrowRightIcon" size={20} className="ml-2" />
            </Link>
            <Link
              href="/portfolio-showcase"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              Lihat Portfolio
              <Icon name="EyeIcon" size={20} className="ml-2" />
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-white/80 mb-4">Dipercaya oleh UMKM terkemuka di Palembang</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
              <div className="flex items-center">
                <Icon name="CheckBadgeIcon" size={20} className="mr-2" />
                <span className="text-sm">Bersertifikat</span>
              </div>
              <div className="flex items-center">
                <Icon name="ShieldCheckIcon" size={20} className="mr-2" />
                <span className="text-sm">Terpercaya</span>
              </div>
              <div className="flex items-center">
                <Icon name="StarIcon" size={20} className="mr-2" />
                <span className="text-sm">Rating 4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;