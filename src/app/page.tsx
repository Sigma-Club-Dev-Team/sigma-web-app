import Header from "@/components/Header";
import OurActivities from "@/components/OurActivities";
import OurHistory from "@/components/OurHistory";

function page() {
  return (
    <div className="w-full h-full">
      <Header />
      <OurHistory />
      <OurActivities />
    </div>
  );
}

export default page;
