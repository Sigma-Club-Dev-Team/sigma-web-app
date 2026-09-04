import Honorary from "@/components/Honorary/Honorary";
import StructureBanner from "@/components/leadership/StructureBanner";
import MerchCTA from "@/components/MerchCTA";

function page() {
  return (
    <div className="pt-18 md:pt-[12.65rem]">
      <StructureBanner
        title="Honorary Sigmites"
        desc="Some memberships are earned through years of service. Others are bestowed in recognition of a lifetime of distinction. Honorary Sigmites belong to the latter, invited into the Club's community as a mark of the highest regard."
      />
      <Honorary />
      <MerchCTA />
    </div>
  );
}

export default page;
