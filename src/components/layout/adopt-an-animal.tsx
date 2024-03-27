import { ButtonAdopt } from "../ui/adopt-an-animal-button";
import item01 from "@/assets/item01.png";
import item02 from "@/assets/item02.jpg";
import item03 from "@/assets/item03.jpg";

type AdoptAnAnimalProps = {};
export function AdoptAnAnimal({}: AdoptAnAnimalProps) {
  return (
    <section
      id="NossosNumeros"
      className="max-w-[1200px] w-full h-full flex flex-col mt-12 items-center"
    >
      <h2 className="font-bold text-3xl text-center pb-4">
        Adote um <span className="text-primary">Animal</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center w-full p-4">
        <ButtonAdopt src={item01} alt="item01" />
        <ButtonAdopt src={item02} alt="item02" />
        <ButtonAdopt src={item03} alt="item03" />
      </div>
    </section>
  );
}
