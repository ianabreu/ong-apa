import Image from "next/image";
import logo from "@/assets/logo.svg";

interface LogoProps {
  size?: "sm" | "md";
}

export function Logo({ size = "sm" }: LogoProps) {
  return (
    <Image
      src={logo}
      alt="Logo da APA"
      width={size === "sm" ? 150 : undefined}
    />
  );
}
