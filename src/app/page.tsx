import Discourse from "@/components/Discourse";
import HeroSection from "@/components/HeroSection";
import OurActivities from "@/components/OurActivities";
import OurHistory from "@/components/OurHistory";
import SigmaNetwork from "@/components/SigmaNetwork";

function page() {
  return (
    <main>
      <HeroSection />
      <OurHistory />
      <OurActivities />
      <SigmaNetwork />
      <Discourse />
    </main>
  );
}

export default page;
