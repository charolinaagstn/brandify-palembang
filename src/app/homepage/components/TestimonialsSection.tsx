'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  business: string;
  role: string;
  image: string;
  alt: string;
  rating: number;
  testimonial: string;
  result: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Budi Santoso',
    business: 'Kopi Nusantara',
    role: 'Pemilik Kedai Kopi',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19cf0692b-1763296204491.png",
    alt: 'Asian male entrepreneur in casual shirt smiling confidently in modern coffee shop interior',
    rating: 5,
    testimonial: 'Brandify benar-benar memahami visi kami. Logo dan branding yang mereka buat membuat kedai kopi kami terlihat lebih profesional dan menarik pelanggan baru. Omzet naik 40% dalam 3 bulan!',
    result: 'Peningkatan omzet 40% dalam 3 bulan'
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    business: 'Pempek Sriwijaya',
    role: 'Owner UMKM Kuliner',
    image: "https://images.unsplash.com/photo-1704960610276-48ce608c2518",
    alt: 'Indonesian female business owner wearing hijab and apron standing in traditional food shop',
    rating: 5,
    testimonial: 'Desain kemasan dari Brandify membuat produk pempek kami terlihat premium. Sekarang bisa masuk ke supermarket besar dan harga jual naik 2x lipat. Terima kasih Brandify!',
    result: 'Produk masuk supermarket, harga naik 2x'
  },
  {
    id: 3,
    name: 'Ahmad Rizki',
    business: 'Batik Palembang',
    role: 'Pengusaha Fashion',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_154d703dc-1763301115517.png",
    alt: 'Young Indonesian male fashion entrepreneur in traditional batik shirt with confident smile',
    rating: 5,
    testimonial: 'Tim Brandify sangat kreatif dan responsif. Mereka berhasil menggabungkan unsur tradisional batik dengan desain modern. Katalog dan media sosial kami sekarang jauh lebih menarik!',
    result: 'Engagement media sosial naik 150%'
  },
  {
    id: 4,
    name: 'Dewi Lestari',
    business: 'Keripik Nusantara',
    role: 'Founder Snack Brand',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11c71139b-1763299605005.png",
    alt: 'Indonesian female entrepreneur in business casual attire holding product samples with bright smile',
    rating: 5,
    testimonial: 'Packaging design dari Brandify membuat produk kami stand out di rak toko. Desainnya eye-catching dan mencerminkan kualitas produk. Penjualan meningkat drastis!',
    result: 'Penjualan meningkat 60% setelah rebranding'
  }];


  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (!isHydrated) {
    return (
      <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Testimoni Klien
            </h2>
            <p className="text-lg text-text-secondary">
              Cerita sukses UMKM Palembang bersama Brandify
            </p>
          </div>
        </div>
      </section>);

  }

  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Testimoni Klien
          </h2>
          <p className="text-lg text-text-secondary">
            Cerita sukses UMKM Palembang bersama Brandify
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Client Image */}
              <div className="relative h-64 md:h-auto">
                <AppImage
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].alt}
                  className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Testimonial Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) =>
                  <Icon key={i} name="StarIcon" size={20} variant="solid" className="text-yellow-400" />
                  )}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground text-lg mb-6 italic">
                  "{testimonials[currentIndex].testimonial}"
                </blockquote>

                {/* Result Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-success/10 text-success rounded-lg mb-6 self-start">
                  <Icon name="TrophyIcon" size={20} className="mr-2" />
                  <span className="font-semibold text-sm">{testimonials[currentIndex].result}</span>
                </div>

                {/* Client Info */}
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-text-secondary text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-primary font-semibold text-sm">
                    {testimonials[currentIndex].business}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous testimonial">

            <Icon name="ChevronLeftIcon" size={24} className="text-foreground" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Next testimonial">

            <Icon name="ChevronRightIcon" size={24} className="text-foreground" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) =>
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'}`
              }
              aria-label={`Go to testimonial ${index + 1}`} />

            )}
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;