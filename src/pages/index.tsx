import { Poppins } from "next/font/google";
import Header from "@/components/layout/header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Hero } from "@/components/layout/hero";
import { OurNumbersSection } from "@/components/layout/our-numbers";
import { OurNumbers } from "./api/all-numbers";
import { Footer } from "@/components/layout/footer";
import { AboutUsSection } from "@/components/layout/about-us";
import { AdoptAnAnimal } from "@/components/layout/adopt-an-animal";

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
      className={`flex bg-background min-h-screen flex-col items-center justify-start ${poppins.className}`}
    >
      <Header />
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 1 }).map((_, index) => (
            <CarouselItem key={index}>
              <Hero />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <OurNumbersSection data={data} />
      <AboutUsSection />
      <AdoptAnAnimal />
      <Footer />
    </main>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`http://localhost:3000/api/all-numbers`);
//   const data = await res.json();

//   return { props: { data } };
// }
export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/all-numbers`);
  const data = await res.json();

  return { props: { data } };
}
