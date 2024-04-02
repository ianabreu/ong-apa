import { Logo } from "../ui/logo";
import { Button } from "@/components/Button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { SheetContent, SheetTrigger, Sheet } from "../ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

import { useState } from "react";
import { LinkMobile } from "./link-mobile";
import { LinkDesktop } from "./link-desktop";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <header className="flex min-h-20 w-full items-center bg-primary_green pt-4">
      <div className="container flex flex-row items-center justify-between">
        <Link href={"/"} replace={true}>
          <Logo size="md" color="default" />
        </Link>

        {isMobile ? (
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button size={"icon"}>
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side={"right"}>
              <nav className={`flex w-full flex-col items-center gap-4`}>
                <Link
                  href={"/"}
                  onClick={() => {
                    setSheetOpen(false);
                  }}
                >
                  <Logo size="md" color="default" />
                </Link>

                <LinkMobile
                  href={"#nossos_numeros"}
                  onClick={() => {
                    setSheetOpen(false);
                  }}
                >
                  Nossos Números
                </LinkMobile>

                <LinkMobile
                  href={"#sobre_nos"}
                  onClick={() => {
                    setSheetOpen(false);
                  }}
                >
                  Sobre Nós
                </LinkMobile>

                <LinkMobile
                  href={"#adote"}
                  onClick={() => {
                    setSheetOpen(false);
                  }}
                >
                  Adote
                </LinkMobile>

                <Button
                  onClick={() => {
                    setSheetOpen(false);
                  }}
                >
                  Doe agora
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className={`flex items-center gap-6`}>
            <LinkDesktop href={"#nossos_numeros"}>Nossos Números</LinkDesktop>
            <LinkDesktop href={"#sobre_nos"}>Sobre Nós</LinkDesktop>
            <LinkDesktop href={"#adote"}>Adote</LinkDesktop>

            <Button variant={"default"}>Doe agora</Button>
          </nav>
        )}
      </div>
    </header>
  );
}
