import Banner from "@/components/Events/Banner";
import Events from "@/components/Events/Events";
import MerchCTA from "@/components/MerchCTA";
import { getEvents } from "@/lib/events";

export const metadata = {
  title: "Events | Sigma Club",
  description:
    "Everything the club is gathering for — quizzes, outreaches, lectures and the traditions of the fellowship — and everything it has already held.",
};

export default async function EventsPage({ searchParams }: PageProps<"/events">) {
  const [events, params] = await Promise.all([getEvents(), searchParams]);

  // The nav and the tags on an event deep-link straight into a filtered view.
  const category =
    typeof params.category === "string" ? params.category : undefined;
  const query = typeof params.q === "string" ? params.q : undefined;

  return (
    <div className="pt-18 md:pt-[12.65rem]">
      <Banner />
      <Events events={events} initialCategory={category} initialQuery={query} />
      <MerchCTA />
    </div>
  );
}
