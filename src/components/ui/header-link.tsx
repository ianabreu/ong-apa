"use client";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface HeaderLinkProps extends LinkProps {
  children: ReactNode;
  textDark?: boolean;
  hoverDark?: boolean;
}

export function HeaderLink({
  children,
  textDark = false,
  hoverDark = false,
  href,
  ...LinkProps
}: HeaderLinkProps) {
  const handleClick = (e: any) => {
    e.preventDefault();

    const href = e.target.getAttribute("href").replace("/", "");
    const selectedElement = document.querySelector(href);
    if (!selectedElement) return null;

    window.scroll({
      top: selectedElement.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <Link
      href={href}
      className={`font-medium hover:text-primary duration-500 ${
        hoverDark ? "hover:text-secondary-foreground" : "hover:text-primary"
      } ${textDark ? "text-foreground" : "text-primary-foreground"}`}
      onClick={handleClick}
      {...LinkProps}
    >
      {children}
    </Link>
  );
}
