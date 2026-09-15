import { About, Banner, Forum, Gallery, Portfolio, Reviews, Servise, Stages, TechnologyStack, Teams, WhyFezus } from "@/components/comp";

export default function Home() {
  return (
    <div>
      <h1 className="text-[#FFFFFF]">Home page</h1>
      <Banner />
      <WhyFezus />
      <About />
      <Servise />
      <Stages />
      <Portfolio />
      <Reviews />
      <TechnologyStack />
      <Gallery />
      <Teams />
      <Forum />
    </div>
  );
}
