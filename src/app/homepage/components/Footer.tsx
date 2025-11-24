'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('2025');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const footerLinks = {
    company: [
      { label: 'Tentang Kami', href: '/about' },
      { label: 'Layanan', href: '/services' },
      { label: 'Portfolio', href: '/portfolio-showcase' },
      { label: 'Sumber Daya', href: '/resource-center' }
    ],
    services: [
      { label: 'Desain Logo', href: '/services' },
      { label: 'Desain Kemasan', href: '/services' },
      { label: 'Media Sosial', href: '/services' },
      { label: 'Marketing Material', href: '/services' }
    ],
    contact: [
      { icon: 'PhoneIcon', text: '+62 812-3456-7890', href: 'tel:+6281234567890' },
      { icon: 'EnvelopeIcon', text: 'info@brandifypalembang.com', href: 'mailto:info@brandifypalembang.com' },
      { icon: 'MapPinIcon', text: 'Palembang, Sumatera Selatan', href: '#' }
    ],
    social: [
      { icon: 'fa-instagram', label: 'Instagram', href: '#' },
      { icon: 'fa-facebook', label: 'Facebook', href: '#' },
      { icon: 'fa-whatsapp', label: 'WhatsApp', href: '#' },
      { icon: 'fa-linkedin', label: 'LinkedIn', href: '#' }
    ]
  };

  return (
    <footer className={`bg-secondary text-white ${className}`}>
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">Brandify</span>
                <span className="text-xs text-white/70 leading-none">Palembang</span>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Transformasi visual untuk UMKM Palembang. Bangun brand yang kuat dan profesional bersama kami.
            </p>
            <div className="flex space-x-3">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.label}
                >
                  <Icon name="ShareIcon" size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Layanan</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-start text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    <Icon name={contact.icon as any} size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                    <span>{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm text-center md:text-left">
              {isHydrated ? `© ${currentYear}` : '© 2025'} Brandify Palembang. Semua hak dilindungi.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-white/70 hover:text-accent transition-colors text-sm">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="text-white/70 hover:text-accent transition-colors text-sm">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;