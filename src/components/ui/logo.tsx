import Image from "next/image";

interface LogoProps {
  size?: keyof typeof SIZE;
  color?: keyof typeof LOGO;
}
const LOGO = {
  default: "/logo-color.png",
  white: "/logo-white.png",
  black: "/logo-black.png",
};
const SIZE = {
  md: "w-[150px]",
  lg: "w-[290px]",
};

export function Logo({ size = "md", color = "default" }: LogoProps) {
  return (
    <Image
      src={LOGO[color]}
      alt="Logo da Associação Protetora dos Animais"
      width={0}
      height={0}
      sizes="100vw"
      priority={false}
      className={`aspect-video ${SIZE[size]} object-contain`}
    />
  );
}
