import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";
import Image from "next/image";
import logo from "@/assets/logo-color.svg";
import { HeaderLink } from "../ui/header-link";

export function MenuDrawer() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    function ajustScreen() {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    }
    setWidth(window.innerWidth);

    window.addEventListener("resize", ajustScreen);
    return () => {
      window.removeEventListener("resize", ajustScreen);
    };
  }, []);

  if (width && width > 768) {
    return (
      <div className={`flex items-center gap-10`}>
        <HeaderLink textDark href="#NossosNumeros">
          Nossos Números
        </HeaderLink>
        <HeaderLink textDark href="#SobreNos">
          Sobre Nós
        </HeaderLink>
        <HeaderLink textDark href="#Adote">
          Adote
        </HeaderLink>
        <Button
          variant={"outline"}
          className="border-2 border-secondary-foreground text-secondary-foreground bg-transparent hover:text-primary-foreground hover:bg-secondary-foreground duration-500"
        >
          Doe agora
        </Button>
      </div>
    );
  } else {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant={"outline"}
            size={"icon"}
            className="bg-transparent border-primary text-primary hover:bg-primary hover:text-foreground"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"}>
          <div className="flex flex-col items-center w-full gap-4 ">
            <Image src={logo} alt="" />
            <Separator />
            <HeaderLink href="#NossosNumeros" textDark>
              Nossos Números
            </HeaderLink>
            <Separator />
            <HeaderLink href="#SobreNos" textDark>
              Sobre Nós
            </HeaderLink>
            <Separator />
            <HeaderLink href="#Adote" textDark>
              Adote
            </HeaderLink>
            <Separator />
            <Button
              variant={"outline"}
              className="border-primary text-primary bg-transparent hover:text-primary-foreground hover:bg-primary duration-500"
            >
              Doe agora
            </Button>
            <Separator />
          </div>
        </SheetContent>
      </Sheet>
    );
  }
}
