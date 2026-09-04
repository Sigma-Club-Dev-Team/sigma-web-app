import Executives from "@/components/leadership/Executives";
import StructureBanner from "@/components/leadership/StructureBanner";
import MerchCTA from "@/components/MerchCTA";

function page() {
  return (
    <div className="pt-18 md:pt-[12.65rem]">
      <StructureBanner
        title="Leadership Structure"
        desc="The Club's executive structure has remained consistent across generations — a deliberate choice to preserve the institutional continuity and values that have defined Sigma Club since its founding."
        bgImageOne="/assets/images/pngs/sigma-artifacts3.png"
        bgImageTwo="/assets/images/pngs/crown.png"
      />
      <Executives />
      <MerchCTA />
    </div>
  );
}

export default page;
