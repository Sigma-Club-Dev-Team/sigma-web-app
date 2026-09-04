import MerchCTA from "@/components/MerchCTA";
import Banner from "@/components/News/Banner";
import News from "@/components/News/News";
import { getArticles } from "@/lib/news";

export const metadata = {
  title: "News & Publications | Sigma Club",
  description:
    "Documenting national development, executive commentary, and the modern legacy of the fellowship.",
};

export default async function NewsPage({ searchParams }: PageProps<"/news">) {
  const [articles, params] = await Promise.all([getArticles(), searchParams]);

  // Tags at the foot of a story link back in here as a search.
  const query = typeof params.q === "string" ? params.q : undefined;
  const category =
    typeof params.category === "string" ? params.category : undefined;

  return (
    <div className="pt-18 md:pt-[12.65rem]">
      <Banner />
      <News
        articles={articles}
        initialCategory={category}
        initialQuery={query}
      />
      <MerchCTA />
    </div>
  );
}
