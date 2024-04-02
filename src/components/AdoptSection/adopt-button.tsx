import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { Button } from "../Button";
interface ButtonAdoptProps extends ImageProps {
  data: {
    name: string;
    ageInMonth: number;
    id: string;
  };
}

export function ButtonAdopt({
  data,
  src,
  alt,
  ...ImageProps
}: ButtonAdoptProps) {
  const [modalIsOpen, setOpenModal] = useState(false);
  function handleCloseModal() {
    setOpenModal(false);
  }
  function handleOpenModal() {
    setOpenModal(true);
  }
  function calcularIdade(ageInMonth: number) {
    let years: number = Math.floor(ageInMonth / 12);
    let month: number = ageInMonth % 12;
    let text = "";
    if (month > 1) {
      text = month + " meses";
    }
    if (month === 1) {
      text = month + " mês";
    }

    return `${years} ano${years > 1 ? "s" : ""} ${text && "e " + text} `;
  }
  return (
    <div
      onMouseOver={handleOpenModal}
      onMouseLeave={handleCloseModal}
      onFocus={handleOpenModal}
      onBlur={handleCloseModal}
      className="
      relative
      flex
      aspect-square
      w-full
      overflow-hidden
      rounded-lg
      border-2
    border-primary_green
    outline-none
    hover:border-primary_green_dark
      "
    >
      <div
        className={`
      absolute
      left-0
      top-0
      z-30
      flex
      h-full
      w-full
      items-end
      bg-primary_transparent
      font-bold
      duration-500
      ${modalIsOpen ? "opacity-100" : "opacity-0"}
      `}
      >
        <div
          className={`
        flex
        flex-1
        ${modalIsOpen ? "" : "translate-y-16"}
        flex-col
        items-start
        justify-end
        p-4
        text-sm
        duration-500
        `}
        >
          <span className="text-primary_white">Nome: {data.name}</span>
          <span className="text-primary_white">
            Idade: {calcularIdade(data.ageInMonth)}
          </span>
          <Button className="w-full" size={"sm"} variant={"destructive"}>
            Adote
          </Button>
        </div>
      </div>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100%"
        className={`w-full object-cover duration-500 ${modalIsOpen ? "scale-105" : ""}`}
        {...ImageProps}
      />
    </div>
  );
}
