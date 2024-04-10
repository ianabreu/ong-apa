import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface LinkMenuProps extends LinkProps {
  children?: ReactNode;
  className?: string;
}
export default function LinkMenu(props: LinkMenuProps) {
  return (
    <Link
      className={`w-full text-nowrap py-3 text-sm font-medium uppercase text-primary_black transition-all duration-500 hover:text-primary_green_dark hover:brightness-110 md:border-none md:hover:text-primary_green_dark
    ${props.className}
    `}
      {...props}
    >
      {props.children}
    </Link>
  );
}
