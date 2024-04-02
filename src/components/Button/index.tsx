import {
  Button as ButtonUI,
  ButtonProps as ButtonPropsUI,
} from "@/components/ui/button";
import { Ref, forwardRef } from "react";

interface ButtonProps extends ButtonPropsUI {}

export const Button = forwardRef(
  (
    { variant, children, ...ButtonPropsUI }: ButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <ButtonUI variant={variant} ref={ref} {...ButtonPropsUI}>
        {children}
      </ButtonUI>
    );
  },
);

Button.displayName = "Button";
