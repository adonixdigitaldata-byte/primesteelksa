'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { BookOpen, Calendar, ArrowRight, Eye, Tag } from 'lucide-react';

export default function BlogListingPage() {
  const { language, t } = useLanguage();
  const [selectedTag, setSelectedTag] = useState('');

  const articles = [
    {
      id: 'buying-steel-guide',
      titleEn: 'Ultimate Guide to Buying Structural Steel Beams in KSA',
      titleAr: 'الدليل الشامل لشراء جسور الحديد الإنشائية في السعودية',
      excerptEn: 'Learn how to differentiate between JIS, ASTM, and DIN standards for industrial beams, and check the crucial parameters for grade SS400.',
      excerptAr: 'تعرف على كيفية التمييز بين مواصفات JIS وASTM وDIN للجسور الصناعية، وتحقق من المعايير الهامة لدرجة الحديد SS400.',
      date: 'May 14, 2026',
      readTimeEn: '5 min read',
      readTimeAr: '٥ دقائق قراءة',
      tagEn: 'Technical Guide',
      tagAr: 'دليل تقني',
      tagSlug: 'technical'
    },
    {
      id: 'epoxy-coated-rebar-importance',
      titleEn: 'Why Epoxy-Coated Steel Reinforcing Bar is Essential in Coastal Zones',
      titleAr: 'لماذا يعد حديد التسليح المعزول بالإيبوكسي ضرورياً في المناطق الساحلية',
      excerptEn: 'Saltwater air accelerates concrete carbonation. Read about SASO-certified epoxy rebar protection and how it guarantees structure longevity.',
      excerptAr: 'تسير الرطوبة والأملاح تآكل حديد التسليح بسرعة. اقرأ عن حماية الإيبوكسي المعتمدة من ساسو وكيف تضمن عمر الأساسات.',
      date: 'May 10, 2026',
      readTimeEn: '4 min read',
      readTimeAr: '٤ دقائق قراءة',
      tagEn: 'Construction',
      tagAr: 'أعمال البناء',
      tagSlug: 'construction'
    },
    {
      id: 'ksa-steel-market-25-26',
      titleEn: 'KSA Industrial Steel Trends & Vision 2030 Infrastructure Projects',
      titleAr: 'اتجاهات سوق الحديد في السعودية ومشاريع البنية التحتية لرؤية 2030',
      excerptEn: 'An industry report on the soaring demand for local rebars and heavy European structural columns HEA and HEB in Riyadh and Dammam.',
      excerptAr: 'تقرير صناعي حول الطلب المتزايد على حديد التسليح المحلي والأعمدة الإنشائية الأوروبية الثقيلة HEA وHEB في الرياض والدمام.',
      date: 'May 06, 2026',
      readTimeEn: '6 min read',
      readTimeAr: '٦ دقائق قراءة',
      tagEn: 'Market Report',
      tagAr: 'تقرير السوق',
      tagSlug: 'market'
    }
  ];

  const tags = [
    { slug: '', nameEn: 'All Articles', nameAr: 'كل المقالات' },
    { slug: 'technical', nameEn: 'Technical Guides', nameAr: 'كتيبات فنية ومواصفات' },
    { slug: 'construction', nameEn: 'Construction Standards', nameAr: 'معايير التشييد والبناء' },
    { slug: 'market', nameEn: 'Steel Market Reports', nameAr: 'تقارير وتحليلات السوق' }
  ];

  const filteredArticles = selectedTag
    ? articles.filter((art) => art.tagSlug === selectedTag)
    : articles;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Page header & Breadcrumbs */}
      <div className="border-b border-brand-border/60 pb-6">
        <div className="text-xs text-brand-muted font-bold tracking-wider mb-2 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-dark transition-colors">{t.navHome}</Link>
          <span>/</span>
          <span className="text-brand-primary">{t.navBlog}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-brand-dark">
          {language === 'ar' ? 'المدونة الصناعية للحديد والصلب' : 'Industrial Steel & Construction Blog'}
        </h1>
        <p className="text-sm text-brand-muted mt-1">
          {t.blogTeaserSubtitle}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2.5">
        {tags.map((tag) => (
          <button
            key={tag.slug}
            onClick={() => setSelectedTag(tag.slug)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              selectedTag === tag.slug
                ? 'bg-brand-primary text-white'
                : 'bg-brand-surface-alt text-brand-muted border border-brand-border/60 hover:text-brand-dark hover:border-brand-primary'
            }`}
          >
            {language === 'ar' ? tag.nameAr : tag.nameEn}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="bg-brand-surface-mid border border-brand-border/75 rounded-2xl overflow-hidden hover:border-brand-primary/40 hover:shadow-glow flex flex-col justify-between transition-all duration-300 shadow-card group"
            >
              {/* Cover placeholder graphic */}
              <div className="h-48 bg-gradient-to-tr from-brand-surface to-brand-surface-mid/40 p-6 relative flex items-center justify-center border-b border-brand-border/60 overflow-hidden">
                <div className="absolute inset-0 bg-hero-pattern opacity-50 opacity-10"></div>
                <BookOpen className="w-12 h-12 text-brand-primary/35 group-hover:scale-105 group-hover:text-brand-primary transition-all duration-300" />
                <div className="absolute top-4 left-4 bg-brand-surface-alt/90 px-2.5 py-1 rounded text-[10px] font-bold text-brand-primary flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  <span>{language === 'ar' ? art.tagAr : art.tagEn}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-grow">
                <div className="flex items-center gap-2 text-xs text-brand-muted font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                  <span>{art.date}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-dark leading-snug line-clamp-2 group-hover:text-brand-primary transition-colors">
                  <Link href={`/blog/${art.id}`}>
                    {language === 'ar' ? art.titleAr : art.titleEn}
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">
                  {language === 'ar' ? art.excerptAr : art.excerptEn}
                </p>
              </div>

              {/* Card Footer */}
              <div className="p-6 bg-brand-surface/60 border-t border-brand-border/45 flex items-center justify-between text-xs font-bold text-brand-dark">
                <span className="flex items-center gap-1 text-brand-muted">
                  <Eye className="w-3.5 h-3.5 text-brand-primary" />
                  <span>{language === 'ar' ? art.readTimeAr : art.readTimeEn}</span>
                </span>
                <Link
                  href={`/blog/${art.id}`}
                  className="text-brand-primary hover:underline flex items-center gap-1 hover:gap-1.5 transition-all"
                >
                  <span>{t.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl-mirror" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="bg-brand-surface-mid border border-brand-border/60 p-12 rounded-2xl text-center text-brand-muted text-sm">
          {language === 'ar' ? 'لا توجد مقالات متوفرة حالياً في هذا القسم.' : 'No articles available in this filter tab.'}
        </div>
      )}
    </div>
  );
}
