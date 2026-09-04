import MerchCTA from "@/components/MerchCTA";
import Banner from "@/components/Programs/Banner";
import Programs from "@/components/Programs/Programs";

function page() {
  return (
    <div className="pt-18 md:pt-[12.65rem]">
      <Banner />
      <Programs />
      <MerchCTA />
    </div>
  );
}

export default page;
