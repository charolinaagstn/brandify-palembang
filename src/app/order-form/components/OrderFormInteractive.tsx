'use client';

import { useState, useEffect } from 'react';
import { 
  User, Mail, Phone, Building2, Sparkles, Palette, Image,
  Clock, Zap, Rocket, Check, Shield, MessageCircle, BadgeCheck,
  ArrowLeft, ArrowRight, Send, AlertCircle, Info, CheckCircle
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  selectedServices: string[];
  projectDescription: string;
  preferredContact: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  timeline: string;
  icon: any;
}

const OrderFormInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    selectedServices: [],
    projectDescription: '',
    preferredContact: 'whatsapp'
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const services: Service[] = [
    {
      id: 'logo-design',
      name: 'Desain Logo',
      description: 'Logo profesional yang mencerminkan identitas bisnis Anda',
      price: 'Mulai dari Rp 15.000',
      timeline: '1-2 hari',
      icon: Sparkles
    },
    {
      id: 'brand-identity',
      name: 'Poster Promosi',
      description: 'Sebarkan informasi UMKM anda dengan poster dan material cetak lainnya',
      price: 'Mulai dari Rp 15.000',
      timeline: '1-2 hari',
      icon: Palette
    },
    {
      id: 'social-media',
      name: 'Desain Media Sosial',
      description: 'Template konten untuk Instagram, Facebook, dan platform lainnya',
      price: 'Mulai dari Rp 25.000',
      timeline: '1-3 hari',
      icon: Image
    },
    {
      id: 'spanduk-banner',
      name: 'Desain Spanduk dan Banner',
      description: 'Layanan desain spanduk yang cocok serta komplit untuk bisnis anda',
      price: 'Mulai dari Rp 25.000',
      timeline: '1-3 hari',
      icon: Sparkles
    }
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Nama lengkap wajib diisi';
      if (!formData.email.trim()) {
        newErrors.email = 'Email wajib diisi';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Format email tidak valid';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Nomor telepon wajib diisi';
      } else if (!/^(\+62|62|0)[0-9]{9,12}$/.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = 'Format nomor telepon tidak valid';
      }
      if (!formData.businessName.trim()) newErrors.businessName = 'Nama bisnis wajib diisi';
    }

    if (step === 2) {
      if (formData.selectedServices.length === 0) {
        newErrors.services = 'Pilih minimal satu layanan';
      }
      if (!formData.projectDescription.trim()) {
        newErrors.projectDescription = 'Deskripsi proyek wajib diisi';
      } else if (formData.projectDescription.trim().length < 30) {
        newErrors.projectDescription = 'Deskripsi minimal 30 karakter';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId]
    }));
    setErrors(prev => ({ ...prev, services: '' }));
  };

  const handleSubmit = () => {
    if (!validateStep(2)) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);
      
      const selectedServiceNames = services
        .filter(s => formData.selectedServices.includes(s.id))
        .map(s => s.name)
        .join(', ');

      const message = `Halo Brandify Palembang!

Saya ingin memesan layanan desain:

📋 *INFORMASI KONTAK*
Nama: ${formData.name}
Bisnis: ${formData.businessName}
Email: charolinaagustin03@gmail.com
Telepon: 085717904178
Kontak Preferensi: ${formData.preferredContact === 'whatsapp' ? 'WhatsApp' : formData.preferredContact === 'email' ? 'Email' : 'Telepon'}

🎨 *LAYANAN YANG DIPILIH*
${selectedServiceNames}

📝 *DESKRIPSI PROYEK*
${formData.projectDescription}

Terima kasih! Saya menunggu konfirmasi dari tim Brandify.`;

      const whatsappUrl = `https://wa.me/6282375328943?text=${encodeURIComponent(message)}`;
      
      setTimeout(() => {
        if (isHydrated && typeof window !== 'undefined') {
          window.open(whatsappUrl, '_blank');
        }
      }, 2000);
    }, 1500);
  };

  // Progress Bar Component
  const ProgressBar = ({ current, total }: { current: number; total: number }) => (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        {Array.from({ length: total }).map((_, idx) => {
          const stepNum = idx + 1;
          const isActive = stepNum === current;
          const isCompleted = stepNum < current;
          
          return (
            <div key={stepNum} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                  isActive ? 'bg-blue-600 text-white scale-110 shadow-lg' :
                  isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {isCompleted ? <Check size={24} /> : stepNum}
                </div>
                <span className={`text-sm mt-2 font-medium ${
                  isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-400'
                }`}>
                  {stepNum === 1 ? 'Info Dasar' : stepNum === 2 ? 'Layanan & Detail' : 'Konfirmasi'}
                </span>
              </div>
              {stepNum < total && (
                <div className={`h-1 flex-1 mx-2 rounded transition-all ${
                  stepNum < current ? 'bg-green-500' : 'bg-gray-200'
                }`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  // Service Card Component
  const ServiceCard = ({ service, isSelected, onSelect }: any) => {
    const Icon = service.icon;
    return (
      <button
        type="button"
        onClick={onSelect}
        className={`p-6 rounded-xl border-2 transition-all text-left ${
          isSelected 
            ? 'border-blue-500 bg-blue-50 shadow-lg scale-105' 
            : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
        }`}
      >
        <div className="flex items-start justify-between mb-3">
          <div className={`p-3 rounded-lg ${isSelected ? 'bg-blue-100' : 'bg-gray-100'}`}>
            <Icon size={28} className={isSelected ? 'text-blue-600' : 'text-gray-600'} />
          </div>
          {isSelected && (
            <div className="bg-blue-600 text-white rounded-full p-1">
              <Check size={20} />
            </div>
          )}
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-2">{service.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{service.description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-blue-600">{service.price}</span>
          <span className="text-gray-500 flex items-center">
            <Clock size={14} className="mr-1" />
            {service.timeline}
          </span>
        </div>
      </button>
    );
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat formulir...</p>
        </div>
      </div>
    );
  }

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle size={48} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pesanan Berhasil Dikirim! 🎉
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Terima kasih <span className="font-semibold text-blue-600">{formData.name}</span>! Kami akan segera menghubungi Anda melalui WhatsApp untuk membahas detail proyek.
          </p>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <Info className="mr-2 text-blue-600" size={24} />
              Langkah Selanjutnya
            </h3>
            <div className="space-y-4">
              {[
                { num: 1, text: 'Tim kami akan menghubungi Anda dalam 1-2 jam kerja' },
                { num: 2, text: 'Diskusi detail proyek dan konfirmasi timeline' },
                { num: 3, text: 'Pembayaran dan mulai pengerjaan proyek' }
              ].map(step => (
                <div key={step.num} className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-white text-sm font-bold">{step.num}</span>
                  </div>
                  <p className="text-gray-700 pt-1">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setShowConfirmation(false);
                setCurrentStep(1);
                setFormData({
                  name: '', email: '', phone: '', businessName: '',
                  selectedServices: [], projectDescription: '', preferredContact: 'whatsapp'
                });
              }}
              className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
            >
              Buat Pesanan Baru
            </button>
            <a
              href="/homepage"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Kembali ke Beranda
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Formulir Pemesanan ✨
          </h1>
          <p className="text-gray-600 text-xl">
            Mulai transformasi brand Anda dalam 3 langkah mudah
          </p>
        </div>

        <ProgressBar current={currentStep} total={3} />

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={32} className="text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Informasi Dasar
                </h2>
                <p className="text-gray-600">
                  Berikan informasi kontak Anda agar kami dapat menghubungi Anda
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="Masukkan nama lengkap Anda"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="nama@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nomor Telepon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.phone ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="08123456789"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-500 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Bisnis/UMKM <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => {
                      setFormData({ ...formData, businessName: e.target.value });
                      setErrors({ ...errors, businessName: '' });
                    }}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.businessName ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="Nama bisnis Anda"
                  />
                  {errors.businessName && (
                    <p className="mt-2 text-sm text-red-500 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.businessName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Metode Kontak Preferensi
                </label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
                    { value: 'email', label: 'Email', icon: Mail },
                    { value: 'phone', label: 'Telepon', icon: Phone }
                  ].map((method) => {
                    const Icon = method.icon;
                    return (
                      <button
                        key={method.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredContact: method.value })}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-xl border-2 transition-all font-medium ${
                          formData.preferredContact === method.value
                            ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                            : 'border-gray-200 hover:border-blue-300 text-gray-700'
                        }`}
                      >
                        <Icon size={20} />
                        <span>{method.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Service Selection & Project Details */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles size={32} className="text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Layanan & Detail Proyek
                </h2>
                <p className="text-gray-600">
                  Pilih layanan dan ceritakan tentang proyek Anda
                </p>
              </div>

              {errors.services && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center">
                  <AlertCircle size={20} className="text-red-600 mr-2" />
                  <span className="text-red-700 font-medium">{errors.services}</span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pilih Layanan yang Anda Butuhkan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      isSelected={formData.selectedServices.includes(service.id)}
                      onSelect={() => handleServiceToggle(service.id)}
                    />
                  ))}
                </div>

                {formData.selectedServices.length > 0 && (
                  <div className="mt-4 bg-green-50 border-2 border-green-200 rounded-xl p-4">
                    <p className="text-green-800 font-medium flex items-center">
                      <Check className="mr-2" size={20} />
                      {formData.selectedServices.length} layanan dipilih
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xl font-bold text-gray-900 mb-3">
                  Deskripsi Proyek <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.projectDescription}
                  onChange={(e) => {
                    setFormData({ ...formData, projectDescription: e.target.value });
                    setErrors({ ...errors, projectDescription: '' });
                  }}
                  rows={6}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none ${
                    errors.projectDescription ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Ceritakan tentang bisnis Anda, target audience, gaya desain yang diinginkan, warna favorit, dan detail penting lainnya... (minimal 30 karakter)"
                />
                <div className="flex items-center justify-between mt-2">
                  {errors.projectDescription ? (
                    <p className="text-sm text-red-500 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.projectDescription}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-500">
                      {formData.projectDescription.length} / 30 karakter minimum
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Konfirmasi Pesanan
                </h2>
                <p className="text-gray-600">
                  Periksa kembali informasi Anda sebelum mengirim
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                    <User size={24} className="mr-2 text-blue-600" />
                    Informasi Kontak
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: 'Nama', value: formData.name },
                      { label: 'Email', value: formData.email },
                      { label: 'Telepon', value: formData.phone },
                      { label: 'Bisnis', value: formData.businessName }
                    ].map(item => (
                      <div key={item.label}>
                        <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                        <p className="font-semibold text-gray-900">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                    <Sparkles size={24} className="mr-2 text-purple-600" />
                    Layanan Dipilih
                  </h3>
                  <div className="space-y-3">
                    {services
                      .filter(s => formData.selectedServices.includes(s.id))
                      .map((service) => (
                        <div key={service.id} className="flex items-center justify-between py-3 border-b border-purple-200 last:border-0">
                          <span className="font-semibold text-gray-900">{service.name}</span>
                          <span className="text-sm text-gray-600 flex items-center">
                            <Clock size={14} className="mr-1" />
                            {service.timeline}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                    <Info size={24} className="mr-2 text-green-600" />
                    Deskripsi Proyek
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{formData.projectDescription}</p>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <MessageCircle size={28} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      Setelah Mengirim Pesanan
                    </h4>
                    <p className="text-gray-700">
                      Anda akan diarahkan ke WhatsApp untuk melanjutkan diskusi dengan tim kami. Pastikan aplikasi WhatsApp Anda sudah terinstall.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t-2 border-gray-200">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 px-6 py-3 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Kembali</span>
              </button>
            )}

            {currentStep < 3 ? (
              <button
                onClick={handleNext}
                className="ml-auto flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Lanjutkan</span>
                <ArrowRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="ml-auto flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Kirim Pesanan</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Shield, color: 'blue', title: 'Data Aman', desc: 'Informasi Anda dilindungi dengan enkripsi' },
            { icon: MessageCircle, color: 'purple', title: 'Respon Cepat', desc: 'Tim kami siap membantu dalam 1-2 jam kerja' },
            { icon: BadgeCheck, color: 'green', title: 'Tanpa Komitmen', desc: 'Konsultasi gratis tanpa kewajiban' }
          ].map((item, idx) => {
            const Icon = item.icon;
            const bgColors = {
              blue: 'bg-blue-100',
              purple: 'bg-purple-100',
              green: 'bg-green-100'
            };
            const textColors = {
              blue: 'text-blue-600',
              purple: 'text-purple-600',
              green: 'text-green-600'
            };
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-14 h-14 ${bgColors[item.color as keyof typeof bgColors]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={28} className={textColors[item.color as keyof typeof textColors]} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderFormInteractive;