import Image, { ImageProps } from "next/image";
interface ButtonAdoptProps extends ImageProps {}

export function ButtonAdopt({ src, alt, ...ImageProps }: ButtonAdoptProps) {
  return (
    <button className="flex aspect-square w-full overflow-hidden rounded-lg border-primary">
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
