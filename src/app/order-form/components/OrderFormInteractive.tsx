'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import FormProgress from './FormProgress';
import ServiceCard from './ServiceCard';
import FileUpload from './FileUpload';
import TimelineCalculator from './TimelineCalculator';

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  selectedServices: string[];
  urgency: string;
  budget: string;
  projectDescription: string;
  referenceFiles: File[];
  preferredContact: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  timeline: string;
  icon: string;
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
    urgency: 'normal',
    budget: '',
    projectDescription: '',
    referenceFiles: [],
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
      price: 'Mulai dari Rp 500.000',
      timeline: '5-7 hari',
      icon: 'SparklesIcon'
    },
    {
      id: 'brand-identity',
      name: 'Identitas Brand',
      description: 'Paket lengkap logo, warna, tipografi, dan panduan brand',
      price: 'Mulai dari Rp 2.500.000',
      timeline: '10-14 hari',
      icon: 'SwatchIcon'
    },
    {
      id: 'social-media',
      name: 'Desain Media Sosial',
      description: 'Template konten untuk Instagram, Facebook, dan platform lainnya',
      price: 'Mulai dari Rp 750.000',
      timeline: '3-5 hari',
      icon: 'PhotoIcon'
    },
    {
      id: 'packaging',
      name: 'Desain Kemasan',
      description: 'Kemasan produk yang menarik dan fungsional',
      price: 'Mulai dari Rp 1.500.000',
      timeline: '7-10 hari',
      icon: 'CubeIcon'
    },
    {
      id: 'web-design',
      name: 'Desain Website',
      description: 'Website modern dan responsif untuk bisnis Anda',
      price: 'Mulai dari Rp 5.000.000',
      timeline: '14-21 hari',
      icon: 'ComputerDesktopIcon'
    },
    {
      id: 'print-design',
      name: 'Desain Cetak',
      description: 'Brosur, kartu nama, banner, dan materi promosi lainnya',
      price: 'Mulai dari Rp 300.000',
      timeline: '3-7 hari',
      icon: 'DocumentTextIcon'
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
    }

    if (step === 3) {
      if (!formData.projectDescription.trim()) {
        newErrors.projectDescription = 'Deskripsi proyek wajib diisi';
      } else if (formData.projectDescription.trim().length < 50) {
        newErrors.projectDescription = 'Deskripsi minimal 50 karakter';
      }
      if (!formData.budget) newErrors.budget = 'Pilih rentang budget';
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
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);
      
      // Generate WhatsApp message
      const selectedServiceNames = services
        .filter(s => formData.selectedServices.includes(s.id))
        .map(s => s.name)
        .join(', ');

      const message = `Halo Brandify Palembang!\n\nSaya ingin memesan layanan desain:\n\nNama: ${formData.name}\nBisnis: ${formData.businessName}\nEmail: ${formData.email}\nTelepon: ${formData.phone}\n\nLayanan: ${selectedServiceNames}\nUrgency: ${formData.urgency === 'express' ? 'Express' : formData.urgency === 'standard' ? 'Standard' : 'Normal'}\nBudget: ${formData.budget}\n\nDeskripsi Proyek:\n${formData.projectDescription}\n\nTerima kasih!`;

      const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp in new tab after 2 seconds
      setTimeout(() => {
        if (isHydrated && typeof window !== 'undefined') {
          window.open(whatsappUrl, '_blank');
        }
      }, 2000);
    }, 1500);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Memuat formulir...</p>
        </div>
      </div>
    );
  }

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckIcon" size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Pesanan Berhasil Dikirim!
          </h1>
          <p className="text-text-secondary mb-6 text-lg">
            Terima kasih {formData.name}! Kami akan segera menghubungi Anda melalui WhatsApp untuk membahas detail proyek.
          </p>
          <div className="bg-muted rounded-lg p-6 mb-6 text-left">
            <h3 className="font-semibold text-foreground mb-3">Langkah Selanjutnya:</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <p className="text-sm text-text-secondary">
                  Tim kami akan menghubungi Anda dalam 1-2 jam kerja
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <p className="text-sm text-text-secondary">
                  Diskusi detail proyek dan konfirmasi timeline
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <p className="text-sm text-text-secondary">
                  Pembayaran dan mulai pengerjaan proyek
                </p>
              </div>
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
                  urgency: 'normal',
                  budget: '',
                  projectDescription: '',
                  referenceFiles: [],
                  preferredContact: 'whatsapp'
                });
              }}
              className="px-6 py-3 bg-muted text-foreground font-semibold rounded-lg hover:bg-muted/80 transition-colors"
            >
              Buat Pesanan Baru
            </button>
            <a
              href="/homepage"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Kembali ke Beranda
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted to-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Formulir Pemesanan
          </h1>
          <p className="text-text-secondary text-lg">
            Isi formulir di bawah ini untuk memulai transformasi brand Anda
          </p>
        </div>

        {/* Progress Indicator */}
        <FormProgress currentStep={currentStep} totalSteps={4} />

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Informasi Dasar
                </h2>
                <p className="text-text-secondary">
                  Berikan informasi kontak Anda agar kami dapat menghubungi Anda
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nama Lengkap <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                      errors.name ? 'border-destructive' : 'border-border'
                    }`}
                    placeholder="Masukkan nama lengkap Anda"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive flex items-center">
                      <Icon name="ExclamationCircleIcon" size={16} className="mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                      errors.email ? 'border-destructive' : 'border-border'
                    }`}
                    placeholder="nama@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive flex items-center">
                      <Icon name="ExclamationCircleIcon" size={16} className="mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nomor Telepon <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                      errors.phone ? 'border-destructive' : 'border-border'
                    }`}
                    placeholder="08123456789"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-destructive flex items-center">
                      <Icon name="ExclamationCircleIcon" size={16} className="mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nama Bisnis/UMKM <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => {
                      setFormData({ ...formData, businessName: e.target.value });
                      setErrors({ ...errors, businessName: '' });
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                      errors.businessName ? 'border-destructive' : 'border-border'
                    }`}
                    placeholder="Nama bisnis Anda"
                  />
                  {errors.businessName && (
                    <p className="mt-1 text-sm text-destructive flex items-center">
                      <Icon name="ExclamationCircleIcon" size={16} className="mr-1" />
                      {errors.businessName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Metode Kontak Preferensi
                </label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: 'whatsapp', label: 'WhatsApp', icon: 'ChatBubbleLeftRightIcon' },
                    { value: 'email', label: 'Email', icon: 'EnvelopeIcon' },
                    { value: 'phone', label: 'Telepon', icon: 'PhoneIcon' }
                  ].map((method) => (
                    <button
                      key={method.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredContact: method.value })}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                        formData.preferredContact === method.value
                          ? 'border-accent bg-accent/5 text-accent' :'border-border hover:border-accent/50'
                      }`}
                    >
                      <Icon name={method.icon as any} size={20} />
                      <span className="font-medium">{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Service Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Pilih Layanan
                </h2>
                <p className="text-text-secondary">
                  Pilih satu atau lebih layanan yang Anda butuhkan
                </p>
              </div>

              {errors.services && (
                <div className="bg-destructive/10 border border-destructive rounded-lg p-4 flex items-center">
                  <Icon name="ExclamationCircleIcon" size={20} className="text-destructive mr-2" />
                  <span className="text-destructive font-medium">{errors.services}</span>
                </div>
              )}

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
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">{formData.selectedServices.length}</span> layanan dipilih
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Project Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Detail Proyek
                </h2>
                <p className="text-text-secondary">
                  Berikan informasi detail tentang proyek Anda
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tingkat Urgency
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: 'normal', label: 'Normal', desc: 'Timeline standar', icon: 'ClockIcon' },
                    { value: 'standard', label: 'Standard', desc: '20% lebih cepat', icon: 'BoltIcon' },
                    { value: 'express', label: 'Express', desc: '40% lebih cepat', icon: 'RocketLaunchIcon' }
                  ].map((urgency) => (
                    <button
                      key={urgency.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, urgency: urgency.value })}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        formData.urgency === urgency.value
                          ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <Icon name={urgency.icon as any} size={24} className="text-primary" />
                        <span className="font-semibold text-foreground">{urgency.label}</span>
                      </div>
                      <p className="text-sm text-text-secondary">{urgency.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Rentang Budget <span className="text-destructive">*</span>
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => {
                    setFormData({ ...formData, budget: e.target.value });
                    setErrors({ ...errors, budget: '' });
                  }}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                    errors.budget ? 'border-destructive' : 'border-border'
                  }`}
                >
                  <option value="">Pilih rentang budget</option>
                  <option value="< 1 juta">Kurang dari Rp 1.000.000</option>
                  <option value="1-3 juta">Rp 1.000.000 - Rp 3.000.000</option>
                  <option value="3-5 juta">Rp 3.000.000 - Rp 5.000.000</option>
                  <option value="5-10 juta">Rp 5.000.000 - Rp 10.000.000</option>
                  <option value="> 10 juta">Lebih dari Rp 10.000.000</option>
                </select>
                {errors.budget && (
                  <p className="mt-1 text-sm text-destructive flex items-center">
                    <Icon name="ExclamationCircleIcon" size={16} className="mr-1" />
                    {errors.budget}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Deskripsi Proyek <span className="text-destructive">*</span>
                </label>
                <textarea
                  value={formData.projectDescription}
                  onChange={(e) => {
                    setFormData({ ...formData, projectDescription: e.target.value });
                    setErrors({ ...errors, projectDescription: '' });
                  }}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none ${
                    errors.projectDescription ? 'border-destructive' : 'border-border'
                  }`}
                  placeholder="Ceritakan tentang bisnis Anda, target audience, gaya desain yang diinginkan, dan detail penting lainnya... (minimal 50 karakter)"
                />
                <div className="flex items-center justify-between mt-2">
                  {errors.projectDescription ? (
                    <p className="text-sm text-destructive flex items-center">
                      <Icon name="ExclamationCircleIcon" size={16} className="mr-1" />
                      {errors.projectDescription}
                    </p>
                  ) : (
                    <p className="text-sm text-text-secondary">
                      {formData.projectDescription.length} / 50 karakter minimum
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Upload Referensi (Opsional)
                </label>
                <FileUpload
                  onFilesChange={(files) => setFormData({ ...formData, referenceFiles: files })}
                  maxFiles={5}
                />
                <p className="mt-2 text-sm text-text-secondary">
                  Upload logo lama, contoh desain yang disukai, atau referensi lainnya
                </p>
              </div>

              <TimelineCalculator
                selectedServices={formData.selectedServices}
                urgency={formData.urgency}
              />
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Konfirmasi Pesanan
                </h2>
                <p className="text-text-secondary">
                  Periksa kembali informasi Anda sebelum mengirim
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="UserIcon" size={20} className="mr-2 text-primary" />
                    Informasi Kontak
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-text-secondary mb-1">Nama</p>
                      <p className="font-medium text-foreground">{formData.name}</p>
                    </div>
                    <div>
                      <p className="text-text-secondary mb-1">Email</p>
                      <p className="font-medium text-foreground">{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-text-secondary mb-1">Telepon</p>
                      <p className="font-medium text-foreground">{formData.phone}</p>
                    </div>
                    <div>
                      <p className="text-text-secondary mb-1">Bisnis</p>
                      <p className="font-medium text-foreground">{formData.businessName}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="SparklesIcon" size={20} className="mr-2 text-primary" />
                    Layanan Dipilih
                  </h3>
                  <div className="space-y-2">
                    {services
                      .filter(s => formData.selectedServices.includes(s.id))
                      .map((service) => (
                        <div key={service.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                          <span className="font-medium text-foreground">{service.name}</span>
                          <span className="text-sm text-text-secondary">{service.timeline}</span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="DocumentTextIcon" size={20} className="mr-2 text-primary" />
                    Detail Proyek
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-text-secondary mb-1">Urgency</p>
                      <p className="font-medium text-foreground capitalize">{formData.urgency}</p>
                    </div>
                    <div>
                      <p className="text-text-secondary mb-1">Budget</p>
                      <p className="font-medium text-foreground">{formData.budget}</p>
                    </div>
                    <div>
                      <p className="text-text-secondary mb-1">Deskripsi</p>
                      <p className="text-foreground">{formData.projectDescription}</p>
                    </div>
                    {formData.referenceFiles.length > 0 && (
                      <div>
                        <p className="text-text-secondary mb-1">File Referensi</p>
                        <p className="font-medium text-foreground">
                          {formData.referenceFiles.length} file terupload
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <Icon name="InformationCircleIcon" size={24} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Setelah Mengirim Pesanan
                    </h4>
                    <p className="text-sm text-text-secondary">
                      Anda akan diarahkan ke WhatsApp untuk melanjutkan diskusi dengan tim kami. Pastikan aplikasi WhatsApp Anda sudah terinstall.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 px-6 py-3 text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="ArrowLeftIcon" size={20} />
                <span>Kembali</span>
              </button>
            )}

            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                className="ml-auto flex items-center space-x-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-md hover:shadow-lg"
              >
                <span>Lanjutkan</span>
                <Icon name="ArrowRightIcon" size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="ml-auto flex items-center space-x-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <Icon name="PaperAirplaneIcon" size={20} />
                    <span>Kirim Pesanan</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="ShieldCheckIcon" size={24} className="text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Data Aman</h3>
            <p className="text-sm text-text-secondary">
              Informasi Anda dilindungi dengan enkripsi
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Respon Cepat</h3>
            <p className="text-sm text-text-secondary">
              Tim kami siap membantu dalam 1-2 jam kerja
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="CheckBadgeIcon" size={24} className="text-success" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Tanpa Komitmen</h3>
            <p className="text-sm text-text-secondary">
              Konsultasi gratis tanpa kewajiban
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFormInteractive;