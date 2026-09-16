import { About, Banner, Forum, Gallery, Portfolio, Reviews, Servise, Stages, TechnologyStack, Teams, WhyFezus } from "@/components/comp";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyFezus />
      <About />
      <Servise />
      <Stages />
      {/* <Portfolio /> */}
      {/* <Reviews /> */}
      <TechnologyStack />
      {/* <Gallery /> */}
      <Teams />
      <Forum />
    </div>
  );
}
