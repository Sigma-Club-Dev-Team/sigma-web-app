import Header from "@/components/Header";
import OurActivities from "@/components/OurActivities";
import OurHistory from "@/components/OurHistory";
import SigmaNetwork from "@/components/SigmaNetwork";

function page() {
  return (
    <div className="w-full h-full">
      <Header />
      <OurHistory />
      <OurActivities />
      <SigmaNetwork />
    </div>
  );
}

export default page;
