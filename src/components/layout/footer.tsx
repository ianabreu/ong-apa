import { Logo } from "../ui/logo";
import { FooterLinks } from "./footer-links";

export function Footer() {
  return (
    <footer className="bg-primary w-full flex flex-col items-center text-primary-foreground pt-12 pb-4 gap-4">
      <div className="flex gap-4 sm:gap-8 flex-col sm:flex-row">
        <Logo size="md" />
        <FooterLinks
          title="APA"
          links={[
            { name: "Início", href: "#home" },
            { name: "Nossos Números", href: "#NossosNumeros" },
            { name: "Sobre Nós", href: "#SobreNos" },
            { name: "Adote", href: "#Adote" },
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
