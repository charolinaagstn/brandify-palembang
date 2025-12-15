"use client";

import { useState } from 'react';
import { 
  Sparkles, 
  Package, 
  Smartphone, 
  Megaphone,
  CheckCircle,
  ArrowRight,
  ShoppingCart
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  features: string[];
}

interface ServicesPreviewProps {
  className?: string;
}

const ServicesPreview = ({ className = '' }: ServicesPreviewProps) => {
  const iconMap: { [key: string]: any } = {
    'SparklesIcon': Sparkles,
    'CubeIcon': Package,
    'DevicePhoneMobileIcon': Smartphone,
    'MegaphoneIcon': Megaphone,
  };

  const services: Service[] = [
    {
      id: 1,
      title: 'Desain Logo & Branding',
      description: 'Buat Brand Pada usaha anda dengan memberikan logo sebagai identitas',
      icon: 'SparklesIcon',
      image: '/hero-home/desainLogo.jpg',
      alt: 'Designer sketching creative logo concepts with pencil on paper with color swatches nearby',
      features: ['Logo Usaha', 'Bebas Konsul', 'Murah']
    },
    {
      id: 2,
      title: 'Desain Poster Promosi',
      description: 'Sebarkan informasi UMKM anda dengan poster dan material cetak lainnya',
      icon: 'CubeIcon',
      image: '/hero-home/poster.jpg',
      alt: 'Colorful product packaging boxes arranged on white surface showing modern minimalist design',
      features: ['Desain Terjangkau', 'Bebas Konsul', 'Pengerjaan Cepat']
    },
    {
      id: 3,
      title: 'Desain Konten & Media Sosial',
      description: 'Yuk animasikan UMKM anda dengan Efek Animasi Multimedia dan konten digital',
      icon: 'DevicePhoneMobileIcon',
      image: '/hero-home/media.jpg',
      alt: 'Smartphone displaying colorful social media feed with engaging graphics and photos',
      features: ['Feed Instagram', 'Promosi Modern', 'Web / Multimedia']
    },
    {
      id: 4,
      title: 'Desain Spanduk & Banner',
      description: 'Cocok untuk semua jenis UMKM dengan berbagai ukuran',
      icon: 'MegaphoneIcon',
      image: '/hero-home/spandukbanner.jpg',
      alt: 'Marketing materials including brochures flyers and business cards spread on wooden desk',
      features: ['Cocok untuk UMKM', 'Banner atau Spanduk', 'Murah']
    },
  ];

  const handleOrderClick = (service: Service) => {
    const orderData = {
      serviceTitle: service.title,
      serviceDescription: service.description
    };
    
    // Store in sessionStorage untuk diambil di order form
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('orderData', JSON.stringify(orderData));
      window.location.href = '/order-form';
    }
  };

  return (
    <section className={`py-16 lg:py-24 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Layanan Desain Profesional
          </h2>
          <p className="text-lg text-gray-600">
            Solusi desain grafis lengkap untuk mengembangkan bisnis UMKM Anda di Palembang
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Quick Order Button */}
                  <button
                    onClick={() => handleOrderClick(service)}
                    className="w-full px-4 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
};

export default ServicesPreview;