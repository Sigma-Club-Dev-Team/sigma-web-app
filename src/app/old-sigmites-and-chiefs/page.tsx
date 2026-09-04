import StructureBanner from "@/components/leadership/StructureBanner";
import MerchCTA from "@/components/MerchCTA";
import Olds from "@/components/old-sigmites-and-chiefs/Olds";

function page() {
  return (
    <div className="pt-18 md:pt-[12.65rem]">
      <StructureBanner
        title="Old Sigmites & Chiefs"
        desc="A living record of those who have embodied the Club's values at the highest level, formally recognised by Sigma Club for a lifetime of distinction."
      />
      <Olds />
      <MerchCTA />
    </div>
  );
}

export default page;
