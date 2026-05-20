'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function PrivacyPage() {
  const { language, t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 leading-relaxed text-brand-muted">
      <div className="border-b border-brand-border/60 pb-6">
        <div className="text-xs text-brand-muted font-bold tracking-wider mb-2 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-dark transition-colors">{t.navHome}</Link>
          <span>/</span>
          <span className="text-brand-primary">{t.privacyTitle}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-brand-dark">{t.privacyTitle}</h1>
        <p className="text-xs mt-1">Last Updated: May 18, 2026</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-brand-dark uppercase tracking-wider">
          {language === 'ar' ? '١. جمع البيانات الشخصية' : '1. Personal Information Collection'}
        </h2>
        <p>
          {language === 'ar'
            ? 'نقوم بجمع المعلومات الشخصية التي تقدمها لنا طواعية عند إرسال استفساراتك الفنية، مثل الاسم الكامل، البريد الإلكتروني، ورقم الجوال للتواصل وتجهيز عروض الأسعار.'
            : 'We collect personal details that you voluntarily submit to us through our technical query forms, such as full name, email, and mobile number to contact you and prepare price quotes.'}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-brand-dark uppercase tracking-wider">
          {language === 'ar' ? '٢. استخدام ملفات الارتباط (Cookies)' : '2. Use of Cookies'}
        </h2>
        <p>
          {language === 'ar'
            ? 'نستخدم ملفات الارتباط الصغيرة لتخزين تفضيلات اللغة المحددة لديكم (العربية / الإنجليزية) محلياً لضمان تجربة تصفح سريعة ومنسقة عند زيارتك القادمة.'
            : 'We use small cookie elements and local storage keys to store your active language preferences (Arabic / English) locally on your device to guarantee a swift and structured browsing journey.'}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-brand-dark uppercase tracking-wider">
          {language === 'ar' ? '٣. حماية البيانات وأمنها' : '3. Data Protection and Security'}
        </h2>
        <p>
          {language === 'ar'
            ? 'نحن نلتزم بحماية بياناتك الشخصية وتطبيق التدابير الأمنية المناسبة لضمان سلامتها وعدم مشاركتها مع أي أطراف ثالثة لأغراض دعائية.'
            : 'We strictly safeguard your personal details and integrate security parameters to guarantee their safety. We never lease, sell, or dispatch user details to external entities.'}
        </p>
      </section>
    </div>
  );
}
