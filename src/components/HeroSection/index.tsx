import { Button } from "../ui/button";
import Image from "next/image";
export function HeroSection() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2">
      <div className="my-4  flex flex-col justify-center gap-4 text-primary_black ">
        <p className="text-xl font-bold uppercase shadow-2xl"></p>
        <h1 className="max-w-[400px] text-3xl font-bold duration-500 xs:text-4xl sm:text-5xl">
          Salve Vidas, adote um amigo peludo!
        </h1>
        <p className="max-w-96 text-sm font-medium duration-500 xs:text-lg sm:text-xl">
          <strong>Os Animais Precisam de Sua Ajuda!</strong> 🐾 Junte-se a nós
          na missão de proporcionar um lar amoroso e seguro para os nossos
          amigos peludos. 🐶🐱
        </p>
      </div>
      <div className="flex items-end overflow-hidden">
        <Image
          src={"/dog.png"}
          alt="dog"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
