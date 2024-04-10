import { Poppins } from "next/font/google";
import Head from "next/head";
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
import { HelperSection } from "@/components/HelperSection";
import { Pix } from "./api/payments/pix";
import DoantionModal from "@/components/PaymentModal";
// import { useState } from "react";

const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  preload: false,
});
type HomeProps = {
  all_Numbers: OurNumbers[];
  pix: Pix;
};
export default function Home({ all_Numbers, pix }: HomeProps) {
  // const [openModalPayments, setOpenModalPayments] = useState(false);
  let openModalPayments = false;
  function setOpenModalPayments(isOpen: boolean) {
    openModalPayments = isOpen;
  }
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>APA — Associação Protetora dos Animais</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="ONG de Livramento de Nossa Senhora, cuidamos de animais doentes e providenciamos lares para eles."
        />
        <meta property="og:url" content="https://apalivramento.vercel.app" />
        <meta
          property="og:title"
          content="APA — Associação Protetora dos Animais"
        />
        <meta
          property="og:description"
          content="ONG de Livramento de Nossa Senhora, cuidamos de animais doentes e providenciamos lares para eles."
        />
        <meta property="og:type" content="website" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-start overflow-hidden bg-primary_white ${poppins.className}`}
      >
        <Header openModal={setOpenModalPayments} />

        {/* <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
        >
        <CarouselContent>
        {Array.from({ length: 1 }).map((_, index) => (
        <CarouselItem key={index}> */}
        <section className="flex h-full max-h-[calc(100vh-80px)] w-full justify-center bg-hero">
          <HeroSection />
        </section>
        {/* </CarouselItem>
          ))}
          </CarouselContent>
      </Carousel> */}

        <section id="ajuda" className="">
          <HelperSection openModal={setOpenModalPayments} />
        </section>
        <section
          id="nossos_numeros"
          className="flex w-full justify-center bg-primary_green_light py-8"
        >
          <OurNumbersSection data={all_Numbers} />
        </section>
        <section
          id="sobre_nos"
          className="flex w-full justify-center bg-primary_green_dark py-8"
        >
          <AboutUsSection />
        </section>
        <Footer />
        <DoantionModal
          qrCode={pix.qr_code}
          isOpen={openModalPayments}
          setIsOpen={setOpenModalPayments}
        />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const allNumbersPromise = fetch(`${process.env.BASE_URL}api/all-numbers`);
  const qrCodePromise = fetch(`${process.env.BASE_URL}api/payments/pix`);

  const [allNumbersResponse, qrCodeResponse] = await Promise.all([
    allNumbersPromise,
    qrCodePromise,
  ]);

  const allNumbers = allNumbersResponse.json();
  const qrCode = qrCodeResponse.json();

  const [all_Numbers, pix] = await Promise.all([allNumbers, qrCode]);
  return { props: { all_Numbers, pix } };
}
