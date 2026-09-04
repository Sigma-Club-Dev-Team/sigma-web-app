import MerchCTA from "@/components/MerchCTA";
import Banner from "@/components/Programs/Banner";
import Programs from "@/components/Programs/Programs";
import { getProgrammes } from "@/lib/programmes";

export const metadata = {
  title: "Programmes | Sigma Club",
  description:
    "The landmark programmes directing the course of social impact and elite tradition.",
};

export default async function ProgrammesPage({
  searchParams,
}: PageProps<"/programs">) {
  const [programmes, params] = await Promise.all([
    getProgrammes(),
    searchParams,
  ]);

  // Lets the "Our Work" nav deep-link straight into a filtered view.
  const category = typeof params.category === "string" ? params.category : undefined;

  return (
    <div className="pt-18 md:pt-[12.65rem]">
      <Banner />
      <Programs programmes={programmes} initialCategory={category} />
      <MerchCTA />
    </div>
  );
}
