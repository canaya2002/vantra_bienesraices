import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { generateBreadcrumbSchema } from '@/lib/seo';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog – Guías y Artículos sobre Bienes Raíces en México',
  description:
    'Lee nuestras guías sobre el mercado inmobiliario en México: consejos de compra, zonas exclusivas, inversión y más.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Blog' }]} />
          </div>
          <div className="text-center mb-12 mt-8">
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-vantra-midnight mb-4">Blog</h1>
            <p className="text-vantra-gray-600 text-lg max-w-2xl mx-auto">
              Guías, análisis y artículos para tomar decisiones informadas en el mercado inmobiliario.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-vantra-midnight text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-vantra-gray-400 text-xs mb-3">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishedAt).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <h2 className="font-display text-lg font-semibold text-vantra-midnight mb-2 group-hover:text-vantra-gold transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-vantra-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                  <span className="text-vantra-gold text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer artículo <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
