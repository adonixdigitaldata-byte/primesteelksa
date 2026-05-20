'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { products, CATEGORIES, Product } from '../../data/products';
import {
  Search,
  Filter,
  SlidersHorizontal,
  Grid,
  List,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Check,
  Plus,
  Trash2,
  X,
  Star
} from 'lucide-react';

function ProductsCatalogContent() {
  const { language, t } = useLanguage();
  const { addToBasket, isInBasket, removeFromBasket, basketItems, clearBasket, triggerWhatsAppInquiry } = useCart();
  const searchParams = useSearchParams();

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('name-asc');
  
  // Mobile drawer state
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showInquiryDrawer, setShowInquiryDrawer] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Read URL search params
  useEffect(() => {
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    const basketState = searchParams.get('basket');

    if (search) setSearchQuery(search);
    if (category) setSelectedCategory(category);
    if (basketState === 'open') setShowInquiryDrawer(true);
  }, [searchParams]);

  // Unique Materials/Standards for filter dropdown
  const uniqueMaterials = Array.from(
    new Set(products.map((p) => (language === 'ar' ? p.materialAr : p.materialEn)))
  );

  // Filtered and Sorted Products
  const filteredProducts = products.filter((prod) => {
    const matchesSearch =
      prod.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.nameAr.includes(searchQuery) ||
      prod.sku.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory ? prod.categorySlug === selectedCategory : true;

    const matchesMaterial = selectedMaterial
      ? (language === 'ar' ? prod.materialAr : prod.materialEn) === selectedMaterial
      : true;

    const matchesStock = inStockOnly ? prod.inStock : true;

    return matchesSearch && matchesCategory && matchesMaterial && matchesStock;
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name-asc') {
      const nameA = language === 'ar' ? a.nameAr : a.nameEn;
      const nameB = language === 'ar' ? b.nameAr : b.nameEn;
      return nameA.localeCompare(nameB, language === 'ar' ? 'ar' : 'en');
    }
    if (sortBy === 'name-desc') {
      const nameA = language === 'ar' ? a.nameAr : a.nameEn;
      const nameB = language === 'ar' ? b.nameAr : b.nameEn;
      return nameB.localeCompare(nameA, language === 'ar' ? 'ar' : 'en');
    }
    if (sortBy === 'sku-asc') {
      return a.sku.localeCompare(b.sku);
    }
    return 0;
  });

  // Pagination calculations
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedMaterial('');
    setInStockOnly(false);
    setSortBy('name-asc');
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <div className="text-xs text-brand-muted font-bold tracking-wider mb-2 flex items-center gap-2">
            <span>{t.navHome}</span>
            <span>/</span>
            <span className="text-brand-primary">{t.navProducts}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-brand-dark">
            {language === 'ar' ? 'كتالوج المنتجات الحديدية' : 'Industrial Steel Catalog'}
          </h1>
          <p className="text-sm text-brand-muted mt-1">
            {sortedProducts.length} {language === 'ar' ? 'منتجاً متوفراً حالياً' : 'products found matching your criteria'}
          </p>
        </div>

        {/* Sort & Quick Filter Buttons */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Mobile Filter Trigger */}
          <button
            onClick={() => setShowMobileFilters(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-brand-surface-alt text-brand-dark font-bold rounded-xl text-xs border border-brand-border/60 w-full justify-center"
          >
            <Filter className="w-4 h-4 text-brand-primary" />
            <span>{t.filterSidebarTitle}</span>
          </button>

          {/* Sort Selection dropdown */}
          <div className="relative shrink-0 w-full md:w-48">
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-brand-surface-alt text-brand-dark border border-brand-border/60 rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none focus:border-brand-primary"
            >
              <option value="name-asc">{t.filterSortNameAsc}</option>
              <option value="name-desc">{t.filterSortNameDesc}</option>
              <option value="sku-asc">{t.filterSortSkuAsc}</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* ================= DESKTOP SIDEBAR FILTERS ================= */}
        <aside className="hidden lg:block space-y-6">
          <div className="bg-brand-surface-mid border border-brand-border/80 p-6 rounded-2xl space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-brand-border/60">
              <h2 className="font-bold text-brand-dark text-base flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-brand-primary" />
                <span>{t.filterSidebarTitle}</span>
              </h2>
              <button
                onClick={handleClearFilters}
                className="text-[10px] text-brand-rust hover:underline font-bold"
              >
                {t.filterClear}
              </button>
            </div>

            {/* Live Search input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">
                {language === 'ar' ? 'البحث عن منتج' : 'Search Keywords'}
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted" />
                <input
                  type="text"
                  placeholder={t.filterSearch}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-brand-surface border border-brand-border/50 rounded-xl pl-9 pr-4 py-2.5 text-xs text-brand-dark placeholder-brand-silver/50 focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>

            {/* Category selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">
                {t.filterCategory}
              </label>
              <div className="flex flex-col space-y-1">
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setCurrentPage(1);
                  }}
                  className={`text-left rtl:text-right px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === ''
                      ? 'bg-brand-primary/10 text-brand-primary border-l-2 border-brand-primary rtl:border-l-0 rtl:border-r-2'
                      : 'text-brand-muted hover:bg-brand-surface-alt/35'
                  }`}
                >
                  {language === 'ar' ? 'الكل' : 'All Categories'}
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      setCurrentPage(1);
                    }}
                    className={`text-left rtl:text-right px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                      selectedCategory === cat.slug
                        ? 'bg-brand-primary/10 text-brand-primary border-l-2 border-brand-primary rtl:border-l-0 rtl:border-r-2'
                        : 'text-brand-muted hover:bg-brand-surface-alt/35'
                    }`}
                  >
                    {language === 'ar' ? cat.nameAr : cat.nameEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Material selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">
                {t.filterMaterial}
              </label>
              <select
                value={selectedMaterial}
                onChange={(e) => {
                  setSelectedMaterial(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-brand-surface border border-brand-border/50 rounded-xl px-3 py-2.5 text-xs text-brand-dark focus:outline-none focus:border-brand-primary"
              >
                <option value="">{language === 'ar' ? 'جميع المواد الخام' : 'All Materials'}</option>
                {uniqueMaterials.map((mat) => (
                  <option key={mat} value={mat}>
                    {mat}
                  </option>
                ))}
              </select>
            </div>

            {/* Stock Toggle */}
            <div className="flex items-center justify-between pt-4 border-t border-brand-border/65">
              <span className="text-xs font-bold text-brand-muted">{t.filterInStockOnly}</span>
              <button
                onClick={() => {
                  setInStockOnly(!inStockOnly);
                  setCurrentPage(1);
                }}
                className={`w-10 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                  inStockOnly ? 'bg-brand-primary' : 'bg-brand-surface'
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                    inStockOnly
                      ? 'translate-x-4 rtl:-translate-x-4'
                      : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </aside>

        {/* ================= PRODUCTS GRID & PAGINATION ================= */}
        <div className="lg:col-span-3 space-y-8">
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-brand-surface-mid border border-brand-border/60 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-brand-primary/40 shadow-sm hover:shadow-glow group transition-all duration-300"
                >
                  {/* Visual block */}
                  <div className="h-44 bg-gradient-to-br from-brand-surface to-brand-surface-mid/30 relative flex items-center justify-center p-4 border-b border-brand-border/60 overflow-hidden">
                    {prod.image ? (
                      <img src={prod.image} alt={prod.nameEn} className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-hero-pattern opacity-50 opacity-10 z-0"></div>
                        <div className="relative z-10 w-20 h-20 bg-brand-surface-alt/50 border border-brand-primary/20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <span className="text-brand-primary text-[10px] font-mono font-bold tracking-widest">
                            {prod.sku}
                          </span>
                        </div>
                      </>
                    )}
                    {/* Badge */}
                    <div className="absolute top-2.5 left-2.5 bg-brand-surface-alt/90 px-2 py-0.5 rounded text-[9px] font-bold text-brand-primary flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      <span>SASO / JIS</span>
                    </div>
                    <div
                      className={`absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[9px] font-bold ${
                        prod.inStock
                          ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20'
                          : 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20'
                      }`}
                    >
                      {prod.inStock ? t.prodInStock : t.prodOutOfStock}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <div className="text-[9px] text-brand-muted font-semibold uppercase tracking-wider">
                        {language === 'ar' ? prod.categoryAr : prod.categoryEn}
                      </div>
                      <h3 className="text-sm font-bold text-brand-dark line-clamp-2 min-h-[40px] group-hover:text-brand-primary transition-colors">
                        {language === 'ar' ? prod.nameAr : prod.nameEn}
                      </h3>
                    </div>

                    {/* Small Spec Panel */}
                    <div className="bg-brand-surface/55 p-3 rounded-lg border border-brand-border/30 space-y-1 text-[11px] text-brand-muted">
                      <div className="flex justify-between">
                        <span>{t.prodMaterial}:</span>
                        <span className="text-brand-dark font-semibold">{language === 'ar' ? prod.materialAr : prod.materialEn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t.prodGrade}:</span>
                        <span className="text-brand-dark font-semibold">{language === 'ar' ? prod.gradeAr : prod.gradeEn}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2 pt-1.5">
                      <Link
                        href={`/products/${prod.id}`}
                        className="w-full py-2 bg-brand-surface-alt hover:bg-brand-surface-mid/50 text-brand-dark font-bold rounded-lg text-xs transition-colors duration-200 border border-brand-border/60 text-center block"
                      >
                        {t.prodBtnDetails}
                      </Link>

                      {isInBasket(prod.id) ? (
                        <button
                          onClick={() => removeFromBasket(prod.id)}
                          className="w-full py-2 bg-brand-rust/10 border border-brand-rust/35 text-brand-rust hover:bg-brand-rust/20 font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>{t.prodBtnRemoveFromBasket}</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => addToBasket(prod)}
                          className="w-full py-2 bg-brand-primary hover:bg-brand-primary-light text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>{t.prodBtnAddToBasket}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-brand-surface-mid border border-brand-border/60 p-12 rounded-2xl text-center space-y-4">
              <div className="text-4xl">🔍</div>
              <h3 className="text-lg font-bold text-brand-dark">
                {language === 'ar' ? 'لا توجد نتائج مطابقة لبحثك' : 'No products match your search'}
              </h3>
              <p className="text-xs text-brand-muted max-w-sm mx-auto">
                {language === 'ar'
                  ? 'جرب ضبط فلاتر البحث أو الكلمات المفتاحية للحصول على نتائج أفضل.'
                  : 'Try adjusting your categories or search query filters to browse the steel inventory.'}
              </p>
              <button
                onClick={handleClearFilters}
                className="px-6 py-2 bg-brand-primary text-white font-bold rounded-lg text-xs"
              >
                {t.filterClear}
              </button>
            </div>
          )}

          {/* ================= PAGINATION CONTROLS ================= */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 pt-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-brand-surface-alt border border-brand-border/65 text-brand-dark disabled:opacity-40 disabled:cursor-not-allowed hover:bg-brand-surface-mid/50 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 rtl-mirror" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                    currentPage === pageNum
                      ? 'bg-brand-primary text-white'
                      : 'bg-brand-surface-alt text-brand-muted hover:text-brand-dark border border-brand-border/50'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-brand-surface-alt border border-brand-border/65 text-brand-dark disabled:opacity-40 disabled:cursor-not-allowed hover:bg-brand-surface-mid/50 transition-colors"
              >
                <ChevronRight className="w-4 h-4 rtl-mirror" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ================= MOBILE FILTERS DRAWER ================= */}
      {showMobileFilters && (
        <div className="lg:hidden fixed inset-0 z-50 bg-brand-surface/90 backdrop-blur-md flex justify-end animate-fade-in">
          <div className="w-[80vw] bg-brand-surface-mid h-full p-6 space-y-6 overflow-y-auto border-l border-brand-border/60">
            <div className="flex justify-between items-center pb-4 border-b border-brand-border/65">
              <h3 className="font-bold text-brand-dark text-sm flex items-center gap-2">
                <Filter className="w-4 h-4 text-brand-primary" />
                <span>{t.filterSidebarTitle}</span>
              </h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-1 rounded bg-brand-surface-alt text-brand-muted"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Filters Body */}
            <div className="space-y-5">
              {/* Search */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                  {language === 'ar' ? 'بحث الكلمات المفتاحية' : 'Keyword Search'}
                </label>
                <input
                  type="text"
                  placeholder={t.filterSearch}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-brand-surface border border-brand-border/50 rounded-xl px-3 py-2.5 text-xs text-brand-dark focus:outline-none"
                />
              </div>

              {/* Category selector */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                  {t.filterCategory}
                </label>
                <div className="flex flex-col space-y-1">
                  <button
                    onClick={() => {
                      setSelectedCategory('');
                      setCurrentPage(1);
                    }}
                    className={`text-left rtl:text-right px-3 py-2 rounded-lg text-xs font-semibold ${
                      selectedCategory === '' ? 'bg-brand-primary/10 text-brand-primary' : 'text-brand-muted'
                    }`}
                  >
                    {language === 'ar' ? 'جميع التصنيفات' : 'All Categories'}
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => {
                        setSelectedCategory(cat.slug);
                        setCurrentPage(1);
                      }}
                      className={`text-left rtl:text-right px-3 py-2 rounded-lg text-xs font-semibold ${
                        selectedCategory === cat.slug ? 'bg-brand-primary/10 text-brand-primary' : 'text-brand-muted'
                      }`}
                    >
                      {language === 'ar' ? cat.nameAr : cat.nameEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Standard selector */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                  {t.filterMaterial}
                </label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => {
                    setSelectedMaterial(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-brand-surface border border-brand-border/50 rounded-xl px-3 py-2 text-xs text-brand-dark"
                >
                  <option value="">{language === 'ar' ? 'جميع المواد الخام' : 'All Materials'}</option>
                  {uniqueMaterials.map((mat) => (
                    <option key={mat} value={mat}>
                      {mat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Stock toggle */}
              <div className="flex justify-between items-center pt-3 border-t border-brand-border/65">
                <span className="text-xs font-bold text-brand-muted">{t.filterInStockOnly}</span>
                <button
                  onClick={() => {
                    setInStockOnly(!inStockOnly);
                    setCurrentPage(1);
                  }}
                  className={`w-10 h-6 rounded-full p-1 transition-colors ${
                    inStockOnly ? 'bg-brand-primary' : 'bg-brand-surface'
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      inStockOnly ? 'translate-x-4 rtl:-translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-brand-border/65 flex flex-col gap-2">
              <button
                onClick={handleClearFilters}
                className="w-full py-2.5 bg-brand-surface text-brand-dark border border-brand-border/65 text-xs font-bold rounded-xl"
              >
                {t.filterClear}
              </button>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="w-full py-2.5 bg-brand-primary text-white text-xs font-bold rounded-xl"
              >
                {language === 'ar' ? 'تطبيق الفلاتر' : 'Apply Filters'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= INQUIRY BASKET DRAWER OVERLAY ================= */}
      {showInquiryDrawer && (
        <div className="fixed inset-0 z-50 bg-brand-surface/90 backdrop-blur-md flex justify-end animate-fade-in">
          <div className="w-[85vw] sm:w-[450px] bg-brand-surface-mid h-full p-6 flex flex-col justify-between border-l border-brand-border/60">
            <div className="space-y-6 overflow-y-auto">
              <div className="flex justify-between items-center pb-4 border-b border-brand-border/65">
                <h3 className="font-extrabold text-brand-dark text-base flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-brand-primary" />
                  <span>{t.basketTitle}</span>
                </h3>
                <button
                  onClick={() => setShowInquiryDrawer(false)}
                  className="p-1 rounded bg-brand-surface-alt text-brand-muted hover:text-brand-dark"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {basketItems.length > 0 ? (
                <div className="space-y-4 divide-y divide-brand-navy-light/45">
                  {basketItems.map((item) => (
                    <div key={item.id} className="flex gap-4 pt-4 first:pt-0">
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-brand-dark">
                          {language === 'ar' ? item.nameAr : item.nameEn}
                        </h4>
                        <div className="flex justify-between text-[10px] text-brand-muted uppercase tracking-wider font-semibold mt-1">
                          <span>SKU: {item.sku}</span>
                          <span>{language === 'ar' ? item.categoryAr : item.categoryEn}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromBasket(item.id)}
                        className="p-1.5 rounded text-brand-muted hover:text-brand-rust hover:bg-brand-surface-alt/40 transition-colors shrink-0"
                        title={t.prodBtnRemoveFromBasket}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <ShoppingCart className="w-12 h-12 text-brand-muted/30 mx-auto" />
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {t.basketEmpty}
                  </p>
                </div>
              )}
            </div>

            {basketItems.length > 0 && (
              <div className="pt-6 border-t border-brand-border/65 space-y-3 bg-brand-surface-mid">
                <div className="flex justify-between text-xs text-brand-muted">
                  <span>{language === 'ar' ? 'المنتجات المختارة:' : 'Selected Items:'}</span>
                  <button
                    onClick={clearBasket}
                    className="text-brand-rust hover:underline font-semibold"
                  >
                    {language === 'ar' ? 'إفراغ السلة' : 'Clear Basket'}
                  </button>
                </div>
                <button
                  onClick={triggerWhatsAppInquiry}
                  className="w-full py-3 bg-brand-primary hover:bg-brand-primary-light text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-brand-primary/20 shadow-sm"
                >
                  <ShoppingCart className="w-4 h-4 shrink-0" />
                  <span>{t.basketInquireSelected}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductsCatalog() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-brand-muted">
        Loading Steel Catalog...
      </div>
    }>
      <ProductsCatalogContent />
    </Suspense>
  );
}
