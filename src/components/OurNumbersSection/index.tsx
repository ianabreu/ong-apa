import { OurNumbers } from "@/pages/api/all-numbers";
import { OurNumbersItem } from "./our-numbers-item";
import Image from "next/image";

type OurNumbersProps = {
  data: OurNumbers[];
};
export function OurNumbersSection({ data }: OurNumbersProps) {
  return (
    <div className="container grid h-full items-center md:grid-cols-2">
      <div className="order-2 flex min-h-80 items-end overflow-hidden md:order-1">
        <Image
          src={"/abrigo.png"}
          alt="Ilustração simbolizando atendimento no abrigo"
          width={0}
          priority={false}
          height={0}
          sizes="100vw"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="order-1 items-center md:order-2">
        <h2 className="pb-4 text-center text-2xl font-bold duration-500 sm:text-3xl">
          Nossos <span className="text-primary_green_dark">Números</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2">
          {data.map(({ valor, descricao }, index) => (
            <OurNumbersItem key={index} valor={valor} descricao={descricao} />
          ))}
        </div>
      </div>
    </div>
  );
}
