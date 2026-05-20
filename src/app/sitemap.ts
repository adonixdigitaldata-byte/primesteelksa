import { MetadataRoute } from 'next';
import { products } from '../data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://primesteelksa.com';

  // Base Pages
  const routes = ['', '/products', '/about', '/blog', '/faq', '/contact', '/privacy', '/terms'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Product Detail Pages (39 products)
  const productRoutes = products.map((prod) => ({
    url: `${baseUrl}/products/${prod.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Blog post pages
  const blogRoutes = ['buying-steel-guide', 'epoxy-coated-rebar-importance', 'ksa-steel-market-25-26'].map((id) => ({
    url: `${baseUrl}/blog/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...routes, ...productRoutes, ...blogRoutes];
}
