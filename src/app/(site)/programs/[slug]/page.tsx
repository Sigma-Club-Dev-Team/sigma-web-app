import { notFound } from "next/navigation";

import MerchCTA from "@/components/MerchCTA";
import ProgrammeBody from "@/components/Programs/ProgrammeBody";
import ProgrammeHero from "@/components/Programs/ProgrammeHero";
import { getProgramme, getProgrammeSlugs } from "@/lib/programmes";

export async function generateStaticParams() {
  const slugs = await getProgrammeSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/programs/[slug]">) {
  const { slug } = await params;
  const programme = await getProgramme(slug);

  if (!programme) return {};

  return {
    title: `${programme.title} | Sigma Club`,
    description: programme.desc,
  };
}

export default async function ProgrammePage({
  params,
}: PageProps<"/programs/[slug]">) {
  const { slug } = await params;
  const programme = await getProgramme(slug);

  if (!programme) notFound();

  return (
    <article>
      <ProgrammeHero title={programme.title} photo={programme.heroPhoto} />
      <ProgrammeBody summary={programme.summary} blocks={programme.blocks} />
      <MerchCTA />
    </article>
  );
}
