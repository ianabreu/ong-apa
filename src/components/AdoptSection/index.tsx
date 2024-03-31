import { ButtonAdopt } from "./adopt-button";
import item01 from "@/assets/item01.png";
import item02 from "@/assets/item02.jpg";
import item03 from "@/assets/item03.jpg";

type AdoptProps = {};
export function Adopt({}: AdoptProps) {
  return (
    <div className="container flex flex-col items-center gap-8">
      <h2 className="text-center text-2xl font-bold text-primary_black duration-500 sm:text-3xl">
        Adote um <span className="text-primary_green_dark">Animal</span>
      </h2>
      <div className="grid w-full grid-cols-1 place-items-center gap-8 sm:grid-cols-3">
        <ButtonAdopt src={item01} alt="item01" />
        <ButtonAdopt src={item02} alt="item02" />
        <ButtonAdopt src={item03} alt="item03" />
      </div>
    </div>
  );
}
