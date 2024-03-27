import { OurNumbers } from "@/pages/api/all-numbers";
import { OurNumbersItem } from "../ui/our-numbers-item";
import DogAndCat from "@/assets/dog-and-cat.png";
import Image from "next/image";

type OurNumbersProps = {
  data: OurNumbers[];
};
export function OurNumbersSection({ data }: OurNumbersProps) {
  return (
    <section
      id="NossosNumeros"
      className="max-w-[1200px] h-full grid md:grid-cols-2 mt-12 items-center"
    >
      <div className="items-center">
        <h2 className="font-bold text-3xl text-center pb-4">
          Nossos <span className="text-primary">Números</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.map(({ valor, descricao }, index) => (
            <OurNumbersItem key={index} valor={valor} descricao={descricao} />
          ))}
        </div>
      </div>
      <div>
        <Image src={DogAndCat} alt="dog" className="" />
      </div>
    </section>
  );
}
