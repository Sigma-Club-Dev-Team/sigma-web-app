import MerchCTA from "@/components/MerchCTA";
import Banner from "@/components/News/Banner";
import News from "@/components/News/News";

function page() {
  return (
    <div className="pt-18 md:pt-[12.65rem]">
      <Banner />
      <News />
      <MerchCTA />
    </div>
  );
}

export default page;
