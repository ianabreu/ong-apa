import { IconProps, Icon } from "@/constants/icons";
import { AccordionTrigger } from "@radix-ui/react-accordion";

interface TriggerProps {
  title?: string;
  icon: IconProps;
}
export default function Trigger({ icon, title }: TriggerProps) {
  return (
    <AccordionTrigger>
      <span className="flex items-center gap-4">
        {Icon(icon)} {title}
      </span>
    </AccordionTrigger>
  );
}
