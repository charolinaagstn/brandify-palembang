import Icon from '@/components/ui/AppIcon';

interface Stat {
  id: number;
  value: string;
  label: string;
  icon: string;
  description: string;
}

interface StatsSectionProps {
  className?: string;
}

const StatsSection = ({ className = '' }: StatsSectionProps) => {
  const stats: Stat[] = [
    {
      id: 1,
      value: '500+',
      label: 'UMKM Terlayani',
      icon: 'BuildingStorefrontIcon',
      description: 'Bisnis lokal yang telah kami bantu berkembang'
    },
    {
      id: 2,
      value: '1000+',
      label: 'Proyek Selesai',
      icon: 'CheckBadgeIcon',
      description: 'Desain berkualitas tinggi yang telah kami hasilkan'
    },
    {
      id: 3,
      value: '98%',
      label: 'Kepuasan Klien',
      icon: 'FaceSmileIcon',
      description: 'Tingkat kepuasan dari klien kami'
    },
    {
      id: 4,
      value: '5 Tahun',
      label: 'Pengalaman',
      icon: 'TrophyIcon',
      description: 'Melayani UMKM Palembang dengan dedikasi'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-secondary text-white ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Dipercaya oleh UMKM Palembang
          </h2>
          <p className="text-lg text-white/80">
            Angka-angka yang membuktikan komitmen kami dalam membangun UMKM Palembang
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Icon name={stat.icon as any} size={32} className="text-white" />
              </div>

              {/* Value */}
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-accent">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-xl font-semibold mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <p className="text-sm text-white/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;