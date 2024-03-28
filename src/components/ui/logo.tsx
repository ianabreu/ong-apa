import Image from "next/image";
import logo from "@/assets/logo.svg";
import logo2 from "@/assets/logo-color.svg";

interface LogoProps {
  size?: "sm" | "md";
  logoColor?: "white" | "color";
}

export function Logo({ size = "sm", logoColor = "white" }: LogoProps) {
  return (
    <Image
      src={logoColor === "color" ? logo2 : logo}
      alt="Logo da APA"
      width={size === "sm" ? 150 : undefined}
    />
  );
}
