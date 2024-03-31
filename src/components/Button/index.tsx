import {
  Button as ButtonUI,
  ButtonProps as ButtonPropsUI,
} from "@/components/ui/button";
import { forwardRef } from "react";

interface ButtonProps extends ButtonPropsUI {}

export const Button = forwardRef(
  ({ children, ...ButtonPropsUI }: ButtonProps, ref) => {
    return <ButtonUI {...ButtonPropsUI}>{children}</ButtonUI>;
  },
);

Button.displayName = "Button";
