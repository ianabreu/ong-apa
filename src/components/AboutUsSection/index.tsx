import Image from "next/image";

type AboutUsProps = {};
export function AboutUsSection({}: AboutUsProps) {
  return (
    <div className="container grid grid-cols-1 gap-4  text-primary_white lg:grid-cols-2">
      <div className="flex overflow-hidden rounded-lg border-2 border-primary_green shadow-xl md:order-1">
        <Image
          src={"/ong.webp"}
          alt="Abrigo da Associação Protetora dos Animais"
          width={0}
          height={0}
          priority={true}
          loading="eager"
          sizes="100vw"
          className="w-full object-cover duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-4 duration-500 sm:gap-8">
        <h2 className="text-3xl font-bold duration-500 sm:text-5xl">
          Sobre Nós
        </h2>
        <p className="text-sm duration-500 sm:text-lg">
          A{" "}
          <strong>
            Associação Protetora dos Animais de Livramento de Nossa Senhora
          </strong>{" "}
          é uma ONG sem fins lucrativos.
        </p>
        <p className="text-sm duration-500 sm:text-lg">
          A Associação Protetora dos Animais (APA) atua por meio da captação e
          administração de doações de alimentos e medicamentos, realização de
          castrações e promoção de eventos de adoção.
        </p>
        <p className="text-sm duration-500 sm:text-lg">
          Estamos também presentes na elaboração de novas políticas públicas que
          visam levar maior bem-estar e qualidade de vida para
          os animais e seres humanos.
        </p>
      </div>
    </div>
  );
}
