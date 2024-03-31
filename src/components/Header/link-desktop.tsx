import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface HeaderLinkProps extends LinkProps {
  children?: ReactNode;
}

export function LinkDesktop({ children, ...LinkProps }: HeaderLinkProps) {
  return (
    <Link
      className={
        "text-primary_black hover:text-primary_green_dark font-medium duration-500 "
      }
      {...LinkProps}
    >
      {children}
    </Link>
  );
}
