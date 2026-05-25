export interface GroupedItem {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  sku: string;
  nameEn: string;
  nameAr: string;
  categoryEn: string;
  categoryAr: string;
  categorySlug: string;
  descriptionEn: string;
  descriptionAr: string;
  specsEn: { [key: string]: string };
  specsAr: { [key: string]: string };
  inStock: boolean;
  materialEn: string;
  materialAr: string;
  gradeEn: string;
  gradeAr: string;
  image?: string;
  priceSAR?: number;
  longDescriptionEn?: string;
  longDescriptionAr?: string;
  origins?: string[];
  widthsMm?: number[];
  heightsMm?: number[];
  lengthsMm?: number[];
  wt?: number[];
  tf?: number[];
  specificationsEn?: string[];
  specificationsAr?: string[];
  applicationsEn?: string[];
  applicationsAr?: string[];
  groupedItems?: GroupedItem[];
  // Extended Schema Fields
  thicknessMm?: number[];
  diametersMm?: number[];
  diametersInch?: string[];
  gridSizeCm?: string[];
  meshSizes?: string[];
  steelCoatings?: string[];
  colors?: string[];
  surfaces?: string[];
  materialGrades?: string[];
  lengthsMeters?: number[];
  widthsMeters?: number[];
}

export const CATEGORIES = [
  { slug: 'beams-structural', nameEn: 'Beams & Structural Steel', nameAr: 'جسور وهياكل إنشائية' },
  { slug: 'reinforcing-steel', nameEn: 'Reinforcing Steel (Rebar)', nameAr: 'حديد تسليح للبناء' },
  { slug: 'sheets-plates', nameEn: 'Steel Sheets & Plates', nameAr: 'صاج وألواح حديد' },
  { slug: 'pipes-tubes', nameEn: 'Pipes & Tubes', nameAr: 'أنابيب ومواسير حديدية' },
  { slug: 'mesh-fencing', nameEn: 'Wire Mesh & Fencing', nameAr: 'شبك حديد وأسوار' },
  { slug: 'hollow-sections', nameEn: 'Hollow Sections & Bars', nameAr: 'حديد مفرغ ومبسط' },
];

