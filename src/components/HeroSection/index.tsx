import { Button } from "../ui/button";
import Image from "next/image";
export function HeroSection() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2">
      <div className="my-4  flex flex-col justify-center gap-4 text-primary_black ">
        <p className="text-xl font-bold uppercase shadow-2xl"></p>
        <h1 className="xs:text-4xl max-w-[400px] text-3xl font-bold duration-500 sm:text-5xl">
          Os animais precisam de sua ajuda!
        </h1>
        <p className="xs:text-lg max-w-96 text-sm font-medium duration-500 sm:text-xl">
          Você pode contribuir com dinheiro e voluntariado! Adote um animal de
          estimação!
        </p>
        <div className="flex pt-6">
          <Button
            variant={"default"}
            className="border-2 border-primary text-background duration-500 hover:border-primary hover:bg-transparent hover:text-primary"
          >
            Adote um bichinho
          </Button>
        </div>
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
