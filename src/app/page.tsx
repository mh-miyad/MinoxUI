import HeroBar from "@/components/web/HeroBar";
import PriceSection from "@/components/web/PriceSection";
import StickyBar from "@/components/web/StickyBar";

export default function Home() {
  return (
    <div>
      <StickyBar />
      <section className=" flex justify-center flex-col gap-10">
        <div className="h-screen flex flex-col items-center justify-center gap-10">
          <HeroBar />
        </div>
      </section>
      <div className="max-w-7xl mx-auto">
        <PriceSection />
      </div>
    </div>
  );
}
