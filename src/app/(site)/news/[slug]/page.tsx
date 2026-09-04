import { notFound } from "next/navigation";

import MerchCTA from "@/components/MerchCTA";
import ArticleBody from "@/components/News/ArticleBody";
import ArticleHero from "@/components/News/ArticleHero";
import ArticleNav from "@/components/News/ArticleNav";
import ReadingProgress from "@/components/News/ReadingProgress";
import RelatedArticles from "@/components/News/RelatedArticles";
import {
  getArticle,
  getArticles,
  getArticleSlugs,
  pickAdjacent,
  pickRelated,
} from "@/lib/news";

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) return {};

  return {
    title: `${article.title} | Sigma Club`,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      tags: article.tags,
    },
  };
}

export default async function ArticlePage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  // The full archive also supplies the neighbours and the related reads.
  const [article, articles] = await Promise.all([getArticle(slug), getArticles()]);

  if (!article) notFound();

  const { previous, next } = pickAdjacent(articles, slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    articleSection: article.category,
    keywords: article.tags,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: "Sigma Club" },
  };

  return (
    <article>
      <ReadingProgress />
      <ArticleHero article={article} />
      <ArticleBody article={article} />
      <ArticleNav previous={previous} next={next} />
      <RelatedArticles articles={pickRelated(articles, article)} />
      <MerchCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </article>
  );
}
