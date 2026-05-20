'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function TermsPage() {
  const { language, t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 leading-relaxed text-brand-muted">
      <div className="border-b border-brand-border/60 pb-6">
        <div className="text-xs text-brand-muted font-bold tracking-wider mb-2 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-dark transition-colors">{t.navHome}</Link>
          <span>/</span>
          <span className="text-brand-primary">{t.termsTitle}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-brand-dark">{t.termsTitle}</h1>
        <p className="text-xs mt-1">Last Updated: May 18, 2026</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-brand-dark uppercase tracking-wider">
          {language === 'ar' ? '١. قبول الشروط والأحكام' : '1. Acceptance of Terms'}
        </h2>
        <p>
          {language === 'ar'
            ? 'باستخدامك لموقع PrimeSteelKSA، فإنك توافق بالكامل على الالتزام بشروط الاستخدام المذكورة هنا وكافة القوانين واللوائح المعمول بها في المملكة العربية السعودية.'
            : 'By browsing and using the PrimeSteelKSA website, you fully consent to be governed by these conditions of use and all applicable regulatory frames in the Kingdom of Saudi Arabia.'}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-brand-dark uppercase tracking-wider">
          {language === 'ar' ? '٢. استخادم كتالوج المنتجات واستعلامات واتساب' : '2. Catalog and WhatsApp Inquiry Usage'}
        </h2>
        <p>
          {language === 'ar'
            ? 'كتالوج الحديد الموضح مخصص للأغراض الترويجية وعرض المواصفات الفنية والمقاسات. لا يمثل توليد عروض أسعار واتساب التزاماً نهائياً إلا بعد توقيع عقد مبيعات الحديد الرسمي.'
            : 'The steel catalog displayed represents visual mockups, grades, and specs. Compiling items inside the inquiry basket and dispatching to WhatsApp does not constitute a legally binding sales contract until confirmed by our sales division.'}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-brand-dark uppercase tracking-wider">
          {language === 'ar' ? '٣. حقوق الملكية الفكرية' : '3. Intellectual Property Rights'}
        </h2>
        <p>
          {language === 'ar'
            ? 'جميع المحتويات والشعارات والكتيبات الفنية والرموز البرمجية الخاصة بهذا الموقع هي ملكية حصرية لـ PrimeSteelKSA ويمنع نسخها أو إعادة توزيعها بدون موافقة خطية.'
            : 'All graphical panels, code scripts, spec dictionaries, timelines, and translation databases remain the exclusive property of PrimeSteelKSA. Unauthorised copy is prohibited.'}
        </p>
      </section>
    </div>
  );
}
