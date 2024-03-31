import Link, { LinkProps } from "next/link";
import { SheetClose } from "../ui/sheet";
import { ReactNode } from "react";
import { Separator } from "../ui/separator";

interface LinkMobileProps extends LinkProps {
  children: ReactNode;
}
export function LinkMobile({ children, ...LinkProps }: LinkMobileProps) {
  return (
    <>
      <SheetClose asChild>
        <Link
          className={
            "text-primary_black hover:text-primary_green_dark font-medium duration-500 "
          }
          {...LinkProps}
        >
          {children}
        </Link>
      </SheetClose>
      <Separator />
    </>
  );
}
