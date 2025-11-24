import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections: FooterSection[];
  socialLinks: {
    platform: string;
    href: string;
    icon: string;
  }[];
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
}

export default function Footer({ sections, socialLinks, contactInfo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
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
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              Transformasi visual untuk UMKM Palembang. Bangun brand yang kuat bersama kami.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label={social.platform}
                >
                  <Icon name={social.icon as any} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="MapPinIcon" size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">{contactInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Icon name="PhoneIcon" size={18} className="mr-2 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-white/80 hover:text-white transition-colors text-sm">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="EnvelopeIcon" size={18} className="mr-2 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-white/80 hover:text-white transition-colors text-sm">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm text-center md:text-left">
              &copy; {currentYear} Brandify Palembang. Semua hak dilindungi.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-white/70 hover:text-white transition-colors text-sm">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-white/70 hover:text-white transition-colors text-sm">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}