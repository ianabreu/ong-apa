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
  return (
    <ul>
      {title && <span className="text-xl font-bold">{title}</span>}
      {links.map(({ name, href }, index) => (
        <li key={index} className="pt-2">
          <Link
            href={href}
            target={external ? "_blank" : undefined}
            className={`font-medium text-primary_white duration-500 hover:text-primary_green`}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
