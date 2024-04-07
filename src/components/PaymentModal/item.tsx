import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import Trigger from "./trigger";
import { ReactNode } from "react";
import { IconProps } from "@/constants/icons";

interface ItemProps {
  title?: string;
  value: string;
  children?: ReactNode;
  icon: IconProps;
}
export default function Item({ value, children, icon, title }: ItemProps) {
  return (
    <AccordionItem value={value} className="mb-4">
      <Trigger icon={icon} title={title} />
      <AccordionContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}
