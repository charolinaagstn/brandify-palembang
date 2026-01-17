'use client';

import { useState, useEffect } from 'react';
import {
  User,
  Mail,
  Phone,
  Building2,
  Sparkles,
  Palette,
  Image,
  Clock,
  Zap,
  Rocket,
  Check,
  Shield,
  MessageCircle,
  BadgeCheck,
  ArrowLeft,
  ArrowRight,
  Send,
  AlertCircle,
  Info,
  CheckCircle,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  selectedServices: string[];
  projectDescription: string;
  preferredContact: string;
  paymentMethod: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  timeline: string;
  icon: any;
}

interface Order {
  orderId: string;
  name: string;
  businessName: string;
  phone: string;
  services: string[];
  total: number;
  dp: number;
  remaining: number;
  status: 'waiting_dp' | 'in_progress' | 'waiting_final_payment' | 'completed';
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
    preferredContact: 'whatsapp',
    paymentMethod: '',
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
      icon: Sparkles,
    },
    {
      id: 'brand-identity',
      name: 'Poster Promosi',
      description: 'Sebarkan informasi UMKM anda dengan poster dan material cetak lainnya',
      price: 'Mulai dari Rp 15.000',
      timeline: '1-2 hari',
      icon: Palette,
    },
    {
      id: 'social-media',
      name: 'Desain Media Sosial',
      description: 'Template konten untuk Instagram, Facebook, dan platform lainnya',
      price: 'Mulai dari Rp 25.000',
      timeline: '1-3 hari',
      icon: Image,
    },
    {
      id: 'spanduk-banner',
      name: 'Desain Spanduk dan Banner',
      description: 'Layanan desain spanduk yang cocok serta komplit untuk bisnis anda',
      price: 'Mulai dari Rp 25.000',
      timeline: '1-3 hari',
      icon: Sparkles,
    },
  ];

  const servicePrices: { [key: string]: number } = {
    'logo-design': 15000,
    'brand-identity': 15000,
    'social-media': 25000,
    'spanduk-banner': 25000,
  };
  const totalPrice = formData.selectedServices.reduce(
    (sum, id) => sum + (servicePrices[id] || 0),
    0
  );

  const dp = totalPrice * 0.5;
  const remaining = totalPrice - dp;

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
      if (!formData.paymentMethod) {
        newErrors.paymentMethod = 'Pilih metode pembayaran';
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
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter((id) => id !== serviceId)
        : [...prev.selectedServices, serviceId],
    }));
    setErrors((prev) => ({ ...prev, services: '' }));
  };

  const handleSubmit = () => {
    if (!validateStep(2)) return;
    setIsSubmitting(true);

    const orderId = 'ORD-' + Date.now();

    const order: Order = {
      orderId,
      name: formData.name,
      businessName: formData.businessName,
      phone: formData.phone,
      services: formData.selectedServices,
      total: totalPrice,
      dp,
      remaining,
      status: 'waiting_dp',
    };

    const selectedServiceNames = services
      .filter((s) => formData.selectedServices.includes(s.id))
      .map((s) => s.name)
      .join(', ');

    const paymentMethods: { [key: string]: { name: string; account: string } } = {
      dana: { name: 'DANA', account: '0857-8911-0406' },
      bri: { name: 'BRI', account: '1234-5678-9012-3456' },
      shopee: { name: 'ShopeePay', account: '0857-8911-0406' },
    };

    const selectedPayment = paymentMethods[formData.paymentMethod];

    // Pesan dibuat dalam format UTF-8 yang aman untuk emoji
    const message =
      'Halo Brandify 👋\n\n' +
      'Saya ingin melakukan pembayaran DP sebesar *50%* untuk pesanan desain.\n\n' +
      '📌 Order ID: ' +
      orderId +
      '\n' +
      '👤 Nama: ' +
      formData.name +
      '\n' +
      '🏢 Bisnis: ' +
      formData.businessName +
      '\n\n' +
      '🎨 Layanan:\n' +
      selectedServiceNames +
      '\n\n' +
      '💰 Total: Rp ' +
      totalPrice.toLocaleString() +
      '\n' +
      '💳 DP (50%): Rp ' +
      dp.toLocaleString() +
      '\n' +
      '📥 Sisa: Rp ' +
      remaining.toLocaleString() +
      '\n\n' +
      '💳 Metode Pembayaran:\n' +
      selectedPayment.name +
      '\n' +
      '📱 Nomor/Rekening: ' +
      selectedPayment.account +
      '\n\n' +
      'Mohon kirimkan detail pembayaran ya 🙏\n' +
      'Terima kasih ✨';

    // Encode agar emoji & karakter tidak rusak di WhatsApp
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = 'https://wa.me/6285789110406?text=' + encodedMessage;

    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);
      window.open(whatsappUrl, '_blank');
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
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white scale-110 shadow-lg'
                      : isCompleted
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {isCompleted ? <Check size={24} /> : stepNum}
                </div>
                <span
                  className={`text-sm mt-2 font-medium ${
                    isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-400'
                  }`}
                >
                  {stepNum === 1 ? 'Info Dasar' : stepNum === 2 ? 'Layanan & Detail' : 'Konfirmasi'}
                </span>
              </div>
              {stepNum < total && (
                <div
                  className={`h-1 flex-1 mx-2 rounded transition-all ${
                    stepNum < current ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pesanan Berhasil Dikirim! 🎉</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Terima kasih <span className="font-semibold text-blue-600">{formData.name}</span>! Kami
            akan segera menghubungi Anda melalui WhatsApp untuk membahas detail proyek.
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
                { num: 3, text: 'Pembayaran dan mulai pengerjaan proyek' },
              ].map((step) => (
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
                  name: '',
                  email: '',
                  phone: '',
                  businessName: '',
                  selectedServices: [],
                  projectDescription: '',
                  preferredContact: 'whatsapp',
                  paymentMethod: '',
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Formulir Pemesanan ✨</h1>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Informasi Dasar</h2>
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

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-5 flex items-start space-x-4 shadow-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={26} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-1 text-base">
                    Konsultasi via WhatsApp
                  </h4>
                  <p className="text-sm text-blue-700 leading-relaxed">
                    Semua komunikasi dan update pesanan akan dilakukan melalui{' '}
                    <strong>WhatsApp</strong> agar Anda mendapatkan respon lebih cepat, praktis, dan
                    real-time dari tim kami.
                  </p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Layanan & Detail Proyek</h2>
                <p className="text-gray-600">Pilih layanan dan ceritakan tentang proyek Anda</p>
              </div>

              {errors.services && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center">
                  <AlertCircle size={20} className="text-red-600 mr-2" />
                  <span className="text-red-700 font-medium">{errors.services}</span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Pilih Layanan yang Anda Butuhkan
                </h3>
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

              {/* Payment Method Selection */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Pilih Metode Pembayaran <span className="text-red-500">*</span>
                </h3>

                {errors.paymentMethod && (
                  <div className="mb-4 bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center">
                    <AlertCircle size={20} className="text-red-600 mr-2" />
                    <span className="text-red-700 font-medium">{errors.paymentMethod}</span>
                  </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    {
                      id: 'dana',
                      name: 'DANA',
                      logo: '/hero-home/danaPayment.jpeg',
                      color: 'from-blue-500 to-cyan-400',
                    },
                    {
                      id: 'bri',
                      name: 'BRI',
                      logo: '/hero-home/bri.jpeg',
                      color: 'from-blue-600 to-blue-400',
                    },
                    {
                      id: 'shopee',
                      name: 'ShopeePay',
                      logo: '/hero-home/shopePayment.jpeg',
                      color: 'from-orange-500 to-red-400',
                    },
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, paymentMethod: method.id });
                        setErrors({ ...errors, paymentMethod: '' });
                      }}
                      className={`relative p-6 rounded-2xl border-3 transition-all transform hover:scale-105 ${
                        formData.paymentMethod === method.id
                          ? 'border-blue-600 bg-blue-50 shadow-2xl scale-105 ring-4 ring-blue-200'
                          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg'
                      }`}
                    >
                      {formData.paymentMethod === method.id && (
                        <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full p-1.5 shadow-lg">
                          <Check size={18} />
                        </div>
                      )}

                      <div
                        className={`w-full h-20 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-3 shadow-md overflow-hidden`}
                      >
                        <img
                          src={method.logo}
                          alt={method.name}
                          className="w-full h-full object-contain p-3"
                          onError={(e) => {
                            // Fallback jika gambar tidak ditemukan
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `<span class="text-white font-bold text-lg">${method.name}</span>`;
                          }}
                        />
                      </div>

                      <p className="font-bold text-gray-900 text-center">{method.name}</p>
                    </button>
                  ))}
                </div>

                {formData.paymentMethod && (
                  <div className="mt-4 bg-green-50 border-2 border-green-200 rounded-xl p-4">
                    <p className="text-green-800 font-medium flex items-center">
                      <Check className="mr-2" size={20} />
                      Metode pembayaran {formData.paymentMethod.toUpperCase()} dipilih
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle size={28} className="text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Konfirmasi Pesanan
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Periksa kembali informasi Anda sebelum mengirim
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center text-base">
                    <User size={20} className="mr-2 text-blue-600 flex-shrink-0" />
                    Informasi Kontak
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { label: 'Nama', value: formData.name },
                      { label: 'Email', value: formData.email },
                      { label: 'Telepon', value: formData.phone },
                      { label: 'Bisnis', value: formData.businessName },
                    ].map((item) => (
                      <div key={item.label} className="break-words">
                        <p className="text-xs text-gray-600 mb-1">{item.label}</p>
                        <p className="font-semibold text-sm text-gray-900 break-all">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center text-base">
                    <Sparkles size={20} className="mr-2 text-purple-600 flex-shrink-0" />
                    Layanan Dipilih
                  </h3>
                  <div className="space-y-2">
                    {services
                      .filter((s) => formData.selectedServices.includes(s.id))
                      .map((service) => (
                        <div
                          key={service.id}
                          className="flex items-start justify-between py-2 border-b border-purple-200 last:border-0 gap-2"
                        >
                          <span className="font-semibold text-sm text-gray-900 break-words flex-1">
                            {service.name}
                          </span>
                          <span className="text-xs text-gray-600 flex items-center flex-shrink-0">
                            <Clock size={12} className="mr-1" />
                            {service.timeline}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 border-2 border-yellow-300">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center text-base">
                    💳 Rincian Pembayaran
                  </h3>
                  <div className="space-y-1.5 text-sm text-gray-800">
                    <p className="break-words">
                      Total Harga:{' '}
                      <strong className="whitespace-nowrap">
                        Rp {totalPrice.toLocaleString()}
                      </strong>
                    </p>
                    <p className="break-words">
                      DP (50%):{' '}
                      <strong className="text-blue-600 whitespace-nowrap">
                        Rp {dp.toLocaleString()}
                      </strong>
                    </p>
                    <p className="break-words">
                      Sisa Pembayaran:{' '}
                      <strong className="text-green-600 whitespace-nowrap">
                        Rp {remaining.toLocaleString()}
                      </strong>
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t-2 border-yellow-200">
                    <p className="text-sm text-gray-700 mb-2 font-semibold">Metode Pembayaran:</p>
                    <div className="flex items-center space-x-3">
                      {(() => {
                        const methods: {
                          [key: string]: { name: string; logo: string; color: string };
                        } = {
                          dana: {
                            name: 'DANA',
                            logo: '/hero-home/danaPayment.jpg',
                            color: 'from-blue-500 to-cyan-400',
                          },
                          bri: {
                            name: 'BRI',
                            logo: '/hero-home/bri.png',
                            color: 'from-blue-600 to-blue-400',
                          },
                          bsi: {
                            name: 'BSI',
                            logo: '/hero-home/bsiPayment.png',
                            color: 'from-green-600 to-emerald-400',
                          },
                          shopee: {
                            name: 'ShopeePay',
                            logo: '/hero-home/shopePayment.png',
                            color: 'from-orange-500 to-red-400',
                          },
                          gopay: {
                            name: 'GoPay',
                            logo: '/hero-home/gopay.png',
                            color: 'from-green-500 to-teal-400',
                          },
                        };
                        const selected = methods[formData.paymentMethod];
                        return (
                          <>
                            <div
                              className={`w-16 h-16 bg-gradient-to-br ${selected.color} rounded-lg flex items-center justify-center shadow-md overflow-hidden`}
                            >
                              <img
                                src={selected.logo}
                                alt={selected.name}
                                className="w-full h-full object-contain p-2"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  e.currentTarget.parentElement!.innerHTML = `<span class="text-white font-bold text-sm">${selected.name}</span>`;
                                }}
                              />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">{selected.name}</p>
                              <p className="text-xs text-gray-600">
                                Detail akan dikirim via WhatsApp
                              </p>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center text-base">
                    <Info size={20} className="mr-2 text-green-600 flex-shrink-0" />
                    Deskripsi Proyek
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed break-words">
                    {formData.projectDescription}
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                <div className="flex items-start space-x-2">
                  <MessageCircle size={22} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base">
                      Setelah Mengirim Pesanan
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      Anda akan diarahkan ke WhatsApp untuk melanjutkan diskusi dengan tim kami.
                      Pastikan aplikasi WhatsApp Anda sudah terinstall.
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
            {
              icon: Shield,
              color: 'blue',
              title: 'Data Aman',
              desc: 'Informasi Anda dilindungi dengan enkripsi',
            },
            {
              icon: MessageCircle,
              color: 'purple',
              title: 'Respon Cepat',
              desc: 'Tim kami siap membantu dalam 1-2 jam kerja',
            },
            {
              icon: BadgeCheck,
              color: 'green',
              title: 'Tanpa Komitmen',
              desc: 'Konsultasi gratis tanpa kewajiban',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            const bgColors = {
              blue: 'bg-blue-100',
              purple: 'bg-purple-100',
              green: 'bg-green-100',
            };
            const textColors = {
              blue: 'text-blue-600',
              purple: 'text-purple-600',
              green: 'text-green-600',
            };
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-14 h-14 ${bgColors[item.color as keyof typeof bgColors]} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
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
