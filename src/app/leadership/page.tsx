import Executives from "@/components/leadership/Executives";
import StructureBanner from "@/components/leadership/StructureBanner";
import MerchCTA from "@/components/MerchCTA";

function page() {
  return (
    <div className="pt-18 md:pt-[12.65rem]">
      <StructureBanner />
      <Executives />
      <MerchCTA />
    </div>
  );
}

export default page;
