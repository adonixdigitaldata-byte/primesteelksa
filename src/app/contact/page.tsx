'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, User } from 'lucide-react';

export default function ContactPage() {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setErrorMessage(result.error || (language === 'ar' ? 'فشل إرسال الطلب. يرجى المحاولة مرة أخرى.' : 'Failed to send inquiry. Please try again.'));
      }
    } catch (err) {
      setErrorMessage(language === 'ar' ? 'حدث خطأ في الشبكة. يرجى المحاولة مرة أخرى.' : 'A network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Page Header */}
      <div className="border-b border-brand-border/60 pb-6">
        <div className="text-xs text-brand-muted font-bold tracking-wider mb-2 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-dark transition-colors">{t.navHome}</Link>
          <span>/</span>
          <span className="text-brand-primary">{t.navContact}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-brand-dark">
          {t.navContact}
        </h1>
        <p className="text-sm text-brand-muted mt-1">
          {language === 'ar' 
            ? 'تواصل مع إدارة مبيعات الحديد للحصول على عروض أسعار دقيقة وسريعة.' 
            : 'Get in touch with our steel sales division for rapid price quote generation.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Contact Information panels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-brand-surface-mid border border-brand-border/75 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-brand-dark border-l-4 border-brand-primary pl-3 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-3">
              {t.contactDetailsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              {t.contactDetailsDesc}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-primary/10 border border-brand-primary/25 rounded-lg flex items-center justify-center text-brand-primary shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm">
                  <h4 className="font-bold text-brand-dark mb-0.5">{language === 'ar' ? 'الرئيس التنفيذي' : 'CEO'}</h4>
                  <p className="text-brand-muted font-semibold">Abdullah Mohammed Afzal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-primary/10 border border-brand-primary/25 rounded-lg flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm">
                  <h4 className="font-bold text-brand-dark mb-0.5">{language === 'ar' ? 'العنوان الرئيسي' : 'Headquarters'}</h4>
                  <p className="text-brand-muted">
                    {language === 'ar'
                      ? 'شارع أوبولد بن جحش، جدة، المملكة العربية السعودية'
                      : 'Obold Ibn Jahash Street, Jeddah, Saudi Arabia'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-primary/10 border border-brand-primary/25 rounded-lg flex items-center justify-center text-brand-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm">
                  <h4 className="font-bold text-brand-dark mb-0.5">{language === 'ar' ? 'رقم الهاتف المباشر' : 'Direct Call Line'}</h4>
                  <p className="text-brand-muted font-semibold" dir="ltr">+966 54 277 7716</p>
                  <p className="text-brand-muted font-semibold" dir="ltr">+966 55 143 8917</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-primary/10 border border-brand-primary/25 rounded-lg flex items-center justify-center text-brand-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm">
                  <h4 className="font-bold text-brand-dark mb-0.5">{language === 'ar' ? 'البريد الإلكتروني' : 'Official Email'}</h4>
                  <p className="text-brand-muted font-semibold" dir="ltr">sales@primesteelksa.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-brand-surface-mid border border-brand-border/65 p-6 rounded-2xl flex gap-4 items-start">
            <Clock className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <h3 className="font-bold text-brand-dark mb-1">{t.contactHoursTitle}</h3>
              <p className="text-brand-muted">{t.contactHoursDesc}</p>
            </div>
          </div>

          {/* Direct WhatsApp Call link button */}
          <a
            href="https://wa.me/966551438917?text=Hello%20PrimeSteelKSA%2C%20I%20have%20an%20urgent%20steel%20procurement%20inquiry%20contract."
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2.5 p-4 bg-brand-primary hover:bg-brand-primary-light text-white hover:text-brand-surface font-extrabold rounded-2xl shadow-md shadow-brand-primary/20 shadow-sm w-full transition-all duration-300 active:scale-[0.98]"
          >
            <MessageSquare className="w-5 h-5 shrink-0" />
            <span>{language === 'ar' ? 'دردش مباشرة مبيعات الواتساب' : 'WhatsApp Direct Live Chat'}</span>
          </a>
        </div>

        {/* Right Side: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="bg-brand-surface-mid border border-brand-primary/45 rounded-2xl p-8 text-center space-y-4 shadow-card">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/25 flex items-center justify-center text-brand-primary mx-auto animate-bounce">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">{language === 'ar' ? 'تم الإرسال بنجاح!' : 'Message Sent Successfully!'}</h3>
              <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                {t.contactSuccess}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-brand-surface-alt text-brand-dark border border-brand-border/65 text-xs font-bold rounded-xl"
              >
                {language === 'ar' ? 'إرسال استفسار جديد' : 'Submit Another Inquiry'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-brand-surface-mid border border-brand-border/80 p-6 sm:p-8 rounded-2xl space-y-5 shadow-card">
              <h3 className="text-lg font-bold text-brand-dark pb-3 border-b border-brand-border/50">
                {language === 'ar' ? 'طلب عرض أسعار فني مخصص' : 'Submit Custom Technical Price Request'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">{t.contactFormName} *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-brand-surface border border-brand-border/60 rounded-xl px-4 py-3 text-xs text-brand-dark placeholder-brand-silver/30 focus:outline-none focus:border-brand-primary disabled:opacity-50"
                    placeholder={language === 'ar' ? 'مثال: محمد أحمد' : 'e.g. John Doe'}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">{t.contactFormPhone} *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    disabled={isSubmitting}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-brand-surface border border-brand-border/60 rounded-xl px-4 py-3 text-xs text-brand-dark placeholder-brand-silver/30 focus:outline-none focus:border-brand-primary disabled:opacity-50"
                    placeholder="e.g. +966 50 000 0000"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">{t.contactFormEmail}</label>
                <input
                  type="email"
                  name="email"
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-brand-surface border border-brand-border/60 rounded-xl px-4 py-3 text-xs text-brand-dark placeholder-brand-silver/30 focus:outline-none focus:border-brand-primary disabled:opacity-50"
                  placeholder="e.g. name@company.com"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">{t.contactFormMessage}</label>
                <textarea
                  name="message"
                  rows={5}
                  disabled={isSubmitting}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-brand-surface border border-brand-border/60 rounded-xl px-4 py-3 text-xs text-brand-dark placeholder-brand-silver/30 focus:outline-none focus:border-brand-primary resize-none disabled:opacity-50"
                  placeholder={t.contactFormMessage}
                />
              </div>

              {errorMessage && (
                <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-600 rounded-xl text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-brand-primary hover:bg-brand-primary-light disabled:opacity-50 text-white hover:text-brand-surface font-bold rounded-xl text-xs flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0"></div>
                ) : (
                  <Send className="w-4 h-4 shrink-0" />
                )}
                <span>{isSubmitting ? (language === 'ar' ? 'جاري الإرسال...' : 'Sending...') : t.contactFormSubmit}</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Google Maps embed code location centered in KSA */}
      <section className="bg-brand-surface-mid border border-brand-border/65 rounded-3xl overflow-hidden shadow-card">
        <div className="p-5 bg-brand-surface/60 border-b border-brand-border/60 flex items-center gap-3">
          <MapPin className="w-5 h-5 text-brand-primary" />
          <h3 className="font-bold text-brand-dark text-sm">{language === 'ar' ? 'الموقع الجغرافي للمقر الرئيسي بجدة' : 'Jeddah Headquarters Geographic Pin'}</h3>
        </div>
        
        {/* QR Code Section */}
        <div className="p-6 bg-brand-surface/40 border-b border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left rtl:sm:text-right">
            <h4 className="font-bold text-brand-dark text-base">
              {language === 'ar' ? 'مسح رمز الاستجابة السريعة (QR Code)' : 'Scan QR Code'}
            </h4>
            <p className="text-xs text-brand-muted max-w-md leading-relaxed">
              {language === 'ar' 
                ? 'امسح الرمز ضوئيًا باستخدام كاميرا جوالك لفتح موقعنا مباشرة على خرائط Google وتسهيل الوصول إلينا.'
                : 'Scan the QR code with your mobile camera to open our location directly in Google Maps for easy navigation.'}
            </p>
            <a 
              href="https://maps.app.goo.gl/zFkbWdTcMyGtscDd7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-primary-light transition-colors mt-2"
            >
              <span>{language === 'ar' ? 'فتح في خرائط Google' : 'Open in Google Maps'}</span>
              <span className="rtl:rotate-180">→</span>
            </a>
          </div>
          <div className="shrink-0 bg-white p-3 rounded-2xl border border-brand-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fmaps.app.goo.gl%2FzFkbWdTcMyGtscDd7&color=1a1a1a&bgcolor=ffffff&qzone=1" 
              alt="Google Maps QR Code"
              width={150}
              height={150}
              loading="lazy"
              className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
            />
          </div>
        </div>

        <div className="h-96 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3713.438817694765!2d39.26881407526844!3d21.451291980305825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDI3JzA0LjciTiAzOcKwMTYnMTcuMCJF!5e0!3m2!1sen!2sin!4v1779684074817!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title="PrimeSteelKSA HQ Location"
            className="grayscale brightness-90 contrast-125"
          />
        </div>
      </section>
    </div>
  );
}
