"use client";
import Link from "next/link";

interface FooterLinksProps {
  title?: string;
  links: { name: string; href: string }[];
  external?: boolean;
}
export function FooterLinks({
  title,
  links,
  external = false,
}: FooterLinksProps) {
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
    <ul>
      {title && <span className="text-xl font-bold">{title}</span>}
      {links.map(({ name, href }, index) => (
        <li key={index} className="pt-2">
          <Link
            href={href}
            target={external ? "_blank" : undefined}
            className={`font-medium duration-500 hover:text-secondary-foreground text-primary-foreground`}
            onClick={external ? undefined : handleClick}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}