import Link from "next/link";
import { MenuDrawer } from "@/components/layout/header-menu";
import { Logo } from "../ui/logo";

export default function Header() {
  return (
    <header className="flex flex-row w-full min-h-16 items-center max-w-[1200px] px-4 py-4 justify-between absolute z-10">
      <Link href={"/"}>
        <Logo size="sm" />
      </Link>
      <MenuDrawer />
    </header>
  );
}
