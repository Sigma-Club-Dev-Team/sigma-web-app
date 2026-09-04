import Alumni from "@/components/Alumni";
import Discourse from "@/components/Discourse";
import HeroSection from "@/components/HeroSection";
import MerchCTA from "@/components/MerchCTA";
import OurActivities from "@/components/OurActivities";
import OurHistory from "@/components/OurHistory";
import SigmaNetwork from "@/components/SigmaNetwork";
import UpcomingEvents from "@/components/UpcomingEvents";
import { getEvents } from "@/lib/events";
import { getArticles } from "@/lib/news";

async function page() {
  const [articles, events] = await Promise.all([getArticles(), getEvents()]);

  return (
    <main>
      <HeroSection />
      <OurHistory />
      <OurActivities />
      <SigmaNetwork />
      <Discourse articles={articles.slice(0, 3)} />
      <Alumni />
      <UpcomingEvents events={events} />
      <MerchCTA />
    </main>
  );
}

export default page;
