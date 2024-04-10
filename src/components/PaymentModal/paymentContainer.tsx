import { Icon, IconProps } from "@/constants/icons";
import { ReactNode } from "react";

interface PaymentContainerProps {
  title?: string;
  icon?: IconProps;
  children?: ReactNode;
}
export default function PaymentContainer(props: PaymentContainerProps) {
  return (
    <section className="mb-8 shadow-lg">
      {props.title && (
        <h3 className="my-4 flex items-center gap-4 font-bold">
          {props.icon && Icon(props.icon)} {props.title}
        </h3>
      )}
      <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
        {props.children}
      </div>
    </section>
  );
}
