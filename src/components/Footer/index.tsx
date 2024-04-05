import { Logo } from "../ui/logo";
import { FooterLinks } from "./footer-links";

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-4 bg-primary_green_dark pb-4 pt-12 text-primary_white">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
        <Logo size="lg" color="white" />
        <FooterLinks
          title="Links"
          links={[
            { name: "Início", href: "#home" },
            { name: "Adote", href: "#adote" },
            { name: "Nossos Números", href: "#nossos_numeros" },
            { name: "Sobre Nós", href: "#sobre_nos" },
          ]}
        />
        <FooterLinks
          title="Redes Sociais"
          external
          links={[
            {
              name: "Instagram",
              href: "https://www.instagram.com/ongapalivramento",
            },
            {
              name: "Facebook",
              href: "https://www.facebook.com/ongapalivramento/",
            },
            { name: "Whatsapp", href: "https://wa.me/5577999824116" },
          ]}
        />
      </div>
      <div className="flex flex-col items-center px-4">
        <span className="text-center">
          Copyright © APA - Associação Protetora dos Animais
        </span>
        <span className="text-center">2024 - Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
