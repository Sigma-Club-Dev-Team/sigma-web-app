import Executives from "@/components/leadership/Executives";
import StructureBanner from "@/components/leadership/StructureBanner";

function page() {
  return (
    <div className="pt-18 md:pt-[12.65rem]">
      <StructureBanner />
      <Executives />
    </div>
  );
}

export default page;
