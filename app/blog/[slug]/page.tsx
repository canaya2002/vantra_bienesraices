import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import { generateBlogMetadata, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo';
import Breadcrumb from '@/components/Breadcrumb';
import { Calendar, ArrowLeft } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'Artículo no encontrado' };
  return generateBlogMetadata(post);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = generateArticleSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  // Simple markdown-like rendering for ## headings and paragraphs
  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) {
        return (
          <h2 key={i} className="font-display text-2xl font-semibold text-vantra-midnight mt-8 mb-4">
            {block.replace('## ', '')}
          </h2>
        );
      }
      if (block.startsWith('*') && block.endsWith('*')) {
        return (
          <p key={i} className="text-sm text-vantra-gray-400 italic mt-6">
            {block.replace(/\*/g, '')}
          </p>
        );
      }
      return (
        <p key={i} className="text-vantra-gray-600 leading-relaxed mb-4">
          {block}
        </p>
      );
    });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />
          </div>

          <header className="mt-8 mb-8">
            <span className="inline-block px-3 py-1 bg-vantra-gold/10 text-vantra-gold text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-vantra-midnight mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-vantra-gray-500 text-sm">
              <span>{post.author}</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
          </header>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
            <img src={post.image} alt={post.imageAlt} className="w-full h-full object-cover" />
          </div>

          <div className="prose-vantra">{renderContent(post.content)}</div>

          <div className="mt-12 pt-8 border-t border-vantra-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-vantra-gold font-medium hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Volver al Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