export const products: Product[] = [
  {
    id: 'jis-structural-beams',
    sku: 'PS-JIS-B01',
    nameEn: 'Structural steel beams according to the JIS standard',
    nameAr: 'جسور حديد إنشائية حسب مواصفات JIS',
    categoryEn: 'Beams & Structural Steel',
    categoryAr: 'جسور وهياكل إنشائية',
    categorySlug: 'beams-structural',
    descriptionEn: 'High-quality structural steel beams according to the JIS standard. Beams for robust structural construction. Adhering to strict Japanese Industrial Standards (JIS).',
    descriptionAr: 'جسور حديد إنشائية عالية القوة مصنعة بما يتوافق مع المعايير الصناعية اليابانية (JIS). مثالية للهياكل الإنشائية الثقيلة، بناء المباني، ومشاريع الهندسة المدنية.',
    specsEn: { Standard: 'JIS G3192', Grade: 'SS400 / SS490', Origin: 'BAHRAIN, CHINA, KOREA', Application: 'Structural Frameworks' },
    specsAr: { 'المواصفة': 'JIS G3192', 'الدرجة': 'SS400 / SS490', 'المنشأ': 'البحرين، الصين، كوريا', 'الاستخدام': 'الهياكل الإنشائية' },
    inStock: true,
    materialEn: 'Structural Steel',
    materialAr: 'حديد إنشائي',
    gradeEn: 'SS400 / SS490',
    gradeAr: 'SS400 / SS490',
    image: '/images/products/Structural steel beams according to JIS standard.webp',
    priceSAR: 299.22,
    longDescriptionEn: 'Our Structural steel beams, according to the JIS standard, are essential structural steel components engineered for robust performance in a wide array of construction and industrial applications. Conforming to stringent Japanese Industrial Standards (JIS), these beams offer exceptional strength, durability, and dimensional accuracy. We provide an extensive selection of sizes, lengths, and weights per meter, sourced from reputable mills in China, SULB (Bahrain), and Korea, to meet your specific project requirements.',
    longDescriptionAr: 'تعتبر الجسور الحديدية الإنشائية وفقاً لمواصفات JIS مكونات أساسية مصممة للأداء القوي في مجموعة واسعة من تطبيقات البناء والصناعة. تتوافق هذه الجسور مع المعايير الصناعية اليابانية الصارمة، وتوفر قوة ومتانة ودقة أبعاد استثنائية.',
    origins: ['BAHRAIN', 'CHINA', 'KOREA'],
    widthsMm: [75, 99, 100, 124, 125, 149, 150, 174, 175, 199, 200],
    heightsMm: [150, 198, 200, 248, 250, 298, 300, 346, 350, 396, 400, 496, 500, 596],
    lengthsMm: [6000, 8000, 12000],
    wt: [4.5, 5, 5.5, 6, 6.5, 7, 8, 9, 10],
    tf: [7, 8, 9, 11, 13, 14, 15, 16],
    specificationsEn: [
      'Standard: Adheres to Japanese Industrial Standards (e.g., JIS G3192 for dimensions; common steel grades include JIS G3101 SS400, SS490, JIS G3106 SM490).',
      'Material: High-strength structural carbon steel or low-alloy steel.',
      'Lengths: Standard mill lengths (6m, 8m, 12m).'
    ],
    specificationsAr: [
      'المواصفة: مطابقة للمعايير الصناعية اليابانية (على سبيل المثال، JIS G3192 للأبعاد؛ درجات الصلب الشائعة تشمل JIS G3101 SS400، SS490، JIS G3106 SM490).',
      'المادة: حديد كربوني إنشائي عالي القوة أو حديد منخفض السبائك.',
      'الأطوال: أطوال قياسية من المصنع (6 متر، 8 متر، 12 متر).'
    ],
    applicationsEn: [
      'Primary and secondary beams in commercial, residential, and industrial building frames.',
      'Support structures for bridges, mezzanines, industrial platforms, and walkways.'
    ],
    applicationsAr: [
      'الجسور الرئيسية والثانوية في هياكل المباني التجارية والسكنية والصناعية.',
      'الهياكل الداعمة للجسور، الميزانين، المنصات الصناعية، والممرات.'
    ]
  },
  {
    id: 'jis-u-bridges',
    sku: 'PS-JIS-UB02',
    nameEn: 'U-bridges to JIS specifications',
    nameAr: 'جسور حديد على شكل U حسب مواصفات JIS',
    categoryEn: 'Beams & Structural Steel',
    categoryAr: 'جسور وهياكل إنشائية',
    categorySlug: 'beams-structural',
    descriptionEn: 'High-quality JIS Standard U-Bridges (U-section steel) in grades like SS400 & S275JR. Available in various sizes for all structural applications.',
    descriptionAr: 'جسور حديد على شكل U عالية الجودة متوافقة مع معايير JIS في درجات مثل SS400 و S275JR. متوفرة بمقاسات مختلفة لجميع التطبيقات الإنشائية.',
    specsEn: { Standard: 'JIS G3192:2008', Grade: 'SS400 / S275JR', Origin: 'CHINA / OTHER', Application: 'Structural Frameworks' },
    specsAr: { 'المواصفة': 'JIS G3192:2008', 'الدرجة': 'SS400 / S275JR', 'المنشأ': 'الصين / مصادر أخرى', 'الاستخدام': 'الهياكل الإنشائية' },
    inStock: true,
    materialEn: 'Hot Rolled Steel',
    materialAr: 'حديد مدرفل على الساخن',
    gradeEn: 'SS400 / S275JR',
    gradeAr: 'SS400 / S275JR',
    image: '/images/products/U-bridges to JIS specifications.webp',
    priceSAR: 130.09,
    longDescriptionEn: 'Our U-bridges to JIS specifications are high-quality, hot-rolled structural steel sections designed for a wide range of construction and industrial applications. Manufactured to conform to the Japanese Industrial Standard JIS G3192:2008, these channels provide excellent strength, dimensional accuracy, and reliability.',
    longDescriptionAr: 'تعد قنوات الحديد على شكل U المصنعة وفقاً لمعايير JIS مقاطع فولاذية إنشائية مدرفلة على الساخن عالية الجودة مصممة لمجموعة واسعة من تطبيقات البناء والصناعة.',
    widthsMm: [40, 50, 65, 75, 90],
    heightsMm: [75, 100, 125, 150, 300],
    lengthsMm: [6000, 12000],
    wt: [5, 6, 6.5, 9],
    tf: [7, 7.5, 8, 10, 13],
    specificationsEn: [
      'Product Type: Hot Rolled U-bridges to JIS specifications.',
      'Common Grades: Available in grades such as SS400 and S275JR.'
    ],
    specificationsAr: [
      'نوع المنتج: جسور U مدرفلة على الساخن وفقاً لمواصفات JIS.',
      'الدرجات الشائعة: متوفرة في درجات مثل SS400 و S275JR.'
    ],
    applicationsEn: [
      'Structural frames and supports in buildings, warehouses, and industrial plants.',
      'Manufacturing of truck trailers, chassis, and heavy machinery bases.'
    ],
    applicationsAr: [
      'الهياكل الإنشائية والدعامات في المباني والمستودعات والمصانع الصناعية.',
      'تصنيع مقطورات الشاحنات، الهياكل الأساسية، وقواعد الآلات الثقيلة.'
    ]
  },
  {
    id: 'reinforcing-steel-construction',
    sku: 'PS-RE-C03',
    nameEn: 'Reinforcing steel for construction',
    nameAr: 'حديد تسليح للبناء',
    categoryEn: 'Reinforcing Steel (Rebar)',
    categoryAr: 'حديد تسليح للبناء',
    categorySlug: 'reinforcing-steel',
    descriptionEn: 'Order premium reinforcing Steel Rebar for your construction projects. Proudly Saudi-made, these high-tensile reinforcement bars meet ASTM A615 Grade 60 and SASO standards. Available in sizes 12mm to 32mm.',
    descriptionAr: 'اطلب حديد تسليح ممتاز لمشاريع البناء الخاصة بك. إنتاج سعودي فخور، تلبي أسياخ التسليح عالية الشد مواصفات ASTM A615 الدرجة 60 ومعايير ساسو (SASO). متوفرة بمقاسات من 12 ملم إلى 32 ملم.',
    specsEn: { Standard: 'ASTM A615 / SASO', Grade: 'Grade 60 / Grade 40', Origin: 'SAUDI ARABIA', Application: 'Concrete Reinforcement' },
    specsAr: { 'المواصفة': 'ASTM A615 / SASO', 'الدرجة': 'درجة 60 / درجة 40', 'المنشأ': 'المملكة العربية السعودية', 'الاستخدام': 'تسليح الخرسانة' },
    inStock: true,
    materialEn: 'Deformed Rebar',
    materialAr: 'حديد تسليح مشرشر',
    gradeEn: 'Grade 60 / Grade 40',
    gradeAr: 'درجة 60 / درجة 40',
    image: '/images/products/Reinforcing steel for construction.webp',
    priceSAR: 3441.38,
    longDescriptionEn: 'Build with confidence using our premium reinforcing steel for construction. Specializing in producing premium reinforcement steel bars that undergo rigid inspection to meet the highest structural demands. Certified by SASO and backed by environmental declarations, it is the reliable choice for robust infrastructure projects.',
    longDescriptionAr: 'ابنِ بثقة باستخدام حديد التسليح الممتاز الخاص بنا للبناء. نتميز بإنتاج أسياخ حديد تسليح خاضعة لاختبارات وفحوصات صارمة لتلبية أعلى المعايير والمطالب الإنشائية.',
    groupedItems: [
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø6MM × 6M | GRADE 40', price: 4709.25 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø8MM × 6M | GRADE 40', price: 3864.00 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø7.5MM × 6M | GRADE 40', price: 3622.50 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø9.5MM × 12M | GRADE 40', price: 3682.88 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø10MM × 12M | GRADE 40', price: 3924.38 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø5.5MM × 6M | GRADE 40', price: 4769.63 },
      { name: 'TAMEER STEEL REBAR | Ø12MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'TAMEER STEEL REBAR | Ø14MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'TAMEER STEEL REBAR | Ø16MM × 12M | ASTM A615 GRADE 60', price: 3441.38 }
    ],
    specificationsEn: [
      'Standard: ASTM A615 Grade 60 and SASO standards.',
      'Origin: Proudly Made in Saudi Arabia.',
      'Size Range: 12mm to 32mm.'
    ],
    specificationsAr: [
      'المواصفة: معايير ASTM A615 الدرجة 60 ومعايير ساسو (SASO).',
      'المنشأ: صناعة فخورة في المملكة العربية السعودية.',
      'الأحجام المتاحة: من 12 ملم إلى 32 ملم.'
    ],
    applicationsEn: [
      'Concrete reinforcement in foundations, columns, slabs, and walls.',
      'Infrastructure projects like bridges, highways, and tunnels.'
    ],
    applicationsAr: [
      'تسليح الخرسانة في الأساسات، الأعمدة، الأسقف، والجدران.',
      'مشاريع البنية التحتية مثل الجسور والطرق السريعة والأنفاق.'
    ]
  },
  {
    id: 'welded-walkway-mesh',
    sku: 'PS-MSH-W04',
    nameEn: 'Welded iron walkway mesh',
    nameAr: 'شبك ممشى حديد ملحم',
    categoryEn: 'Wire Mesh & Fencing',
    categoryAr: 'شبك حديد وأسوار',
    categorySlug: 'mesh-fencing',
    descriptionEn: 'High-strength welded iron walkway mesh available in galvanized and standard finishes, with plain or serrated surfaces. Ideal for industrial flooring, walkways, trench covers, and more.',
    descriptionAr: 'شبك ممشى حديد ملحم عالي القوة متوفر بتشطيب مجلفن وعادي، مع أسطح سادة أو مشرشرة. مثالي للأرضيات الصناعية، الممرات، وأغطية قنوات التصريف.',
    specsEn: { Standard: 'Industrial Grid Standard', Surface: 'Plain / Serrated', Coating: 'None / Galvanized' },
    specsAr: { 'المواصفة': 'معيار شبكة صناعية', 'السطح': 'سادة / مشرشر', 'الطلاء': 'بدون جلفنة / مجلفن' },
    inStock: true,
    materialEn: 'Welded Iron Mesh',
    materialAr: 'شبك حديد ملحم',
    gradeEn: 'Standard Industrial',
    gradeAr: 'صناعي قياسي',
    image: '/images/products/Welded iron walkway mesh.webp',
    priceSAR: 1062.60,
    longDescriptionEn: 'Discover our versatile range of welded iron walkway mesh, engineered for superior strength, durability, and reliable performance in a multitude of industrial, commercial, and architectural applications.',
    longDescriptionAr: 'اكتشف مجموعتنا المتنوعة من شبك الممشى الحديدي الملحم، المصمم للحصول على قوة فائقة ومتانة وأداء موثوق في العديد من التطبيقات الصناعية والتجارية والمعمارية.',
    lengthsMm: [6000],
    widthsMm: [1000],
    thicknessMm: [3, 5],
    heightsMm: [25, 30, 32],
    surfaces: ['Plain', 'Serrated'],
    steelCoatings: ['None', 'Galvanized'],
    specificationsEn: [
      'Material: High-strength hot-rolled or cold-drawn carbon steel.',
      'Surface Type: Plain (standard) or Serrated (extra slip resistance).',
      'Steel Coating: Uncoated (black steel) or Hot-dip Galvanized.'
    ],
    specificationsAr: [
      'المادة: حديد كربوني عالي القوة مدرفل على الساخن أو مسحوب على البارد.',
      'نوع السطح: سادة (قياسي) أو منقوش مشرشر (لمقاومة انزلاق إضافية).',
      'طلاء الحديد: أسود غير معالج أو مجلفن على الساخن بالكامل.'
    ],
    applicationsEn: [
      'Industrial flooring, catwalks, stair treads, and access platforms.',
      'Trench drainage covers, security panels, and architectural grating.'
    ],
    applicationsAr: [
      'الأرضيات الصناعية، الممرات المعلقة، درجات السلالم، ومنصات الوصول.',
      'أغطية قنوات تصريف المياه، ألواح الحماية الأمنية، والشبك المعماري.'
    ]
  },
  {
    id: 'galvanized-fencing-mesh',
    sku: 'PS-MSH-F05',
    nameEn: 'Galvanized fencing mesh',
    nameAr: 'شبك سور مجلفن',
    categoryEn: 'Wire Mesh & Fencing',
    categoryAr: 'شبك حديد وأسوار',
    categorySlug: 'mesh-fencing',
    descriptionEn: 'Durable Galvanized fencing mesh available in galvanized and PVC-coated options. Wide range of wire diameters, heights, and mesh sizes for security, boundaries, and containment.',
    descriptionAr: 'شبك أسوار مجلفن متين متوفر بخيارات مجلفنة ومطلية بالـ PVC. مجموعة واسعة من أقطار الأسلاك، الارتفاعات، ومقاسات الفتحات للحماية والأسوار والاحتواء.',
    specsEn: { Standard: 'Standard Security Mesh', Coating: 'Galvanized / PVC Coated', MeshSize: '50x50 / 60x60 / 70x70' },
    specsAr: { 'المواصفة': 'شبك حماية قياسي', 'الطلاء': 'مجلفن / مغطى بـ PVC', 'مقاس الفتحة': '50x50 / 60x60 / 70x70' },
    inStock: true,
    materialEn: 'Galvanized Steel Wire',
    materialAr: 'سلك حديد مجلفن',
    gradeEn: 'Commercial Security',
    gradeAr: 'حماية تجارية',
    image: '/images/products/Galvanized fencing mesh.webp',
    priceSAR: 68.83,
    longDescriptionEn: 'Discover our durable and versatile Galvanized fencing mesh, ideal for a wide range of security, boundary, and containment applications. Available in both robust Galvanized Steel and aesthetically pleasing PVC Coated Steel.',
    longDescriptionAr: 'اكتشف شبك الأسوار المجلفن المتين ومتعدد الاستخدامات، المثالي لمجموعة واسعة من تطبيقات الأمان والحدود والاحتواء، متوفر بنوعيه المجلفن أو المغطى بالبلاستيك الأخضر المتميز.',
    steelCoatings: ['Galvanized', 'PVC Coated'],
    diametersMm: [1.9, 2, 2.6, 3],
    lengthsMm: [10000, 15000],
    widthsMm: [1000, 1500, 2000, 3000],
    meshSizes: ['50x50', '60x60', '70x70'],
    specificationsEn: [
      'Coating Options: Hot-dip Galvanized or PVC coated.',
      'Mesh Opening Sizes: 50x50mm, 60x60mm, 70x70mm.',
      'Height Range: 1.0m to 3.0m.'
    ],
    specificationsAr: [
      'خيارات الطلاء: جلفنة على الساخن أو جلفنة مع تكسية بلاستيك PVC.',
      'مقاسات فتحة الشبك: 50x50 ملم، 60x60 ملم، 70x70 ملم.',
      'نطاق الارتفاعات (العرض): 1.0 متر إلى 3.0 متر.'
    ],
    applicationsEn: [
      'Boundary fencing for residential, commercial, and agricultural properties.',
      'Security enclosures, partition screens, and animal containment pens.'
    ],
    applicationsAr: [
      'تسوير الحدود للمنشآت السكنية والتجارية والزراعية.',
      'أقفاص الحماية الأمنية، قواطع المستودعات، وحظائر الحيوانات.'
    ]
  },
  {
    id: 'jis-h-bridges',
    sku: 'PS-JIS-HB06',
    nameEn: 'H-bridges to JIS specifications',
    nameAr: 'جسور حديد على شكل H حسب مواصفات JIS',
    categoryEn: 'Beams & Structural Steel',
    categoryAr: 'جسور وهياكل إنشائية',
    categorySlug: 'beams-structural',
    descriptionEn: 'High-quality H-bridges to JIS specifications in grade S275JR. Sizes from 100x100 to 400x400 are available for all structural construction and engineering applications.',
    descriptionAr: 'جسور حديد عالية الجودة على شكل H مصنعة طبقاً لمواصفات JIS من درجة S275JR. مقاسات من 100x100 إلى 400x400 متوفرة للبناء والهندسة.',
    specsEn: { Standard: 'JIS G3192', Grade: 'S275JR', Origin: 'BAHRAIN', Application: 'Heavy Column & Support' },
    specsAr: { 'المواصفة': 'JIS G3192', 'الدرجة': 'S275JR', 'المنشأ': 'البحرين', 'الاستخدام': 'الأعمدة والدعامات الثقيلة' },
    inStock: true,
    materialEn: 'Structural Carbon Steel',
    materialAr: 'حديد كربوني إنشائي',
    gradeEn: 'S275JR',
    gradeAr: 'S275JR',
    image: '/images/products/H-bridges to JIS specifications.webp',
    priceSAR: 405.00,
    longDescriptionEn: 'Our H-bridges to JIS specifications are high-quality, hot-rolled structural steel sections engineered for superior strength and reliability in demanding construction applications. Manufactured to meet the precise dimensional standards of JIS G 3192, these wide flange beams are available in common structural grades such as S275JR.',
    longDescriptionAr: 'تعد الجسور الحديدية على شكل H وفقاً لمواصفات JIS مقاطع إنشائية عالية الجودة مدرفلة على الساخن مصممة للقوة والمتانة الاستثنائية في تطبيقات البناء الثقيلة.',
    origins: ['BAHRAIN'],
    widthsMm: [100, 150, 200, 250, 300],
    heightsMm: [100, 150, 200, 250, 300, 400],
    lengthsMm: [3000, 6000, 12000],
    wt: [6, 7, 8, 9, 10, 15],
    tf: [8, 10, 12, 13, 14, 15],
    specificationsEn: [
      'Standard: Manufactured to meet the precise dimensional standards of JIS G 3192.',
      'Steel Grade: S275JR structural carbon steel.',
      'Sizing: Wide flange configuration from 100x100mm up to 400x400mm.'
    ],
    specificationsAr: [
      'المواصفة: مصنع ومطابق لمعايير الأبعاد الصارمة لمواصفة JIS G 3192.',
      'الدرجة: حديد كربوني إنشائي درجة S275JR.',
      'الأحجام: مقاطع شفة عريضة تتراوح من 100x100 ملم إلى 400x400 ملم.'
    ],
    applicationsEn: [
      'Columns, pillars, and primary load-bearing members in multi-story steel frames.',
      'Heavy machinery platforms, foundations, and high-load civil works.'
    ],
    applicationsAr: [
      'الأعمدة والدعامات وعناصر تحمل الأحمال الرئيسية في المباني الفولاذية متعددة الطوابق.',
      'منصات الآلات الثقيلة، التدعيم الأساسي، والأعمال المدنية عالية الضغط.'
    ]
  },
  {
    id: 'plain-aluminum-sheets',
    sku: 'PS-AL-P07',
    nameEn: 'Plain aluminum sheets',
    nameAr: 'ألواح ألومنيوم سادة',
    categoryEn: 'Steel Sheets & Plates',
    categoryAr: 'صاج وألواح حديد',
    categorySlug: 'sheets-plates',
    descriptionEn: 'GARMCO Plain Aluminum Sheets offer durable, corrosion-resistant, and versatile solutions for construction, automotive, and industrial applications.',
    descriptionAr: 'توفر ألواح الألمنيوم السادة من جارمكو حلولاً متينة ومقاومة للتآكل ومتعددة الاستخدامات لتطبيقات البناء والسيارات والصناعة.',
    specsEn: { Standard: 'GARMCO Quality', Finish: 'Plain Mill Finish', CorrosionResistance: 'Excellent' },
    specsAr: { 'المواصفة': 'جودة جارمكو', 'التشطيب': 'تشطيب المصنع سادة', 'مقاومة التآكل': 'ممتازة' },
    inStock: true,
    materialEn: 'Aluminum',
    materialAr: 'ألومنيوم',
    gradeEn: 'AA1050 / AA3003',
    gradeAr: 'AA1050 / AA3003',
    image: '/images/products/newalimunin sheet.png',
    priceSAR: 121.75,
    longDescriptionEn: 'Our premium Plain aluminum sheets are industrial-grade panels designed for various applications across construction, automotive, and general manufacturing sectors. Crafted to strict engineering tolerances, these sheets ensure excellent strength-to-weight performance.',
    longDescriptionAr: 'ألواح الألومنيوم السادة الممتازة هي ألواح من الدرجة الصناعية مصممة لتطبيقات مختلفة في قطاعات البناء والسيارات والتصنيع العام، وتضمن أداء قوة إلى وزن رائع.',
    widthsMm: [1000, 1220, 1500],
    lengthsMm: [2440, 2000, 3000, 3050],
    thicknessMm: [0.5, 0.6, 0.7, 0.8, 1, 1.2, 1.5, 2, 3, 4, 5, 6],
    specificationsEn: [
      'Brand: GARMCO Plain Aluminum.',
      'Corrosion Resistance: High resistance to atmospheric corrosion.',
      'Surface: Clean, oil-free mill finish.'
    ],
    specificationsAr: [
      'العلامة التجارية: ألومنيوم سادة جارمكو.',
      'مقاومة التآكل: مقاومة عالية للتآكل الجوي والصدأ.',
      'السطح: نظيف تماماً وخالٍ من الزيوت بتشطيب المصنع.'
    ],
    applicationsEn: [
      'Cladding, roofing panels, ventilation ducts, and storage tanks.',
      'Automotive body parts, industrial signs, and decorative architecture.'
    ],
    applicationsAr: [
      'الكسوة الخارجية، ألواح التسقيف، قنوات التكييف والتهوية، وخزانات التخزين.',
      'أجزاء هياكل السيارات، اللوحات الإرشادية الصناعية، والديكورات المعمارية.'
    ]
  },
  {
    id: 'embossed-aluminum-sheets',
    sku: 'PS-AL-E08',
    nameEn: 'Embossed aluminum sheets',
    nameAr: 'ألواح ألومنيوم مبزرة (منقوشة)',
    categoryEn: 'Steel Sheets & Plates',
    categoryAr: 'صاج وألواح حديد',
    categorySlug: 'sheets-plates',
    descriptionEn: 'High-strength embossed aluminum sheets with anti-slip texture, ideal for flooring, stairs, loading ramps, and industrial applications.',
    descriptionAr: 'ألواح ألومنيوم منقوشة عالية القوة مع نسيج مانع للانزلاق، مثالية للأرضيات، والسلالم، ومنصات التحميل والتطبيقات الصناعية.',
    specsEn: { Pattern: 'Chequered / Stucco', AntiSlip: 'Yes', Finish: 'Embossed Pattern' },
    specsAr: { 'النقش': 'منقوش / جص', 'مقاومة الانزلاق': 'نعم', 'التشطيب': 'سطح منقوش بارز' },
    inStock: true,
    materialEn: 'Embossed Aluminum',
    materialAr: 'ألومنيوم مبزر',
    gradeEn: 'AA3003-H14',
    gradeAr: 'AA3003-H14',
    image: '/images/products/embossed aluminum sheets.webp',
    priceSAR: 270.93,
    longDescriptionEn: 'Our Embossed aluminum sheets (chequered plates) are meticulously designed for both mechanical strength and practical functionality, offering superior slip resistance and structural durability in high-traffic commercial environments.',
    longDescriptionAr: 'ألواح الألمنيوم المبزرة (ألواح البليت المنقوشة) مصممة بدقة للقوة الميكانيكية والعملية، وتوفر مقاومة فائقة للانزلاق ومتانة هيكلية عالية في البيئات التجارية والصناعية.',
    lengthsMm: [2440],
    widthsMm: [1220],
    thicknessMm: [0.9, 1.1, 1.2, 1.5],
    specificationsEn: [
      'Pattern Type: Chequered (five-bar pattern) or Stucco pattern.',
      'Features: Lightweight, rustproof, and superior anti-skid properties.',
      'Width x Length: 1220mm x 2440mm.'
    ],
    specificationsAr: [
      'نوع النقش: مضلع (نمط 5 خطوط) أو نقش بارز محبب.',
      'المزايا: خفيف الوزن، مقاوم للصدأ، وخصائص ممتازة مضادة للانزلاق.',
      'العرض × الطول: 1220 ملم × 2440 ملم.'
    ],
    applicationsEn: [
      'Loading ramps, stair treads, checkerboard vehicle flooring, and walkways.',
      'Decorative wall protectors, elevator interior cladding, and docks.'
    ],
    applicationsAr: [
      'منصات التحميل، درجات السلالم، أرضيات السيارات والشاحنات المضلعة، والممرات.',
      'واقيات الجدران المزخرفة، الكسوات الداخلية للمصاعد، وأرصفة الشحن.'
    ]
  },
  {
    id: 'western-reinforcing-steel',
    sku: 'PS-RE-W09',
    nameEn: 'Western Reinforcing Steel',
    nameAr: 'حديد تسليح الغربية',
    categoryEn: 'Reinforcing Steel (Rebar)',
    categoryAr: 'حديد تسليح للبناء',
    categorySlug: 'reinforcing-steel',
    descriptionEn: 'Western Steel Rebar offers superior strength and compliance with ASTM A615 and BS 4449 standards, ideal for all construction needs.',
    descriptionAr: 'يوفر حديد تسليح الغربية قوة فائقة وتوافقاً تاماً مع معايير ASTM A615 و BS 4449، وهو مثالي لجميع متطلبات البناء.',
    specsEn: { Standard: 'ASTM A615 / BS 4449', Grade: 'Grade 60 / Grade 40', Origin: 'SAUDI ARABIA (WEST)', Application: 'Concrete Reinforcement' },
    specsAr: { 'المواصفة': 'ASTM A615 / BS 4449', 'الدرجة': 'درجة 60 / درجة 40', 'المنشأ': 'المملكة العربية السعودية (الغربية)', 'الاستخدام': 'تسليح الخرسانة' },
    inStock: true,
    materialEn: 'Western Province Steel Rebar',
    materialAr: 'حديد تسليح المنطقة الغربية',
    gradeEn: 'ASTM A615 Grade 60',
    gradeAr: 'درجة 60 ASTM A615',
    image: '/images/products/Western Reinforcing Steel.webp',
    priceSAR: 3441.38,
    longDescriptionEn: 'Our Western Reinforcing Steel product line is meticulously engineered to meet the structural demands of major regional construction developments. Sourced with a commitment to strict national industrial standards, this carbon steel rebar offers high tensile performance.',
    longDescriptionAr: 'تم تصميم خط منتجات حديد تسليح الغربية لتلبية المتطلبات الهيكلية لمشاريع التطوير الكبرى. يوفر هذا الحديد أداء شد عالٍ وموثوقاً.',
    groupedItems: [
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø6MM × 6M | GRADE 40', price: 4709.25 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø8MM × 6M | GRADE 40', price: 3864.00 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø7.5MM × 6M | GRADE 40', price: 3622.50 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø9.5MM × 12M | GRADE 40', price: 3682.88 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø10MM × 12M | GRADE 40', price: 3924.38 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø5.5MM × 6M | GRADE 40', price: 4769.63 },
      { name: 'WEST STEEL REBAR | Ø12MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'WEST STEEL REBAR | Ø14MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'WEST STEEL REBAR | Ø16MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'WEST STEEL REBAR | Ø20MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'WEST STEEL REBAR | Ø25MM × 12M | ASTM A615 GRADE 60', price: 3441.38 }
    ],
    specificationsEn: [
      'Standard: ASTM A615 and BS 4449 compliance.',
      'Sourcing: Locally sourced from certified western region mills.',
      'Type: Deformed structural rebar and wire-drawn rebars.'
    ],
    specificationsAr: [
      'المواصفة: التوافق الكامل مع معايير ASTM A615 و BS 4449.',
      'التوريد: متوفر محلياً من مصانع المنطقة الغربية المعتمدة.',
      'النوع: أسياخ تسليح مشرشرة وأسلاك تسليح مسحوبة.'
    ],
    applicationsEn: [
      'Primary reinforcing elements for villas, columns, bridges, and high-rise commercial structures.',
      'Civil foundations and infrastructure development in KSA Western province.'
    ],
    applicationsAr: [
      'عناصر التسليح الرئيسية للفلل، الأعمدة، الجسور، والمباني الشاهقة.',
      'أساسات الأعمال المدنية ومشاريع البنية التحتية في المنطقة الغربية.'
    ]
  },
  {
    id: 'al-sabic-sulbjazeera-ksa',
    sku: 'PS-RE-ASK',
    nameEn: 'AL - Sabic, Sulbjazeera, Ksa',
    nameAr: 'حديد تسليح سابك وصلب الجزيرة',
    categoryEn: 'Reinforcing Steel (Rebar)',
    categoryAr: 'حديد تسليح للبناء',
    categorySlug: 'reinforcing-steel',
    descriptionEn: 'Reinforcing steel offers superior strength and compliance with ASTM A615 and BS 4449 standards, ensuring reliability for all construction needs.',
    descriptionAr: 'يوفر حديد التسليح سابك وصلب الجزيرة قوة فائقة وتوافقاً تاماً مع معايير ASTM A615 و BS 4449، مما يضمن الموثوقية لكل مشاريع البناء.',
    specsEn: { Standard: 'ASTM A615 / BS 4449', Origin: 'SABIC / SULBJAZEERA / KSA', Grade: 'Grade 60 / Grade 40', Application: 'Foundations & Pours' },
    specsAr: { 'المواصفة': 'ASTM A615 / BS 4449', 'المنشأ': 'سابك / صلب الجزيرة / وطني', 'الالدرجة': 'درجة 60 / درجة 40', 'الاستخدام': 'الأساسات وصب الخرسانة' },
    inStock: true,
    materialEn: 'High-Tensile Carbon Rebar',
    materialAr: 'حديد تسليح كربوني عالي المقاومة',
    gradeEn: 'ASTM A615 Grade 60',
    gradeAr: 'درجة 60 ASTM A615',
    image: '/images/products/domestic reinforcing steel.webp',
    priceSAR: 3441.38,
    longDescriptionEn: 'Our reinforcing steel rebar is a high-quality, durable reinforcement solution designed specifically for demanding structural concrete pours. Produced under stringent local quality management guidelines, it provides an exceptional balance of mechanical strength.',
    longDescriptionAr: 'حديد التسليح من مصانع سابك وصلب الجزيرة هو حل تسليح عالي الجودة والمتانة مصمم خصيصاً لأعمال صب الخرسانة الإنشائية المطلوبة تحت إشراف محلي صارم.',
    groupedItems: [
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø6MM × 6M | GRADE 40', price: 4709.25 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø8MM × 6M | GRADE 40', price: 3864.00 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø7.5MM × 6M | GRADE 40', price: 3622.50 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø9.5MM × 12M | GRADE 40', price: 3682.88 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø10MM × 12M | GRADE 40', price: 3924.38 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø5.5MM × 6M | GRADE 40', price: 4769.63 },
      { name: 'WATANI STEEL REBAR | Ø12MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'WATANI STEEL REBAR | Ø14MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'WATANI STEEL REBAR | Ø16MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'WATANI STEEL REBAR | Ø18MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'WATANI STEEL REBAR | Ø20MM × 12M | ASTM A615 GRADE 60', price: 3441.38 }
    ],
    specificationsEn: [
      'Mill Origins: SABIC (Hadeed) / SulbJazeera / Watani Steel.',
      'Standard: Full ASTM A615 Grade 60 & BS 4449 compliance.',
      'Certification: SASO quality mark certified.'
    ],
    specificationsAr: [
      'مصادر المصانع: سابك (حديد) / صلب الجزيرة / وطني للصلب.',
      'المواصفة: مطابقة كاملة لمواصفات ASTM A615 الدرجة 60 و BS 4449.',
      'الشهادات: حاصل على علامة الجودة السعودية من هيئة ساسو.'
    ],
    applicationsEn: [
      'High-load residential and commercial building columns and foundations.',
      'Infrastructure projects like flyovers and industrial platforms.'
    ],
    applicationsAr: [
      'أعمدة وأساسات المباني السكنية والتجارية ذات الأحمال العالية.',
      'مشاريع البنية التحتية مثل الجسور والمنصات الصناعية الكبرى.'
    ]
  },
  {
    id: 'metal-baklava-rack',
    sku: 'PS-MSH-B11',
    nameEn: 'Metal baklava rack',
    nameAr: 'شبك حديد تمدد (بقلاوة)',
    categoryEn: 'Wire Mesh & Fencing',
    categoryAr: 'شبك حديد وأسوار',
    categorySlug: 'mesh-fencing',
    descriptionEn: 'Metal Baklava Rack is a strong and lightweight mesh used in industrial flooring, security fencing, and construction reinforcements with corrosion resistance.',
    descriptionAr: 'شبك تمدد (بقلاوة) هو شبك صلب وخفيف الوزن يستخدم في الأرضيات الصناعية، الأسوار الأمنية، وتدعيم المباني مع مقاومة ممتازة للتآكل.',
    specsEn: { Standard: 'Expanded Metal Mesh', Surface: 'Diamond Raised Pattern', WeightClass: 'Lightweight' },
    specsAr: { 'المواصفة': 'شبك حديد ممدد', 'السطح': 'نمط ماسي بارز', 'فئة الوزن': 'خفيف الوزن' },
    inStock: true,
    materialEn: 'Expanded Mild Steel',
    materialAr: 'حديد مطاوع ممدد',
    gradeEn: 'Industrial Expanded Class',
    gradeAr: 'درجة ممدد صناعية',
    image: '/images/products/metal baklava rack.webp',
    priceSAR: 9.66,
    longDescriptionEn: 'Our Metal baklava rack (Steel Expanded Metal Mesh) is a highly durable, rigid, and lightweight panel solution widely utilized in security, construction, and manufacturing sectors.',
    longDescriptionAr: 'شبك تمدد بقلاوة (شبك حديد ممدد) هو لوح متين للغاية وصلب وخفيف الوزن يستخدم على نطاق واسع في قطاعات الأمن والبناء والتصنيع وأعمال اللياسة الجدارية.',
    lengthsMm: [2440, 2000],
    widthsMm: [1000, 1220],
    thicknessMm: [1.5, 1.8, 2.7, 4],
    meshSizes: ['28x55', '25x50', '15x25'],
    specificationsEn: [
      'Product Class: Expanded Steel Mesh.',
      'Mesh Opening Dimensions: 28x55mm, 25x50mm, 15x25mm.',
      'Sheet Thickness: 1.5mm, 1.8mm, 2.7mm, 4.0mm.'
    ],
    specificationsAr: [
      'فئة المنتج: شبك حديد ممدد.',
      'أبعاد فتحة الشبك: 28x55 ملم، 25x50 ملم، 15x25 ملم.',
      'سمك اللوح: 1.5 ملم، 1.8 ملم، 2.7 ملم، 4.0 ملم.'
    ],
    applicationsEn: [
      'Plastering reinforcement in buildings to prevent wall cracks.',
      'Fencing grids, walkways, decorative panels, and protective screens.'
    ],
    applicationsAr: [
      'تدعيم أعمال اللياسة في المباني لمنع تشققات وتصدعات الجدران.',
      'شبكات الأسوار، الممرات، الألواح الزخرفية، وشاشات الحماية.'
    ]
  },
  {
    id: 'heb-steel-bridges',
    sku: 'PS-HEB-12',
    nameEn: 'H-beam (HEB) steel bridges',
    nameAr: 'جسور حديد H-beam (HEB) ثقيل',
    categoryEn: 'Beams & Structural Steel',
    categoryAr: 'جسور وهياكل إنشائية',
    categorySlug: 'beams-structural',
    descriptionEn: 'High-quality European standard wide flange H-Beams (HEB) in grades S275JR & S355JR. Ideal for columns and beams in construction with superior load-bearing capacity.',
    descriptionAr: 'جسور حديد HEB ذات شفة عريضة طبقاً للمواصفات الأوروبية بدرجات S275JR و S355JR. مثالية للأعمدة والجسور مع قدرة تحميل فائقة.',
    specsEn: { Standard: 'EN 10025-2 / DIN 1025-2', Grade: 'S275JR / S355JR', Profile: 'HEB (Heavy Profile)', Flange: 'Wide Flange' },
    specsAr: { 'المواصفة': 'EN 10025-2 / DIN 1025-2', 'الدرجة': 'S275JR / S355JR', 'المقطع': 'HEB (مقطع ثقيل)', 'الشفة': 'شفة عريضة' },
    inStock: true,
    materialEn: 'European Structural Steel',
    materialAr: 'حديد إنشائي أوروبي',
    gradeEn: 'S275JR / S355JR',
    gradeAr: 'S275JR / S355JR',
    image: '/images/products/H-beam (HEB) steel bridges.webp',
    priceSAR: 628.68,
    longDescriptionEn: 'Our European Standard H-beam (HEB) steel bridges represent a cornerstone of heavy modern construction, engineered for high-load applications demanding maximum bending and torsional resistance.',
    longDescriptionAr: 'تمثل الجسور الحديدية الأوروبية القياسية HEB حجر الزاوية في أعمال البناء والإنشاءات الثقيلة، وهي مصممة للتطبيقات عالية الأحمال ومقاومة الانحناء.',
    heightsMm: [100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 400, 450, 500, 550, 600, 700, 800, 900],
    materialGrades: ['S275JR', 'S355JR'],
    lengthsMm: [6000, 12000],
    widthsMm: [100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300],
    specificationsEn: [
      'Standard: EN 10025-2, DIN 1025-2 standard profiles.',
      'Sizing: Heights from 100mm to 900mm.',
      'Flange Type: Parallel broad flange configuration.'
    ],
    specificationsAr: [
      'المواصفة: المقاطع القياسية EN 10025-2, DIN 1025-2.',
      'الأحجام: ارتفاعات تتراوح من 100 ملم إلى 900 ملم.',
      'نوع الشفة: شفة متوازية عريضة مصمتة.'
    ],
    applicationsEn: [
      'Columns and heavy load-bearing structural frames in commercial complexes.',
      'Industrial infrastructure, heavy platforms, crane runways, and bridge frameworks.'
    ],
    applicationsAr: [
      'أعمدة وهياكل تحمل الأحمال الثقيلة في المجمعات التجارية والمصانع.',
      'البنية التحتية الصناعية، المنصات الثقيلة، مسارات الرافعات، وجسور الهياكل.'
    ]
  },
  {
    id: 'upn-heavy-bridges',
    sku: 'PS-UPN-13',
    nameEn: 'UPN heavy bridges',
    nameAr: 'جسور حديد UPN ثقيلة',
    categoryEn: 'Beams & Structural Steel',
    categoryAr: 'جسور وهياكل إنشائية',
    categorySlug: 'beams-structural',
    descriptionEn: 'Primesteelksa Building Materials offer superior strength, versatility, and affordability for your construction and engineering projects. Choose from a wide range of sizes and thicknesses to meet your specific needs.',
    descriptionAr: 'توفر جسور UPN ثقيلة قوة فائقة وتنوعاً استثنائياً لمشاريع البناء والهندسة الخاصة بك. متوفرة بمقاسات مختلفة لتلبية احتياجاتك.',
    specsEn: { Standard: 'DIN 1026-1 / EN 10025', Grade: 'S275JR', ChannelType: 'UPN Channel (Heavy)', Origin: 'EUROPE / OTHER' },
    specsAr: { 'المواصفة': 'DIN 1026-1 / EN 10025', 'الدرجة': 'S275JR', 'نوع المجرى': 'مجرى UPN (ثقيل)', 'المنشأ': 'أوروبا / مصادر أخرى' },
    inStock: true,
    materialEn: 'Structural Steel Channel',
    materialAr: 'مجرى حديد إنشائي',
    gradeEn: 'S275JR',
    gradeAr: 'S275JR',
    image: '/images/products/UPN heavy bridges.webp',
    priceSAR: 157.95,
    longDescriptionEn: 'Our UPN heavy bridges are a highly versatile structural channel profile utilized extensively across infrastructure and commercial builds. Formed from high-grade hot-rolled steel, these European standard channels feature a flat web and outward-tapering parallel flanges.',
    longDescriptionAr: 'تعتبر مقاطع قنوات UPN الثقيلة مقاطع إنشائية عالية التنوع تستخدم على نطاق واسع في البنية التحتية، وتتميز بجسم مسطح وشفاه متوازية.',
    heightsMm: [38, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
    lengthsMm: [6000, 12000],
    widthsMm: [50, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300],
    specificationsEn: [
      'Standard: DIN 1026-1 (European standard channels UPN).',
      'Material: Hot-rolled structural carbon steel.',
      'Width x Height range: Large variety of stock sizes.'
    ],
    specificationsAr: [
      'المواصفة: DIN 1026-1 (قنوات المواصفة الأوروبية UPN).',
      'المادة: حديد كربوني إنشائي مدرفل على الساخن.',
      'نطاق العرض × الارتفاع: تشكيلة واسعة من المقاسات المتوفرة.'
    ],
    applicationsEn: [
      'Steel structural frames, building bracing, and portal frames.',
      'Machinery chassis, trailers, industrial supports, and architectural lintels.'
    ],
    applicationsAr: [
      'هياكل الصلب الإنشائية، تدعيم المباني، والإطارات الهيكلية البسيطة.',
      'هياكل الآلات، المقطورات، الدعامات الصناعية، والأعتاب المعمارية.'
    ]
  },
  {
    id: 'solid-reinforcing-steel',
    sku: 'PS-RE-S14',
    nameEn: 'Solid reinforcing steel',
    nameAr: 'حديد تسليح صلب (مصمت)',
    categoryEn: 'Reinforcing Steel (Rebar)',
    categoryAr: 'حديد تسليح للبناء',
    categorySlug: 'reinforcing-steel',
    descriptionEn: 'Solid reinforcing steel delivers unmatched durability and complies with ASTM A615 and BS 4449 standards, making it ideal for all construction projects.',
    descriptionAr: 'يوفر حديد التسليح الصلب المصمت متانة لا مثيل لها ويتوافق مع معايير ASTM A615 و BS 4449، مما يجعله مثمراً لجميع المشاريع.',
    specsEn: { Standard: 'ASTM A615 / BS 4449', Origin: 'SAUDI ARABIA (SOLB)', Grade: 'Grade 60 / Grade 40', Application: 'Heavy Concrete' },
    specsAr: { 'المواصفة': 'ASTM A615 / BS 4449', 'المنشأ': 'المملكة العربية السعودية (صلب)', 'الدرجة': 'درجة 60 / درجة 40', 'الاستخدام': 'الخرسانة الثقيلة' },
    inStock: true,
    materialEn: 'Solid Reinforcing Core Steel',
    materialAr: 'حديد تسليح صلب مصمت',
    gradeEn: 'ASTM A615 Grade 60',
    gradeAr: 'درجة 60 ASTM A615',
    image: '/images/products/solid reinforcing steel.webp',
    priceSAR: 3441.38,
    longDescriptionEn: 'Incorporate maximum structural load distribution into your concrete pours using our premium solid reinforcing steel. Sourced from trusted regional mills, these high-tensile deformed bars are designed for extreme strength.',
    longDescriptionAr: 'احصل على أقصى درجات توزيع الأحمال الإنشائية في صب الخرسانة باستخدام حديد التسليح الصلب المصمت الممتاز من صلب المصنع الإقليمي الموثوق.',
    groupedItems: [
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø6MM × 6M | GRADE 40', price: 4709.25 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø8MM × 6M | GRADE 40', price: 3864.00 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø7.5MM × 6M | GRADE 40', price: 3622.50 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø9.5MM × 12M | GRADE 40', price: 3682.88 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø10MM × 12M | GRADE 40', price: 3924.38 },
      { name: 'WIRE-DRAWN REINFORCING BAR | Ø5.5MM × 6M | GRADE 40', price: 4769.63 },
      { name: 'SOLB STEEL REBAR | Ø12MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'SOLB STEEL REBAR | Ø16MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'SOLB STEEL REBAR | Ø20MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'SOLB STEEL REBAR | Ø25MM × 12M | ASTM A615 GRADE 60', price: 3441.38 }
    ],
    specificationsEn: [
      'Standard compliance: ASTM A615 Grade 60 and BS 4449.',
      'Features: High ductility, superb bonding with cement, excellent tensile strength.'
    ],
    specificationsAr: [
      'مطابقة المعايير: ASTM A615 الدرجة 60 و BS 4449.',
      'المزايا: مرونة عالية، ترابط ممتاز مع الأسمنت، وقوة شد فائقة.'
    ],
    applicationsEn: [
      'Reinforcement in heavy foundations, retaining walls, bridges, and infrastructure.',
      'Seismic-resistant structures and concrete precast members.'
    ],
    applicationsAr: [
      'تسليح الأساسات العميقة، الجدران الاستنادية، الجسور، ومشاريع البنية التحتية.',
      'الهياكل المقاومة للزلازل والعناصر الخرسانية مسبقة الصنع.'
    ]
  },
  {
    id: 'hea-steel-bridges',
    sku: 'PS-HEA-15',
    nameEn: 'Lightweight H-beam (HEA) steel bridges',
    nameAr: 'جسور حديد H-beam (HEA) خفيفة',
    categoryEn: 'Beams & Structural Steel',
    categoryAr: 'جسور وهياكل إنشائية',
    categorySlug: 'beams-structural',
    descriptionEn: 'High-quality European Standard Lightweight H-beam (HEA) steel bridges in grades S275JR & S355JR. Ideal for beams and columns in moderate load applications.',
    descriptionAr: 'جسور حديد HEA خفيفة طبقاً للمواصفات الأوروبية بدرجات S275JR و S355JR. مثالية للأعمدة والجسور في التطبيقات ذات الأحمال المعتدلة.',
    specsEn: { Standard: 'EN 10025-2 / DIN 1025-3', Grade: 'S275JR / S355JR', Profile: 'HEA (Light Profile)', Flange: 'Broad Flange' },
    specsAr: { 'المواصفة': 'EN 10025-2 / DIN 1025-3', 'الدرجة': 'S275JR / S355JR', 'المقطع': 'HEA (مقطع خفيف)', 'الشفة': 'شفة عريضة' },
    inStock: true,
    materialEn: 'Lightweight European Structural Steel',
    materialAr: 'حديد إنشائي أوروبي خفيف الوزن',
    gradeEn: 'S275JR / S355JR',
    gradeAr: 'S275JR / S355JR',
    image: '/images/products/Lightweight H-beam (HEA) steel bridges.webp',
    priceSAR: 393.22,
    longDescriptionEn: 'Our European Standard Lightweight H-beam (HEA) steel bridges provide an exceptionally efficient and cost-effective structural solution. Functioning as a lighter, thinner-flanged alternative to the heavy HEB series, HEA profiles deliver an optimal structural compromise between moment capacity and total deadweight.',
    longDescriptionAr: 'توفر جسور HEA الخفيفة حلاً إنشائياً فعالاً واقتصادياً، وهي بمثابة بديل أخف سمكاً لشفاه فئة HEB الثقيلة لتحقيق توازن ممتاز بين الوزن والتحمل.',
    heightsMm: [96, 114, 133, 152, 171, 190, 210, 230, 250, 270, 299, 300, 310, 330, 350, 390, 440, 490, 540, 590, 690],
    materialGrades: ['S275JR', 'S355JR'],
    lengthsMm: [6000, 12000],
    widthsMm: [100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300],
    specificationsEn: [
      'Standard: EN 10025-2 / DIN 1025-3 standard profiles.',
      'Grades: Available in S275JR and S355JR structural steel.',
      'Sizing: Heights from 96mm to 690mm.'
    ],
    specificationsAr: [
      'المواصفة: المقاطع القياسية EN 10025-2 / DIN 1025-3.',
      'الدرجات: متوفرة في درجات الحديد الإنشائي S275JR و S355JR.',
      'الأحجام: ارتفاعات تتراوح من 96 ملم إلى 690 ملم.'
    ],
    applicationsEn: [
      'Main beams and columns in moderate load industrial frames.',
      'Steel structural joists, hangers, and framing for warehouses.'
    ],
    applicationsAr: [
      'الجسور الرئيسية والأعمدة في هياكل المصانع ذات الأحمال المتوسطة.',
      'روافد الصلب الإنشائية، العلاقات، والتسقيف للمستودعات.'
    ]
  },
  {
    id: 'upe-light-drainage',
    sku: 'PS-UPE-16',
    nameEn: 'UPE Light Drainage',
    nameAr: 'جسور حديد UPE خفيفة',
    categoryEn: 'Beams & Structural Steel',
    categoryAr: 'جسور وهياكل إنشائية',
    categorySlug: 'beams-structural',
    descriptionEn: 'Primesteelksa Materials offers a comprehensive selection of UPE Steel Channels, known for their lightweight design, superior strength, and ease of use. Find the perfect size and grade for your construction needs.',
    descriptionAr: 'توفر قنوات الحديد خفيفة الوزن UPE خياراً حديثاً ومقاوماً للوزن الزائد. اعثر على المقاس والدرجة المثاليين لاحتياجات البناء الخاصة بك.',
    specsEn: { Standard: 'DIN 1026-2', Flange: 'Parallel Flange U-Channel', Grade: 'S275JR', Usage: 'Light structural drainage' },
    specsAr: { 'المواصفة': 'DIN 1026-2', 'الشفة': 'قناة U متوازية الشفاه', 'الدرجة': 'S275JR', 'الاستخدام': 'مجرى تصريف خفيف هيكلي' },
    inStock: true,
    materialEn: 'Structural Parallel U-Channel',
    materialAr: 'مجرى حديد متوازي الشفاه',
    gradeEn: 'S275JR',
    gradeAr: 'S275JR',
    image: '/images/products/UPE Light Drainage.webp',
    priceSAR: 167.18,
    longDescriptionEn: 'Our UPE Light Drainage steel channels are a highly modern structural choice engineered to optimize strength while reducing deadweight profiles. Featuring a distinctive U-shape with parallel flanges and thinner webs compared to traditional UPN formats, UPE channels provide exceptional cross-sectional structural strength.',
    longDescriptionAr: 'تعد قنوات UPE خياراً إنشائياً حديثاً مصمماً لتقليل الأوزان الميتة للهيكل مع الحفاظ على قوة المقطع بفضل شفتها المتوازية وسمكها المثالي.',
    heightsMm: [44, 47, 52],
    lengthsMm: [6000, 12000],
    widthsMm: [80, 100, 120],
    specificationsEn: [
      'Standard: DIN 1026-2 parallel flange channels.',
      'Sizing: Widths 80mm to 120mm.',
      'Material: High-quality mild steel.'
    ],
    specificationsAr: [
      'المواصفة: قنوات متوازية الشفاه DIN 1026-2.',
      'الأحجام: عرض يتراوح من 80 ملم إلى 120 ملم.',
      'المادة: حديد مطاوع عالي الجودة.'
    ],
    applicationsEn: [
      'Structural supports for drainage grids and plumbing installations.',
      'Light framing, brackets, and structural channels in building renovations.'
    ],
    applicationsAr: [
      'الدعامات الإنشائية لشبكات قنوات التصريف والتمديدات الصحية.',
      'هياكل التأطير الخفيفة، الزوايا، والقنوات الإنشائية في أعمال الترميم.'
    ]
  },
  {
    id: 'ipe-steel-bridges',
    sku: 'PS-IPE-17',
    nameEn: 'IPE steel bridges',
    nameAr: 'جسور حديد IPE',
    categoryEn: 'Beams & Structural Steel',
    categoryAr: 'جسور وهياكل إنشائية',
    categorySlug: 'beams-structural',
    descriptionEn: 'European Standard IPE steel bridges in grades S275JR & S355JR. An efficient and versatile choice for structural applications, including beams, columns, and frames.',
    descriptionAr: 'جسور حديد IPE القياسية الأوروبية بدرجات S275JR و S355JR. خيار فعال ومتعدد الاستخدامات للتطبيقات الإنشائية بما في ذلك الجسور والأعمدة والهياكل.',
    specsEn: { Standard: 'DIN 1025-5 / EN 10025-2', Grade: 'S275JR / S355JR', Profile: 'IPE (Narrow I-Beam)', Flange: 'Parallel Flange' },
    specsAr: { 'المواصفة': 'DIN 1025-5 / EN 10025-2', 'الدرجة': 'S275JR / S355JR', 'المقطع': 'IPE (جسر I ضيق)', 'الشفة': 'شفة متوازية' },
    inStock: true,
    materialEn: 'European Structural Steel (I-Section)',
    materialAr: 'حديد إنشائي أوروبي مقطع I',
    gradeEn: 'S275JR / S355JR',
    gradeAr: 'S275JR / S355JR',
    image: '/images/products/IPE steel bridges.webp',
    priceSAR: 139.10,
    longDescriptionEn: 'Our European Standard IPE steel bridges are highly efficient and universally utilized structural steel profiles. Formed with the iconic narrow \'I\' profile featuring parallel inner and outer flange surfaces, IPE beams provide a superior strength-to-weight ratio.',
    longDescriptionAr: 'تعد الجسور الحديدية IPE مقاطع إنشائية أوروبية مستخدمة على نطاق واسع، تتميز بمقطع I الضيق القياسي ذي الأسطح المتوازية للشفاه لتقديم أفضل نسبة أداء إلى وزن.',
    heightsMm: [80, 100, 120, 140, 160, 180, 200, 220, 240, 270, 300, 330, 360, 400, 450, 500, 550, 600],
    materialGrades: ['S275JR', 'S355JR'],
    lengthsMm: [6000, 12000, 15000, 18000],
    widthsMm: [46, 55, 64, 73, 82, 91, 100, 110, 120, 135, 150, 160, 170, 180, 190, 200, 210, 220],
    specificationsEn: [
      'Standard: DIN 1025-5 dimensions, EN 10025-2 material properties.',
      'Sizing: Wide range of heights (80mm to 600mm) and widths (46mm to 220mm).',
      'Lengths: Available in standard and extra lengths (6m, 12m, 15m, 18m).'
    ],
    specificationsAr: [
      'المواصفة: أبعاد DIN 1025-5، وخصائص المواد EN 10025-2.',
      'الأحجام: مجموعة واسعة من الارتفاعات (80 إلى 600 ملم) والعروض (46 إلى 220 ملم).',
      'الأطوال: متوفر بأطوال قياسية وممتدة (6 متر، 12 متر، 15 متر، 18 متر).'
    ],
    applicationsEn: [
      'Primary structural beams and lintels in industrial warehouses and steel buildings.',
      'Civil engineering frameworks, portal frames, floor joists, and machinery supports.'
    ],
    applicationsAr: [
      'الجسور الهيكلية الرئيسية والأعتاب في المستودعات الصناعية ومباني الهياكل الفولاذية.',
      'هياكل الهندسة المدنية، إطارات المداخل، روافد الأسقف، ودعامات الآلات.'
    ]
  },
  {
    id: 'embossed-iron-sheet-metal',
    sku: 'PS-SH-EI18',
    nameEn: 'Embossed iron sheet metal (embossed sheet metal)',
    nameAr: 'صاج حديد مبزر (مبسط/منقوش)',
    categoryEn: 'Steel Sheets & Plates',
    categoryAr: 'صاج وألواح حديد',
    categorySlug: 'sheets-plates',
    descriptionEn: 'High-quality hot-rolled Embossed iron sheet metal (checker plate) for anti-slip flooring and durable applications. Available in a wide range of sizes and thicknesses.',
    descriptionAr: 'لوح حديد مبزر منقوش مدرفل على الساخن عالي الجودة لأرضيات مقاومة للانزلاق والتطبيقات المتينة. متوفر بمجموعة واسعة من المقاسات والسماكات.',
    specsEn: { Pattern: 'Teardrop (Checker Plate)', Process: 'Hot Rolled', Surface: 'Embossed' },
    specsAr: { 'النقش': 'شكل الدمعة (checker plate)', 'طريقة الصنع': 'مدرفل على الساخن', 'السطح': 'منقوش بارز' },
    inStock: true,
    materialEn: 'Hot Rolled Carbon Steel',
    materialAr: 'حديد كربوني مدرفل على الساخن',
    gradeEn: 'Commercial Grade',
    gradeAr: 'درجة تجارية',
    image: '/images/products/Embossed iron sheet metal.webp',
    priceSAR: 104.29,
    longDescriptionEn: 'Our high-quality Embossed iron sheet metal (also widely recognized as checker plate or chequered plate) is a highly robust, low-maintenance solution for safety flooring, protective cladding, and industrial fabrication.',
    longDescriptionAr: 'ألواح الحديد المبزرة (checker plate) هي ألواح متينة للغاية وقليلة الصيانة، وتوفر سطحاً خشناً مضاداً للانزلاق لمماري السلامة والمصانع وأسطح المركبات.',
    thicknessMm: [1.6, 1.8, 2.3, 2.7, 2.9, 3, 3.8, 4, 4.8, 5.7, 6, 8],
    lengthsMm: [2440, 2000, 3000, 6000],
    widthsMm: [1000, 1220, 1500],
    specificationsEn: [
      'Material Grade: Hot-rolled mild carbon steel.',
      'Surface: Tear-drop embossed anti-slip texture.',
      'Thickness range: 1.6mm up to 8.0mm.'
    ],
    specificationsAr: [
      'درجة المادة: حديد كربوني مطاوع مدرفل على الساخن.',
      'السطح: ملمس خشن بنقشة شكل الدمعة مانع للانزلاق.',
      'نطاق السمك: من 1.6 ملم إلى 8.0 ملم.'
    ],
    applicationsEn: [
      'Safety platform floors, steps, staircases, and catwalks.',
      'Ramps, vehicle tailgates, industrial floor tiles, and corner protection wall cladding.'
    ],
    applicationsAr: [
      'أرضيات منصات السلامة، الدرجات، السلالم، والممرات المعلقة.',
      'منحدرات التحميل، بوابات الشاحنات، بلاط الأرضيات الصناعي، وكسوة حماية الجدران.'
    ]
  },
  {
    id: 'galvanized-iron-sheet-metal',
    sku: 'PS-SH-GI19',
    nameEn: 'Galvanized iron sheet metal',
    nameAr: 'صاج حديد مجلفن',
    categoryEn: 'Steel Sheets & Plates',
    categoryAr: 'صاج وألواح حديد',
    categorySlug: 'sheets-plates',
    descriptionEn: 'High-quality hot-dip galvanized steel sheets (GI) conforming to ASTM A653 standards. Available in various sizes, thicknesses, and G90, G60, and G20 zinc coatings.',
    descriptionAr: 'صاج حديد مجلفن على الساخن بالكامل عالي الجودة مطابق لمعايير ASTM A653. متوفر بمقاسات وسماكات متنوعة وبطلاء زنك فئات G90 و G60 و G20.',
    specsEn: { Standard: 'SASO ASTM A653M', Coating: 'G90 / G60 / G20 (Zinc Coating)', Surface: 'Smooth Galvanized' },
    specsAr: { 'المواصفة': 'SASO ASTM A653M', 'فئة الجلفنة': 'G90 / G60 / G20 (طلاء الزنك)', 'السطح': 'مجلفن ناعم' },
    inStock: true,
    materialEn: 'Galvanized Flat Carbon Steel',
    materialAr: 'صاج حديد كربوني مجلفن مستوٍ',
    gradeEn: 'ASTM A653 / G90 / G60 / G20',
    gradeAr: 'ASTM A653 / G90 / G60 / G20',
    image: '/images/products/Galvanized iron sheet metal.webp',
    priceSAR: 40.60,
    longDescriptionEn: 'Our premium Galvanized iron sheet metal panels are flat-rolled steel products coated with a high-purity protective layer of zinc via continuous hot-dip processes. Engineered in strict compliance with international benchmarks like SASO ASTM A653M, these sheets deliver superior resistance against atmospheric corrosion.',
    longDescriptionAr: 'ألواح الصاج المجلفن الممتازة هي ألواح حديد مغطاة بطبقة واقية من الزنك عالي النقاء بعملية الغمس المستمر على الساخن، وتقدم حماية ممتازة من الصدأ وعوامل الرطوبة الجوية.',
    materialGrades: ['G90', 'G60', 'G20'],
    thicknessMm: [0.5, 0.55, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.15, 1.2, 1.4, 1.5, 1.8, 1.9, 2, 2.5, 2.8, 3, 3.8, 4],
    lengthsMm: [2440, 2000, 2400],
    widthsMm: [1000, 1220],
    specificationsEn: [
      'Standard: ASTM A653 / SASO compliant.',
      'Zinc Coating Weights: G90 (heavy protection), G60 (standard), G20.',
      'Finish: Regular spangle or minimized spangle.'
    ],
    specificationsAr: [
      'المواصفة: التوافق مع ASTM A653 / SASO.',
      'كثافة طلاء الزنك: G90 (حماية ثقيلة)، G60 (قياسي)، G20.',
      'التشطيب: حبيبات جلفنة منتظمة أو مصغرة.'
    ],
    applicationsEn: [
      'Air conditioning duct fabrication (HVAC), steel enclosures, and junction boxes.',
      'Roofing panels, gutters, partitions, cladding, and metal containers.'
    ],
    applicationsAr: [
      'تصنيع مجاري التكييف والتهوية (HVAC)، صناديق التوزيع والمفاتيح الكهربائية.',
      'ألواح التسقيف، المزاريب، القواطع الجدارية، الكسوة، والحاويات المعدنية.'
    ]
  },
  {
    id: 'lightweight-ipe-aa-steel-bridges',
    sku: 'PS-IPE-AA20',
    nameEn: 'Lightweight IPE AA steel bridges',
    nameAr: 'جسور حديد IPE AA خفيفة جداً',
    categoryEn: 'Beams & Structural Steel',
    categoryAr: 'جسور وهياكل إنشائية',
    categorySlug: 'beams-structural',
    descriptionEn: 'European Standard light parallel flange I-Beams (IPE AA). A cost-effective, lightweight alternative to standard IPE for structural applications like beams, joists, and frames.',
    descriptionAr: 'جسور حديد خفيفة جداً ذات شفة متوازية (IPE AA). بديل اقتصادي وخفيف الوزن لجسور IPE القياسية للروافد والإطارات والهياكل الخفيفة.',
    specsEn: { Standard: 'JIS G 3192 / EN 10025-2', Grade: 'S275JR / S355JR', Origin: 'SAUDI ARABIA, BAHRAIN, CHINA', Profile: 'IPE AA (Ultra-Light)' },
    specsAr: { 'المواصفة': 'JIS G 3192 / EN 10025-2', 'الدرجة': 'S275JR / S355JR', 'المنشأ': 'المملكة العربية السعودية، البحرين، الصين', 'المقطع': 'IPE AA (فائق الخفة)' },
    inStock: true,
    materialEn: 'Ultra-Lightweight Structural Steel',
    materialAr: 'حديد إنشائي فائق خفة الوزن',
    gradeEn: 'S275JR / S355JR',
    gradeAr: 'S275JR / S355JR',
    image: '/images/products/Lightweight IPE AA steel bridges.webp',
    priceSAR: 100.42,
    longDescriptionEn: 'Our European Standard Lightweight IPE AA steel bridges represent an optimized, ultra-light structural configuration within the parallel flange beam family. Featuring the classic narrow \'I\' geometry but with scaled-down web and flange profiles, these beams deliver a high strength-to-weight ratio.',
    longDescriptionAr: 'تعد الجسور الحديدية خفيفة الوزن للغاية IPE AA تصميماً إنشائياً ممتازاً ومحسناً ضمن عائلة جسور I، وتوفر مقطعاً خفيف الوزن بأبعاد شفة وجسم مصغرة لتقليل التكلفة الإجمالية.',
    heightsMm: [78, 97.6, 117, 136.6, 156.4, 176.4, 196.4],
    materialGrades: ['S275JR', 'S355JR'],
    origins: ['SAUDI ARABIA', 'BAHRAIN', 'CHINA'],
    lengthsMm: [6000, 12000],
    widthsMm: [46, 55, 64, 73, 82, 91, 100],
    specificationsEn: [
      'Standard: Built to conform to European IPE AA standards.',
      'Origin: Sourced from Bahrain, China, and local Saudi mills.',
      'Sizing: Heights starting from 78mm up to 196.4mm.'
    ],
    specificationsAr: [
      'المواصفة: مصنع ومطابق للمواصفات القياسية الأوروبية IPE AA.',
      'المنشأ: مستورد من البحرين والصين بالإضافة إلى المصانع الوطنية السعودية.',
      'الأحجام: ارتفاعات تبدأ من 78 ملم وتصل إلى 196.4 ملم.'
    ],
    applicationsEn: [
      'Roof purlins, rafters, and canopies for light industrial warehouses.',
      'Structural supports in load-limited residential structures, mezzanine floors, and steel joists.'
    ],
    applicationsAr: [
      'مدادات الأسقف، العوارض الخفيفة، والمظلات للمستودعات الصناعية الخفيفة.',
      'الدعامات الإنشائية في المباني السكنية خفيفة الأحمال، الميزانين، وروافد الحديد.'
    ]
  },
  {
    id: 'equal-iron-angles',
    sku: 'PS-ANG-E21',
    nameEn: 'Equal iron angles',
    nameAr: 'زوايا حديد متساوية الأضلاع',
    categoryEn: 'Hollow Sections & Bars',
    categoryAr: 'حديد مفرغ ومبسط',
    categorySlug: 'hollow-sections',
    descriptionEn: 'Primesteelksa offers a wide range of high-quality steel angles for construction projects of all sizes. Our L-shaped structural steel products are strong, durable, and versatile, and are available in a range of sizes and thicknesses to meet your needs.',
    descriptionAr: 'تعد زوايا الحديد متساوية الأضلاع حلاً إنشائياً قوياً للتدعيم على شكل حرف L، متوفر بمقاسات وسماكات متنوعة لتلبية احتياجات الحدادة الإنشائية ومشاريع البناء.',
    specsEn: { Standard: 'ASTM A36 / SASO', Shape: 'L-Shape (Equal Legs)', Process: 'Hot Rolled' },
    specsAr: { 'المواصفة': 'ASTM A36 / ساسو', 'الشكل': 'على شكل L (أضلاع متساوية)', 'طريقة الصنع': 'مدرفل على الساخن' },
    inStock: true,
    materialEn: 'Hot Rolled Carbon Steel Angle',
    materialAr: 'زاوية حديد كربوني مدرفل على الساخن',
    gradeEn: 'ASTM A36',
    gradeAr: 'ASTM A36',
    image: '/images/products/Equal iron angles.webp',
    priceSAR: 19.87,
    longDescriptionEn: 'Our Equal iron angles are highly versatile structural elements widely utilized across modern construction, framing, and manufacturing applications. Engineered for multi-directional strength and absolute geometric precision, these 90-degree L-shaped profiles provide dependable stability and corner reinforcement.',
    longDescriptionAr: 'الزوايا الحديدية متساوية الأضلاع هي عناصر إنشائية متعددة الاستخدامات، تم تصميم مقطعها بزاوية 90 درجة لتوفير القوة والصلابة في الاتجاهين وتدعيم الزوايا والهياكل.',
    heightsMm: [24, 25, 28, 30, 38, 40, 45, 50, 60, 63, 65, 70, 75, 80, 90, 100, 120, 150],
    thicknessMm: [2.2, 2.5, 2.8, 3, 3.8, 4, 5, 6, 7, 8, 9, 10, 12, 15],
    lengthsMm: [6000, 12000],
    widthsMm: [24, 25, 28, 30, 38, 40, 45, 50, 60, 63, 65, 70, 75, 80, 90, 100, 120, 150],
    specificationsEn: [
      'Standard: ASTM A36 / SASO compliant.',
      'Design: 90-degree angle with equal leg lengths.',
      'Sizing: Wide options from 24mm to 150mm width/height.'
    ],
    specificationsAr: [
      'المواصفة: التوافق مع ASTM A36 / ساسو.',
      'التصميم: زاوية 90 درجة بأطوال أضلاع متساوية.',
      'الأحجام: خيارات واسعة تبدأ من 24 ملم وتصل إلى 150 ملم.'
    ],
    applicationsEn: [
      'Structural bracing, framing for steel windows, doors, and gates.',
      'Transmission towers, brackets, supporting trusses, and general steel fabrication.'
    ],
    applicationsAr: [
      'التدعيم الهيكلي، تأطير النوافذ الفولاذية، الأبواب، والبوابات.',
      'أبراج نقل الطاقة والكهرباء، الحوامل الداعمة، والجمالونات وأعمال الحدادة العامة.'
    ]
  },
  {
    id: 'pressure-steel-pipes-sch40',
    sku: 'PS-PIP-P22',
    nameEn: '40 pressure steel pipes',
    nameAr: 'أنابيب حديد ضغط 40',
    categoryEn: 'Pipes & Tubes',
    categoryAr: 'أنابيب ومواسير حديدية',
    categorySlug: 'pipes-tubes',
    descriptionEn: 'High-quality Schedule 40 carbon steel pipes in 6-meter lengths. Sizes from 1/2" to 8" available for plumbing, structural, and industrial applications.',
    descriptionAr: 'أنابيب حديد ضغط 40 (جدول 40) عالية الجودة وبأطوال 6 أمتار. متوفرة بمقاسات من 1/2 بوصة إلى 8 بوصات لتطبيقات السباكة والهياكل والصناعة.',
    specsEn: { Schedule: 'SCH 40 / Standard Wall', Type: 'Seamless / Welded ERW', Coating: 'None (Black Steel)' },
    specsAr: { 'الجدول': 'جدول 40 (SCH 40)', 'النوع': 'سيمبلس بدون لحام / ملحم ERW', 'الطلاء': 'بدون جلفنة (حديد أسود)' },
    inStock: true,
    materialEn: 'Schedule 40 Carbon Steel Pipe',
    materialAr: 'أنابيب حديد كربوني جدول 40',
    gradeEn: 'ASTM A53 Grade B / A106',
    gradeAr: 'ASTM A53 Grade B / A106',
    image: '/images/products/40 pressure steel pipes.webp',
    priceSAR: 51.92,
    longDescriptionEn: 'Our 40 pressure steel pipes are a highly versatile and widely used standard for a multitude of industrial, structural, and mechanical applications. Engineered for superior strength and long-term durability, these carbon steel pipes are designed to handle internal pressure and provide reliable service in demanding environments.',
    longDescriptionAr: 'تعد الأنابيب الحديدية ضغط 40 مواسير إنشائية متينة ومصممة هندسياً لتحمل الضغوط الداخلية ونقل السوائل والبخار بأمان في البيئات الصناعية والإنشائية.',
    steelCoatings: ['NONE'],
    thicknessMm: [2.77, 2.87, 3.38, 3.68, 3.91, 5.16, 5.49, 6.02, 7.11],
    lengthsMm: [6000],
    diametersInch: ['1/2', '3/4', '1', '1 1/4', '1 1/2', '2', '2 1/2', '3', '4', '6'],
    specificationsEn: [
      'Standard: Schedule 40 carbon steel pressure pipes conforming to ASTM A53/A106.',
      'Sizing: Diameters from 1/2" up to 8" in 6-meter lengths.',
      'Steel Coating: Raw black steel (none).'
    ],
    specificationsAr: [
      'المواصفة: أنابيب ضغط حديد كربوني جدول 40 متوافقة مع ASTM A53/A106.',
      'الأحجام: أقطار من 1/2 بوصة إلى 6 بوصة وبطول 6 أمتار.',
      'طلاء الحديد: أسود خام بدون جلفنة.'
    ],
    applicationsEn: [
      'Water distribution networks, gas and air lines, and steam transmission.',
      'Fire sprinkler networks, structural columns, scaffolding, and handrails.'
    ],
    applicationsAr: [
      'شبكات توزيع المياه، خطوط الغاز والهواء، ونقل البخار.',
      'شبكات مكافحة الحريق، الأعمدة الإنشائية، السقالات، والدرابزينات.'
    ]
  },
  {
    id: 'galvanized-circular-steel-pipes',
    sku: 'PS-PIP-GC23',
    nameEn: 'Galvanized circular steel pipes and tubes',
    nameAr: 'أنابيب ومواسير دائرية مجلفنة',
    categoryEn: 'Pipes & Tubes',
    categoryAr: 'أنابيب ومواسير حديدية',
    categorySlug: 'pipes-tubes',
    descriptionEn: 'High-quality galvanized steel round tubes and pipes in 6-meter lengths. Sizes 1/2" to 4". Ideal for construction, fencing, scaffolding, and plumbing due to superior corrosion resistance.',
    descriptionAr: 'أنابيب ومواسير دائرية مجلفنة عالية الجودة بطول 6 أمتار ومقاسات من 1/2 بوصة إلى 4 بوصة. مثالية للإنشاءات، والأسوار، والسقالات بفضل مقاومة الصدأ الفائقة.',
    specsEn: { Coating: 'Hot-Dip Galvanized', Connection: 'Threaded / Plain Ends', Length: '6m' },
    specsAr: { 'الطلاء': 'مجلفن على الساخن بالكامل', 'التوصيل': 'مسنن بقلاوظ / سادة النهاية', 'الطول': '6 أمتار' },
    inStock: true,
    materialEn: 'Galvanized Mild Steel Pipe',
    materialAr: 'أنابيب حديد مطاوع مجلفن',
    gradeEn: 'BS 1387 / SASO',
    gradeAr: 'BS 1387 / SASO',
    image: '/images/products/Galvanized circular steel pipes and tubes.webp',
    priceSAR: 67.62,
    longDescriptionEn: 'Our galvanized circular steel pipes and tubes are a versatile and highly durable solution for a vast range of structural, mechanical, and plumbing applications. Coated with a protective layer of zinc through a hot-dip galvanizing process, these tubes offer excellent corrosion resistance.',
    longDescriptionAr: 'الأنابيب والمواسير الدائرية المجلفنة هي حلول متينة ومقاومة للصدأ، حيث يتم طلاؤها بالكامل بطبقة حماية غنية بالزنك لتدوم طويلاً ضد الرطوبة والعوامل الخارجية.',
    thicknessMm: [1.5, 2.3, 2.6, 2.9, 3.2, 3.6],
    diametersInch: ['1 1/4', '1 1/2', '2', '2 1/2', '3', '4'],
    specificationsEn: [
      'Corrosion Protection: Hot-dip galvanizing process.',
      'Standard: Conforming to BS 1387 / SASO.',
      'Wall Thickness: 1.5mm up to 3.6mm.'
    ],
    specificationsAr: [
      'الحماية ضد الصدأ: عملية جلفنة كاملة مغموسة على الساخن.',
      'المواصفة: التوافق الكامل مع BS 1387 / SASO.',
      'سمك الجدار: من 1.5 ملم إلى 3.6 ملم.'
    ],
    applicationsEn: [
      'Scaffolding frames, structural supports, outdoor boundary fencing.',
      'Plumbing installations, agricultural greenhouses, and structural framing.'
    ],
    applicationsAr: [
      'هياكل سقالات البناء، الدعامات الإنشائية، وأسوار الحدود الخارجية.',
      'تمديدات السباكة والمياه، البيوت المحمية الزراعية، والإطارات الإنشائية.'
    ]
  },
  {
    id: 'sheet-metal-zinc',
    sku: 'PS-SH-Z24',
    nameEn: 'Sheet metal, zinc',
    nameAr: 'صاج شينكو زنك (ملون)',
    categoryEn: 'Steel Sheets & Plates',
    categoryAr: 'صاج وألواح حديد',
    categorySlug: 'sheets-plates',
    descriptionEn: 'Primesteelksa offers a wide range of corrugated Sheet metal and zinc options that are perfect for roofing and cladding applications. Our sheets are lightweight, durable, and available in a variety of colors and finishes to suit your specific needs.',
    descriptionAr: 'ألواح صاج حديد مموجة (شينكو مجلفن) ملونة لأسقف الهناجر والمنشآت. تتميز بخفة الوزن والمتانة وحماية ضد العوامل الجوية.',
    specsEn: { Coating: 'PREPAINTED', Color: 'WHITE', Shape: 'Corrugated / Wave Profile' },
    specsAr: { 'الطلاء': 'ملون مسبقاً (مدهون)', 'اللون': 'أبيض', 'الشكل': 'مموج / شينكو' },
    inStock: true,
    materialEn: 'Prepainted Galvanized Steel (Shinko)',
    materialAr: 'حديد مجلفن ملون مسبقاً (شينكو)',
    gradeEn: 'Commercial Roofing Grade',
    gradeAr: 'درجة تسقيف تجارية شينكو',
    image: '/images/products/newSheet metal, zinc.png',
    priceSAR: 6.04,
    longDescriptionEn: 'Our corrugated Sheet metal, zinc panels are a popular roofing and cladding material that offer exceptional structural strength, long-term durability, and a sleek appearance. They are made of lightweight materials that make them easy to install and maintain.',
    longDescriptionAr: 'تعد ألواح الصاج المموج (الشينكو) خياراً مثالياً لأعمال التسقيف وتغطية الجدران والجمالونات والهناجر والمستودعات لحمايتها من العوامل الجوية.',
    steelCoatings: ['PREPAINTED'],
    thicknessMm: [0.32, 0.35, 0.4, 0.5, 0.7],
    lengthsMm: [500, 1000, 1500, 1600, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 7750, 8000],
    colors: ['WHITE'],
    widthsMm: [1000],
    specificationsEn: [
      'Type: Prepainted corrugated sheet (Shinko).',
      'Thickness range: 0.32mm to 0.70mm.',
      'Lengths: Broad options starting from 0.5m to 8.0m.'
    ],
    specificationsAr: [
      'النوع: ألواح صاج شينكو مموجة مدهونة مسبقاً.',
      'نطاق السمك: من 0.32 ملم إلى 0.70 ملم.',
      'الأطوال المتاحة: خيارات واسعة تبدأ من 0.5 متر إلى 8.0 متر.'
    ],
    applicationsEn: [
      'Roofing for warehouses, hangers, agricultural sheds, and industrial factories.',
      'Boundary wall cladding, construction hoardings, and temporary partitions.'
    ],
    applicationsAr: [
      'تسقيف المستودعات، الهناجر، المنشآت الزراعية، والمصانع الصناعية.',
      'تغطية وكسوة أسوار المواقع الإنشائية، القواطع الجدارية المؤقتة، والأسوار الخارجية.'
    ]
  },
  {
    id: 'empty-square-iron',
    sku: 'PS-HOL-SQ25',
    nameEn: 'Empty square iron',
    nameAr: 'حديد مربع مفرغ (تيوب مربع)',
    categoryEn: 'Hollow Sections & Bars',
    categoryAr: 'حديد مفرغ ومبسط',
    categorySlug: 'hollow-sections',
    descriptionEn: 'High-quality steel square tubes (square hollow sections) are available in a wide range of sizes for construction, fabrication, and structural applications.',
    descriptionAr: 'تيوبات مربعة مفرغة من الحديد عالي الجودة متوفرة بمقاسات وسماكات متنوعة لأعمال الحدادة والإنشاءات والتصنيع.',
    specsEn: { Standard: 'ASTM A500 / EN 10219', Shape: 'Square Hollow Section (SHS)', Finish: 'Black Steel' },
    specsAr: { 'المواصفة': 'ASTM A500 / EN 10219', 'الشكل': 'تيوب مربع مفرغ (SHS)', 'التشطيب': 'حديد أسود خام' },
    inStock: true,
    materialEn: 'Square Hollow Section (SHS) Steel',
    materialAr: 'تيوبات حديد مربعة مفرغة',
    gradeEn: 'Grade A / Grade B',
    gradeAr: 'درجة A / درجة B',
    image: '/images/products/Empty square iron.webp',
    priceSAR: 13.58,
    longDescriptionEn: 'Our high-quality Empty square iron profiles are one of the most versatile and widely used structural steel solutions in construction and manufacturing. These tubes offer an excellent engineering combination of strength, long-term durability, and affordability, making them a superior choice for a vast range of structural, mechanical, and architectural applications.',
    longDescriptionAr: 'تعد التيوبات المربعة المفرغة خياراً ممتازاً لأعمال الإنشاءات والحدادة الخفيفة والمتوسطة، حيث تجمع بين القوة الهيكلية والوزن الخفيف وسهولة التشكيل واللحام.',
    heightsMm: [12, 16, 19, 20, 25, 30, 38, 40, 50, 60, 70, 80, 100, 120],
    thicknessMm: [1, 1.1, 1.15, 1.2, 1.4, 1.45, 1.5, 1.8, 2, 2.8, 3, 4, 5],
    widthsMm: [12, 16, 19, 20, 25, 30, 38, 40, 50, 60, 70, 80, 100, 120],
    specificationsEn: [
      'Standard: ASTM A500 or EN 10219 cold-formed structural steel.',
      'Sizing: Wide selection of dimensions from 12x12mm up to 120x120mm.',
      'Thickness range: 1.0mm to 5.0mm.'
    ],
    specificationsAr: [
      'المواصفة: حديد إنشائي مشكل على البارد متوافق مع ASTM A500 أو EN 10219.',
      'الأحجام: تشكيلة واسعة من المقاسات تبدأ من 12x12 ملم وتصل إلى 120x120 ملم.',
      'نطاق السمك: من 1.0 ملم إلى 5.0 ملم.'
    ],
    applicationsEn: [
      'Framing, structures, window/door guards, gates, and handrails.',
      'Structural supports, machinery guards, racks, modern furniture, and shelving.'
    ],
    applicationsAr: [
      'التأطير، الهياكل المعدنية، واقيات النوافذ والأبواب، البوابات والدرابزينات.',
      'الدعامات الإنشائية، أغطية وحماية الآلات، الأرفف، وتصنيع الأثاث الحديث.'
    ]
  },
  {
    id: 'empty-rectangular-iron',
    sku: 'PS-HOL-RE26',
    nameEn: 'Empty rectangular iron',
    nameAr: 'حديد مستطيل مفرغ (تيوب مستطيل)',
    categoryEn: 'Hollow Sections & Bars',
    categoryAr: 'حديد مفرغ ومبسط',
    categorySlug: 'hollow-sections',
    descriptionEn: 'Primesteelksa offers a range of steel rectangular tubes suitable for various construction and industrial applications. Our steel rectangular tubes are strong, durable, and resistant to corrosion, making them ideal for use in harsh environments. Choose from a range of sizes and thicknesses to suit your specific needs.',
    descriptionAr: 'تيوبات مستطيلة مفرغة مناسبة لمختلف تطبيقات البناء والصناعة. تتميز بالقوة والمتانة والمظهر الجمالي المنتظم.',
    specsEn: { Standard: 'ASTM A500 / SASO', Shape: 'Rectangular Hollow Section (RHS)', Finish: 'Black Steel / Oiled' },
    specsAr: { 'المواصفة': 'ASTM A500 / ساسو', 'الشكل': 'تيوب مستطيل مفرغ (RHS)', 'التشطيب': 'حديد أسود / مطلي بالزيت' },
    inStock: true,
    materialEn: 'Rectangular Hollow Section (RHS) Steel',
    materialAr: 'حديد تيوبات مستطيلة مفرغة',
    gradeEn: 'Grade B',
    gradeAr: 'درجة B',
    image: '/images/products/Empty rectangular iron.webp',
    priceSAR: 18.11,
    longDescriptionEn: 'Our Empty rectangular iron sections are a versatile and durable material used in a variety of construction and industrial applications. It is known for its strength, durability, and resistance to corrosion, making it an ideal material for structures that need to withstand harsh environmental conditions.',
    longDescriptionAr: 'التيوبات المستطيلة المفرغة هي مقاطع حديد إنشائية تتميز بصلابة عالية في اتجاه الانحناء الأقوى، وهي مثالية للبوابات الحديثة والدعامات الخفيفة واللوحات الخارجية والحدادة الإنشائية.',
    heightsMm: [15, 20, 25, 30, 40, 50, 60],
    thicknessMm: [1, 1.1, 1.15, 1.18, 1.2, 1.4, 1.5, 1.8, 2, 3, 4, 5],
    widthsMm: [30, 40, 50, 60, 80, 100, 120],
    specificationsEn: [
      'Standard: Conforms to ASTM A500 / SASO requirements.',
      'Sizing: Widths from 30mm to 120mm, heights from 15mm to 60mm.',
      'Thickness options: 1.0mm up to 5.0mm.'
    ],
    specificationsAr: [
      'المواصفة: التوافق التام مع متطلبات ASTM A500 / ساسو.',
      'الأحجام: عرض من 30 ملم إلى 120 ملم، وارتفاع من 15 ملم إلى 60 ملم.',
      'خيارات السمك: من 1.0 ملم إلى 5.0 ملم.'
    ],
    applicationsEn: [
      'Steel door frames, gates, partition walls, and modern building enclosures.',
      'Trailer chassis, supporting posts, structural racks, industrial walkways, and framing.'
    ],
    applicationsAr: [
      'فريمات الأبواب الحديدية، البوابات، القواطع الجدارية، وتغطية المباني الحديثة.',
      'هياكل المقطورات، أعمدة الدعم الخفيفة، أرفف التخزين الإنشائية، والممرات الهيكلية.'
    ]
  },
  {
    id: 'iron-pipes',
    sku: 'PS-PIP-IR27',
    nameEn: 'Iron pipes',
    nameAr: 'أنابيب ومواسير حديدية سوداء',
    categoryEn: 'Pipes & Tubes',
    categoryAr: 'أنابيب ومواسير حديدية',
    categorySlug: 'pipes-tubes',
    descriptionEn: 'Explore our wide range of Steel Round Tubes, available in various sizes (1/2" to 16") and wall thicknesses. Manufactured to ASTM, EN, and JIS standards, ideal for construction & industrial use. Includes MTCs for quality.',
    descriptionAr: 'مواسير دائرية سوداء متوفرة بمقاسات مختلفة من 1/2 بوصة إلى 16 بوصة وسماكات جدارية متنوعة. مطابقة لمعايير ASTM و EN و JIS.',
    specsEn: { Standard: 'ASTM A53 / EN 10025 / JIS G3131', Type: 'Welded / Seamless round tube', Finish: 'Raw Black' },
    specsAr: { 'المواصفة': 'ASTM A53 / EN 10025 / JIS G3131', 'النوع': 'مواسير دائرية ملحمة / سيمبلس', 'التشطيب': 'أسود خام' },
    inStock: true,
    materialEn: 'Black Steel Circular Tube',
    materialAr: 'مواسير حديد دائرية سوداء',
    gradeEn: 'ASTM A53 / JIS G3131',
    gradeAr: 'ASTM A53 / JIS G3131',
    image: '/images/products/Iron pipes.webp',
    priceSAR: 12.08,
    longDescriptionEn: 'Discover our extensive range of high-quality Iron pipes, designed to meet the diverse demands of construction, structural, industrial, and general fabrication projects. Manufactured to strict international standards such as ASTM A53, ASTM A500, EN10025, and JIS G 3131, our Iron pipes offer exceptional strength, durability, and mechanical versatility.',
    longDescriptionAr: 'مواسير الحديد الدائرية السوداء مصممة هندسياً للعديد من الأغراض الصناعية والإنشائية، وتأتي مع شهادات جودة كاملة للتوافق مع اختبارات الضغط والشد.',
    thicknessMm: [1, 1.2, 1.4, 1.45, 1.5, 1.8, 2, 2.8, 3, 4.8],
    lengthsMm: [6000, 13410],
    diametersInch: ['1/2', '3/4', '1', '1 1/4', '1 1/2', '2', '2 1/2', '3', '4', '6', '8'],
    specificationsEn: [
      'Standard compliance: ASTM A53, ASTM A500, EN 10025, JIS G3131.',
      'Sizing: Nominal diameters 1/2" up to 8" (available up to 16" on request).',
      'Lengths: Standard 6m and custom 13.4m options.'
    ],
    specificationsAr: [
      'مطابقة المعايير: ASTM A53, ASTM A500, EN 10025, JIS G3131.',
      'الأحجام: أقطار اسمية من 1/2 بوصة إلى 8 بوصة (متوفر حتى 16 بوصة عند الطلب).',
      'الأطوال: أطوال قياسية 6 متر، بالإضافة إلى خيارات 13.4 متر.'
    ],
    applicationsEn: [
      'Fluid transportation (water, gas), industrial pipeline piping, fire fighting setups.',
      'Structural columns, scaffolding frameworks, structural steel structures, and handrails.'
    ],
    applicationsAr: [
      'نقل السوائل والمياه والغاز، خطوط التمديدات الصناعية، وأنظمة إطفاء الحريق.',
      'الأعمدة الإنشائية، السقالات، أعمال التشييد المعدنية، والدرابزينات الدائرية.'
    ]
  },
  {
    id: 'full-square-iron',
    sku: 'PS-BAR-SQ28',
    nameEn: 'Full square iron',
    nameAr: 'حديد مربع مصمت (مليان)',
    categoryEn: 'Hollow Sections & Bars',
    categoryAr: 'حديد مفرغ ومبسط',
    categorySlug: 'hollow-sections',
    descriptionEn: 'Primesteelksa offers high-quality Full square iron bars that are manufactured with precision to meet industry standards. The bars are corrosion-resistant, durable, and can withstand heavy loads and pressure, making them an ideal choice for various construction and manufacturing applications.',
    descriptionAr: 'قضبان حديد مربعة مصمتة (مليانة) عالية الجودة تصنع بدقة لتحمل الضغوط العالية والأحمال الثقيلة، مثالية للتطبيقات الإنشائية والزخرفية.',
    specsEn: { Shape: 'Solid Square Bar', Finish: 'Hot Rolled / Black Steel', Durability: 'High pressure resistance' },
    specsAr: { 'الشكل': 'قضيب مربع مصمت', 'التشطيب': 'مدرفل على الساخن / حديد أسود', 'المتانة': 'تحمل عالي للضغط' },
    inStock: true,
    materialEn: 'Solid Carbon Steel Bar',
    materialAr: 'حديد صلب مصمت مربع',
    gradeEn: 'ASTM A36 / Commercial Grade',
    gradeAr: 'ASTM A36 / درجة تجارية',
    image: '/images/products/Full square iron.webp',
    priceSAR: 10.74,
    longDescriptionEn: 'Our Full square iron profiles are a highly versatile and durable solid material used in various critical construction applications. It is known for its excellent tensile strength, structural toughness, and baseline corrosion resistance, making it an ideal choice for heavy-duty applications across the industry.',
    longDescriptionAr: 'تعد قضبان المربع المصمت (حديد المربعات) مكوناً صلباً فائق المتانة لأعمال الشبك الواقي للنوافذ والمكينات والحدادة الزخرفية الثقيلة.',
    heightsMm: [8, 10, 12, 14, 16, 20, 30],
    widthsMm: [8, 10, 12, 14, 16, 20, 30],
    specificationsEn: [
      'Product Type: Solid Square Iron Bar (Full Square).',
      'Width x Height range: 8x8mm to 30x30mm.',
      'Material: Structural mild carbon steel.'
    ],
    specificationsAr: [
      'نوع المنتج: قضيب حديد مربع مصمت (مليان).',
      'أبعاد المقطع: من 8x8 ملم إلى 30x30 ملم.',
      'المادة: حديد كربوني إنشائي مطاوع.'
    ],
    applicationsEn: [
      'Blacksmithing, ornamental window grids, security gates, and security fences.',
      'Machinery components, keys, axles, structural joints, and industrial brackets.'
    ],
    applicationsAr: [
      'أعمال الحدادة الزخرفية، حماية النوافذ (شبوك)، الأبواب والأسوار الأمنية.',
      'مكونات الآلات والماكينات، محاور التركيب، المفاصل الهيكلية، والزوايا الإنشائية.'
    ]
  },
  {
    id: 'plain-simplified-iron',
    sku: 'PS-BAR-FL29',
    nameEn: 'Plain, simplified iron',
    nameAr: 'حديد مبسط (خوص حديد)',
    categoryEn: 'Hollow Sections & Bars',
    categoryAr: 'حديد مفرغ ومبسط',
    categorySlug: 'hollow-sections',
    descriptionEn: 'Primesteelksaa offers high-quality steel flat bars that are strong, durable, and easy to use. Our flat bars are available in a variety of sizes and thicknesses and are suitable for a range of applications, including construction, manufacturing, and automotive industries.',
    descriptionAr: 'حديد مبسط (خوص حديد) عالي الجودة يتميز بالسهولة الفائقة في القطع واللحام والثني، متوفر بسماكات وعروض متنوعة.',
    specsEn: { Shape: 'Steel Flat Bar', Standard: 'ASTM A36', Process: 'Hot Rolled' },
    specsAr: { 'الشكل': 'خوص حديد مبسط', 'المواصفة': 'ASTM A36', 'طريقة الصنع': 'مدرفل على الساخن' },
    inStock: true,
    materialEn: 'Mild Steel Flat Bar',
    materialAr: 'خوص حديد مطاوع مبسط',
    gradeEn: 'ASTM A36',
    gradeAr: 'ASTM A36',
    image: '/images/products/Plain simplified iron.webp',
    priceSAR: 3.62,
    longDescriptionEn: 'Our plain, simplified iron flat bars are one of the most versatile and widely used forms of steel products. They are often used in construction and industrial applications due to their exceptional strength, structural durability, and ease of use on-site.',
    longDescriptionAr: 'تعد خوص الحديد (المبسط) من أكثر المنتجات الحديدية انتشاراً، وتستخدم للربط بين الهياكل وصناعة الدعامات والأقواس في قطاعات التشييد والصناعة.',
    thicknessMm: [2.8, 3, 4, 4.5, 5, 6, 8, 10, 12, 15, 16, 18, 20],
    lengthsMm: [4000, 6000],
    widthsMm: [11, 12, 15, 16, 18, 19, 20, 24, 25, 28, 30, 38, 40, 50, 60, 65, 70, 75, 80, 100, 150, 200],
    specificationsEn: [
      'Product Type: Mild Steel Flat Bars (Plain Simplified Iron).',
      'Thickness range: 2.8mm up to 20mm.',
      'Width range: 11mm up to 200mm.'
    ],
    specificationsAr: [
      'نوع المنتج: خوص حديد مبسط (حديد مسطح سادة).',
      'نطاق السمك: من 2.8 ملم إلى 20 ملم.',
      'نطاق العرض: من 11 ملم إلى 200 ملم.'
    ],
    applicationsEn: [
      'Structural joints, wall brackets, floor grating supports, and steel plates.',
      'General blacksmithing, framing for doors/gates, and fabrication of brackets.'
    ],
    applicationsAr: [
      'المفاصل الإنشائية، حوامل الجدران، تدعيم أرضيات الشبك، والصفائح المعدنية.',
      'أعمال الحدادة العامة، إطارات الأبواب والبوابات، وتصنيع زوايا التثبيت.'
    ]
  },
  {
    id: 'local-reinforcing-steel',
    sku: 'PS-RE-L30',
    nameEn: 'Local reinforcing steel',
    nameAr: 'حديد تسليح محلي (الأسعد / وطني)',
    categoryEn: 'Reinforcing Steel (Rebar)',
    categoryAr: 'حديد تسليح للبناء',
    categorySlug: 'reinforcing-steel',
    descriptionEn: 'Alssad Steel (Riyadh) supplies reinforcing bars (10–20 mm) and steel billets for construction. Locally manufactured with ISO management systems and the Saudi Quality Mark.',
    descriptionAr: 'حديد تسليح الأسعد (الرياض) لتسليح البناء والأساسات. مصنع محلياً بالكامل ومطابق لمعايير الأيزو ويحمل علامة الجودة السعودية.',
    specsEn: { Standard: 'ASTM A615 Grade 60', Manufacturer: 'Alssad Steel (Riyadh)', Certification: 'Saudi Quality Mark' },
    specsAr: { 'المواصفة': 'ASTM A615 الدرجة 60', 'المصنع': 'حديد الأسعد (الرياض)', 'الشهادات': 'علامة الجودة السعودية' },
    inStock: true,
    materialEn: 'Local Deformed Rebar',
    materialAr: 'حديد تسليح مشرشر محلي',
    gradeEn: 'ASTM A615 Grade 60',
    gradeAr: 'درجة 60 ASTM A615',
    image: '/images/products/Local reinforcing steel.webp',
    priceSAR: 3441.18,
    longDescriptionEn: 'Built with absolute regional compliance using premium Local reinforcing steel. Produced by Alssad Steel For Industry (Riyadh), this product line features high-quality reinforcing bars and steel billets engineered specifically for demanding construction and industrial applications.',
    longDescriptionAr: 'يتميز حديد التسليح المحلي (حديد الأسعد بالرياض) بالتوافق الكامل مع كود البناء السعودي SBC، ويقدم أداء ممتازاً للصب الخرساني والأساسات الإنشائية.',
    groupedItems: [
      { name: 'WIRE-DRAWN REINFORCING BAR Ø8MM × 6M | GRADE 40', price: 4709.25 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø8MM × 12M | GRADE 40', price: 3682.00 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø7.5MM × 6M | GRADE 40', price: 3622.00 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø9.5MM × 12M | GRADE 40', price: 3682.88 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø10MM × 12M | GRADE 40', price: 3924.38 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø8.5MM × 6M | GRADE 40', price: 4709.45 },
      { name: 'ALSAAD STEEL REBAR Ø12MM × 12M | ASTM A615 GRADE 60', price: 3441.18 },
      { name: 'ALSAAD STEEL REBAR Ø14MM × 12M | ASTM A615 GRADE 60', price: 3441.18 },
      { name: 'ALSAAD STEEL REBAR Ø16MM × 12M | ASTM A615 GRADE 60', price: 3441.18 },
      { name: 'ALSAAD STEEL REBAR Ø18MM × 12M | ASTM A615 GRADE 60', price: 3441.18 },
      { name: 'ALSAAD STEEL REBAR Ø20MM × 12M | ASTM A615 GRADE 60', price: 3441.18 },
      { name: 'ALSAAD STEEL REBAR Ø25MM × 12M | ASTM A615 GRADE 60', price: 3441.18 }
    ],
    specificationsEn: [
      'Manufacturer: Alssad Steel for Industry (Riyadh).',
      'Standards: ISO 9001 and Saudi Quality Mark certified.',
      'Sizing: Rebars (10mm - 25mm) and wire-drawn bars.'
    ],
    specificationsAr: [
      'الجهة المصنعة: شركة حديد الأسعد للصناعة (الرياض).',
      'المواصفات: حاصل على نظام إدارة الجودة ISO وعلامة الجودة السعودية.',
      'الأحجام: أسياخ تسليح (10 ملم - 25 ملم) وأسلاك سحب.'
    ],
    applicationsEn: [
      'Reinforcement in concrete columns, beams, slabs, and shear walls.',
      'Commercial residential frameworks and local infrastructure projects.'
    ],
    applicationsAr: [
      'تسليح الأعمدة الخرسانية، الجسور، الأسقف، والجدران الخرسانية القصية.',
      'هياكل المباني السكنية والتجارية ومشاريع التشييد المحلية.'
    ]
  },
  {
    id: 'smooth-twisted-iron',
    sku: 'PS-BAR-ST32',
    nameEn: 'Smooth twisted iron',
    nameAr: 'حديد تسليح مبروم ناعم (كانات)',
    categoryEn: 'Reinforcing Steel (Rebar)',
    categoryAr: 'حديد تسليح للبناء',
    categorySlug: 'reinforcing-steel',
    descriptionEn: 'Primesteelksa offers high-quality Smooth twisted iron bars that are highly versatile and suitable for a wide range of applications due to their strength, durability, and ductility. Our steel round bars are made from premium-grade raw materials, ensuring durability and longevity.',
    descriptionAr: 'أسياخ حديد دائرية ناعمة (حديد كانات) بجودة عالية، تتميز بالقابلية الممتازة للثني والتشكيل، مثالية للكانات الخرسانية الحلقية والشبكات.',
    specsEn: { Shape: 'Smooth Round Bar', Ductility: 'High (Easy Bending)', Connection: 'Smooth Surface' },
    specsAr: { 'الشكل': 'قضيب دائري ناعم', 'القابلية للتشكيل': 'مرونة عالية للثني', 'التوصيل': 'سطح أملس ناعم' },
    inStock: true,
    materialEn: 'Mild Steel Round Bar',
    materialAr: 'سيخ حديد دائري ناعم',
    gradeEn: 'Grade 40 / SR250',
    gradeAr: 'درجة 40 / SR250',
    image: '/images/products/Smooth twisted iron.webp',
    priceSAR: 8.72,
    longDescriptionEn: 'Our Smooth twisted iron bars are perfect for various industrial and construction applications. Made from premium-grade raw materials, these cylindrical profiles ensure exceptional structural durability and a long service lifecycle.',
    longDescriptionAr: 'تعد أسياخ الكانات (الحديد الناعم) مكوناً محورياً لربط أسياخ التسليح المشرشرة داخل الهياكل الخرسانية والأعمدة وتوفير ثبات متكامل للقفص الحديدي.',
    diametersMm: [8, 10, 12, 14, 16, 20, 25, 30, 32],
    specificationsEn: [
      'Shape: Smooth circular cross-section.',
      'Sizes: Diameters from 8mm up to 32mm.',
      'Material: Ductile mild steel.'
    ],
    specificationsAr: [
      'الشكل: مقطع دائري أملس بدون شرشرة.',
      'الأحجام: أقطار تتراوح من 8 ملم إلى 32 ملم.',
      'المادة: حديد مطاوع مرن وسهل الثني.'
    ],
    applicationsEn: [
      'Fabrication of concrete column stirrups (Kanalat) and beam ties.',
      'Steel dowel pins, structural mesh ties, and light metal grills.'
    ],
    applicationsAr: [
      'تصنيع الكانات الخرسانية الدائرية والمستطيلة للأعمدة والجسور.',
      'أسياخ الربط (دوالز)، روابط الشبك الهيكلي، وشبكات الحماية المعدنية الخفيفة.'
    ]
  },
  {
    id: 'rabigh-reinforcing-steel',
    sku: 'PS-RE-RS34',
    nameEn: 'Reinforcing steel from Rabigh Steel Plant',
    nameAr: 'حديد تسليح مصنع حديد رابغ',
    categoryEn: 'Reinforcing Steel (Rebar)',
    categoryAr: 'حديد تسليح للبناء',
    categorySlug: 'reinforcing-steel',
    descriptionEn: 'Rabigh Steel Factory (est. 2015) produces high-quality rebar and billets from its Rabigh plant with HQ in Jeddah. Certified to ISO 9001/14001/45001/50001 and Saudi Quality Mark (ASTM A615M). Contact the commercial team for datasheets and test certificates.',
    descriptionAr: 'حديد تسليح عالي الجودة من مصنع رابغ للصلب (جدة/رابغ). حاصل على شهادات الأيزو وعلامة الجودة السعودية ASTM A615M.',
    specsEn: { Standard: 'ASTM A615M / SASO', Origin: 'SAUDI ARABIA (RABIGH)', Manufacturer: 'Rabigh Steel Factory', QualityMark: 'Saudi Quality Mark' },
    specsAr: { 'المواصفة': 'ASTM A615M / ساسو', 'المنشأ': 'المملكة العربية السعودية (رابغ)', 'المصنع': 'مصنع حديد رابغ', 'علامة الجودة': 'علامة الجودة السعودية' },
    inStock: true,
    materialEn: 'High-Tensile TMT Steel Rebar',
    materialAr: 'حديد تسليح مشرشر معالج حرارياً (TMT)',
    gradeEn: 'ASTM A615 Grade 60',
    gradeAr: 'درجة 60 ASTM A615',
    image: '/images/products/Reinforcing steel from Rabigh Steel Plant.webp',
    priceSAR: 3441.38,
    longDescriptionEn: 'Incorporate certified engineering excellence into your project frameworks with premium reinforcing steel from Rabigh Steel Plant. Produced by Rabigh Steel Factory, this high-performance rebar and billet range has been supplying the Kingdom with market-leading structural products since manufacturing commenced at full scale.',
    longDescriptionAr: 'يقدم حديد تسليح رابغ قوة شد فائقة وملائمة عالية للمباني الصناعية ومشاريع جدة ومكة والمنطقة الغربية، مصنع طبقاً لأحدث التقنيات المعدنية.',
    groupedItems: [
      { name: 'WIRE-DRAWN REINFORCING BAR Ø6MM × 6M | GRADE 40', price: 4709.25 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø8MM × 6M | GRADE 40', price: 3864.00 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø7.5MM × 6M | GRADE 40', price: 3622.50 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø9.5MM × 12M | GRADE 40', price: 3682.88 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø10MM × 12M | GRADE 40', price: 3924.38 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø5.5MM × 6M | GRADE 40', price: 4769.63 },
      { name: 'RABIGH STEEL REBAR Ø12MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'RABIGH STEEL REBAR Ø14MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'RABIGH STEEL REBAR Ø16MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'RABIGH STEEL REBAR Ø18MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'RABIGH STEEL REBAR Ø20MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'RABIGH STEEL REBAR Ø25MM × 12M | ASTM A615 GRADE 60', price: 3441.38 }
    ],
    specificationsEn: [
      'Established: Rabigh Steel Factory (operating since 2015).',
      'Certifications: ISO 9001, ISO 14001, ISO 45001, ISO 50001.',
      'Sizing: Rebar size options 12mm up to 25mm in 12m lengths.'
    ],
    specificationsAr: [
      'التأسيس: مصنع حديد رابغ (يعمل منذ عام 2015).',
      'الشهادات: حاصل على شهادات الأيزو 9001، 14001، 45001، 50001.',
      'الأحجام: خيارات مقاسات حديد التسليح من 12 ملم إلى 25 ملم بطول 12 متراً.'
    ],
    applicationsEn: [
      'Heavy structural concrete structures in urban and commercial projects.',
      'Industrial infrastructure, factories, civil foundations, and retaining walls.'
    ],
    applicationsAr: [
      'الهياكل الخرسانية الإنشائية الثقيلة في المشاريع الحضرية والتجارية.',
      'البنية التحتية الصناعية، المصانع، الأساسات المدنية، وجدران الدعم.'
    ]
  },
  {
    id: 'agig-reinforcing-steel',
    sku: 'PS-RE-AG35',
    nameEn: 'Reinforcing steel from Agig',
    nameAr: 'حديد تسليح مصنع العقيق',
    categoryEn: 'Reinforcing Steel (Rebar)',
    categoryAr: 'حديد تسليح للبناء',
    categorySlug: 'reinforcing-steel',
    descriptionEn: 'Ajeej Steel Rebar offers premium SASO ASTM A615 Gr 60 steel bars for durable and high-strength concrete reinforcement.',
    descriptionAr: 'حديد تسليح العقيق (حديد أجيج) يوفر أسياخ تسليح ممتازة وحاصلة على علامة ساسو ومطابقة لمواصفة ASTM A615 درجة 60 لتدعيم الخرسانة.',
    specsEn: { Standard: 'SASO ASTM A615 Grade 60', Manufacturer: 'Ajeej Steel', Origin: 'SAUDI ARABIA', Application: 'High-strength Reinforcement' },
    specsAr: { 'المواصفة': 'SASO ASTM A615 الدرجة 60', 'المصنع': 'صلب أجيج / العقيق', 'المنشأ': 'المملكة العربية السعودية', 'الاستخدام': 'تسليح عالي المقاومة' },
    inStock: true,
    materialEn: 'Ajeej High-Tensile Rebar',
    materialAr: 'حديد تسليح عالي الشد من مصنع أجيج',
    gradeEn: 'ASTM A615 Grade 60',
    gradeAr: 'درجة 60 ASTM A615',
    image: '/images/products/Reinforcing steel from Agig.webp',
    priceSAR: 3441.38,
    longDescriptionEn: 'Provide a rock-solid structural foundation for your developments using premium reinforcing steel from Agig. Manufactured using cutting-edge metallurgical technology, Ajeej Steel Rebar adheres strictly to international standards such as SASO ASTM A615 Gr 60.',
    longDescriptionAr: 'يقدم حديد تسليح العقيق (أجيج للصلب) أساساً هيكلياً متيناً للبناء السكني والصناعي بفضل التصنيع بأحدث المعدات المعدنية المتطورة.',
    groupedItems: [
      { name: 'WIRE-DRAWN REINFORCING BAR Ø6MM × 6M | GRADE 40', price: 4709.25 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø8MM × 6M | GRADE 40', price: 3864.00 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø7.5MM × 6M | GRADE 40', price: 3622.50 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø9.5MM × 12M | GRADE 40', price: 3682.88 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø10MM × 12M | GRADE 40', price: 3924.38 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø5.5MM × 6M | GRADE 40', price: 4769.63 },
      { name: 'AJEEJ STEEL REBAR Ø12MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'AJEEJ STEEL REBAR Ø14MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'AJEEJ STEEL REBAR Ø16MM × 12M | ASTM A615 GRADE 60', price: 3441.38 }
    ],
    specificationsEn: [
      'Standard: Full compliance with SASO ASTM A615 Grade 60.',
      'Sizing: Complete range of diameter sizes from 12mm to 16mm (other sizes on request).'
    ],
    specificationsAr: [
      'المواصفة: التوافق الكامل مع معايير ساسو ASTM A615 الدرجة 60.',
      'الأحجام: أقطار تسليح كاملة متوفرة من 12 ملم إلى 16 ملم.'
    ],
    applicationsEn: [
      'Heavy concrete structural pours, bridge piers, columns, and foundations.',
      'Residential housing blocks, villas, and industrial framing builds.'
    ],
    applicationsAr: [
      'أعمال صب الخرسانة الإنشائية الثقيلة، أعمدة الجسور، الأساسات العميقة.',
      'المجمعات السكنية، الفلل الفاخرة، والهياكل المعدنية الصناعية.'
    ]
  },
  {
    id: 'hill-reinforcing-steel',
    sku: 'PS-RE-HL36',
    nameEn: 'Hill reinforcement steel',
    nameAr: 'حديد تسليح التلال',
    categoryEn: 'Reinforcing Steel (Rebar)',
    categoryAr: 'حديد تسليح للبناء',
    categorySlug: 'reinforcing-steel',
    descriptionEn: 'Telal Steel Rebar offers superior strength and compliance with ASTM A615 and BS 4449 standards, ensuring reliability for modern construction needs.',
    descriptionAr: 'حديد تسليح التلال (حديد تلال للصلب) يوفر قوة فائقة وتوافقاً تاماً مع معايير ASTM A615 و BS 4449 لضمان أمان الهياكل الإنشائية.',
    specsEn: { Standard: 'ASTM A615 / BS 4449', Manufacturer: 'Telal Steel (Telal)', Origin: 'SAUDI ARABIA', Application: 'Concrete Framing' },
    specsAr: { 'المواصفة': 'ASTM A615 / BS 4449', 'المصنع': 'حديد التلال (تلال)', 'المنشأ': 'المملكة العربية السعودية', 'الاستخدام': 'صب وهيكل الخرسانة' },
    inStock: true,
    materialEn: 'Telal Carbon Steel Rebar',
    materialAr: 'حديد تسليح كربوني من مصنع التلال',
    gradeEn: 'ASTM A615 Grade 60 / BS 4449',
    gradeAr: 'درجة 60 ASTM A615 / BS 4449',
    image: '/images/products/Hill reinforcement steel.webp',
    priceSAR: 3441.38,
    longDescriptionEn: 'Ensure unyielding structural integrity for your next development with premium Hill reinforcement steel. Manufactured in Saudi Arabia by Telal Steel, this high-performance rebar line is a premium reinforcement solution recognized across the market for its high durability, precise dimensional specifications, and absolute adherence to global engineering standards.',
    longDescriptionAr: 'حديد تسليح التلال مصنع بأحدث التقنيات الوطنية، ويتميز بمرونة عالية لمقاومة التشققات وقدرة ثني فائقة للكانات والأسقف والخرسانة المسلحة.',
    groupedItems: [
      { name: 'WIRE-DRAWN REINFORCING BAR Ø6MM × 6M | GRADE 40', price: 4709.25 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø8MM × 6M | GRADE 40', price: 3864.00 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø7.5MM × 6M | GRADE 40', price: 3622.50 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø9.5MM × 12M | GRADE 40', price: 3682.88 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø10MM × 12M | GRADE 40', price: 3924.38 },
      { name: 'WIRE-DRAWN REINFORCING BAR Ø5.5MM × 6M | GRADE 40', price: 4769.63 },
      { name: 'TILAL STEEL REBAR Ø12MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'TILAL STEEL REBAR Ø14MM × 12M | ASTM A615 GRADE 60', price: 3441.38 },
      { name: 'TILAL STEEL REBAR Ø16MM × 12M | ASTM A615 GRADE 60', price: 3441.38 }
    ],
    specificationsEn: [
      'Brand / Mill: Telal Steel (Telal Steel Rebar).',
      'Standards: Adheres to ASTM A615 and British BS 4449 standards.',
      'Sizing: Rebars in sizes 12mm, 14mm, and 16mm.'
    ],
    specificationsAr: [
      'العلامة التجارية: حديد التلال (تلال للصلب).',
      'المواصفات: مطابقة كاملة لمواصفات ASTM A615 والمواصفات البريطانية BS 4449.',
      'الأحجام: أسياخ تسليح مقاسات 12 ملم، 14 ملم، و 16 ملم.'
    ],
    applicationsEn: [
      'Reinforced concrete structures, multi-story buildings, columns, and foundations.',
      'Infrastructure projects demanding certified high tensile rebars.'
    ],
    applicationsAr: [
      'الهياكل الخرسانية المسلحة، المباني متعددة الطوابق، الأعمدة، والأساسات.',
      'مشاريع البنية التحتية التي تتطلب أسياخ تسليح معتمدة عالية الشد.'
    ]
  },
  {
    id: 'epoxy-coated-rebar',
    sku: 'PS-RE-EP37',
    nameEn: 'Epoxy-coated steel reinforcing bars',
    nameAr: 'حديد تسليح معزول بالإيبوكسي (سابك/حديد)',
    categoryEn: 'Reinforcing Steel (Rebar)',
    categoryAr: 'حديد تسليح للبناء',
    categorySlug: 'reinforcing-steel',
    descriptionEn: 'Epoxy-coated steel rebar is a highly durable and corrosion-resistant type of reinforcing bar that is widely used in construction projects. It offers low maintenance and high strength, making it a popular choice for various applications.',
    descriptionAr: 'حديد تسليح مغطى بالإيبوكسي عازل تماماً ومقاوم للصدأ من إنتاج حديد سابك. خيار معتمد لحماية الأساسات الإنشائية من المياه الجوفية والأملاح.',
    specsEn: { Coating: 'Epoxy Coated (FBE)', Standard: 'ASTM A775 Grade 60', Manufacturer: 'HADEED / SABIC', CorrosionResistance: 'Extreme' },
    specsAr: { 'الطلاء': 'معزول إيبوكسي (FBE)', 'المواصفة': 'ASTM A775 الدرجة 60', 'المصنع': 'حديد / سابك', 'مقاومة الصدأ': 'قصوى' },
    inStock: true,
    materialEn: 'Epoxy Coated Steel Rebar',
    materialAr: 'حديد تسليح معزول بالإيبوكسي',
    gradeEn: 'ASTM A775 Grade 60',
    gradeAr: 'درجة 60 ASTM A775',
    image: '/images/products/Epoxy-coated steel reinforcing bars.webp',
    priceSAR: 4588.50,
    longDescriptionEn: 'Protect your concrete infrastructure from long-term degradation with our premium Epoxy-coated steel reinforcing bars. This specialized type of reinforcement is meticulously coated with a high-performance protective epoxy layer to guard against advanced corrosion and drastically increase overall structural lifespan.',
    longDescriptionAr: 'يحمي حديد التسليح المعزول بالإيبوكسي من سابك أساسات الخرسانة من الرطوبة والأملاح ورطوبة التربة في المناطق القريبة من البحر والمياه الجوفية.',
    groupedItems: [
      { name: 'HADEED EPOXY REBAR Ø8MM × 12M | ASTM A775 GRADE 60', price: 5131.88 },
      { name: 'HADEED EPOXY REBAR Ø10MM × 12M | ASTM A775 GRADE 60', price: 5011.13 },
      { name: 'HADEED EPOXY REBAR Ø12MM × 12M | ASTM A775 GRADE 60', price: 4709.25 },
      { name: 'HADEED EPOXY REBAR Ø14MM × 12M | ASTM A775 GRADE 60', price: 4648.88 },
      { name: 'HADEED EPOXY REBAR Ø16MM × 12M | ASTM A775 GRADE 60', price: 4588.50 },
      { name: 'HADEED EPOXY REBAR Ø18MM × 12M | ASTM A775 GRADE 60', price: 4588.50 },
      { name: 'HADEED EPOXY REBAR Ø20MM × 12M | ASTM A775 GRADE 60', price: 4588.50 },
      { name: 'HADEED EPOXY REBAR Ø25MM × 12M | ASTM A775 GRADE 60', price: 4588.50 },
      { name: 'HADEED EPOXY REBAR Ø32MM × 12M | ASTM A775 GRADE 60', price: 4588.50 }
    ],
    specificationsEn: [
      'Standard: ASTM A775 Grade 60 (Fusion Bonded Epoxy coating).',
      'Manufacturer: Hadeed SABIC.',
      'Diameter availability: 8mm up to 32mm in 12m lengths.'
    ],
    specificationsAr: [
      'المواصفة: ASTM A775 الدرجة 60 (طلاء إيبوكسي معالج حرارياً).',
      'الجهة المصنعة: حديد سابك.',
      'الأحجام المتاحة: من 8 ملم إلى 32 ملم وبطول 12 متراً.'
    ],
    applicationsEn: [
      'Foundations and columns in coastal zones, wastewater treatment plants, and marine structures.',
      'Bridge decks, underground retaining walls, and moisture-exposed structures.'
    ],
    applicationsAr: [
      'الأساسات والأعمدة في المناطق الساحلية، محطات الصرف، والمنشآت البحرية.',
      'أسطح الجسور، الجدران الاستنادية الأرضية، والمنشآت المعرضة للرطوبة الدائمة.'
    ]
  },
  {
    id: 'national-epoxy-rebar',
    sku: 'PS-RE-NE38',
    nameEn: 'National epoxy reinforcing steel',
    nameAr: 'حديد تسليح وطني معزول إيبوكسي',
    categoryEn: 'Reinforcing Steel (Rebar)',
    categoryAr: 'حديد تسليح للبناء',
    categorySlug: 'reinforcing-steel',
    descriptionEn: 'Locally coated national epoxy-coated reinforcing steel (SABIC / Hadeed certified). Formulated specifically to survive extreme GCC environment conditions, safeguarding building lifespans.',
    descriptionAr: 'حديد تسليح إيبوكسي وطني معتمد من سابك، مصنع لحماية المشاريع الإنشائية بالكامل من التآكل والرطوبة في منطقة الخليج العربي.',
    specsEn: { Standard: 'ASTM A775 Grade 60', Coating: 'National Epoxy Coated', Origin: 'SAUDI ARABIA', Application: 'Coastal Infrastructure' },
    specsAr: { 'المواصفة': 'ASTM A775 الدرجة 60', 'الطلاء': 'عزل إيبوكسي وطني', 'المنشأ': 'المملكة العربية السعودية', 'الاستخدام': 'البنية التحتية الساحلية' },
    inStock: true,
    materialEn: 'National Epoxy Coated Steel',
    materialAr: 'حديد معزول إيبوكسي وطني',
    gradeEn: 'ASTM A775 Grade 60',
    gradeAr: 'درجة 60 ASTM A775',
    image: '/images/products/National epoxy reinforcing steel.webp',
    priceSAR: 4528.13,
    longDescriptionEn: 'Upgrade your project\'s environmental defense with premium National epoxy reinforcing steel. Leveraging world-class manufacturing, Sabic steel rebar is produced under carefully controlled conditions by hot rolling and subsequent advanced heat treatment.',
    longDescriptionAr: 'حديد التسليح الإيبوكسي الوطني مصنع ومطلي في ظروف معملية خاضعة لأدق الفحوصات لضمان التماسك والسمك المطلوب لطبقة الإيبوكسي الواقية.',
    groupedItems: [
      { name: 'LOCAL EPOXY REBAR Ø10MM × 12M | ASTM A775 GRADE 60', price: 5011.13 },
      { name: 'LOCAL EPOXY REBAR Ø12MM × 12M | ASTM A775 GRADE 60', price: 4648.88 },
      { name: 'LOCAL EPOXY REBAR Ø14MM × 12M | ASTM A775 GRADE 60', price: 4588.50 },
      { name: 'LOCAL EPOXY REBAR Ø16MM × 12M | ASTM A775 GRADE 60', price: 4528.13 },
      { name: 'LOCAL EPOXY REBAR Ø18MM × 12M | ASTM A775 GRADE 60', price: 4528.13 },
      { name: 'LOCAL EPOXY REBAR Ø20MM × 12M | ASTM A775 GRADE 60', price: 4528.13 },
      { name: 'LOCAL EPOXY REBAR Ø25MM × 12M | ASTM A775 GRADE 60', price: 4528.13 }
    ],
    specificationsEn: [
      'Standard: ASTM A775 Grade 60.',
      'Sizing: Rebars in sizes 10mm to 25mm in standard 12-meter lengths.',
      'Origin: Proudly made and coated in KSA.'
    ],
    specificationsAr: [
      'المواصفة: معايير ASTM A775 الدرجة 60.',
      'الأحجام: أسياخ تسليح مقاسات 10 ملم إلى 25 ملم وبأطوال 12 متراً قياسية.',
      'المنشأ: صناعة وطلاء فخور في المملكة العربية السعودية.'
    ],
    applicationsEn: [
      'Underground structural elements, deep foundations, civil columns, and coastal developments.',
      'Precast concrete members exposed to harsh soils and high water table areas.'
    ],
    applicationsAr: [
      'العناصر الإنشائية تحت الأرض، الأساسات العميقة، الأعمدة المدنية، والمجمعات الساحلية.',
      'الخرسانة مسبقة الصنع المعرضة للتربة الملحية والمياه الجوفية الكثيفة.'
    ]
  },
  {
    id: 'cast-iron-mesh',
    sku: 'PS-MSH-CI39',
    nameEn: 'Cast iron mesh',
    nameAr: 'شبك حديد صب للخرسانة',
    categoryEn: 'Wire Mesh & Fencing',
    categoryAr: 'شبك حديد وأسوار',
    categorySlug: 'mesh-fencing',
    descriptionEn: 'Durable Steel Reinforcing Mesh for concrete strength and stability. Available in 5mm, 6mm, 8mm & 10mm sizes. Ideal for flooring, walls, and structural reinforcements.',
    descriptionAr: 'شبك حديد صب ملحم (ميش خرسانة) لتدعيم الأرضيات والأسقف الخرسانية. متوفر بسماكات ومقاسات شبكة مختلفة لضمان ثبات الأرضية.',
    specsEn: { Standard: 'Welded Wire Mesh Standard', Coating: 'None / Epoxy Coated', GridSize: '20x20 / 15x15 cm' },
    specsAr: { 'المواصفة': 'معيار شبك حديد ملحم للخرسانة', 'الطلاء': 'بدون طلاء / معزول إيبوكسي', 'مقاس المربع': '20x20 / 15x15 سم' },
    inStock: true,
    materialEn: 'Welded Wire Fabric / Reinforcing Mesh',
    materialAr: 'شبك حديد تسليح ملحم',
    gradeEn: 'Concrete Mesh Grade',
    gradeAr: 'درجة شبك الخرسانة الأرضية',
    image: '/images/products/cast iron mesh.webp',
    priceSAR: 33.81,
    longDescriptionEn: 'Our cast iron mesh is a high-quality welded wire fabric designed to significantly enhance the mechanical strength and structural stability of concrete pours. Engineered for material efficiency and long-term on-site durability, this cast iron mesh provides superior tensile strength and excellent load-bearing capabilities across various construction applications.',
    longDescriptionAr: 'يستخدم شبك الحديد الملحم (الميش) لتدعيم صبات النظافة الأرضية وأسقف المباني وأرضيات المستودعات لمنع التشرخات وتوزيع الأحمال بالتساوي.',
    steelCoatings: ['NONE', 'EPOXY COATED'],
    diametersMm: [4, 5, 6, 7, 7.5, 8, 10],
    gridSizeCm: ['20x20', '15x15'],
    lengthsMeters: [4, 4.5, 5],
    widthsMeters: [1.5, 2],
    specificationsEn: [
      'Mesh Wire Diameters: 4mm, 5mm, 6mm, 7mm, 7.5mm, 8mm, 10mm.',
      'Grid Openings: 20x20cm, 15x15cm.',
      'Coating: Available uncoated (black) or fusion-bonded epoxy coated.'
    ],
    specificationsAr: [
      'سماكات سلك الشبك: 4 ملم، 5 ملم، 6 ملم، 7 ملم، 7.5 ملم، 8 ملم، 10 ملم.',
      'أبعاد المربعات (الفتحة): 20x20 سم، 15x15 سم.',
      'الطلاء: متوفر أسود عادي أو معزول بطبقة إيبوكسي خضراء.'
    ],
    applicationsEn: [
      'Reinforcement for industrial floor slabs, parking driveways, and concrete pavements.',
      'Precast concrete walls, roof slabs, retaining structures, and pool walls.'
    ],
    applicationsAr: [
      'تدعيم أرضيات المصانع والمستودعات، مواقف السيارات، والممرات الخرسانية.',
      'الجدران مسبقة الصنع، صبات الأسقف، الهياكل الاستنادية، وجدران المسابح.'
    ]
  },
  {
    id: 'plumbing-item',
    sku: 'PS-PLM-P40',
    nameEn: 'Plumbing item',
    nameAr: 'مستلزمات سباكة وصرف',
    categoryEn: 'Pipes & Tubes',
    categoryAr: 'أنابيب ومواسير حديدية',
    categorySlug: 'pipes-tubes',
    descriptionEn: 'High-quality industrial plumbing items and fittings designed for heavy-duty piping systems, offering robust connections and corrosion resistance.',
    descriptionAr: 'مستلزمات وقطع سباكة صناعية عالية الجودة مصممة لأنظمة الأنابيب الثقيلة، مما يوفر توصيلات قوية ومقاومة ممتازة للتآكل.',
    specsEn: { Type: 'Plumbing Fitting', Connection: 'Threaded / Welded', Standard: 'Standard Industrial Fitting' },
    specsAr: { 'النوع': 'مستلزمات سباكة وتوصيل', 'التوصيل': 'مقلوظ / ملحم', 'المواصفة': 'قطع صناعية قياسية' },
    inStock: true,
    materialEn: 'Galvanized / Carbon Steel',
    materialAr: 'حديد مجلفن / حديد كربوني',
    gradeEn: 'Standard Fitting Grade',
    gradeAr: 'درجة توصيل قياسية',
    image: '/images/products/Plumbing item.jpeg',
    priceSAR: 45.00,
    longDescriptionEn: 'Our industrial plumbing items and pipe fittings are engineered to meet the highest performance standards in water, gas, and fluid delivery systems. These components ensure leak-proof operations and long-term mechanical reliability.',
    longDescriptionAr: 'تم تصميم قطع ومستلزمات السباكة الصناعية وتوصيلات الأنابيب لتلبية أعلى معايير الأداء في أنظمة نقل المياه والغاز والسوائل المختلفة، لضمان منع التسريب ومتانة التشغيل.',
    specificationsEn: [
      'Material: Galvanized steel or high-grade carbon steel.',
      'Types: Connectors, elbows, tees, unions, and valves.',
      'Corrosion Resistance: High resistance against moisture and chemical corrosion.'
    ],
    specificationsAr: [
      'المادة: حديد مجلفن أو حديد كربوني عالي الجودة.',
      'الأنواع: توصيلات، أكواع، قسامات، شدّ وصل، ومحابس.',
      'مقاومة التآكل: مقاومة عالية ضد الرطوبة والأكسدة والمواد الكيميائية.'
    ],
    applicationsEn: [
      'Industrial piping networks, water supply systems, and gas transport lines.',
      'Commercial building utilities, maintenance fittings, and drainage systems.'
    ],
    applicationsAr: [
      'شبكات الأنابيب الصناعية، أنظمة إمداد المياه، وخطوط نقل الغاز.',
      'المرافق الخدمية للمباني التجارية، أعمال الصيانة، وأنظمة الصرف الصحي.'
    ]
  },
  {
    id: 'fabrication-item',
    sku: 'PS-FAB-I41',
    nameEn: 'Fabrication Item',
    nameAr: 'قطعة أعمال حدادة وتصنيع',
    categoryEn: 'Hollow Sections & Bars',
    categoryAr: 'حديد مفرغ ومبسط',
    categorySlug: 'hollow-sections',
    descriptionEn: 'Custom fabrication items and custom-shaped iron bars engineered for structural steel building assemblies, welding frames, and customized architectural works.',
    descriptionAr: 'قطع حديد مصنعة ومنتجات تصنيع مخصصة للهياكل الحديدية، إطارات اللحام، والأعمال الفنية المعمارية المخصصة.',
    specsEn: { Type: 'Structural Fabrication Component', Finish: 'Mill Finish / Painted', Customization: 'Available' },
    specsAr: { 'النوع': 'مكون حديد مصنع', 'التشطيب': 'تشطيب المصنع / مدهون', 'التخصيص': 'متوفر حسب الطلب' },
    inStock: true,
    materialEn: 'Mild Steel / Carbon Steel',
    materialAr: 'حديد مطاوع / حديد كربوني',
    gradeEn: 'ASTM A36 / S275JR',
    gradeAr: 'ASTM A36 / S275JR',
    image: '/images/products/Fabrication Item.jpeg',
    priceSAR: 150.00,
    longDescriptionEn: 'Our custom fabrication items are manufactured to high industrial tolerances, offering reliable weldability, tensile strength, and flexibility. Suitable for structural welding support, decorative brackets, and customized building frameworks.',
    longDescriptionAr: 'تُصنع قطع الحديد المخصصة للتصنيع لدينا بمطابقة للمعايير الهندسية، مما يوفر موثوقية عالية في اللحام وقوة شد ممتازة. مناسبة للدعامات الإنشائية، الحوامل الزخرفية، وهياكل المباني المخصصة.',
    specificationsEn: [
      'Material: Low-carbon structural steel with high weldability.',
      'Surface: Clean mill finish ready for paint, powder coating, or galvanization.',
      'Grade: ASTM A36 / European standard S275JR.'
    ],
    specificationsAr: [
      'المادة: حديد إنشائي منخفض الكربون يتميز بقابلية عالية للحام.',
      'السطح: تشطيب مصنع نظيف جاهز للدهان، أو الطلاء الحراري، أو الجلفنة.',
      'الدرجة: ASTM A36 / المواصفة الأوروبية S275JR.'
    ],
    applicationsEn: [
      'Structural joints, custom steel framing, support brackets, and handrails.',
      'Welded assemblies, machinery frame construction, and customized architectural fabrications.'
    ],
    applicationsAr: [
      'الوصلات الإنشائية، الإطارات الحديدية المخصصة، دعامات التثبيت، والدرابزينات.',
      'الهياكل الملحومة، بناء هياكل الآلات، وأعمال الحدادة المعمارية المخصصة.'
    ]
  }
];
