import { DetailedHTMLProps, HTMLAttributes } from "react";

interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export function Container({ children, id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`bg-primary_white  max-h-[800px] w-full py-28 ${className}`}
    >
      {children}
    </section>
  );
}
