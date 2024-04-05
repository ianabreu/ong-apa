import { Button } from "../ui/button";
import { FaWhatsapp as IconButton } from "react-icons/fa";

interface CardHelperProps {
  title: string;
  content: string;
  onClick?: () => void;
  bgImage?: "bg-donation" | "bg-patronize" | "bg-adopt";
}
export function CardHelper(props: CardHelperProps) {
  return (
    <div
      className={`
    flex
    min-h-[450px]
    min-w-64
    flex-col
    items-center
    justify-center
    gap-4
    ${props.bgImage}
    bg-cover
    bg-center
    p-4
    text-center
    text-primary_white
    `}
    >
      <h3 className="max-w-96 text-4xl font-bold drop-shadow-lg ">
        {props.title}
      </h3>
      <p className="text-base drop-shadow-lg">{props.content}</p>
      <Button
        variant={"destructive"}
        className="gap-2 drop-shadow-lg"
        onClick={props.onClick}
      >
        Saiba mais <IconButton size={20} />
      </Button>
    </div>
  );
}
