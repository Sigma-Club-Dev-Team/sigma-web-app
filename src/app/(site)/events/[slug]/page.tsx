import { notFound } from "next/navigation";

import EventBody from "@/components/Events/EventBody";
import EventHero from "@/components/Events/EventHero";
import RelatedEvents from "@/components/Events/RelatedEvents";
import SponsorMarquee from "@/components/Events/SponsorMarquee";
import MerchCTA from "@/components/MerchCTA";
import { getEvent, getEvents, getEventSlugs, pickRelatedEvents } from "@/lib/events";

export async function generateStaticParams() {
  const slugs = await getEventSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/events/[slug]">) {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) return {};

  return {
    title: `${event.title} | Sigma Club`,
    description: event.excerpt,
    openGraph: {
      type: "website",
      title: event.title,
      description: event.excerpt,
      images: [event.heroPhoto],
    },
  };
}

export default async function EventPage({ params }: PageProps<"/events/[slug]">) {
  const { slug } = await params;
  // The full calendar also supplies what to show at the foot of the page.
  const [event, events] = await Promise.all([getEvent(slug), getEvents()]);

  if (!event) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.excerpt,
    image: event.heroPhoto,
    startDate: event.startsAt,
    endDate: event.endsAt,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location.name,
      address: event.location.address ?? event.location.name,
    },
    organizer: { "@type": "Organization", name: "Sigma Club" },
    offers: event.registration
      ? { "@type": "Offer", url: event.registration.url }
      : undefined,
    sponsor: event.sponsors.map((entry) => ({
      "@type": "Organization",
      name: entry.sponsor.name,
      url: entry.sponsor.website,
    })),
  };

  return (
    <article>
      <EventHero event={event} />
      <EventBody event={event} />
      <SponsorMarquee
        heading={event.sponsorsHeading}
        sponsors={event.sponsors}
      />
      <RelatedEvents events={pickRelatedEvents(events, event.slug)} />
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
