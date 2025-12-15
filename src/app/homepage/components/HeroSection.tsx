'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const heroSlides = [
  {
    id: 1,
    title: 'Bangun UMKM Palembang!',
    subtitle: 'Transformasi Visual untuk Bisnis Anda',
    description: 'Wujudkan identitas brand yang kuat dan profesional bersama Brandify Palembang',
    image: "/hero-home/home1.jpg",
    alt: 'Professional designer working on laptop with colorful design mockups on desk in modern office',
    cta: 'Mulai Transformasi',
    ctaLink: '/order-form'
  },
  {
    id: 2,
    title: 'Desain Profesional untuk UMKM',
    subtitle: 'Tingkatkan Brand Anda',
    description: 'Solusi desain grafis lengkap dari logo hingga kemasan produk',
    image: "/hero-home/home2.jpg",
    alt: 'Creative team brainstorming with colorful sticky notes on glass wall in bright modern workspace',
    cta: 'Lihat Layanan',
    ctaLink: '/services'
  },
  ];


  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, heroSlides.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  if (!isHydrated) {
    return (
      <section className={`relative w-full h-[600px] lg:h-[700px] bg-gradient-to-br from-primary/10 to-secondary/10 ${className}`}>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
              Bangun UMKM Palembang!
            </h1>
            <p className="text-lg lg:text-xl text-text-secondary mb-8">
              Transformasi Visual untuk Bisnis Anda
            </p>
          </div>
        </div>
      </section>);

  }

  return (
    <section className={`relative w-full h-[600px] lg:h-[700px] overflow-hidden ${className}`}>
      {/* Slides */}
      <div className="relative w-full h-full">
        {heroSlides.map((slide, index) =>
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`
          }>

            {/* Background Image */}
            <div className="absolute inset-0">
              <AppImage
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white animate-fade-in">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-slide-in-left">
                  {slide.title}
                </h1>
                <p className="text-xl lg:text-2xl font-semibold mb-4 text-accent animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                  {slide.subtitle}
                </p>
                <p className="text-lg lg:text-xl mb-8 text-gray-200 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                  {slide.description}
                </p>
                <Link
                href={slide.ctaLink}
                className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-slide-in-left"
                style={{ animationDelay: '0.3s' }}>

                  {slide.cta}
                  <Icon name="ArrowRightIcon" size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Previous slide">

        <Icon name="ChevronLeftIcon" size={24} className="text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Next slide">

        <Icon name="ChevronRightIcon" size={24} className="text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) =>
        <button
          key={index}
          onClick={() => handleSlideChange(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index === currentSlide ?
          'bg-secondary w-8' : 'bg-white/50 hover:bg-white/70'}`
          }
          aria-label={`Go to slide ${index + 1}`} />

        )}
      </div>
    </section>);

};

export default HeroSection;