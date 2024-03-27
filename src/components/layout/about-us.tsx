import DogAndCat from "@/assets/dog-and-cat.png";
import Image from "next/image";

type AboutUsProps = {};
export function AboutUsSection({}: AboutUsProps) {
  return (
    <section
      id="SobreNos"
      className="w-full h-full mt-12 bg-black text-background"
    >
      <div className="max-w-[1200px] m-auto grid md:grid-cols-2 items-center">
        <div>
          <Image src={DogAndCat} alt="dog" className="" />
        </div>
        <div className="p-8">
          <h2 className="font-black text-5xl pb-4">Sobre Nós</h2>
          <p className="text-xl pb-8">
            A{" "}
            <strong>
              Associação Protetora dos Animais de Livramento de Nossa Senhora
            </strong>{" "}
            é uma ONG sem fins lucrativos.
          </p>
          <p className="text-xl pb-8">
            A Associação Protetora dos Animais (APA) atua por meio da captação e
            administração de doações de alimentos e medicamentos, realização de
            castrações e promoção de eventos de adoção.
          </p>
          <p className="text-xl pb-8">
            Estamos também presentes na elaboração de novas políticas públicas
            que visam levar maior bem-estar e qualidade de vida para
            os animais e seres humanos.
          </p>
        </div>
      </div>
    </section>
  );
}
