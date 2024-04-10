import { useState } from "react";
import Link from "next/link";

import { Logo } from "../ui/logo";
import { Button } from "@/components/ui/button";
import LinkMenu from "./LinkMenu";
import { Icon } from "@/constants/icons";

interface HeaderProps {
  openModal: (isOpen: boolean) => void;
}
export default function Header({ openModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-primary_green shadow">
      <nav className="container">
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <div className="flex w-full items-center justify-between ">
            <Link href="/">
              <Logo size="md" color="default" />
            </Link>

            <div className="md:hidden">
              <Button
                size={"icon"}
                variant={"destructive"}
                onClick={() => setIsOpen(!isOpen)}
              >
                {Icon("menu")}
              </Button>
            </div>
          </div>
          <div
            className={`w-full flex-1 items-center text-center md:flex ${isOpen ? "block" : "hidden"}`}
          >
            <div className="flex flex-col items-center md:mx-6 md:flex-row md:gap-4">
              <LinkMenu href={"#ajuda"}>Como ajudar</LinkMenu>
              <LinkMenu href={"#nossos_numeros"}>Nossos Números</LinkMenu>
              <LinkMenu href={"#sobre_nos"}>Sobre Nós</LinkMenu>
              <Button
                variant={"destructive"}
                className="w-full uppercase"
                onClick={() => openModal(true)}
              >
                Doe Agora
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
