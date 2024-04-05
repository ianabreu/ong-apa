import { Poppins } from "next/font/google";
import Header from "@/components/Header";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
import { HeroSection } from "@/components/HeroSection";
import { OurNumbersSection } from "@/components/OurNumbersSection";
import { OurNumbers } from "./api/all-numbers";
import { Footer } from "@/components/Footer";
import { AboutUsSection } from "@/components/AboutUsSection";
import { Adopt } from "@/components/AdoptSection";
import { HelperSection } from "@/components/HelperSection";

const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  preload: false,
});
type HomeProps = {
  data: OurNumbers[];
};
export default function Home({ data }: HomeProps) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start overflow-hidden bg-primary_white ${poppins.className}`}
    >
      <Header />

      {/* <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 1 }).map((_, index) => (
            <CarouselItem key={index}> */}
      <section
        id="home"
        className="flex max-h-[780px] w-full justify-center bg-hero md:max-h-[600px]"
      >
        <HeroSection />
      </section>
      {/* </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel> */}

      <section id="adote" className="">
        <HelperSection />
      </section>
      <section
        id="nossos_numeros"
        className="flex w-full justify-center bg-primary_green_light py-8"
      >
        <OurNumbersSection data={data} />
      </section>
      <section
        id="sobre_nos"
        className="flex w-full justify-center bg-primary_green_dark py-8"
      >
        <AboutUsSection />
      </section>
      <Footer />
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}api/all-numbers`);
  const data = await res.json();

  return { props: { data } };
}
