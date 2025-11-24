'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const NewsletterSignup = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email wajib diisi');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Format email tidak valid');
      return;
    }

    setIsSubmitted(true);
    setEmail('');
  };

  if (!isHydrated) {
    return (
      <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4"></div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Dapatkan Tips Design Gratis
          </h3>
          <p className="text-white/90 mb-6">
            Berlangganan newsletter kami untuk mendapatkan tips design, panduan branding, dan inspirasi UMKM langsung ke inbox Anda.
          </p>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-success to-accent rounded-lg p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircleIcon" size={32} variant="solid" className="text-success" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Terima Kasih!
          </h3>
          <p className="text-white/90 mb-4">
            Anda telah berhasil berlangganan newsletter kami. Cek email Anda untuk konfirmasi.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-white underline hover:no-underline"
          >
            Daftar email lain
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="EnvelopeIcon" size={32} variant="solid" className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Dapatkan Tips Design Gratis
        </h3>
        <p className="text-white/90 mb-6">
          Berlangganan newsletter kami untuk mendapatkan tips design, panduan branding, dan inspirasi UMKM langsung ke inbox Anda.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email Anda"
            className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-foreground"
          />
          <button
            type="submit"
            className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Berlangganan</span>
            <Icon name="PaperAirplaneIcon" size={18} variant="solid" />
          </button>
        </form>

        {error && (
          <p className="text-white bg-destructive/20 px-4 py-2 rounded-lg mt-3 text-sm">
            {error}
          </p>
        )}

        <p className="text-white/70 text-xs mt-4">
          Kami menghormati privasi Anda. Berhenti berlangganan kapan saja.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;