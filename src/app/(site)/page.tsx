import Alumni from "@/components/Alumni";
import Discourse from "@/components/Discourse";
import HeroSection from "@/components/HeroSection";
import MerchCTA from "@/components/MerchCTA";
import OurActivities from "@/components/OurActivities";
import OurHistory from "@/components/OurHistory";
import SigmaNetwork from "@/components/SigmaNetwork";
import UpcomingEvents from "@/components/UpcomingEvents";

function page() {
  return (
    <main>
      <HeroSection />
      <OurHistory />
      <OurActivities />
      <SigmaNetwork />
      <Discourse />
      <Alumni />
      <UpcomingEvents />
      <MerchCTA />
    </main>
  );
}

export default page;
