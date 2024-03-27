import Image, { ImageProps } from "next/image";
interface ButtonAdoptProps extends ImageProps {}

export function ButtonAdopt({ src, alt, ...ImageProps }: ButtonAdoptProps) {
  return (
    <button className="flex max-w-80 w-full aspect-square overflow-hidden border-primary rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100%"
        className="w-full object-cover"
        {...ImageProps}
      />
    </button>
  );
}
