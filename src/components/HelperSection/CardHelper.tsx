import Link from "next/link";
import { Button } from "../ui/button";
import { FaWhatsapp as IconButton } from "react-icons/fa";
import { Url } from "next/dist/shared/lib/router/router";

interface CardHelperProps {
  title: string;
  content: string;
  onClick?: () => void;
  href?: Url;
  btnText?: string;
  bgImage?: "bg-donation" | "bg-patronize" | "bg-adopt";
  isLink?: boolean;
  hasIcon?: boolean;
}
export function CardHelper({
  btnText = "Saiba mais",
  title,
  content,
  bgImage,
  isLink = false,
  onClick,
  href = "/",
  hasIcon = false,
}: CardHelperProps) {
  return (
    <div
      className={`
    flex
    min-h-[60vh]
    min-w-64
    flex-col
    items-center
    justify-between
    gap-4
    sm:min-h-0
    ${bgImage}
    bg-cover
    bg-center
    px-8
    py-4
    text-center
    text-primary_white
    `}
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <h3 className="max-w-96 text-2xl font-bold drop-shadow-lg md:text-4xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed drop-shadow-lg md:text-base">
          {content}
        </p>
      </div>
      {isLink ? (
        <Link
          href={href}
          target="_blank"
          className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-secondary_red px-4 py-2 text-sm font-medium uppercase text-primary_white ring-offset-background drop-shadow-lg transition-colors hover:brightness-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 "
        >
          {btnText} {hasIcon && <IconButton size={20} />}
        </Link>
      ) : (
        <Button
          type="button"
          variant={"destructive"}
          className="w-full gap-2 uppercase drop-shadow-lg"
          onClick={onClick}
        >
          {btnText} {hasIcon && <IconButton size={20} />}
        </Button>
      )}
    </div>
  );
}
