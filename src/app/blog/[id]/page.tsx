'use client';

import React from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { useLanguage } from '../../../context/LanguageContext';
import { ArrowLeft, Calendar, User, Clock, ArrowRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function BlogPostPage() {
  const { id } = useParams();
  const { language, t } = useLanguage();

  const articlesData: { [key: string]: any } = {
    'buying-steel-guide': {
      titleEn: 'Ultimate Guide to Buying Structural Steel Beams in KSA',
      titleAr: 'الدليل الشامل لشراء جسور الحديد الإنشائية في السعودية',
      date: 'May 14, 2026',
      readTimeEn: '5 min read',
      readTimeAr: '٥ دقائق قراءة',
      tagEn: 'Technical Guide',
      tagAr: 'دليل تقني',
      authorEn: 'Eng. Fahad Al-Mutairi',
      authorAr: 'م. فهد المطيري',
      image: '/blog 1.jpeg',
      contentEn: `When procuring structural steel beams for large-scale construction frameworks in Saudi Arabia, understanding the specifications is critical to ensuring structural integrity, regulatory compliance, and budget optimization.

### 1. Understanding JIS G3192 (Japanese Industrial Standards)
JIS G3192 is the dominant standard for structural shapes—such as H-beams, U-bridges, and equal angles—widely used across the GCC. The most common structural carbon steel grade is **SS400**. It has a minimum tensile strength of 400 MPa and offers an ideal balance of strength, weldability, and structural flexibility.

### 2. Choosing Between H-Beams (HEB vs HEA)
- **HEB Beams (Heavy)**: Built with thick flanges and web sections. Use these for high-compression loads, structural columns, and foundational retaining walls.
- **HEA Beams (Lightweight)**: Built with thinner flanges. Ideal for roofs, warehouses, weight-sensitive frames, and cost-effective spans.
- **IPE AA Beams**: Extremely lightweight profiles, perfect for small hangars, residential canopies, and secondary framing supports.

### 3. Verification & Compliance Checklist
Always verify that the supplied steel carries the **SASO certificate of conformity**. Request Mill Test Certificates (MTC) to check carbon equivalents, yield points, and dimension tolerances before shipping contracts are dispatched.`,
      contentAr: `عند شراء جسور الحديد الإنشائية للمشاريع الإنشائية الكبرى في المملكة العربية السعودية، يعد فهم المواصفات الفنية أمراً بالغ الأهمية لضمان السلامة الهيكلية والمطابقة للوائح كود البناء السعودي وميزانية المشروع.

### ١. فهم مواصفات JIS G3192 (المقاييس اليابانية)
تعد مواصفات JIS G3192 هي المعايير المهيمنة للأشكال الإنشائية مثل جسور H وجسور U والزوايا متساوية الأضلاع المستخدمة على نطاق واسع في دول الخليج. درجة الفولاذ الإنشائي الأكثر شيوعاً هي **SS400**، حيث توفر حداً أدنى لقوة الشد يبلغ 400 ميجا باسكال وتوازناً مثالياً بين المتانة وقابلية اللحام والمرونة الإنشائية.

### ٢. الاختيار بين جسور H الثقيلة والخفيفة (HEB مقابل HEA)
- **جسور HEB (ثقيل)**: مصممة بشفاه وجسم سميكين جداً. تُستخدم للأعمدة الإنشائية الحاملة والأساسات العميقة وجدران التدعيم الخرسانية.
- **جسور HEA (خفيفة)**: مصممة بسماكة أقل للشفة والجسم. تعد مثالية للأسقف والمستودعات والهياكل المعدنية الحساسة للوزن والتكلفة.
- **جسور IPE AA**: مقاطع فائقة الخفة ومثالية للمظلات السكنية ومظلات مواقف السيارات والدعامات الهيكلية الثانوية.

### ٣. قائمة التحقق والمطابقة والشهادات
تأكد دائماً من أن الحديد المورد يحمل **شهادة مطابقة ساسو (SASO)**. اطلب شهادة اختبار المصنع (MTC) للتحقق من المكون الكربوني ونسب التسامح ونقطة الانضغاط قبل توقيع عقود التوريد وتفريغ الشحنات لوجستياً.`
    },
    'epoxy-coated-rebar-importance': {
      titleEn: 'Why Epoxy-Coated Steel Reinforcing Bar is Essential in Coastal Zones',
      titleAr: 'لماذا يعد حديد التسليح المعزول بالإيبوكسي ضرورياً في المناطق الساحلية',
      date: 'May 10, 2026',
      readTimeEn: '4 min read',
      readTimeAr: '٤ دقائق قراءة',
      tagEn: 'Construction',
      tagAr: 'أعمال البناء',
      authorEn: 'Dr. Tariq Al-Jamil',
      authorAr: 'د. طارق الجميل',
      image: '/blog 2.jpeg',
      contentEn: `Reinforcing concrete structures in coastal zones—such as Jeddah, Yanbu, Dammam, and Jubail—presents unique electrochemical challenges. High ambient humidity combined with highly saline air and soils accelerates steel oxidation.

### The Role of Fusion-Bonded Epoxy (FBE)
FBE-coated steel reinforcing bars (rebar) are protected by a thin dielectric coating (usually 180 to 300 microns). This barrier prevents moisture, oxygen, and chloride ions from reaching the bare carbon steel, neutralizing corrosion and rust.

### Why Choose SASO-Certified National Epoxy?
National epoxy rebars (SABIC-certified and top-tier local brands) undergo strict thermal coating processes. The adhesion properties are highly optimized to withstand Saudi’s hot desert temperatures. Using premium epoxy rebar increases structural lifespans by up to 50 years, preventing concrete spalling and micro-cracking in salt-heavy environments.`,
      contentAr: `يمثل تدعيم الهياكل الخرسانية المسلحة في المناطق الساحلية في المملكة العربية السعودية—مثل جدة وينبع والدمام والجبيل—تحديات كهروكيميائية فريدة بسبب ارتفاع رطوبة الجو والتربة الغنية بالأملاح والكبريتات مما يسرع عملية أكسدة وتآكل الصلب.

### دور العزل بالإيبوكسي الحراري (FBE)
يتم حماية أسياخ حديد التسليح المعزول بالإيبوكسي بطبقة رقيقة عازلة للكهرباء (غالباً بسماكة ١٨٠ إلى ٣٠٠ ميكرون). يمنع هذا الحاجز وصول الرطوبة والأكسجين وأيونات الكلوريد إلى الفولاذ الكربوني الأساسي، مما يعطل عملية الصدأ كلياً.

### لماذا تختار حديد تسليح وطني معزول إيبوكسي معتمد من ساسو؟
يخضع الحديد الوطني المعزول بالإيبوكسي (مثل حديد سابك المعزول والمصانع الكبرى) لعمليات عزل وتبريد حرارية فائقة الدقة. يتم تحسين خصائص الالتصاق كيميائياً لتتحمل درجات الحرارة المرتفعة بالخليج. إن استخدام الإيبوكسي المعتمد يحمي الخرسانة من التشقق والتفتت ويزيد العمر الافتراضي للمنشآت لأكثر من ٥٠ عاماً.`
    },
    'ksa-steel-market-25-26': {
      titleEn: 'KSA Industrial Steel Trends & Vision 2030 Infrastructure Projects',
      titleAr: 'اتجاهات سوق الحديد في السعودية ومشاريع البنية التحتية لرؤية 2030',
      date: 'May 06, 2026',
      readTimeEn: '6 min read',
      readTimeAr: '٦ دقائق قراءة',
      tagEn: 'Market Report',
      tagAr: 'تقرير السوق',
      authorEn: 'Al-Riyadh Steel Analysts',
      authorAr: 'محللو الرياض للصلب',
      image: '/blog 3.jpeg',
      contentEn: `Saudi Arabia’s steel market is undergoing an unprecedented growth phase, heavily propelled by the structural goals of Vision 2030 and massive mega-developments.

### The Megaproject Demand Spike
NEOM, Qiddiya, Roshn, and Diriyah Gate represent thousands of square kilometers of massive architectural construction. This has led to a highly robust demand for specialized steel:
1. **High-Tensile Concrete Rebars**: Local manufacturers such as Hadeed SABIC have maximized production capacity.
2. **Specialized Mesh & Walkway Grating**: Plaster baklava expanded mesh and cast iron mesh are experiencing soaring demands in industrial complexes.
3. **Heavy Bridges & Structurals**: High demand for DIN-standard UPN heavy bridges and JIS-compliant H-beams.

### Supply Chain Resilience & Logistics
To counter global logistical bottlenecks, Saudi construction contractors are shifting priorities toward direct local digital catalog ordering, avoiding customs delays and securing domestic stockpiles ahead of quarterly developments.`,
      contentAr: `يمر سوق الحديد والصلب في المملكة العربية السعودية بمرحلة نمو وتوسع غير مسبوقة في تاريخه، مدفوعاً بشكل أساسي بالأهداف الهيكلية الطموحة لرؤية المملكة ٢٠٣٠ والإنشاءات الضخمة للمشاريع القومية الكبرى.

### طفرة الطلب في المشاريع الكبرى
تمثل نيوم، القدية، مجتمعات روشن، وبوابة الدرعية آلاف الكيلومترات المربعة من التشييد المعماري الشامل. وقد أدى ذلك إلى ارتفاع استثنائي في الطلب على فئات صلب محددة:
١. **أسياخ حديد تسليح عالية الشد**: زادت المصانع الوطنية الكبرى مثل حديد سابك واليمامة طاقتها الإنتاجية القصوى لتلبية الاحتياجات المتزايدة.
٢. **شبك الممرات والصناعات المخصصة**: يشهد شبك بقلاوة وشبك حديد الزهر تزايداً في الاستهلاك بالمجمعات الصناعية.
٣. **الجسور والهياكل الثقيلة**: طلب مرتفع ومستمر على جسور UPN الثقيلة وجسور H الإنشائية المطابقة لمواصفات JIS.

### مرونة سلسلة الإمداد والخدمات اللوجستية
لمواجهة الاختناقات اللوجستية العالمية، يركز المقاولون حالياً على الطلب الرقمي المباشر للكتالوجات المحلية لتفادي تأخيرات الجمارك وتأمين مخزونات الصلب بمرونة تامة.`
    }
  };

  const article = articlesData[id as string];

  if (!article) {
    return notFound();
  }

  // Related articles lists (excluding active)
  const relatedArticles = Object.keys(articlesData)
    .filter((k) => k !== id)
    .map((k) => ({
      id: k,
      ...articlesData[k]
    }))
    .slice(0, 2);

  // Schema.org Article Structured JSON
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://primesteelksa.com/blog/${id}`,
    },
    headline: language === 'ar' ? article.titleAr : article.titleEn,
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    author: {
      '@type': 'Person',
      name: language === 'ar' ? article.authorAr : article.authorEn,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PrimeSteelKSA',
      logo: {
        '@type': 'ImageObject',
        url: 'https://primesteelksa.com/assets/logo.svg',
      },
    },
    description: language === 'ar' ? article.excerptAr : article.excerptEn,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Header and Breadcrumbs */}
      <div className="border-b border-brand-border/60 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-xs text-brand-muted font-bold tracking-wider flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-brand-dark transition-colors">{t.navHome}</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand-dark transition-colors">{t.navBlog}</Link>
          <span>/</span>
          <span className="text-brand-primary max-w-xs truncate">
            {language === 'ar' ? article.titleAr : article.titleEn}
          </span>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-brand-primary hover:underline font-bold"
        >
          <ArrowLeft className="w-4 h-4 rtl-mirror" />
          <span>{language === 'ar' ? 'العودة للمدونة' : 'Back to Blog'}</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Main Article Content */}
        <article className="lg:col-span-8 bg-brand-surface-mid border border-brand-border/85 p-6 sm:p-10 rounded-3xl shadow-card space-y-6">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-muted border-b border-brand-border/50 pb-4">
            <span className="px-3 py-1 bg-brand-primary/15 border border-brand-primary/25 rounded-lg text-brand-primary font-bold">
              {language === 'ar' ? article.tagAr : article.tagEn}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand-primary" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-brand-primary" />
              <span>{language === 'ar' ? article.authorAr : article.authorEn}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-primary" />
              <span>{language === 'ar' ? article.readTimeAr : article.readTimeEn}</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
            {language === 'ar' ? article.titleAr : article.titleEn}
          </h1>

          {/* Banner Image */}
          {article.image && (
            <div className="w-full rounded-2xl overflow-hidden relative border border-brand-border/60 bg-brand-surface">
              <img
                src={article.image}
                alt={language === 'ar' ? article.titleAr : article.titleEn}
                className="w-full h-auto block"
              />
            </div>
          )}

          {/* Article Body */}
          <div
            className="prose prose-invert prose-brand max-w-none text-brand-muted leading-relaxed space-y-6 text-sm sm:text-base border-t border-brand-border/40 pt-6"
          >
            {/* Split paragraphs and format cleanly */}
            {(language === 'ar' ? article.contentAr : article.contentEn)
              .split('\n\n')
              .map((para: string, idx: number) => {
                if (para.startsWith('###')) {
                  return (
                    <h3 key={idx} className="text-lg sm:text-xl font-bold text-brand-dark pt-4 pb-1">
                      {para.replace('###', '').trim()}
                    </h3>
                  );
                }
                if (para.startsWith('1.') || para.startsWith('١.')) {
                  return (
                    <div key={idx} className="pl-4 rtl:pl-0 rtl:pr-4 space-y-2 border-l-2 border-brand-primary/35 rtl:border-l-0 rtl:border-r-2 py-1">
                      {para.split('\n').map((line, lIdx) => (
                        <p key={lIdx} className="text-xs sm:text-sm text-brand-muted-light">
                          {line.trim()}
                        </p>
                      ))}
                    </div>
                  );
                }
                return <p key={idx}>{para}</p>;
              })}
          </div>
        </article>

        {/* Sidebar: Social Share & Related Articles */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Share Block */}
          <div className="bg-brand-surface-mid border border-brand-border/65 p-6 rounded-2xl space-y-4">
            <h3 className="text-sm font-bold text-brand-dark border-l-4 border-brand-primary pl-3 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-3">
              {language === 'ar' ? 'مشاركة المقال' : 'Share Article'}
            </h3>
            <div className="flex gap-2">
              <a href="https://www.primesteelksa.com/" className="flex-1 py-2 bg-brand-surface-alt hover:bg-brand-surface-mid/50 border border-brand-border/60 hover:border-brand-primary rounded-xl text-xs text-brand-muted hover:text-brand-dark font-bold flex items-center justify-center gap-1.5 transition-all">
                <Linkedin className="w-4 h-4 text-brand-primary" />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.primesteelksa.com/" className="flex-1 py-2 bg-brand-surface-alt hover:bg-brand-surface-mid/50 border border-brand-border/60 hover:border-brand-primary rounded-xl text-xs text-brand-muted hover:text-brand-dark font-bold flex items-center justify-center gap-1.5 transition-all">
                <Twitter className="w-4 h-4 text-brand-primary" />
                <span>Twitter</span>
              </a>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-brand-surface-mid border border-brand-border/65 p-6 rounded-2xl space-y-5">
            <h3 className="text-sm font-bold text-brand-dark border-l-4 border-brand-primary pl-3 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-3">
              {language === 'ar' ? 'مقالات ذات صلة' : 'Related Articles'}
            </h3>

            <div className="space-y-4 divide-y divide-brand-navy-light/45">
              {relatedArticles.map((art) => (
                <div key={art.id} className="pt-4 first:pt-0 space-y-2">
                  <span className="text-[9px] px-2 py-0.5 rounded bg-brand-surface text-brand-primary font-bold font-mono">
                    {language === 'ar' ? art.tagAr : art.tagEn}
                  </span>
                  <h4 className="text-xs font-bold text-brand-dark leading-snug line-clamp-2 hover:text-brand-primary transition-colors">
                    <Link href={`/blog/${art.id}`}>
                      {language === 'ar' ? art.titleAr : art.titleEn}
                    </Link>
                  </h4>
                  <Link
                    href={`/blog/${art.id}`}
                    className="inline-flex items-center gap-1 text-[10px] text-brand-primary font-bold hover:underline"
                  >
                    <span>{t.readMore}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl-mirror" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
