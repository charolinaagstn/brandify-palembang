'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Beranda', href: '/homepage' },
    { label: 'Tentang Kami', href: '/about' },
    { label: 'Layanan', href: '/services' },
  ];

  const moreMenuItems = [{ label: 'Pesan Sekarang', href: '/order-form' }];

  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  return (
    <header
      className={`w-full bg-background border-b border-border sticky top-0 z-50 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/homepage"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground leading-none">Brandify</span>
              <span className="text-xs text-text-secondary leading-none">Palembang</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-base"
              >
                {item.label}
              </Link>
            ))}

            {/* More Menu */}
            <div className="relative">
              <button
                onClick={toggleMoreMenu}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-base flex items-center space-x-1"
              >
                <span>Lainnya</span>
                <Icon
                  name="ChevronDownIcon"
                  size={16}
                  className={`transition-transform duration-base ${isMoreMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isMoreMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card rounded-md shadow-lg border border-border animate-fade-in">
                  {moreMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors first:rounded-t-md last:rounded-b-md"
                      onClick={() => setIsMoreMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/order-form"
              className="px-6 py-2.5 bg-accent text-accent-foreground font-semibold rounded-md hover:bg-accent/90 transition-all duration-base shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Mulai Transformasi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-in-right">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {moreMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/order-form"
                className="mx-4 mt-4 px-6 py-2.5 bg-accent text-accent-foreground font-semibold rounded-md hover:bg-accent/90 transition-all duration-base text-center shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mulai Transformasi
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
